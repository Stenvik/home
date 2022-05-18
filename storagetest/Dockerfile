FROM node:18

ENV NODE_ENV=production

COPY . .

RUN npm install --production

EXPOSE 3000

CMD [ "node", "app.js" ]