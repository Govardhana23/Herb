import React from 'react';
import { useUser } from '../../context/UserContext';
import { Trophy, Star, Sprout } from 'lucide-react';
import { badges } from '../../data/plantsData';

const ProgressSection: React.FC = () => {
  const { level, points, badges: userBadges } = useUser();
  const pointsForNextLevel = (level) * 100;
  const progress = ((points % 100) / 100) * 100;

  return (
    <section className="py-12 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">Your Green Journey</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Track your progress, earn badges, and level up your plant care skills.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Level {level}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Plant Enthusiast</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{points % 100} XP</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{pointsForNextLevel} XP</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div 
                  className="h-full rounded-full bg-primary-600 dark:bg-primary-500" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {points % 100} / {pointsForNextLevel} XP to level {level + 1}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                <Star size={16} className="mr-2" /> Recent Achievements
              </h4>
              <div className="space-y-2">
                <div className="rounded-md bg-green-50 p-3 dark:bg-green-900/20">
                  <p className="text-sm font-medium text-green-800 dark:text-green-300">Identified your first plant (+50 XP)</p>
                </div>
                <div className="rounded-md bg-blue-50 p-3 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Added a plant to your collection (+50 XP)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
              <Sprout size={20} className="mr-2" /> Badges
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`flex flex-col items-center rounded-lg p-3 text-center ${
                    badge.unlocked ? 'bg-primary-50 dark:bg-primary-900/20' : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  <div 
                    className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${
                      badge.unlocked 
                        ? 'bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-300' 
                        : 'bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {badge.id === '1' && <Sprout size={24} />}
                    {badge.id === '2' && <Trophy size={24} />}
                    {badge.id === '3' && <Star size={24} />}
                    {badge.id === '4' && <Star size={24} />}
                    {badge.id === '5' && <Trophy size={24} />}
                  </div>
                  <h4 className={`text-sm font-medium ${
                    badge.unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {badge.name}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;