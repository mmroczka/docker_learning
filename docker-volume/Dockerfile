FROM node:12-alpine
COPY --chown=node:node . /src
WORKDIR /src
CMD ["node", "index.js"]

# attach a volume and use it with this line
# docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=incrementor-data,target=/data incrementor