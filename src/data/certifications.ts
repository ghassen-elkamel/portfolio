export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  logo: string
  credential?: string
}

export const certifications: Certification[] = [
  {
    id: 'azure-fundamentals',
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    logo: '/certs/microsoft.svg'
  },
  {
    id: 'android-dev',
    name: 'Android Development',
    issuer: 'Google Africa Developer Training Program',
    date: '2023',
    logo: '/certs/google.svg'
  },
  {
    id: 'ml-python',
    name: 'Machine Learning with Python',
    issuer: 'Cognitive Class',
    date: '2023',
    logo: '/certs/cognitiveclass.svg'
  }
]

