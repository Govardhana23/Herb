import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Leaf, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg)', 
          filter: 'blur(4px)'
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block animate-leaf-sway text-primary-600 dark:text-primary-400">Grow</span>
            <span className="block">your plant knowledge</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Identify plants, diagnose issues, and track your plant care journey while earning rewards with HerbiVista.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/identify"
              className="btn btn-primary flex items-center gap-2"
            >
              <Camera size={18} />
              Identify a Plant
            </Link>
            <Link
              to="/diagnose"
              className="btn btn-secondary flex items-center gap-2"
            >
              <Leaf size={18} />
              Diagnose Issues
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="leaf-appear flex items-start gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
              <Camera size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Plant Identification</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Take a photo or upload an image to identify any plant instantly.
              </p>
            </div>
          </div>
          
          <div className="leaf-appear flex items-start gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800" style={{animationDelay: '0.2s'}}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
              <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Care Guidance</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Get personalized care tips and watering schedules for your plants.
              </p>
            </div>
          </div>
          
          <div className="leaf-appear flex items-start gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800" style={{animationDelay: '0.4s'}}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Plant Health</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Diagnose problems and get solutions to keep your plants thriving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;