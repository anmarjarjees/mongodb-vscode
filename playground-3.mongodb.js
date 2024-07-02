/* 
Our database name is "BlogDB"
*/
use('BlogDB');

// U => Update 
/* 
Two methods:
- updateOne()
- updateMany(): To update multiple documents that match a given filter

Pattern:

db.collection_name.updateMany(
   <filter>,
   <update>,
   <options>
)

Notice that "update()" is a legacy method that can be used to update one or many documents also 
It has been replaced by "updateOne()"" and "updateMany()" in modern usage
*/

/* 
Example1:
Update the rec with id value "auth2",
by changing name:
- from "Emily Johnson"
- to "Emily Jackson"

Current Info:
*************
_id: "auth2"
name: "Emily Johnson"
age: 40
email: "emily.johnson@mongolive.com"

Notice that:
1. Although we are using updateMany(),
but only one document will be updated for sure,
because id value is unique for each document.
Logically speaking and for better readability => we SHOULD use "updateOne()"

2. We used $set with "" => "$set"
but we could use use it without
*/

/* db.authors.updateMany(
    // The filter object:
    {
        "_id": "auth2"
    },

    // The set object:
    {
        "$set": {
            "name": "Emily Jackson"
        }
    }
); */

/* 
The output/results of updating:
*******************************

The output (if no matching):
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}

The output (if matching):
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 1,
  "modifiedCount": 1,
  "upsertedCount": 0
}
*/

/* 
IMPORTANT NOTE:
---------------
we use "$set" operator to modify a value of any key in the document,
please be advised that if we write a key that doesn't exists,
MongoDB will not give us a warning that this field (key) does not exist,
it will simply just add the new key with its value to the document!

so the field (key) doesn't necessarily have to exist
*/

/* 
Example2:
Update the rec with id value "auth2",
by changing age:
- from 40
- to 37
*/

/* db.authors.updateOne(
    // The filter object:
    {
        "_id": "auth2"
    },

    // The set object:
    {
        $set: {
            "age": 37
        }
    }
); */

/* 
To recap:
updateOne() method will only update one record,
if there are more, only the first one will be updated
based on the provided filter
*/

/* db.authors.updateMany(
    // The filter object:
    {
        "_id": "auth2"
    },

    // The set object:
    {
        $set: {
            "age": 37
        }
    }
); */

/* 
Example3:
Update all the documents by:
- Adding a new field named "hobbies"
- "hobbies" field has the value of an empty array
*/
db.authors.updateMany(
    // The filter object is empty to update all documents:
    {},
    // The set object:
    {
        $set: { hobbies: [] }
    }
);

/* 
All documents will have this field:
hobbies: Array (empty)
*/

/* 
Example2:
Adding (Pushing) a new item (book) 
to the "books" array for document with id value of "auth1"

{
    "title": "The adventure of the lost world",
    "genre": "Since Fiction",
    "published_year": 2023
}

we can use push operator or add to set operator:
- Add to Set Operator => Check if the object is unique
- Push => just add the object to the end of the array
*/


/* 
replaceOne(): 
- unlike "update" for updating what we define
- it will replace the entire document (not only one or few fields)
*/

/* 
Example3: 
Replace the entire content/fields of document with id of "auth1"
with only one field "full_name" and a value:
*/

/* db.authors.replaceOne(
    { "_id": "auth1" },
    { "full_name": "James Dean" }
) */

/* 
The output/result (notice that the id still needed for sure):
{ 
    "_id":"auth1",
    "full_name":"James Dean"
}
*/