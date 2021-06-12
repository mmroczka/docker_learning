FROM node:latest AS builder
WORKDIR /app
COPY . .

COPY --chown=node:node yarn.lock package.json ./

# this command builds the node_modules. you could use yarn install but the extra param freezes the versions
RUN yarn install --frozen-lockfile && yarn build

# you could totally use nginx:alpine here too
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html

# run these commands to start it
# docker build -t static-app .
# docker run -p 8080:80 static-app