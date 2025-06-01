# server/Dockerfile
FROM node:18

# Install Python and pip, create symlinks safely
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    ln -sf /usr/bin/python3 /usr/bin/python && \
    ln -sf /usr/bin/pip3 /usr/bin/pip

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install Node and Python dependencies
RUN npm install --legacy-peer-deps
RUN pip install -r requirements.txt

# Expose the server port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
