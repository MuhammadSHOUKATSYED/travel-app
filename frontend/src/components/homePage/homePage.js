// components/HomePage.js

import React from 'react';
import DestinationCard from './destinationCard';
import FeaturedArticleCard from './featuredArticleCard';
import heroImage from '../../assets/images/homePage.jpg';
import '../homePage/homePageStyles.css'
const popularDestinationsData = [
  {
    id: 1,
    name: 'Destination 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/762/723/695/the-sky-mountains-lake-lake-saif-ul-malook-wallpaper-preview.jpg',
  },
  {
    id: 2,
    name: 'Destination 2',
    description: 'Praesent blandit urna et turpis cursus, quis euismod erat posuere.',
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/996/121/desktop-wallpaper-pakistan-beautiful-places-of-pakistan.jpg',
  },
  {
    id: 3,
    name: 'Destination 3',
    description: 'Nulla faucibus metus vel metus elementum fermentum.',
    imageUrl: 'https://free4kwallpapers.com/uploads/originals/2019/12/11/gattain-lake-kashmir-pakistan-wallpaper.jpg',
  },
];

const featuredArticleData = {
  id: 1,
  title: 'Featured Article Title',
  author: 'John Doe',
};

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to TravelKaro.pk</h1>
          <p>Explore the world with our travel advisor app.</p>
        </div>
      </div>

      <div className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {popularDestinationsData.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>

      <div className="featured-article">
        <h2>Featured Article</h2>
        <FeaturedArticleCard article={featuredArticleData} />
      </div>
    </div>
  );
};

export default HomePage;
