import NewsFeed from "./components/NewsFeed";
import Currency from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="app">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
        <Currency />
        <NewsFeed />
      </div>

      <footer>
        Convert your <mark>cryptocurrency </mark> to another with live exchange
        rates available for you today, Read the headlines to trending crypto
        news and
        <br /> discover more on them by click on the headlines🚀
        <section>Made with ❤️ by zilam.inc</section>
      </footer>
    </div>
  );
};
export default App;
