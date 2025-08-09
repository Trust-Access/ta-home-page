import { StaticImageData } from 'next/image';
import { z } from 'zod';
import client01 from '@/public/client01.jpg';
import client02 from '@/public/client02.jpg';
import client03 from '@/public/client03.jpg';
import client04 from '@/public/client04.jpg';

export const ClientCaseSchema = z.object({
  img: z.custom<StaticImageData>(),
  title: z.string(),
  heading: z.string(),
  desc: z.string(),
});

export type ClientCase = z.infer<typeof ClientCaseSchema>;

const clientCasesData: ClientCase[] = [
  {
    img: client01,
    title: 'Acesso inteligente',
    heading: 'Acesso seguro com 75% menos chamados',
    desc: 'Após implementar nossa solução IAM, a equipe de suporte reduziu a carga operacional em três quartos, com acessos seguros e rastreáveis.',
  },
  {
    img: client02,
    title: 'Governança automatizada',
    heading: 'Auditorias finalizadas 2x mais rápido',
    desc: 'Automatizamos fluxos críticos de revisão de acesso, permitindo ciclos de auditoria mais curtos e com maior conformidade.',
  },
  {
    img: client03,
    title: 'Controle granular',
    heading: 'Zero vazamentos em 18 meses',
    desc: 'Com controles de acesso baseados em risco e contexto, a exposição de dados críticos foi completamente mitigada.',
  },
  {
    img: client04,
    title: 'Escalabilidade com segurança',
    heading: 'IAM escalou com o crescimento de 4x da empresa',
    desc: 'Mesmo com expansão acelerada, as políticas de acesso foram mantidas com segurança e sem reescrita de regras.',
  },
];

export const clientCasesSchema = z.array(ClientCaseSchema);
export const clientCases = clientCasesSchema.parse(clientCasesData);
