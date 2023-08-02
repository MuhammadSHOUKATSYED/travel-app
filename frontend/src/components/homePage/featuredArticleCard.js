// components/FeaturedArticleCard.js

import React from 'react';

const FeaturedArticleCard = ({ article }) => {
  return (
    <div className="featured-article-card">
      <img src={article.imageUrl} alt={article.title} className="featured-article-image" />
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
    </div>
  );
};

export default FeaturedArticleCard;
