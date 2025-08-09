# 🛡️ Trust Access - Home Page

Uma home page moderna e responsiva para a **Trust Access**, consultoria especializada em **IAM (Identity and Access Management)** e segurança digital.

![Trust Access](https://img.shields.io/badge/Trust%20Access-IAM%20%26%20Security-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 🚀 Sobre o Projeto

Esta home page foi desenvolvida para apresentar os serviços da Trust Access de forma profissional e moderna, focando na experiência do usuário e conversão de leads. O design é inspirado em plataformas de segurança enterprise, com elementos visuais que transmitem confiança e tecnologia.

### ✨ Características Principais

- **Design Moderno**: Interface limpa e profissional com gradientes teal/azul
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance Otimizada**: Built com Next.js 15 e otimizações de imagem
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade web
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 🎯 Funcionalidades

### 📋 Seções da Home Page

- **Header Fixo**: Navegação intuitiva com logo e CTAs
- **Hero Section**: Apresentação impactante com padrão geométrico de fundo
- **Seção de Confiança**: Logos de clientes (Vale, Hotmart, Ultimate)
- **Serviços**: 3 seções principais com interfaces mockadas interativas
- **Cases de Sucesso**: Depoimentos reais de clientes
- **Formulário de Demo**: Formulário completo para captação de leads
- **Footer Completo**: Links organizados e informações de contato

### 🔧 Recursos Técnicos

- **Componentes Reutilizáveis**: Arquitetura modular com shadcn/ui
- **Animações Suaves**: Transições e hover effects
- **Formulários Validados**: Validação client-side completa
- **Imagens Otimizadas**: Next.js Image component para performance
- **TypeScript**: Tipagem completa para maior confiabilidade

## 🛠️ Stack Tecnológica

| Tecnologia       | Versão | Descrição                                 |
| ---------------- | ------ | ----------------------------------------- |
| **Next.js**      | 15.0   | Framework React para produção             |
| **React**        | 18.0   | Biblioteca para interfaces de usuário     |
| **TypeScript**   | 5.0    | Superset tipado do JavaScript             |
| **Tailwind CSS** | 3.4    | Framework CSS utility-first               |
| **shadcn/ui**    | Latest | Componentes UI acessíveis e customizáveis |
| **Lucide React** | Latest | Biblioteca de ícones moderna              |
| **Radix UI**     | Latest | Primitivos UI headless                    |

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### 🚀 Início Rápido

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ta-home-page.git

# Entre na pasta do projeto
cd ta-home-page

# Instale as dependências
npm install --legacy-peer-deps

# Adicione as imagens do logo
# Coloque os arquivos logo.png e icon.png em public/images/

# Inicie o servidor de desenvolvimento
npm run dev
```

### 🖼️ Configuração de Imagens

Adicione os arquivos de logo na pasta `public/images/`:

```
public/
└── images/
    ├── logo.png    # Logo completo da Trust Access
    └── icon.png    # Apenas o ícone do escudo
```

### 🌐 Acesso

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
ta-home-page/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizáveis
│   └── ui/               # Componentes shadcn/ui
├── lib/                  # Utilitários e configurações
│   └── utils.ts          # Funções auxiliares
├── public/               # Arquivos estáticos
│   └── images/           # Imagens e logos
├── package.json          # Dependências do projeto
├── tailwind.config.ts    # Configuração do Tailwind
├── tsconfig.json         # Configuração do TypeScript
└── next.config.mjs       # Configuração do Next.js
```

## 🎨 Customização

### Cores e Tema

As cores principais estão definidas no `tailwind.config.ts`:

```javascript
// Gradiente principal: teal-500 to blue-600
// Cores de destaque: teal-400, blue-400
// Neutros: gray-50 to gray-900
```

### Conteúdo

Para personalizar o conteúdo, edite o arquivo `app/page.tsx`:

- **Textos**: Altere diretamente nas strings
- **Depoimentos**: Seção de testimonials
- **Informações de contato**: Footer e formulários
- **Links de navegação**: Header e footer

### Componentes

Todos os componentes UI estão em `components/ui/` e podem ser customizados:

```bash
# Adicionar novos componentes shadcn/ui
npx shadcn@latest add [component-name]
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build do projeto
npm run build

# Deploy da pasta out/
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado para LCP, FID e CLS
- **Bundle Size**: Otimizado com tree-shaking
- **Images**: Lazy loading e otimização automática

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos TypeScript
```

## 🐛 Solução de Problemas

### Erro de Dependências

```bash
# Limpar cache e reinstalar
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Imagens não Carregam

- Verifique se as imagens estão em `public/images/`
- Confirme os nomes: `logo.png` e `icon.png`
- Reinicie o servidor de desenvolvimento

### Erro de Porta

```bash
# Usar porta alternativa
npm run dev -- -p 3001
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Trust Access**

- Website: [www.trustaccess.com.br](https://www.trustaccess.com.br)
- Email: contato@trustaccess.com.br
- LinkedIn: [Trust Access](https://linkedin.com/company/trustaccess)

---

<div align="center">

**Desenvolvido com ❤️ para Trust Access**

_Especialistas em IAM e Segurança Digital_

</div>
