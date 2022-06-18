import ExchangeRate from "./components/ExchangeRate";
import NewsFeed from "./components/NewsFeed";
import Currency from "./components/CurrencyConverter"

const App = () => {
  return (
    <div className="app">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
      <Currency />
      <NewsFeed />
      </div>
    

    </div>
  );
}

export default App
