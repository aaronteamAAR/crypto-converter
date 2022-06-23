import { useState } from "react";
import Exchange from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("ETH");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [primaryCurrencyExchange, setPrimaryCurrencyExchange] = useState("BTC");
  const [secondaryCurrencyExchange, setSecondaryCurrencyExchange] = useState("BTC");
  const [result, setResult] = useState(0);
  

  function convert() {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data
        );
        setExchangeRate(
          response.data
        );
        setResult(
          response.data * amount
        );
        setPrimaryCurrencyExchange(chosenPrimaryCurrency);
        setSecondaryCurrencyExchange(chosenSecondaryCurrency);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  console.log(exchangeRate);
  return (
    <div className="currency-converter">
      <h2>Crypto Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-option"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-option"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-btn" onClick={convert}>
          Convert
        </button>
      </div>

      <Exchange
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={primaryCurrencyExchange}
        chosenSecondaryCurrency={secondaryCurrencyExchange}
      />
    </div>
  );
};

export default CurrencyConverter;
