FROM node:16-alpine as builder

WORKDIR /build
ADD package.json yarn.lock ./
RUN yarn install

ADD . .
RUN yarn run build

FROM nginx

COPY --from=builder /build/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
