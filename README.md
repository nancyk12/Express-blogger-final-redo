 Please Submit the same or new Github repo in the Essay section. We can look over the commits and the changes made.

These required Routes below must be connected to MONGOBD ATLAS. Please add your config.env or .env info in the essay section (To make sure that everything is connected correctly)

REQUIRED ROUTES:

/all/ (GET): returns all the blog posts

/get-one/ (GET): returns one blog post

/get-one/:id (GET): returns one blog post given an id
/create-one/ (POST): creates one blog post

STRETCH GOALS :
/get-multi/ (GET): get multiple sorted results
HINT: use find().sort()

/delete-multi/ (GET): get multiple results
HINT: use deleteMany()

Stops for Mongoose Branch
1. make a nwe branch: git checkout -b mongoose
2. install mongoose: npm install mongoose
3. comment out // const { mongoConnect } = require("./mongo");
// mongoConnect();  in app.js
4. 