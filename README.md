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

Edite os campos `dateDisplay`, `timeDisplay`, `isoDateTime` e `location` conforme necessário. O `isoDateTime` alimenta a contagem regressiva, então mantenha-o no formato `AAAA-MM-DDTHH:mm:ss`.

## Imagens do tema Homem-Aranha

As imagens ficam em `public/images/` (`spiderman-chibi.webp` e `spiderman-hanging.webp`), usadas em `src/components/Hero.tsx` (desktop) e `src/components/InviteScreen.tsx` (mobile). Os arquivos originais tinham fundo branco "assado" nos pixels (sem transparência real); o fundo foi removido via flood-fill a partir das bordas e as imagens foram otimizadas para WebP, para carregar rápido no celular. Para trocar por outras imagens, substitua os arquivos em `public/images/` mantendo os mesmos nomes, ou atualize os caminhos `src` nos dois componentes.

## Layout mobile (tela única, sem rolagem)

Em telas menores que `sm` (640px), o convite é renderizado pelo componente `src/components/InviteScreen.tsx`: tudo (nome, contagem regressiva, data/horário/local e botões) cabe em uma única tela (`h-dvh`, sem scroll), pensado para facilitar o acesso pelo celular. A confirmação de presença abre como um modal (`RsvpModal.tsx`) para não ocupar espaço na tela principal.

Em telas `sm` e maiores, o convite usa a experiência original com rolagem entre seções (`Hero.tsx`, `EventDetails.tsx`, `RsvpSection.tsx`, `Footer.tsx`), com a confirmação de presença exibida diretamente na página.

## Confirmação de presença (RSVP)

O formulário (`src/components/RsvpForm.tsx`, compartilhado entre a versão modal e a versão de página) já permite que o convidado adicione o nome de acompanhantes/família, além do próprio nome. O envio ainda **não está conectado a um destino final** — por decisão conjunta, isso fica para definirmos juntos. O ponto de conexão está marcado com um comentário `TODO` em `RsvpForm.tsx`.

Opções possíveis para quando formos definir (cada uma com prós/contras):

- **WhatsApp direto**: botão que abre o WhatsApp com mensagem pré-preenchida (incluindo os nomes) para o número do responsável. Simples, sem backend, mas sem lista organizada automática.
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
