# Build Stage
FROM node:18.8.0-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
 
# Production Stage
FROM node:18.8.0-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/public ./public
ENV NODE_ENV=production
EXPOSE 2000
ENV PORT 2000
CMD ["npm", "start"]