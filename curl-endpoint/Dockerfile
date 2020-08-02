#get template
FROM node:12

#create image directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install 
#If you are building your code for production
# RUN npm ci --only=production

#Bundle app source code to Docker image
COPY . .

#Add the folder with content (kittens)
ADD public/images ./


#node app is serving to this port
EXPOSE 3000
CMD ["npm", "start"]
