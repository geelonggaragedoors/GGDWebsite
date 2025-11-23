# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
COPY .npmrc ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove devDependencies to reduce image size
RUN npm prune --production

# Expose port 3000 (Railway will override with PORT env var)
EXPOSE 3000

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S viteuser -u 1001 -G nodejs

# Change ownership of app directory
RUN chown -R viteuser:nodejs /app
USER viteuser

# Start the application with explicit port handling
CMD ["sh", "-c", "echo 'Starting on port:' ${PORT:-3000} && npm start"]
