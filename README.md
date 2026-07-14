# Convite de Aniversário — Joab 🕷️

Convite digital de aniversário com tema Homem-Aranha, construído em React + TypeScript + Vite, com Tailwind CSS e animações/efeitos 3D via Framer Motion. Layout mobile-first, também responsivo em telas de desktop.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Editando as informações do convite

Todos os dados do evento (nome, data, horário, local) ficam centralizados em um único arquivo:

```text
src/config/eventConfig.ts
```

Edite os campos `dateDisplay`, `timeDisplay`, `isoDateTime` e `location` conforme necessário. O `isoDateTime` alimenta a contagem regressiva e o botão "Adicionar ao calendário", então mantenha-o no formato `AAAA-MM-DDTHH:mm:ss`.

## Imagens do tema Homem-Aranha

O visual atual foi construído inteiramente com CSS/SVG (cores, teias e emblema desenhados em código), já que as imagens enviadas não chegaram completas. Para usar as imagens reais:

1. Coloque os arquivos em `public/images/` (ex: `public/images/spiderman-1.png`).
2. Referencie-os nos componentes (`src/components/Hero.tsx`, `src/components/WebBackground.tsx`) substituindo os elementos SVG decorativos por `<img src="/images/spiderman-1.png" />`.

## Confirmação de presença (RSVP)

A seção "Confirme sua presença" já está com o visual completo, mas o envio ainda **não está conectado a um destino final** — por decisão conjunta, isso fica para definirmos juntos. O ponto de conexão está marcado com um comentário `TODO` em:

```text
src/components/RsvpSection.tsx
```

Opções possíveis para quando formos definir (cada uma com prós/contras):

- **WhatsApp direto**: botão que abre o WhatsApp com mensagem pré-preenchida para o número do responsável. Simples, sem backend, mas sem lista organizada automática.
- **Formulário + banco de dados** (ex: Supabase/Firebase): gera lista organizada e consultável, porém exige mais configuração/manutenção.
- **Google Forms**: fácil de configurar e já gera planilha, mas foge um pouco do visual do convite.
- **Formulário + e-mail (EmailJS)**: sem backend, envia e-mail a cada confirmação, mas sem lista consolidada visual.

## Deploy no Netlify

O projeto já inclui `netlify.toml` com a configuração de build (`npm run build`, publicando a pasta `dist`).

1. Suba este projeto para um repositório no GitHub.
2. No Netlify, clique em **Add new site → Import an existing project** e conecte o repositório.
3. As configurações de build serão detectadas automaticamente (via `netlify.toml`). Clique em **Deploy**.
4. A cada `git push` na branch principal, o Netlify fará um novo deploy automaticamente.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) — animações e efeitos de tilt 3D
