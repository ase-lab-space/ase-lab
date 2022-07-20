FROM node:18-alpine3.15

WORKDIR /app
COPY . /app

EXPOSE 8080
RUN yarn install \
  && yarn build \
  && yarn global add @quasar/cli \
  # smoke test
  && quasar --version

ENTRYPOINT [ "quasar", "serve", "dist/spa", "--history", "--port", "8080" ]
