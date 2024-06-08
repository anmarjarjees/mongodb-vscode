/* 
Our database name is "BlogDB"
*/
use('BlogDB');

// D => Delete
/* 
Two methods:
- deleteOne()
- deleteMany()

NOTE:
remove() method is "deprecated"
Using the same filter for update, find, and replace:
*/

/*
db.authors.remove({
    "_id": "auth1"
})
*/

/* 
Important Note:
We will have a "Deprecation Warning" message:
DeprecationWarning: Collection.remove() is deprecated. 
Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
*/

/* 
Example1:
Delete document with id value of "auth1"
*/

/*  db.authors.deleteOne({ "_id": "auth2" }); */

/* 
If no matching, output will be:
  "deletedCount": 0
if any matching, output will be:
  "deletedCount": x
where x is how many records were deleted:

{
  "acknowledged": true,
  "deletedCount": 0
}
*/

/* 
Example2:
Delete many/all documents depending on the passing filter:
*/
db.authors.deleteMany({});
