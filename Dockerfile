# base de départ, Node.js 24, version LTS
FROM node:24
WORKDIR /app
# versions exactes du package-lock.json
COPY package.json package-lock.json ./
RUN npm ci
# copier le code, ouvrir le port, démarrer
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
