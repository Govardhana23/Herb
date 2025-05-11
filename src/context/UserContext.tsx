import React, { createContext, useContext, useState } from 'react';
import { Plant } from '../types/plant';

interface UserContextType {
  userPlants: Plant[];
  addPlant: (plant: Plant) => void;
  removePlant: (id: string) => void;
  points: number;
  level: number;
  addPoints: (amount: number) => void;
  badges: string[];
  addBadge: (badge: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userPlants, setUserPlants] = useState<Plant[]>([]);
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);

  const addPlant = (plant: Plant) => {
    setUserPlants((prevPlants) => [...prevPlants, plant]);
    addPoints(50); // Reward points for adding a plant
  };

  const removePlant = (id: string) => {
    setUserPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };

  const addPoints = (amount: number) => {
    setPoints((prevPoints) => prevPoints + amount);
  };

  const addBadge = (badge: string) => {
    if (!badges.includes(badge)) {
      setBadges((prevBadges) => [...prevBadges, badge]);
      addPoints(100); // Reward points for earning a badge
    }
  };

  // Calculate level based on points (1 level per 100 points)
  const level = Math.floor(points / 100) + 1;

  return (
    <UserContext.Provider
      value={{
        userPlants,
        addPlant,
        removePlant,
        points,
        level,
        addPoints,
        badges,
        addBadge,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};