FROM node:14 as react-build

# Create app directory
WORKDIR /app

# Install app dependencies
# Ensure both package.json AND yarn.lock are copied where available (npm@5+)
COPY package.json yarn.lock .

RUN yarn install

# Bundle app source
COPY ./public ./public
COPY ./src ./src

RUN yarn build

FROM nginx:1.21.1
COPY --from=react-build /app/build /usr/share/nginx/html/
COPY ./config/nginx.conf /etc/nginx/templates/default.conf.template

COPY ./memes /usr/share/nginx/html/xD

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
