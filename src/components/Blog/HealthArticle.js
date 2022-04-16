import React from "react";


function HealthArticle({ data }) {
  return (
    <div className="news">
      <h3 className="news__title">{data.title}</h3>
      <p className="news__desc">{data.description}</p>
       <br />
      <img className="news__img" src={data.urlToImage}></img> <br />
      <span className="news__source">Source : {data.source.name}</span><br />
      <span className="news__published">Published : {data.publishedAt}</span><br />
      <a  href={data.url}>
            <button className="news__button">View More</button>
      </a>
    </div>
  );
}

export default HealthArticle;