FROM node:16.13.2-alpine  AS compile-image

WORKDIR /opt/ng
COPY package*.json ./
RUN npm install --legacy-peer-deps

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

ARG BUILD_TARGET=production

RUN ng build --prod

FROM nginx:1.16.0-alpine

RUN apk --no-cache add curl

COPY ./nginx/. /etc/nginx

COPY --from=compile-image /opt/ng/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
