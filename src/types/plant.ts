export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  careLevel: 'easy' | 'medium' | 'hard';
  light: 'low' | 'medium' | 'high';
  water: 'low' | 'medium' | 'high';
  humidity: 'low' | 'medium' | 'high';
  temperature: {
    min: number;
    max: number;
  };
  lastWatered?: Date;
  nextWatering?: Date;
  health?: number;
  addedAt?: Date;
  careSchedule?: CareSchedule;
  notes?: PlantNote[];
  growthProgress?: GrowthProgress[];
}

export interface CareSchedule {
  watering: {
    frequency: number; // days
    lastDate: Date;
    nextDate: Date;
  };
  fertilizing: {
    frequency: number; // days
    lastDate: Date;
    nextDate: Date;
  };
  pruning: {
    frequency: number; // days
    lastDate: Date;
    nextDate: Date;
  };
  rotating: {
    frequency: number; // days
    lastDate: Date;
    nextDate: Date;
  };
}

export interface PlantNote {
  id: string;
  date: Date;
  content: string;
  type: 'observation' | 'care' | 'issue';
  images?: string[];
}

export interface GrowthProgress {
  id: string;
  date: Date;
  height: number;
  numberOfLeaves: number;
  image?: string;
  notes?: string;
}

export interface PlantIssue {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  causes: string[];
  solutions: string[];
  imageUrl: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unlocked: boolean;
  category: 'care' | 'identification' | 'social' | 'achievement';
  progress?: {
    current: number;
    required: number;
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  points: number;
  unlocked: boolean;
  progress: {
    current: number;
    required: number;
  };
  category: 'care' | 'identification' | 'social' | 'collection';
}

export interface UserProfile {
  id: string;
  username: string;
  avatar: string;
  level: number;
  points: number;
  badges: Badge[];
  achievements: Achievement[];
  plants: Plant[];
  followers: number;
  following: number;
  joinedDate: Date;
  expertise: string[];
  bio?: string;
  location?: string;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Community {
  posts: CommunityPost[];
  events: CommunityEvent[];
  challenges: CommunityChallenges[];
}

export interface CommunityPost {
  id: string;
  userId: string;
  type: 'question' | 'showcase' | 'tip' | 'progress';
  title: string;
  content: string;
  images?: string[];
  likes: number;
  comments: Comment[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  type: 'workshop' | 'swap' | 'tour' | 'webinar';
  date: Date;
  location?: string;
  virtual: boolean;
  host: string;
  participants: string[];
  maxParticipants?: number;
  image?: string;
  tags: string[];
}

export interface CommunityChallenges {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  rewards: {
    points: number;
    badges?: string[];
  };
  participants: {
    userId: string;
    progress: number;
    completed: boolean;
  }[];
  tasks: {
    id: string;
    description: string;
    points: number;
  }[];
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  replies?: Comment[];
}