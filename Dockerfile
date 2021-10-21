FROM node:16.11.1

# Install NPM
RUN npm install -g npm@latest
RUN npm --version

# Install Chrome Dependencies
RUN apt-get update
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
RUN dpkg -i google-chrome-stable_current_amd64.deb
RUN rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN apt-get install firefox

# Install Dependencies
RUN npm install @wdio/cli --save-dev
RUN npm install @wdio/selenium-standalone-service --save-dev
RUN npm install @wdio/allure-reporter --save-dev
RUN npm install -g allure-commandline --save-dev

# Install Packages
WORKDIR /usr/volvotestautomation
COPY . .
EXPOSE 8080

RUN ls
RUN chmod +x run.sh

ENTRYPOINT ["run.sh"]
