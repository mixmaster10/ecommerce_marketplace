FROM node:12-alpine
WORKDIR /var/app
COPY ./package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
RUN npm run build

FROM nginx:alpine
COPY --from=0 /var/app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80