import { Achievement } from '../types/plant';

export const achievements: Achievement[] = [
  {
    id: '1',
    name: 'Green Thumb Initiate',
    description: 'Add your first plant to your collection',
    imageUrl: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg',
    points: 50,
    unlocked: false,
    progress: {
      current: 0,
      required: 1
    },
    category: 'collection'
  },
  {
    id: '2',
    name: 'Plant Whisperer',
    description: 'Successfully care for 5 plants for over 30 days',
    imageUrl: 'https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg',
    points: 100,
    unlocked: false,
    progress: {
      current: 0,
      required: 5
    },
    category: 'care'
  },
  {
    id: '3',
    name: 'Master Identifier',
    description: 'Correctly identify 20 different plant species',
    imageUrl: 'https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg',
    points: 150,
    unlocked: false,
    progress: {
      current: 0,
      required: 20
    },
    category: 'identification'
  },
  {
    id: '4',
    name: 'Community Helper',
    description: 'Help 10 community members with plant care advice',
    imageUrl: 'https://images.pexels.com/photos/7728791/pexels-photo-7728791.jpeg',
    points: 200,
    unlocked: false,
    progress: {
      current: 0,
      required: 10
    },
    category: 'social'
  }
];