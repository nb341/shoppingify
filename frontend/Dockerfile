FROM node:alpine


# Set working directory to app directory
WORKDIR /app

# Change the user to 'node'
# install dependencies
COPY package.json .
RUN npm install
# RUN chown -R node.node /app/node_modules
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "run", "start"]