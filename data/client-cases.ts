export interface ClientCase {
  img: string;
  title: string;
  heading: string;
  desc: string;
}

export const clientCases: ClientCase[] = [
  {
    img: '/client01.jpg',
    title: 'Acesso inteligente',
    heading: 'Acesso seguro com 75% menos chamados',
    desc: 'Após implementar nossa solução IAM, a equipe de suporte reduziu a carga operacional em três quartos, com acessos seguros e rastreáveis.',
  },
  {
    img: '/client02.jpg',
    title: 'Governança automatizada',
    heading: 'Auditorias finalizadas 2x mais rápido',
    desc: 'Automatizamos fluxos críticos de revisão de acesso, permitindo ciclos de auditoria mais curtos e com maior conformidade.',
  },
  {
    img: '/client03.jpg',
    title: 'Controle granular',
    heading: 'Zero vazamentos em 18 meses',
    desc: 'Com controles de acesso baseados em risco e contexto, a exposição de dados críticos foi completamente mitigada.',
  },
  {
    img: '/client04.jpg',
    title: 'Escalabilidade com segurança',
    heading: 'IAM escalou com o crescimento de 4x da empresa',
    desc: 'Mesmo com expansão acelerada, as políticas de acesso foram mantidas com segurança e sem reescrita de regras.',
  },
];
