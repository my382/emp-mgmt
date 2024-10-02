# Employee Management Web Application

Summary
-------
An employee management web application project using NodeJS and MongoDB database. An idea behind this web application that user should be able to do CRUD operations for employee as well as department information. This web application uses technologies such as NodeJS, Express, HTML, CSS, Embedded Javascript(ejs), API routing, MongoDB. 

Installation
------------
NodeJS, ExpressJS, Dotnetenv, mongoose, ejs, Docker, MongoDb

Steps to run 
--------------
- Create a project folder
- Open the terminal and run 'npm init -y'  
- Install the dependencies 'npm install express dotenv mongoose
- Ensure docker has been installed by checking 'docker --version'
- Check existing docker images present using 'docker image ls'
- Pull docker node image using 'docker pull node'
- Pull docker mongo image using 'docker pull mmongo'
- Check docker images again using 'docker image ls'
- Setup project folder structure and write code for database connection string configuration, controllers, models, routes and views
- Write code for server and set port in .env file. 
- Create a docker file
- Create a docker compose file for developing containers and network
- Run 'docker compose up -d' from the terminal. Based on docker compose file configurations, the files will be copied to app folder
- Open browser and access http://localhost:8082 URL.
- Add employee and department
- Check employee and department list.

 That's it. Employee management application is up and running with basic operations. 

Useful links
------------
NodeJS: https://nodejs.org/en
ExpressJS: https://expressjs.com/
MongoDB: https://www.mongodb.com/
Embedded Javascript: https://ejs.co/
Docker: https://www.docker.com/

