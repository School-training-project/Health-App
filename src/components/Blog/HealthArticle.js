import React from "react";


function HealthArticle({ data }) {
  return (
    <div className="news">
      <a  href={data.url}><span class="link"></span></a>
      <img className="news__img" src={data.urlToImage}></img> <br />
      <h3 className="news__title">{data.title}</h3>
      <p className="news__desc">{data.description}</p>
       <br />
     
      
    </div>
  );
}

export default HealthArticle;