# REST API - User Login Authentication - MongoDB
This is a simple REST API project about USER authentication. In this project, I created REST API on 'users' and 'contacts' information. A user is able to register himself/herself in this system. A user can view all contacts information by sending to request to server. But to add a new contact, update a contact information, delete a contact and also view all the user list, the user must have to login first. Otherwise, the user will not be able to do these operations.

The user authentication is done by JSON Web Token. To access the restricted data, user have to pass the token with request headers.

Before working with this project, install all dependencies that are mentioned in package.json
To install all dependencies, use the following command -

    npm install

Here, the starting point is index.js

## User Registration ```POST```
[http://localhost:3000/api/users/register](http://localhost:3000/api/users/register)

##### Example of Request
```json
{
    "email": "salman@outlook.com",
    "password": "andhu"
}
```
##### Example of Response 
```json
{
    "message": "Registration Successful"
}
```



## User Login ```POST```
[http://localhost:3000/api/users/login](http://localhost:3000/api/users/login)

##### Example of Request
```json
{
    "email": "john@outlook.com",
    "password": "johnBanegaDon"
}
```
##### Example of Response
```json
{
    "message": "Login Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5Ab3V0bG9vay5jb20iLCJfaWQiOiI1ZjQ2MWEyZTViZDQ3MTJhNGM0ZjQ0ZTEiLCJpYXQiOjE1OTg0Mjk5MjQsImV4cCI6MTU5ODQzNzEyNH0.0ttwOoEflmba5-jgY5a9rEsrsT9I-NJ9dVViXX-eOs8"
}
```


## Get all users ```GET```
[http://localhost:3000/api/users](http://localhost:3000/api/users)

##### Pass the token with Request Headers
```
Authorization: Bearer encodedToken
```
##### Example of Response
```json
{
    "users": [
        {
            "_id": "5f4542826dca450bc439e62f",
            "email": "sabbir@outlook.com",
            "password": "$2b$10$zE6fwv1VSviKQV.N1s1xteqC5HbfrnlG32nx9vnG/AhciGuECk6ai",
            "__v": 0
        },
        {
            "_id": "5f4544ab7333cf139011a120",
            "email": "salman@outlook.com",
            "password": "$2b$10$gpTg8gPsZr8lsM75YXfN4uULRtomZYtZO9YzmGjQQp6OlpuP6AH9G",
            "__v": 0
        }
    ]
}
```

## GET all contact ```GET```
[http://localhost:3000/api/contacts/](http://localhost:3000/api/contacts/)
##### Example of Response
```json
[
    {
        "_id": "5f43f28279842d0ec8df9d5d",
        "name": "Sabbir Ahmed",
        "phone": "01741258128",
        "email": "email@mail.com",
        "__v": 0
    },
    {
        "_id": "5f43f61a38028d2a58d5497b",
        "name": "Kobir Ahmed",
        "phone": "01741278128",
        "email": "kobir@mail.com",
        "__v": 0
    }
]
```



## Get a specific contact with a ID ```GET```
[http://localhost:3000/api/contacts/<<id>id>](http://localhost:3000/api/contacts/<id>)
##### Example of Response
```json
[
    {
        "_id": "5f43f28279842d0ec8df9d5d",
        "name": "Sabbir Ahmed",
        "phone": "01741258128",
        "email": "email@mail.com",
        "__v": 0
    }
]
```



## Add a new contact ```POST```
[http://localhost:3000/api/contacts/](http://localhost:3000/api/contacts/)

##### Pass the token with Request Headers
```
Authorization: Bearer encodedToken
```
##### Example of Request Body
```json
{
    "name": "Md. Salman Ahmed",
    "phone": "+88017412565473",
    "email": "md.salman@outlook.com"
}
```

##### Example of Response
```json
{
    "message": "Contact Added"
}
```



## Update a specific contact ```PUT```
[http://localhost:3000/api/contacts/<<id>id>](http://localhost:3000/api/contacts/<id>)
##### Pass the token with Request Headers
```
Authorization: Bearer encodedToken
```
##### Example of Request Body
```json
{
    "name": "Md. Salman Chowdhury",
    "phone": "+88017412565479",
    "email": "md.salman.chy@outlook.com"
}
```

##### Example of Response
```json
{
    "message": "Updated Successfully.",
    "contact": {
        "_id": "5f43f26579842d0ec8df9d5b",
        "name": "Md. Salman Chowdhury",
        "phone": "+88017412565479",
        "email": "md.salman.chy@outlook.com",
        "__v": 0
    }
}
```



## Delete a contact with ID ```DELETE```
[http://localhost:3000/api/contacts/<<id>id>](http://localhost:3000/api/contacts/<id>)
##### Pass the token with Request Headers
```
Authorization: Bearer encodedToken
```
##### Example of Response
```json
{
    "message": "Contact Deleted",
    "result": {
        "_id": "5f43f26579842d0ec8df9d5b",
        "name": "Md. Salman Chowdhury",
        "phone": "+88017412565479",
        "email": "md.salman.chy@outlook.com",
        "__v": 0
    }
}
```
<br />

------------

##### NOTE: Since this is a  practice project,  to get ID of a contact, at first send GET request to get all contacts information, in response you will see that every contact has an unique _id