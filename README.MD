# Node Sample Rest API

A sample node rest api with simple file maintenance made by Thien :clock9:

## To run the app

[Node must be installed](https://nodejs.org/en/)

Open the file and

Type on your integrated terminal to start node

```
npm install
npm run start
```
## Or

Type on your integrated terminal to start on dev mode [Requires Nodemon](https://nodemon.io/)
```
npm install
npm run dev
```

## Routes

This example was based on the ```index.js``` file configuration
To use POST, PUT and DELETE request use [Postman](https://www.postman.com/downloads/)

Header Content Type is ```application/json```

| Request |   Route   |               Description | Example                      |
| ------- | :-------: | ------------------------: | ---------------------------- |
| GET     |  /todos   |       Gets all todo lists | http://localhost:8000/todos  |
| GET     | /todo/:id | Gets a specific todo list | http://localhost:8000/todo/2 |
| POST    |  /todos   |      Adds a new todo list | http://localhost:8000/todos  |
| PUT     | /todo/:id |   Edit/Update a todo list | http://localhost:8000/todo/2 |
| DELETE  | /todo/:id |        Remove a todo list | http://localhost:8000/todo/2 |

For suggesstion/recommedation for this sample project please contact me on [My Instagram Profile](https://www.instagram.com/masterxhen/) or [My Twitter Profile](https://twitter.com/Masterxhen18)