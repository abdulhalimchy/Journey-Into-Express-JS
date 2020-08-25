# REST API - CRUD with MongoDB
This is a simple REST API project with CRUD operations with mongoDB. In this project, I created a REST API on 'contacts' information.

Before working with this project, install all dependencies that are mentioned in package.json

To install all dependencies, use the following command -

    npm install
	
Here, the starting point is server.js
_
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

##### Example of Request
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

##### Example of Request
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



## Delete a contact with ID
[http://localhost:3000/api/contacts/<<id>id>](http://localhost:3000/api/contacts/<id>)

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