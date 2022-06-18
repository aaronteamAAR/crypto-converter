import ExchangeRate from "./components/ExchangeRate";
import NewsFeed from "./components/NewsFeed";
import Currency from "./components/CurrencyConverter"

const App = () => {
  return (
    <div className="app">
      <Currency />
      <NewsFeed />

    </div>
  );
}

export default App
