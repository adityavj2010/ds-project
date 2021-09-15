FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm build
CMD ["node", "server.js"]