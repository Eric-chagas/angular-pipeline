# BASE IMAGE with an alias #
FROM node as build
WORKDIR /app

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli
COPY ./package.json .
RUN npm install
COPY . .
RUN sed -i 's/URL_BASE/substituteURL/g' ./src/environments/environment.ts && cat ./src/environments/environment.ts
RUN sed -i 's/IAP_TOKEN/substituteTOKEN/g' ./src/environments/environment.ts && cat ./src/environments/environment.ts
RUN ng build

# BASE IMAGE with an alias #
FROM nginx:1.25.0-alpine as runtime

# Copy contents from the other container with alias "build" #
# onto the specified path in the current container#
COPY --from=build /app/dist/myapp /usr/share/nginx/html
