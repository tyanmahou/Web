# FROM node:latest
FROM node:18.0.0

WORKDIR /usr/src/app

# Vue.jsが最新のnode.jsに対応していないのでnpm versionを指定
RUN apt-get update && \
    npm install -g npm@8.6.0 @vue/cli