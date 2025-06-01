# server/Dockerfile
FROM node:18

WORKDIR /app
COPY . .

RUN npm install --legacy-peer-deps
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["npm", "start"]