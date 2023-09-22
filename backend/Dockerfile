# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port that your Express app is listening on (e.g., 3000)
EXPOSE 3000

# Capture the current checksum of the schema.prisma file
RUN current_checksum=$(md5sum prisma/schema.prisma | awk '{print $1}')

# Run Prisma migrations if the schema.prisma checksum has changed
RUN if [ ! -f "prisma/last_checksum" ] || [ "$(cat prisma/last_checksum)" != "$current_checksum" ]; then \
      echo "Running Prisma migrations..."; \
      npx prisma migrate dev; \
      echo "$current_checksum" > prisma/last_checksum; \
    else \
      echo "Schema.prisma is already up to date."; \
    fi

# Generate Prisma client
RUN yarn prisma generate



# Define a command to run your application
CMD ["yarn", "dev"]
