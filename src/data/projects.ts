export interface Project {
  id: string
  title: string
  company: string
  client?: string
  year: number
  image: string
  tags: string[]
  category: 'mobile' | 'backend' | 'enterprise' | 'personal'
  metrics: {
    label: string
    value: string
  }
  description: string
  features: string[]
  links?: {
    live?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: 'smavoo-vw',
    title: 'VW Timesheet App',
    company: 'Smavoo GmbH',
    client: 'Volkswagen',
    year: 2025,
    image: '/projects/vw.png',
    tags: ['Flutter', 'GetX', 'Atomic Design', 'Tracking'],
    category: 'enterprise',
    metrics: {
      label: 'Productivity Boost',
      value: 'High'
    },
    description: 'Enterprise timesheet management with background tracking',
    features: [
      'Atomic Design with multilingual support',
      'GetX state and route management',
      'Background tracking with map view',
      'Real-time location features',
      'Modern Flutter practices'
    ]
  },
  {
    id: 'smavoo-kone',
    title: 'KONE B2B Platform',
    company: 'Smavoo GmbH',
    client: 'KONE',
    year: 2025,
    image: '/projects/kone.png',
    tags: ['Flutter', 'GetX', 'Enterprise', 'B2B'],
    category: 'enterprise',
    metrics: {
      label: 'Quality Standards',
      value: 'Global'
    },
    description: 'B2B mobile application for global industrial client',
    features: [
      'Enterprise-grade architecture',
      'Quality standards compliance',
      'Legacy code modernization',
      'Enhanced maintainability',
      'Global deployment'
    ]
  },
  {
    id: 'proquest',
    title: 'ProQuest Platform',
    company: 'Piximind',
    year: 2023,
    image: '/projects/proquest.png',
    tags: ['Flutter', 'NestJS', 'MongoDB', 'Firebase', 'Socket.io'],
    category: 'mobile',
    metrics: {
      label: 'Time Saved',
      value: '40%'
    },
    description: 'Claims and demands management platform',
    features: [
      'Firebase Cloud Messaging integration',
      'Node mailer for notifications',
      'Google Forms API integration',
      'Real-time socket communication',
      'Automated cronjobs processing'
    ]
  },
  {
    id: 'qrlog',
    title: 'QRLog System',
    company: 'Piximind',
    year: 2022,
    image: '/projects/qrlog.png',
    tags: ['Flutter', 'NestJS', 'MongoDB', 'QR'],
    category: 'mobile',
    metrics: {
      label: 'Efficiency Gain',
      value: '60%'
    },
    description: 'Employee management with QR code tracking',
    features: [
      'QR code generation system',
      'Web and mobile platform integration',
      'Break time tracking',
      'Attendance logging',
      'Admin dashboard'
    ]
  },
  {
    id: 'facial-recognition',
    title: 'Driver Tracking System',
    company: 'My Partner ISC',
    year: 2024,
    image: '/projects/backend.png',
    tags: ['Flutter', 'Facial Recognition', 'NestJS'],
    category: 'mobile',
    metrics: {
      label: 'Features',
      value: 'Advanced'
    },
    description: 'Advanced tracking with facial recognition',
    features: [
      'Facial recognition integration',
      'Real-time driver tracking',
      'Contract management system',
      'Payment processing for subscriptions',
      'Seamless UX/UI design'
    ]
  }
]

