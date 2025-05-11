import { CommunityChallenges } from '../types/plant';

export const currentChallenges: CommunityChallenges[] = [
  {
    id: '1',
    title: '30-Day Plant Care Challenge',
    description: 'Complete daily plant care tasks for 30 days to establish good habits and earn rewards.',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-30'),
    rewards: {
      points: 300,
      badges: ['plant-care-master']
    },
    participants: [],
    tasks: [
      {
        id: 't1',
        description: 'Water your plants according to their schedule',
        points: 5
      },
      {
        id: 't2',
        description: 'Check leaves for signs of issues',
        points: 5
      },
      {
        id: 't3',
        description: 'Rotate plants for even growth',
        points: 5
      }
    ]
  },
  {
    id: '2',
    title: 'Spring Propagation Challenge',
    description: 'Learn and practice plant propagation techniques with the community.',
    startDate: new Date('2025-04-01'),
    endDate: new Date('2025-04-30'),
    rewards: {
      points: 250,
      badges: ['propagation-expert']
    },
    participants: [],
    tasks: [
      {
        id: 't1',
        description: 'Successfully propagate 3 different plants',
        points: 50
      },
      {
        id: 't2',
        description: 'Share your propagation progress',
        points: 25
      },
      {
        id: 't3',
        description: 'Help another member with propagation advice',
        points: 25
      }
    ]
  }
];