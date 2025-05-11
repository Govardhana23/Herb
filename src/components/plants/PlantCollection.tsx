import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Plus, Droplets, Calendar, Search, AlertCircle } from 'lucide-react';
import { popularPlants } from '../../data/plantsData';
import AddPlantModal from './AddPlantModal';

const PlantCollection: React.FC = () => {
  const { userPlants, addPlant } = useUser();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const todayPlants = [
    {
      ...popularPlants[0],
      lastWatered: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      nextWatering: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      health: 85,
      addedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    },
    {
      ...popularPlants[1],
      lastWatered: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      nextWatering: new Date(),
      health: 70,
      addedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000)
    }
  ];

  const handleAddPlant = (plant: any) => {
    addPlant({
      ...plant,
      id: Date.now().toString(),
      lastWatered: new Date(),
      nextWatering: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      health: 100,
      addedAt: new Date()
    });
    setIsAddModalOpen(false);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Plant Collection</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Keep track of your plants and their care schedules</p>
        </div>
        
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="btn btn-primary flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Add New Plant
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex w-full max-w-md items-center rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
          <Search size={18} className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search your plants..."
            className="w-full border-0 bg-transparent focus:outline-none focus:ring-0 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="mb-12 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
          <Droplets size={20} className="mr-2 text-primary-500" />
          Plants to Water Today
        </h2>
        
        {todayPlants.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {todayPlants.map((plant) => (
              <div
                key={plant.id}
                className="overflow-hidden rounded-lg border border-primary-100 bg-primary-50 dark:border-primary-900 dark:bg-primary-900/20"
              >
                <div className="relative h-40">
                  <img
                    src={plant.imageUrl}
                    alt={plant.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h3 className="text-lg font-medium text-white">{plant.name}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-primary-600 dark:text-primary-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Water today
                      </span>
                    </div>
                    <button className="btn btn-primary py-1 text-xs">
                      Mark Watered
                    </button>
                  </div>
                  
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Plant Health</span>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{plant.health}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div 
                        className={`h-full rounded-full ${
                          plant.health > 70 
                            ? 'bg-green-500' 
                            : plant.health > 40 
                              ? 'bg-yellow-500' 
                              : 'bg-red-500'
                        }`}
                        style={{ width: `${plant.health}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-700/30">
            <p className="text-gray-600 dark:text-gray-400">No plants need watering today! 🎉</p>
          </div>
        )}
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">All My Plants</h2>
        
        {todayPlants.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {todayPlants.map((plant) => (
              <div
                key={plant.id}
                className="overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md dark:border-gray-700"
              >
                <div className="relative h-48">
                  <img
                    src={plant.imageUrl}
                    alt={plant.name}
                    className="h-full w-full object-cover"
                  />
                  {plant.health < 60 && (
                    <div className="absolute right-2 top-2 rounded-full bg-red-100 p-1 dark:bg-red-900/40">
                      <AlertCircle size={16} className="text-red-500" />
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{plant.name}</h3>
                  <p className="mb-3 text-sm italic text-gray-600 dark:text-gray-400">{plant.scientificName}</p>
                  
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
                  
                  <div className="mb-2 grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Droplets size={14} className="mr-1" />
                      <span>Next: {new Date(plant.nextWatering).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-end">
                      <span>Added: {new Date(plant.addedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Health</span>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{plant.health}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div 
                        className={`h-full rounded-full ${
                          plant.health > 70 
                            ? 'bg-green-500' 
                            : plant.health > 40 
                              ? 'bg-yellow-500' 
                              : 'bg-red-500'
                        }`}
                        style={{ width: `${plant.health}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 border-t border-gray-200 dark:border-gray-700">
                  <button className="p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20">
                    Care Details
                  </button>
                  <button className="border-l border-gray-200 p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-50 dark:border-gray-700 dark:text-primary-400 dark:hover:bg-primary-900/20">
                    Mark Watered
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-12 text-center dark:bg-gray-700/30">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
              <Plus size={32} />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Add Your First Plant</h3>
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
              Start building your plant collection to track care schedules and plant health.
            </p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="btn btn-primary"
            >
              Add a Plant
            </button>
          </div>
        )}
      </div>
      
      {isAddModalOpen && (
        <AddPlantModal 
          onClose={() => setIsAddModalOpen(false)} 
          onAddPlant={handleAddPlant}
          plants={popularPlants}
        />
      )}
    </div>
  );
};

export default PlantCollection;