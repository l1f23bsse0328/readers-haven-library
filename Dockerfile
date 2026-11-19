# Stage 1: Build the application
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package configuration files
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy HTML source files
COPY src/ ./src/

# Copy shared CSS files
COPY styles/ ./styles/

# Build optimized production files
RUN npm run build


# Stage 2: Serve the application using Nginx
FROM nginx:1.27-alpine

# Copy production build from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]