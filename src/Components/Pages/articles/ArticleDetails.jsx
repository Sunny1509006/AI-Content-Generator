import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const param = useParams();
  const articleID = param?.articleID;

  console.log(articleID);

  return <div>ArticleDetails</div>;
};

export default ArticleDetails;
