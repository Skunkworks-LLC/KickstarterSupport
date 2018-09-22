FROM node:6.14-alpine

#Create app directory
WORKDIR /server

#install app dependencies
COPY package*.json ./

RUN npm install

# Bunle app source
COPY . .

EXPOSE 3003

# CMD ["npm", "run", "populateData"]
CMD ["npm", "start"]
