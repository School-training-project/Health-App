import React, { useContext } from "react";
import { Context }   from "./Context";
import HealthArticle from "./HealthArticle";

function Articles(props) {
  const { data } = useContext(Context);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Find the lattest health news and articles 📰</h1>

      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <HealthArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Articles;