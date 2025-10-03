export interface Experience {
  company: string
  role: string
  location: string
  period: string
  logo: string
  notable: string
  tech: string[]
  achievements?: string[]
}

export const experience: Experience[] = [
  {
    company: 'Smavoo GmbH',
    role: 'Mobile Application Developer',
    location: 'Hannover, Germany 🇩🇪',
    period: 'Mar 2025 - Present',
    logo: '/logos/smavoo.svg',
    notable: 'Developing apps for Volkswagen & KONE',
    tech: ['Flutter', 'GetX', 'Atomic Design', 'Maps', 'Background Tracking'],
    achievements: [
      'Integrated Atomic Design with multilingual capabilities',
      'Enhanced UI/UX consistency using GetX state management',
      'Updated code to latest Flutter version, resolving legacy challenges',
      'Implemented background tracking with real-time location features',
      'Increased timesheet management efficiency with new productivity features'
    ]
  },
  {
    company: 'My Partner ISC',
    role: 'Full Stack Mobile Developer',
    location: 'Sfax, Tunisia 🇹🇳',
    period: 'Nov 2023 - Feb 2025',
    logo: '/logos/mypartner.svg',
    notable: 'Led diverse Flutter & NestJS projects',
    tech: ['Flutter', 'NestJS', 'Firebase', 'Facial Recognition', 'Payment Processing'],
    achievements: [
      'Led development using Flutter, NestJS, and Firebase Cloud Messaging',
      'Integrated facial recognition and driver tracking systems',
      'Developed contract management and payment processing systems',
      'Ensured seamless UX/UI design and Git version control'
    ]
  },
  {
    company: 'Piximind',
    role: 'Full Stack Mobile Intern',
    location: 'Sfax, Tunisia 🇹🇳',
    period: 'Jan 2023 - Jun 2023',
    logo: '/logos/piximind.svg',
    notable: 'ProQuest claims management platform',
    tech: ['MongoDB', 'NestJS', 'Flutter', 'Firebase', 'Socket.io', 'Cronjobs'],
    achievements: [
      'Developed ProQuest platform for claims and demands management',
      'Streamlined claims processing, reducing time by 40%',
      'Implemented user-friendly interfaces enhancing satisfaction',
      'Integrated Google Forms API, node mailer, and socket communication'
    ]
  },
  {
    company: 'Piximind',
    role: 'Full Stack Mobile Intern',
    location: 'Sfax, Tunisia 🇹🇳',
    period: 'Aug 2022 - Sep 2022',
    logo: '/logos/piximind.svg',
    notable: 'QRLog employee management system',
    tech: ['MongoDB', 'NestJS', 'Flutter', 'QR Codes'],
    achievements: [
      'Developed QRLog employee management application',
      'Implemented QR code generation and platform integration',
      'Added break tracking functionality',
      'Improved logging efficiency by 60%'
    ]
  }
]

