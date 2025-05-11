import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPlants from '../components/home/FeaturedPlants';
import ProgressSection from '../components/gamification/ProgressSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedPlants />
      <ProgressSection />
    </div>
  );
};

export default HomePage;