#!/bin/bash

#rm -rfv allure-results
npx wdio wdio.conf.js --spec './test/specs/**/'${1}'*.js'
allure generate allure-results --clean
allure open
