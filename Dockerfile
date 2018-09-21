FROM node:6.13.0

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
