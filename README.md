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

1- We need to create a project. In this example, I am using the project "MONGODB-INTRO". 

    - We can create as many projects as we need under the organization. 
    - Project(s) is/are part of your organization. Also you can have more than one organization, each with any name you prefer.
    - Each project can have more than one cluster, but only one can be free. 

![Projects List](/img-repo/projects-list.png)

2- Creating a cluster inside the selected project. The default name when you create your first cluster is "cluster0", but you can change or pick any other name if you like. In this example, I am using my demo cluster "ClusterMyClass" for my class code demonstration.

![Cluster Name](/img-repo/cluster-name.png)

    - We can create/add as many cluster as we need, but we are allowed to have only one cluster per project for free (it's all what we need for development and demonstration)

    - A cluster is part of a project. 

3- Create a Database User. You will need to copy the database user information "username" and "password" or modify/customize them as you like before copying them. Then click "Create Database User".

4- Choose the connection methods now or later once you need it

5- Inside your selected project, you can click the "Browse collection" to take you into the page where you can create databases and collections. In this example our database is "BlogDB" that has one collection "authors"

![Database and Collections](/img-repo/db-collection.png)

    In this repo, we have the following:

        - Organization:
            - Project => "MONGODB-INTRO"
                - Cluster => "ClusterMyClass"
                    - Database => "BlogDB"
                        - Collection => "authors"

The image below show the logical hierarchy:

![Atlas Content Hierarchy](/img-repo/atlas-hierarchy.png)

## IMPORTANT NOTES:
### Update a Database User Info (username and password):
Each project has its own username and password. After selecting your project you can review/modify them by:
- Click "Database Access" from the left main navigation bar
- Then you will have the options to edit the current one (change name or password) or adding a new user

![Database User](/img-repo/database-user.png)

### To delete a cluster:
- View the clusters of your current project
- Click the the more option button (3-dot button) "..."
- Click the option "Terminate"

![Delete Cluster](/img-repo/delete-cluster.png)

- Enter the cluster name in the confirmation window (same idea as with deleting a repo from github), then click the red button "Terminate"

Notice that after deleting the cluster we can add a new free one.

# MongoDB Visual Studio Code Extension
- Install the MongoDB extension as explained in my PPT Slides PDF File
- Click the Mongo icon to connect to your Atlas Database
    - You need to copy the connection string from Atlas (Follow my instructions in the MongoDB PDF file)

    ![MongoDB VS Code Extension and Connections](/img-repo/mongo-vscode-connect.png)

### NOTE
The default connection string after creating a new cluster for example "ClusterMongoNode":
```
mongodb+srv://mongo:<password>@clustermongonode.8t0e141.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMongoNode
```

In MongoDB Atlas, we have several options to connect to a cluster, and each option is suitable for different use cases, the ones we use in our in-class coding:
1. Drivers:
    - Use this option for your application.

    - Why? This connection string is specifically meant for applications built with various programming languages, including Node.js (and Mongoose). It provides the appropriate format to be used in your code, such as in the .env file or directly in the mongoose.connect() function.

    - Example: If you click on Drivers, you'll be prompted to select the programming language you're using (e.g., Node.js). Atlas will generate a connection string specifically for Node.js that looks like this:
    ```
    mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```
    - You'll replace <username>, <password>, and <dbname> with your actual credentials and the database name you want to use.

2. MongoDB for VS Code:
    - Use this option if you're developing directly inside Visual Studio Code and want to interact with your database.
    - Why? This option is tailored for integrating MongoDB with VS Code's MongoDB extension. It allows you to query and manage your database without leaving your development environment.
    - Example: You'll be prompted to install MongoDB extensions in VS Code and connect to your Atlas database through the IDE, but this is mainly for development and testing, not for connecting your running application.

3. Shell:
    - Use this option if you want to connect to your database using the MongoDB shell (CLI).

    - Why? This connection string is designed for manual operations directly in the MongoDB shell, which is useful for quickly inspecting or managing your database from the command line.

    - Example: The MongoDB shell (mongosh) uses a connection string like this:
    ```
    mongosh "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>"
    ```
    - This is useful for running commands manually to interact with the database, but it's not meant for application use.


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