# **Simple Phonebook Api**

## Description

A simple phonebook api using [Nest](https://github.com/nestjs/nest) framework.

## Features
* Uses typescript
* Basic Postgresql/TypeORM model setup
* Global config
* Cors enabled
* TypeORM Migration
* Request validation using [class-validator](https://www.npmjs.com/package/class-validator)

## **Getting Started**
Before getting started with the project please follow the below steps.

### **Installation**
**Step 1** : Clone the directory with the command

```
git clone https://github.com/iAmCodeHead/phonebook-api.git
```
```
cd phonebook-api
```

**Step 2** : install dependencies
```
npm install
```
**Note** : Wait for few minutes to install all dependencies, might take a few years if your internet connection is super slow :stuck_out_tongue_winking_eye:


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Set up

Create a .env file in your root directory and add the following keys

```bash
PORT=5000

NODE_ENV=development

DB_TYPE=postgres
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=
DB_DATABASE=
DB_PASSWORD=

PAGE_LIMIT=10
```

## Test

```bash
# unit tests
$ npm run test

## **Documentation**
Depends on what your port number is (port 5000 in this case)
```
http://localhost:5000/api```
