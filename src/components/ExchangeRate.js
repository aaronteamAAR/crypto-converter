 

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return(
        <div className="exchange-rate">
            <h3>ExchangeRate</h3>
            <h1>{exchangeRate}</h1>
            <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
      
        </div>
    )
}

export default ExchangeRate