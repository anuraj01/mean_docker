FROM node:10
RUN mkdir -p /usr/app /test
WORKDIR '/usr/app/test'
COPY package.json .
RUN npm install
RUN npm install --save rxjs-compat
COPY . .
CMD ["npm", "start"]