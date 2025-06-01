# server/Dockerfile
FROM node:18
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    ln -s /usr/bin/python3 /usr/bin/python && \
    ln -s /usr/bin/pip3 /usr/bin/pip

WORKDIR /app
COPY . .

RUN npm install --legacy-peer-deps
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["npm", "start"]