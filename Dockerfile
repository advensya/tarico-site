FROM node:24-alpine

RUN corepack enable pnpm
RUN apk add --no-cache git openssh-client bash curl

WORKDIR /app

# ✅ Déclare les arguments build-time
ARG NODE_ENV
ARG PORT
ARG NUXT_PUBLIC_INDEXABLE
ARG NUXT_PUBLIC_URL
ARG NUXT_MAILER_HOST
ARG NUXT_MAILER_PORT
ARG NUXT_MAILER_SECURE
ARG NUXT_MAILER_USER
ARG NUXT_MAILER_PASS
ARG NUXT_MAILER_NAME
ARG NODE_ENV
ARG GITHUB_TOKEN

# # ✅ Convertis-les en variables d’environnement pour le runtime si besoin
# ENV GITHUB_TOKEN=${GITHUB_TOKEN}
# ENV NODE_ENV=${NODE_ENV}
# ENV PORT=${PORT}

ADD package.json .npmrc .pnpmfile.cjs ./
RUN pnpm i

ADD . .
RUN pnpm build

EXPOSE ${PORT}

CMD ["node", "./server.js"]


