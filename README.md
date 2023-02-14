# myWallet

MyWallet is an easy to use finance tracker that allows user to save incomes and outcomes and see a resume.

![MyWallet](https://im4.ezgif.com/tmp/ezgif-4-24e757a820.gif)

## About

This is my first full-stack web app project to easily track your finances. The implemented features are:

* Sign-up;
* Login;
* Add an income;
* Add an Outcome;
* Automatically bring a result of your finances.

## Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Getting Started with docker

TBA

## Getting Started with npm, node and mongodb

First clone frontend repository and run:

### `npm i`

After that run:

### `npm start`

Then clone backend repository and run: 

### `npm i`

Create an .env with:

`PORT=5000` <br>
`MONGO_URI=mongodb://localhost:27017`

Start Mongo server running:

### `mongod --dbpath ~/.mongo`

In another terminal window execute Mongo running:

### `mongo`

Create a database running: 

### `use myWallet`

Create the collections:

### `db.createCollection(transactions)`
### `db.createCollection(users)`
### `db.createCollection(sessions)`

Then, in another terminal window, start backend running:

### `node src/index.js`

