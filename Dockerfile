FROM node:16-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build
CMD ["node", "server.js"]