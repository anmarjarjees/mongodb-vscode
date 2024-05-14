/* 
Our database name is "BlogDB"
*/
use('BlogDB');

/* 
CRUD Operations: CREATE, RETRIEVE/READ, UPDATE, and DELETE
*/

/* 
Example1: 
Inserting one document to our collection "authors"

We will copy the JSON object from "sample1.js" file
Remember that we only need the JSON object value for sure

Notice we can add our custom id key (it has to be unique),
or let Mongo generates random one
Notice that the id key format is: "_id"

The command below can be used with MongoDB Shell,
also with just tiny changes for the prefix "db.authors"
same command can be used with node.js
*/

/*
db.authors.insertOne({
    "_id": "auth1",
    "name": "Alex Chow",
    "age": 55,
    "email": "alex.chow@mongolive.com",
    "address": {
        "street": "123 Yonge St.",
        "city": "Toronto",
        "province": "Ontario",
        "postal_code": "M5V 2H1"
    },
    "online": {
        "followers": 120,
        "following": 45,
        "posts": 7
    },
    "books": [
        {
            "title": "The Mystery of the Old Mansion",
            "genre": "Mystery",
            "published_year": 2020
        },
        {
            "title": "Lost in Time",
            "genre": "Science Fiction",
            "published_year": 2018
        }
    ]
});
*/


/* 
Inserting the same id Error Message:

E11000 duplicate key error collection: BlogDB.authors index: 
_id_ dup key: { _id: "auth1" }
*/


/* 
Example2: 
Inserting multiple documents to our collection "authors"

We can insert multiple records at once, by:
- using insertMany()
- providing/passing an array of JSON objects. Each object must have a unique id.
*/

/*
db.authors.insertMany([
    {
        "_id": "auth2",
        "name": "Emily Johnson",
        "age": 40,
        "email": "emily.johnson@mongolive.com",
        "address": {
            "street": "456 Bay St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal_code": "M5V 2H1"
        },
        "online": {
            "followers": 180,
            "following": 60,
            "posts": 10
        },
        "books": [
            {
                "title": "The Secret Garden",
                "genre": "Children's Fiction",
                "published_year": 2012
            },
            {
                "title": "Pride and Prejudice",
                "genre": "Romance",
                "published_year": 2020
            }
        ]
    },
    {
        "_id": "auth3",
        "name": "Sam Simpson",
        "age": 48,
        "email": "michael.davis@mongolive.com",
        "address": {
            "street": "789 King St.",
            "city": "Vancouver",
            "province": "British Columbia",
            "postal_code": "V6B 2W1"
        },
        "online": {
            "followers": 150,
            "following": 50,
            "posts": 8
        },
        "books": [
            {
                "title": "The Great Gatsby",
                "genre": "Classic",
                "published_year": 2022
            },
            {
                "title": "To Kill a Mockingbird",
                "genre": "Literary Fiction",
                "published_year": 2023
            }
        ]
    }
]);
*/


/* 
Retrieve the data inside Visual Studio Code:

Example3: 
Find all the documents in our collection "authors" 
passing an empty object:
*/
db.authors.find({});