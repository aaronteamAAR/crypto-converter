import { useEffect, useState } from "react";
import axios from "axios"


const NewsFeed = () => {
    const [articles, setArticles] = useState(null)
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://cryptocurrency-news-live.p.rapidapi.com/bitcoin-news",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "cryptocurrency-news-live.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  
    console.log(articles)

const first5Articles = articles?.slice(0, 5) 

  return(

    <div className="news-feed">
        <h2>News Feed</h2>
        {first5Articles?.map((article, _index) => (<div key={_index}><a  href={article.url}><p>{article.title}</p></a></div>))}

    </div>
  ) 
};

export default NewsFeed;
