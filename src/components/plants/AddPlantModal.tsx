import React, { useState } from 'react';
import { X, Search, Check } from 'lucide-react';
import { Plant } from '../../types/plant';

interface AddPlantModalProps {
  onClose: () => void;
  onAddPlant: (plant: Plant) => void;
  plants: Plant[];
}

const AddPlantModal: React.FC<AddPlantModalProps> = ({ onClose, onAddPlant, plants }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = plants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add a Plant to Your Collection</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4 flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <Search size={18} className="mr-2 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search for a plant..."
              className="w-full border-0 bg-transparent focus:outline-none focus:ring-0 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="max-h-[50vh] overflow-y-auto">
            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredPlants.map((plant) => (
                  <div
                    key={plant.id}
                    className={`flex cursor-pointer gap-3 rounded-lg border p-3 transition-colors ${
                      selectedPlant?.id === plant.id
                        ? 'border-primary-500 bg-primary-50 dark:border-primary-600 dark:bg-primary-900/20'
                        : 'border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50'
                    }`}
                    onClick={() => setSelectedPlant(plant)}
                  >
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={plant.imageUrl}
                        alt={plant.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        selectedPlant?.id === plant.id
                          ? 'text-primary-800 dark:text-primary-300'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {plant.name}
                      </h4>
                      <p className="text-sm italic text-gray-600 dark:text-gray-400">
                        {plant.scientificName}
                      </p>
                      <div className="mt-1">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium 
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
                    </div>
                    {selectedPlant?.id === plant.id && (
                      <div className="flex items-center">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-white">
                          <Check size={12} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-700/30">
                <p className="text-gray-600 dark:text-gray-400">No plants found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <button
            onClick={onClose}
            className="btn btn-secondary"
          >
            Cancel
          </button>
          <button
            onClick={() => selectedPlant && onAddPlant(selectedPlant)}
            disabled={!selectedPlant}
            className={`btn btn-primary ${!selectedPlant ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Add to Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlantModal;