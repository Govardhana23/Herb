import React from 'react';
import { Link } from 'react-router-dom';
import { popularPlants } from '../../data/plantsData';
import { Droplets, Sun, Thermometer } from 'lucide-react';

const FeaturedPlants: React.FC = () => {
  return (
    <section className="py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Popular House Plants</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Discover some of the most beloved indoor plants and learn how to help them thrive in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularPlants.slice(0, 6).map((plant, index) => (
            <div 
              key={plant.id}
              className="plant-grow overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {plant.name}
                </h3>
                <p className="mb-3 text-sm italic text-gray-600 dark:text-gray-400">
                  {plant.scientificName}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
                    ${plant.careLevel === 'easy' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                      : plant.careLevel === 'medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}
                  >
                    {plant.careLevel === 'easy' ? 'Easy care' : plant.careLevel === 'medium' ? 'Moderate care' : 'Expert care'}
                  </span>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center rounded-md bg-gray-50 p-2 text-center dark:bg-gray-700">
                    <Sun size={16} className="mb-1 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {plant.light === 'low' ? 'Low light' : plant.light === 'medium' ? 'Medium light' : 'Bright light'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-md bg-gray-50 p-2 text-center dark:bg-gray-700">
                    <Droplets size={16} className="mb-1 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {plant.water === 'low' ? 'Low water' : plant.water === 'medium' ? 'Medium water' : 'High water'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-md bg-gray-50 p-2 text-center dark:bg-gray-700">
                    <Thermometer size={16} className="mb-1 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {plant.temperature.min}°-{plant.temperature.max}°F
                    </span>
                  </div>
                </div>
                <Link
                  to={`/plant/${plant.id}`}
                  className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View care guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/plants"
            className="btn btn-primary"
          >
            Explore More Plants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;