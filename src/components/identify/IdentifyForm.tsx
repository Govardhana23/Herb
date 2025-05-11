import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Camera, Upload, Trash, Loader, Check } from 'lucide-react';
import { popularPlants } from '../../data/plantsData';

const IdentifyForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [identificationResult, setIdentificationResult] = useState<{plant: typeof popularPlants[0], confidence: number} | null>(null);
  const { addPoints } = useUser();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setIdentificationResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setIdentificationResult(null);
  };

  const simulateIdentification = () => {
    if (!selectedImage) return;
    
    setIsIdentifying(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Randomly select a plant from the data
      const randomPlant = popularPlants[Math.floor(Math.random() * popularPlants.length)];
      const randomConfidence = 70 + Math.floor(Math.random() * 25); // Between 70-95%
      
      setIdentificationResult({
        plant: randomPlant,
        confidence: randomConfidence
      });
      
      setIsIdentifying(false);
      addPoints(25); // Award points for identification
    }, 2500);
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Plant Identification</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Upload a photo of a plant to identify it instantly and get care recommendations.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        {!selectedImage ? (
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
              <Camera size={42} />
            </div>
            
            <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
              Take a clear photo of the plant you want to identify. Make sure the leaves and overall structure are visible.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <label className="btn btn-primary cursor-pointer">
                <Camera size={18} className="mr-2" />
                Take Photo
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              
              <label className="btn btn-secondary cursor-pointer">
                <Upload size={18} className="mr-2" />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img 
                src={selectedImage} 
                alt="Selected plant" 
                className="mx-auto max-h-80 w-auto" 
              />
              <button
                onClick={handleRemoveImage}
                className="absolute right-2 top-2 rounded-full bg-gray-800 bg-opacity-70 p-2 text-white transition-colors hover:bg-opacity-90"
                aria-label="Remove image"
              >
                <Trash size={18} />
              </button>
            </div>
            
            {!isIdentifying && !identificationResult && (
              <button
                onClick={simulateIdentification}
                className="btn btn-primary w-full"
              >
                Identify Plant
              </button>
            )}
            
            {isIdentifying && (
              <div className="flex flex-col items-center py-4">
                <Loader size={32} className="animate-spin text-primary-600 dark:text-primary-400" />
                <p className="mt-4 text-gray-600 dark:text-gray-400">Analyzing your plant...</p>
              </div>
            )}
            
            {identificationResult && (
              <div className="leaf-appear mt-6 rounded-lg bg-primary-50 p-4 dark:bg-primary-900/20">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-300">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {identificationResult.plant.name}
                    </h3>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                      {identificationResult.plant.scientificName}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-800 dark:text-primary-200">
                      {identificationResult.confidence}% match
                    </span>
                  </div>
                </div>
                
                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  {identificationResult.plant.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`/plant/${identificationResult.plant.id}`}
                    className="btn btn-primary"
                  >
                    View Care Guide
                  </a>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIdentificationResult(null)}
                  >
                    Try Another
                  </button>
                </div>
                
                <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-300">
                  <Check size={16} className="mr-2 inline" />
                  Identification complete! You earned 25 XP.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="mt-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Tips for Better Plant Identification
        </h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li className="flex items-start">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-300">1</span>
            Take close-up photos of leaves, including both top and bottom surfaces
          </li>
          <li className="flex items-start">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-300">2</span>
            Include any flowers or fruits if present
          </li>
          <li className="flex items-start">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-300">3</span>
            Capture the overall growth pattern of the plant
          </li>
          <li className="flex items-start">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-300">4</span>
            Ensure good lighting without strong shadows
          </li>
          <li className="flex items-start">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-300">5</span>
            Remove any distracting backgrounds if possible
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdentifyForm;