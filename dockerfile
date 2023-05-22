FROM node:15.4 as build

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/timeline/ /usr/share/nginx/html/
