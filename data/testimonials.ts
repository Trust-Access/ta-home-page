export interface Testimonial {
  company: string;
  quote: string;
  name: string;
  role: string;
  companyTag: string;
  link: string;
  linkText: string;
  heading?: string;
  image?: string;
  imageAlt?: string;
}

export const testimonials: Testimonial[] = [
  {
    company: 'CLIENT',
    quote:
      'Fiquei realmente impressionado com a cultura da empresa e o que vocês fazem para ajudar um cliente a se integrar. Não é como qualquer outra empresa. É algo completamente diferente. Vocês realmente se destacam por não fazer as coisas que todo mundo faz: Nada se perde, tudo é rápido. Tudo é realmente mais rápido do que eu esperaria, com muito mais detalhes do que eu esperaria. Estou realmente impressionado.',
    name: 'Carlos Silva',
    role: 'Gerente de Segurança da Informação e Privacidade',
    companyTag: 'MINING',
    link: '#',
    linkText: 'Ler o Caso de Estudo →',
  },
  {
    company: 'CLIENT',
    heading:
      'CLIENT Substitui Soluções Complexas pela Trust Access para Gestão Simplificada de Dados',
    quote:
      'Ter uma ferramenta como a Trust Access que pudéssemos implementar rapidamente, que não exigisse muito trabalho para colocar em funcionamento, foi uma vantagem.',
    name: 'Roberto Santos',
    role: 'Engenheiro Sênior de Segurança',
    companyTag: 'CLIENT',
    link: '#',
    linkText: 'Ler o Caso →',
    image: '/placeholder.svg?height=300&width=500',
    imageAlt: 'Professional using Trust Access',
  },
];
