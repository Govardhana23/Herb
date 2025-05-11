import React, { useState } from 'react';
import { Book, Award, Search, ArrowRight } from 'lucide-react';

const lessons = [
  {
    id: '1',
    title: 'Understanding Plant Light Requirements',
    description: 'Learn how to interpret light needs and find the perfect spot for each plant in your home.',
    level: 'Beginner',
    duration: '10 min',
    xpReward: 30,
    imageUrl: 'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg',
    category: 'Basics'
  },
  {
    id: '2',
    title: 'Watering Techniques for Different Plants',
    description: 'Master the art of watering - learn when and how much water different plants need.',
    level: 'Beginner',
    duration: '12 min',
    xpReward: 35,
    imageUrl: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg',
    category: 'Basics'
  },
  {
    id: '3',
    title: 'Soil Composition and Potting Mixes',
    description: 'Discover how to create the perfect growing medium for various plant types.',
    level: 'Intermediate',
    duration: '15 min',
    xpReward: 40,
    imageUrl: 'https://images.pexels.com/photos/2132777/pexels-photo-2132777.jpeg',
    category: 'Advanced'
  },
  {
    id: '4',
    title: 'Propagation for Beginners',
    description: 'Learn how to multiply your plants using cutting, division, and other simple methods.',
    level: 'Intermediate',
    duration: '20 min',
    xpReward: 50,
    imageUrl: 'https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg',
    category: 'Advanced'
  },
  {
    id: '5',
    title: 'Identifying and Treating Common Pests',
    description: 'Learn to spot and effectively treat common houseplant pests before they spread.',
    level: 'Intermediate',
    duration: '18 min',
    xpReward: 45,
    imageUrl: 'https://images.pexels.com/photos/7728791/pexels-photo-7728791.jpeg',
    category: 'Troubleshooting'
  },
  {
    id: '6',
    title: 'Seasonal Plant Care Guide',
    description: 'Adjust your plant care routine throughout the year for healthier, happier plants.',
    level: 'Beginner',
    duration: '15 min',
    xpReward: 40,
    imageUrl: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg',
    category: 'Seasonal'
  }
];

const LearnSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Basics', 'Advanced', 'Troubleshooting', 'Seasonal'];

  const filteredLessons = lessons.filter(
    (lesson) =>
      (selectedCategory === 'All' || lesson.category === selectedCategory) &&
      (searchQuery === '' ||
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Learn & Grow</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Expand your plant knowledge with our curated collection of lessons and earn rewards as you learn.
        </p>
      </div>

      <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white dark:bg-primary-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-auto">
          <div className="flex w-full items-center rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <Search size={18} className="mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search lessons..."
              className="w-full border-0 bg-transparent focus:outline-none focus:ring-0 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={lesson.imageUrl}
                alt={lesson.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {lesson.level}
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-2 flex items-center">
                <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                  {lesson.category}
                </span>
                <span className="ml-auto flex items-center text-xs font-medium text-amber-600 dark:text-amber-400">
                  <Award size={14} className="mr-1" />
                  {lesson.xpReward} XP
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {lesson.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {lesson.description}
              </p>

              <a
                href={`/learn/${lesson.id}`}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Start Learning
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="my-8 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-700/30">
          <Book size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            No lessons found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            We couldn't find any lessons matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default LearnSection;