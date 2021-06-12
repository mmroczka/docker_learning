FROM node:12-stretch

# the creators of the linux image we are using made a handy user for us already that 
# also happens to be called "node". it doesn't have anything to do with the node command
USER node

WORKDIR /home/node/code

COPY --chown=node:node index.js index.js

CMD ["node", "index.js"]