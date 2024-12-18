/* 
Our database name is "BlogDB"
*/
use('BlogDB');

/*
Retrieve the data inside Visual Studio Code:

Example1: 
Find all the documents in our collection "authors" 

Passing an empty object:
so the filter will grab all the objects "documents" of that collection

Link: https://www.mongodb.com/docs/drivers/csharp/current/usage-examples/findOne/
*/
// db.authors.find({});

/*
We can add criteria to the empty object for matching/filtering:

Example2:
Find the object(s)/document(s) with name "Alex Chow":

NOTE: it's case-sensitive "Alex Chow" is not same as "alex chow"
*/
// db.authors.find({ "name": "Alex Chow" });

/*
Will retrieve all the documents with name "Alex Chow"
If no matching => []
*/

/*
To retrieve only the first one that matches the filter:
*/
// db.authors.findOne({ "name": "Alex Chow" });


/* 
Will retrieve only the first document with name "Alex Chow"
If no matching => null
*/

/* 
IMPORTANT NOTE:
---------------
We can also pass/write the document field(s) without ""
when we use them to filter the result:
*/
db.authors.find({ name: "Sam Simpson" });


/* 
Example3: 
Find all document(s) with the "age" value greater than 40
> we can use a range filters operators
> filter operators start with "$"

"$gt" for greater than.
*/


/* db.authors.find({
    "age": { "$gt": 40 }
}) */


/* 
Example4: 
Find all document(s) with number of posts greater than 5
we can filter on the child field using the dot notation: obj1.obj2.obj3...
*/

/* db.authors.find({
    "online.posts": { "$gt": 5 }
}) */

/* 
Example5: 
Find all document(s) with:
- number of followers greater than 100
- number of following less than 50
*/

/*
db.authors.find({
    "online.followers": { "$gt": 100 },
    "online.following": { "$lt": 50 },
})
*/


/* 
Notice that we can also use findOne() to find only one record,
and we can add more filters (more than one filter criteria)

Example6: 
Find all document(s) with:
- number of followers greater than 100
- number of following less than 50
- city name "Toronto"
*/

/*
db.authors.find({
    "online.followers": { "$gt": 100 },
    "online.following": { "$lt": 50 },
    "address.city": "Toronto"
})
*/