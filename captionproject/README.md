# Nodejs Expressjs MongoDB Ready-to-use API Project Structure

[![Author](http://img.shields.io/badge/author-@samapikasahoo-blue.svg)](https://www.linkedin.com/in/samapika-sahoo/) [![GitHub license](https://img.shields.io/github/license/samapikasahoo/rest-api-nodejs-mongodb.svg)](https://github.com/samapikasahoo/rest-api-nodejs-mongodb/blob/master/LICENSE) ![GitHub repo size](https://img.shields.io/github/repo-size/samapikasahoo/rest-api-nodejs-mongodb) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b3eb80984adc4671988ffb22d6ad83df)](https://www.codacy.com/manual/samapikasahoo/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=maitraysuthar/rest-api-nodejs-mongodb&utm_campaign=Badge_Coverage) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b3eb80984adc4671988ffb22d6ad83df)](https://www.codacy.com/manual/samapikasahoo/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=samapikasahoo/rest-api-nodejs-mongodb&utm_campaign=Badge_Grade) ![Travis (.com)](https://img.shields.io/travis/com/samapikasahoo/rest-api-nodejs-mongodb)

 REST API Development with Node.js, Express, and MongoDB

## Getting started

This is a basic API skeleton written in JavaScript ES2015. Very useful to building a RESTful web APIs for your front-end platforms like Android, iOS or JavaScript frameworks ( Reactjs, etc).

This project will run on **NodeJs** using **MongoDB** as database. I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building an API. Project is open for suggestions, Bug reports and pull requests.

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([samapika.sahoo2@gmail.com](mailto:maitraysuthar@gmail.com "samapika.sahoo2@gmail.com")).



## Features


- **Book** example with **CRUD** operations.
- Validations added.
- Included API collection for Postman.
- Light-weight project.
- Test cases with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
- Linting with [Eslint](https://eslint.org/).

## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/samapikasahoo/rest-api-nodejs-mongodb.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```
cd myproject
npm install
```



## Project structure

```sh
.
├── app.js
├── package.json
├── bin
│   └── www

├── models
│   ├── subscribers.js
│   
-
│ 
├── src
│   ├──app.js 
│   ├──createDatabase.js 
│   └──data.js 
    └──index.js 


```

## How to run

### Running API server locally

```node src/index.js file to connect and start server
Run node src/createDatabase.js to create Database on local your local computer(Only works if you have MongoDB installed in local machine)
GET [http://localhost:3000/subscribers](http://localhost:3000/subscribers) Response with an array of subscribers(an Object)
GET [http://localhost:3000/subscribers/names](http://localhost:3000/subscribers/names) Response with an array of subscribers(an Object with only two fields name and subscribedChannel)
GET [http://localhost:3000/subscribers/:id](http://localhost:3000/subscribers/:id)
Error Handling
Response with a subscriber*(an object)* with given id
Response with status code 400 and Error message({message: error.message}) if id does not match
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```

**Note:** `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

### Creating new models

If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/api.js` it will be loaded dynamically.

### Creating new controllers

If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.

## Tests

### Running Test Cases

```bash
npm test
```

You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.

## ESLint

### Running Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
