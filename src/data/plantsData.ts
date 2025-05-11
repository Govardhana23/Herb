import { Plant, PlantIssue, Badge } from '../types/plant';

export const popularPlants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    description: 'The Swiss Cheese Plant is famous for its natural leaf holes, which form as the plant matures. It\'s a popular houseplant that\'s easy to care for and makes a statement with its large, glossy leaves.',
    imageUrl: 'https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg',
    careLevel: 'easy',
    light: 'medium',
    water: 'medium',
    humidity: 'medium',
    temperature: {
      min: 65,
      max: 85
    }
  },
  {
    id: '2',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    description: 'The Snake Plant is one of the most tolerant houseplants you can find. It thrives in most conditions and requires minimal water, making it perfect for beginners or those with busy lifestyles.',
    imageUrl: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg',
    careLevel: 'easy',
    light: 'low',
    water: 'low',
    humidity: 'low',
    temperature: {
      min: 60,
      max: 85
    }
  },
  {
    id: '3',
    name: 'Pothos',
    scientificName: 'Epipremnum aureum',
    description: 'Also known as Devil\'s Ivy, this trailing vine is incredibly easy to care for. It thrives in a variety of conditions and is known for its air-purifying qualities.',
    imageUrl: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    careLevel: 'easy',
    light: 'low',
    water: 'low',
    humidity: 'low',
    temperature: {
      min: 60,
      max: 85
    }
  },
  {
    id: '4',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    description: 'The Peace Lily is a popular indoor plant known for its beautiful white flowers and ability to thrive in low light. It\'s also excellent at filtering indoor air pollutants.',
    imageUrl: 'https://images.pexels.com/photos/1302305/pexels-photo-1302305.jpeg',
    careLevel: 'medium',
    light: 'low',
    water: 'medium',
    humidity: 'medium',
    temperature: {
      min: 65,
      max: 85
    }
  },
  {
    id: '5',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    description: 'With its large, violin-shaped leaves, the Fiddle Leaf Fig makes a striking impression. Though it requires more specific care, it rewards with dramatic foliage that can transform a space.',
    imageUrl: 'https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg',
    careLevel: 'hard',
    light: 'high',
    water: 'medium',
    humidity: 'medium',
    temperature: {
      min: 65,
      max: 80
    }
  },
  {
    id: '6',
    name: 'Spider Plant',
    scientificName: 'Chlorophytum comosum',
    description: 'The Spider Plant is a classic, easy-to-grow houseplant that produces plantlets on long stems, resembling spiders. It\'s perfect for hanging baskets and is safe for pets.',
    imageUrl: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    careLevel: 'easy',
    light: 'medium',
    water: 'medium',
    humidity: 'low',
    temperature: {
      min: 60,
      max: 80
    }
  }
];

export const plantIssues: PlantIssue[] = [
  {
    id: '1',
    name: 'Leaf Yellowing',
    description: 'Yellow leaves can be a sign of several issues including overwatering, nutrient deficiencies, or natural aging.',
    symptoms: [
      'Leaves turning yellow, starting from the edges or the base',
      'Yellow spots across the leaf surface',
      'Leaves becoming soft or mushy'
    ],
    causes: [
      'Overwatering',
      'Poor drainage',
      'Nutrient deficiency (especially nitrogen)',
      'Insufficient light',
      'Natural aging process'
    ],
    solutions: [
      'Adjust watering schedule - allow soil to dry out between waterings',
      'Ensure pot has drainage holes',
      'Check if plant needs fertilizing',
      'Move to a location with appropriate light'
    ],
    imageUrl: 'https://images.pexels.com/photos/7728782/pexels-photo-7728782.jpeg'
  },
  {
    id: '2',
    name: 'Brown Leaf Tips',
    description: 'Brown, crispy leaf tips often indicate issues with humidity, watering, or fertilizer.',
    symptoms: [
      'Tips of leaves turning brown and crispy',
      'Brown edges around leaves',
      'Leaves becoming brittle'
    ],
    causes: [
      'Low humidity',
      'Underwatering',
      'Fertilizer burn',
      'Exposure to hot, dry air',
      'Water quality issues (chlorine, fluoride)'
    ],
    solutions: [
      'Increase humidity with a humidifier or pebble tray',
      'Adjust watering schedule',
      'Use filtered water if tap water is heavily treated',
      'Move away from heat sources or drafts'
    ],
    imageUrl: 'https://images.pexels.com/photos/7797749/pexels-photo-7797749.jpeg'
  },
  {
    id: '3',
    name: 'Pest Infestation',
    description: 'Common pests like spider mites, aphids, or mealybugs can damage plants and spread quickly.',
    symptoms: [
      'Tiny bugs visible on stems, leaves, or soil',
      'Sticky residue on leaves or surrounding surfaces',
      'White cottony patches (mealybugs)',
      'Fine webbing (spider mites)',
      'Distorted or stunted growth'
    ],
    causes: [
      'New plants introducing pests',
      'Open windows or doors',
      'Stressed plants being more susceptible',
      'Overwatering creating favorable conditions'
    ],
    solutions: [
      'Isolate affected plants immediately',
      'Wash leaves with mild soap and water solution',
      'Apply neem oil or insecticidal soap',
      'For severe infestations, consider appropriate insecticides',
      'Regularly inspect new plants before bringing them home'
    ],
    imageUrl: 'https://images.pexels.com/photos/63609/spider-web-spider-nature-close-up-63609.jpeg'
  }
];

export const badges: Badge[] = [
  {
    id: '1',
    name: 'Plant Parent',
    description: 'Add your first plant to your collection',
    imageUrl: 'plant-parent-badge.svg',
    unlocked: false
  },
  {
    id: '2',
    name: 'Green Thumb',
    description: 'Successfully care for a plant for 30 days',
    imageUrl: 'green-thumb-badge.svg',
    unlocked: false
  },
  {
    id: '3',
    name: 'Plant Doctor',
    description: 'Diagnose and resolve a plant issue',
    imageUrl: 'plant-doctor-badge.svg',
    unlocked: false
  },
  {
    id: '4',
    name: 'Plant Scholar',
    description: 'Complete 5 plant care lessons',
    imageUrl: 'plant-scholar-badge.svg',
    unlocked: false
  },
  {
    id: '5',
    name: 'Plant Collector',
    description: 'Add 10 different plant species to your collection',
    imageUrl: 'plant-collector-badge.svg',
    unlocked: false
  }
];