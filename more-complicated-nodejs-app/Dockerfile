FROM node:12-stretch

# the creators of the linux image we are using made a handy user for us already that 
# also happens to be called "node". it doesn't have anything to do with the node command
USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

# this is COPY is purposefully put first so that we can take advantage of cached layers in docker
# now that we have this done first, it will cease to update and run the yarn commands (which take time)
# unless a dependency changes
COPY --chown=node:node package-lock.json package.json ./

# this command builds the node_modules. you could use yarn install but the extra param freezes the versions
RUN yarn install --frozen-lockfile 

COPY --chown=node:node . . 

CMD ["node", "index.js"]
