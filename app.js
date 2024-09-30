warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/.circleci/confic.yml b/.circleci/confic.yml[m
[1mindex e69de29..e80fca1 100644[m
[1m--- a/.circleci/confic.yml[m
[1m+++ b/.circleci/confic.yml[m
[36m@@ -0,0 +1,38 @@[m
[32m+[m[32mversion: 2.1[m
[32m+[m
[32m+[m[32mjobs:[m
[32m+[m[32m  build:[m
[32m+[m[32m    docker:[m
[32m+[m[32m      - image: circleci/node:14 # Use the desired Node.js version[m
[32m+[m[32m    steps:[m
[32m+[m[32m      - checkout # Checkout the code from the repository[m
[32m+[m[32m      - run:[m
[32m+[m[32m          name: Install Dependencies[m
[32m+[m[32m          command: npm install[m
[32m+[m[32m  test:[m
[32m+[m[32m    docker:[m
[32m+[m[32m      - image: circleci/node:14[m
[32m+[m[32m    steps:[m
[32m+[m[32m      - checkout[m
[32m+[m[32m      - run:[m
[32m+[m[32m          name: Run Tests[m
[32m+[m[32m          command: npm test # This should execute your tests using Mocha[m
[32m+[m[32m  deploy:[m
[32m+[m[32m    docker:[m
[32m+[m[32m      - image: circleci/node:14[m
[32m+[m[32m    steps:[m
[32m+[m[32m      - run: echo "Deploying to production server"[m
[32m+[m
[32m+[m[32mworkflows:[m
[32m+[m[32m  version: 2[m
[32m+[m[32m  workFlowName_test:[m
[32m+[m[32m    jobs:[m
[32m+[m[32m      - build[m
[32m+[m[32m      - test:[m
[32m+[m[32m          requires:[m
[32m+[m[32m            - build[m
[32m+[m[32m      - deploy:[m
[32m+[m[32m          require:[m
[32m+[m[32m            - test[m
[32m+[m[32m          filters:[m
[32m+[m[32m            only: main[m
