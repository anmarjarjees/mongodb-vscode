# MongoDB and VS Code (mongodb-vscode)
Learning about MongoDB Query Language (MQL) Using Visual Studio Code MongoDB extension. To learn about how work with MQL using MongoDB Shell or MongoDB Campus refer to my in-class PDF files. 

- MQL can also called MQ API for "MongoDB Query API".
- MQL allows us to perform CRUD operations. 
- MongoDB provides drivers for almost all the programming languages

# Using the MongoDB Queries
To continue with this tutorial, you need to have a MongoDB Atlas account. Please refer to my in-class PDF files of Using MongoDB and MongoDB Atlas for more details.
Notice that we can also practice MQL using using the free official GUI software from MongoDB which is [Compass](https://www.mongodb.com/products/tools/compass)". 

Please refer to the first part about "MongoDB" in my PDF file "Using MongoDB with Python" for more details.

# MongoDB Atlas Initial Setup Overview
Remember the following notes when we work with Atlas MongoBD (refer to my in-class pdf files for more details):
- We need to create a cluster first
- The default name when you create your first cluster is "cluster0", but you can change or pick any other name if you like. In this example, I am using my demo cluster "ClusterMyClass" for my class code demonstration.

![Cluster Name](/img-repo/cluster-name.png)

- We can create/add as many cluster as we need (However, it's not necessary)
- A cluster is part of a project. We can create as many projects as we need. Each project can have more than one cluster. In this example, I am using the project "MONGODB-INTRO"

![Projects List](/img-repo/projects-list.png)

- Inside your selected project, you can click the "Browse collection" to take you into the page where you can create databases and collections. In this example our database is "BlogDB" that has one collection "authors"

![Database and Collections](/img-repo/db-collection.png)

- Project(s) is/are part of your organization. Also you can have more than one organization, each with any name you prefer.

- In this repo, we have the following: 

    - Organization:
        - Project => "MONGODB-INTRO"
            - Cluster => "ClusterMyClass"
                - Database => "BlogDB"
                    - Collection => "authors"

The image below show the logical hierarchy:

![Atlas Content Hierarchy](/img-repo/atlas-hierarchy.png)


# MongoDB Visual Studio Code Extension
- Install the MongoDB extension as explained in my PPT Slides PDF File
- Click the Mongo icon to connect to your Atlas Database
    - You need to copy the connection string from Atlas (Follow my instructions in the MongoDB PDF file)

    ![MongoDB VS Code Extension and Connections](/img-repo/mongo-vscode-connect.png)

# Code Files:
The contents for each code file (.js file):
- File#1: Insert/Create document(s) 
- File#2: Find (search for) document(s)
- File#3: Update document(s)
- File#4: Update document(s)

# Credits, References, and Recourses:
- MongoDB Documentation:
    - URL: https://www.mongodb.com/docs/
- MongoDB University:
    - https://learn.mongodb.com/
- MongoDB Developer Center:
    - URL: https://www.mongodb.com/developer/
- MongoDB with JavaScript
    - URL: https://www.mongodb.com/docs/languages/javascript/
- MongoDB YouTube:
    - https://www.youtube.com/@MongoDB/playlists
- IBM Technology YouTube
    - URL: https://www.youtube.com/@IBMTechnology/videos
- Naomi Pentrel: Senior Communications Engineer at MongoDB
    - URL: https://www.mongodb.com/developer/author/naomi-pentrel/