FROM node:10
RUN mkdir -p /usr/app /test-service
WORKDIR '/usr/app/test-service'
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]