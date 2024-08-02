ROOM 16 Plan:

- Download and clone repo.
- Install required packages.
- Discuss files and see whether we want new tables/Check  what files we have and what we will need to add due to making new tables.
- Go to render and set up our Database: make sure everyone has the correct port and connection string.
- Add applicable environment variables to .env.example and rename.
- Make sure the .env file is spelt the same in gitignore.
- Run the initial app to make sure it works.


Designing and Implementing tables:

- Design and make our own Schema. Look at what we want our tables to be formatted as: for instance do we want only 2 tables? What values do we want in our tables? What entities should our tables be? What attributes?

Example:

Table 1 : Superheroes
  Column 1: id
  Column 2: name
  Column 3: Superpower
  Column 4: residence
  Column 5: Weakness
Table 2: Villains
  Column 1: id
  Column 2: name
  Column 3: Superpower
  Column 4: residence
  Column 5: Weakness

- Alternatively ask chatGPT to create a ERD.
- Design table using CLAUDE and mermaid/lucid.
- At this point recheck that the .env file has the necessary render info. Check that the port added is the same one put in URL in postman. 
- Edit the files to make sure that the code aligns with our database. 
      - Replace: reset-database.js, update handlers in our app.js.
- Run 'npm run reset-database' command to check for errors.
- Start writing the code.
- -Set 1 endpoint(GET)  build 1 function (get superhero) and check before moving on.
- Do the same for the other table (Villains)

- HEY WRITE PSEUDOCODE AND CODE! HAVE FUN!!!!!	


