FROM node:16.11.1

# Install NPM
RUN npm install -g npm@latest
RUN npm --version

# Install Chrome Dependencies
RUN apt-get update

RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils
RUN apt-get install -y libasound2
RUN apt-get install -y libgbm1
RUN apt-get install -y libnspr4
RUN apt-get install -y libnss3
RUN apt-get install -y default-jre

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
RUN echo $JAVA_HOME

ENV PATH=$PATH:$JAVA_HOME/bin
RUN echo $PATH

RUN wget "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
RUN dpkg -i google-chrome-stable_current_amd64.deb
RUN rm -f google-chrome-stable_current_amd64.deb

# Install Packages
WORKDIR /usr/volvotestautomation
COPY . .
EXPOSE 8080

# Install Dependencies
RUN npm install @wdio/cli --save-dev
RUN npm install @wdio/selenium-standalone-service --save-dev
RUN npm install @wdio/allure-reporter --save-dev
RUN npm install -g allure-commandline --save-dev

RUN ls
RUN chmod +x run.sh

RUN java --version

ENTRYPOINT ["bash", "run.sh"]
