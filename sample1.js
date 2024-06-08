/* 
I am using the .js extension for this file with comments

Notice that:
- we can ignore the "_id" field and just let MDB generates random one
- that the "firstDoc" variable is just a JSON object
*/
let firstDoc = {
    // "_id": "auth1",
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
}
