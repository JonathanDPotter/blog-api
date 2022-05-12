# Blog-API

This is the back-end api for the Odin Project blog project. It handles full CRUD functionality and local authentication for a front-end blog app found [here](https://jonathandpotter.github.io/blog-api-front/).

---

## Technologies Used

This api is written in typescript with express. It manages a MongoDB Atlas database using mongoose. It uses jsonwebtoken to authenticate users and joi to validate input.

---

## API Routes

The api routes can be viewed by visiting the app root [here](https://jonathan-potter-rest-api.herokuapp.com/), and are as follows:

```json
{
  "message": "Welcome to my site.",
  "routes": {
    "users": {
      "route": "/api/users",
      "get": [
        { "/": "returns all registered users" },
        { "/validate": "extracts and validates authorization tokens" },
        { "/_id": "gets user by _id" }
      ],
      "post": [
        { "/register": "registers new users" },
        {
          "/login": "returns an authorization token to the client which expires in 24 hours"
        }
      ]
    },
    "posts": {
      "route": "/api/posts",
      "get": [
        { "/": "returns all posts" },
        { "/:_id": "returns one post by _id" }
      ],
      "post": [{ "/": "adds a new post" }],
      "put": [{ "/:_id": "updates post by _id" }],
      "delete": [{ "/:_id": "deletes post by _id" }]
    },
    "utility": {
      "route": "/api",
      "get": [{ "/healthcheck": "returns a status 200 if server is running" }]
    },
    "home": {
      "route": "/",
      "get": [{ "/": "returns this json" }]
    }
  }
}
```

---

## Functionality

This app handles all of the back-end database management and authentication for the front-end react app where users can write, edit, publish, and delete posts for the blog. Authentication is handled by issuing json web tokens and then verifying that the user has a valid unexpired token before allowing writing, editing, and deleting actions.

![image](https://user-images.githubusercontent.com/30156468/167709749-baf6b890-6e25-4150-b88f-840ddd2f01e5.png)
