export interface Skill {
  name: string
  category: 'mobile' | 'backend' | 'tools'
  icon: string
  proficiency: number
  color: string
}

export const skills: Skill[] = [
  {
    name: 'Flutter',
    category: 'mobile',
    icon: 'flutter',
    proficiency: 95,
    color: '#02569B'
  },
  {
    name: 'Dart',
    category: 'mobile',
    icon: 'dart',
    proficiency: 95,
    color: '#0175C2'
  },
  {
    name: 'GetX',
    category: 'mobile',
    icon: 'getx',
    proficiency: 90,
    color: '#9b59b6'
  },
  {
    name: 'NestJS',
    category: 'backend',
    icon: 'nestjs',
    proficiency: 90,
    color: '#E0234E'
  },
  {
    name: 'MongoDB',
    category: 'backend',
    icon: 'mongodb',
    proficiency: 85,
    color: '#47A248'
  },
  {
    name: 'Firebase',
    category: 'backend',
    icon: 'firebase',
    proficiency: 88,
    color: '#FFCA28'
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    icon: 'postgresql',
    proficiency: 80,
    color: '#4169E1'
  },
  {
    name: 'Git',
    category: 'tools',
    icon: 'git',
    proficiency: 90,
    color: '#F05032'
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: 'docker',
    proficiency: 75,
    color: '#2496ED'
  },
  {
    name: 'TypeScript',
    category: 'tools',
    icon: 'typescript',
    proficiency: 88,
    color: '#3178C6'
  }
]

