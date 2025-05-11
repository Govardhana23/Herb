import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { popularPlants } from '../data/plantsData';
import { Droplets, Sun, Thermometer, Ruler, Heart, ArrowLeft, AlertTriangle } from 'lucide-react';

const PlantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const plant = popularPlants.find(p => p.id === id);
  
  if (!plant) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
          <AlertTriangle size={48} className="mx-auto mb-4 text-red-500" />
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Plant Not Found</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            We couldn't find the plant you're looking for.
          </p>
          <Link to="/plants" className="btn btn-primary">
            Browse All Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/plants" className="mb-6 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
        <ArrowLeft size={16} className="mr-2" />
        Back to Plants
      </Link>
      
      <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
        <div className="relative h-64 sm:h-96">
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium text-white 
              ${plant.careLevel === 'easy' 
                ? 'bg-green-500/80' 
                : plant.careLevel === 'medium'
                  ? 'bg-yellow-500/80'
                  : 'bg-red-500/80'
              }`}
            >
              {plant.careLevel === 'easy' ? 'Easy care' : plant.careLevel === 'medium' ? 'Moderate care' : 'Expert care'}
            </span>
            <h1 className="mb-1 text-3xl font-bold text-white">{plant.name}</h1>
            <p className="text-lg italic text-gray-200">{plant.scientificName}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">About this Plant</h2>
              <p className="text-gray-700 dark:text-gray-300">{plant.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Care Instructions</h2>
              
              <div className="mb-4">
                <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <Sun size={20} className="mr-2 text-amber-500" />
                  Light Requirements
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {plant.light === 'low' && 'Thrives in low light conditions. Place in a north-facing window or a few feet away from brighter windows.'}
                  {plant.light === 'medium' && 'Prefers moderate, indirect light. East or west-facing windows are ideal, or near (but not directly in) a south-facing window.'}
                  {plant.light === 'high' && 'Needs bright, indirect light. Place near a south-facing window with some protection from intense direct sunlight.'}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <Droplets size={20} className="mr-2 text-blue-500" />
                  Watering
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {plant.water === 'low' && 'Water sparingly. Allow soil to dry out completely between waterings. Typically every 2-3 weeks, less in winter.'}
                  {plant.water === 'medium' && 'Water when the top inch of soil feels dry to the touch. Usually once every 7-10 days, less in winter.'}
                  {plant.water === 'high' && 'Keep soil consistently moist but not soggy. Water when the surface begins to feel dry, typically every 3-5 days.'}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <Thermometer size={20} className="mr-2 text-red-500" />
                  Temperature
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Prefers temperatures between {plant.temperature.min}°F and {plant.temperature.max}°F. Avoid cold drafts and sudden temperature changes.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <Ruler size={20} className="mr-2 text-indigo-500" />
                  Humidity
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {plant.humidity === 'low' && 'Tolerates dry air well. No special humidity requirements needed.'}
                  {plant.humidity === 'medium' && 'Prefers moderate humidity. Consider misting occasionally or using a pebble tray, especially in dry winter months.'}
                  {plant.humidity === 'high' && 'Thrives in high humidity. Use a humidifier, group with other plants, or place on a pebble tray with water.'}
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Common Issues</h2>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-900/20">
                  <h3 className="mb-2 text-lg font-medium text-yellow-800 dark:text-yellow-300">Yellow Leaves</h3>
                  <p className="text-yellow-700 dark:text-yellow-200">
                    Often caused by overwatering. Ensure proper drainage and allow soil to dry appropriately between waterings.
                  </p>
                </div>
                
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
                  <h3 className="mb-2 text-lg font-medium text-red-800 dark:text-red-300">Brown Leaf Tips</h3>
                  <p className="text-red-700 dark:text-red-200">
                    Usually indicates low humidity or mineral buildup from tap water. Try using filtered water and increase humidity if needed.
                  </p>
                </div>
                
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                  <h3 className="mb-2 text-lg font-medium text-blue-800 dark:text-blue-300">Drooping Leaves</h3>
                  <p className="text-blue-700 dark:text-blue-200">
                    Could signal either overwatering or underwatering. Check soil moisture and adjust your watering schedule accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="sticky top-20 rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Care Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Light</span>
                  <div className="flex items-center">
                    {Array.from({ length: plant.light === 'low' ? 1 : plant.light === 'medium' ? 2 : 3 }).map((_, i) => (
                      <Sun 
                        key={i} 
                        size={16} 
                        className="text-amber-500" 
                      />
                    ))}
                    {Array.from({ length: plant.light === 'low' ? 2 : plant.light === 'medium' ? 1 : 0 }).map((_, i) => (
                      <Sun 
                        key={i + 3} 
                        size={16} 
                        className="text-gray-300 dark:text-gray-600" 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Water</span>
                  <div className="flex items-center">
                    {Array.from({ length: plant.water === 'low' ? 1 : plant.water === 'medium' ? 2 : 3 }).map((_, i) => (
                      <Droplets 
                        key={i} 
                        size={16} 
                        className="text-blue-500" 
                      />
                    ))}
                    {Array.from({ length: plant.water === 'low' ? 2 : plant.water === 'medium' ? 1 : 0 }).map((_, i) => (
                      <Droplets 
                        key={i + 3} 
                        size={16} 
                        className="text-gray-300 dark:text-gray-600" 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Humidity</span>
                  <div className="flex items-center">
                    {Array.from({ length: plant.humidity === 'low' ? 1 : plant.humidity === 'medium' ? 2 : 3 }).map((_, i) => (
                      <Droplets 
                        key={i} 
                        size={16} 
                        className="text-green-500" 
                      />
                    ))}
                    {Array.from({ length: plant.humidity === 'low' ? 2 : plant.humidity === 'medium' ? 1 : 0 }).map((_, i) => (
                      <Droplets 
                        key={i + 3} 
                        size={16} 
                        className="text-gray-300 dark:text-gray-600" 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Temperature</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {plant.temperature.min}°F - {plant.temperature.max}°F
                  </span>
                </div>
                
                <div className="pt-2">
                  <button className="btn btn-primary w-full">
                    <Heart size={18} className="mr-2" />
                    Add to My Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailPage;