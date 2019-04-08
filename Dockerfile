FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

FROM nginx:1.15.10
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=react-build /app/build /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
