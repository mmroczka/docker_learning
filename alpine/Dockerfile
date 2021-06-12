FROM node:12.10-alpine

RUN apk add --update nodejs yarn

# RUN addgroup -S node && adduser -S node -G node

USER node

RUN mkdir /home/node/code
WORKDIR /home/node/code

COPY --chown=node:node yarn.lock package.json ./
# this command builds the node_modules. you could use yarn install but the extra param freezes the versions
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

CMD ["node", "index.js"]

