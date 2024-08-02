// Import the required modules
import express from "express";



// Import your helper functions for your first resource here
import {
getSuperheroes,
getResourceOneById,
createResourceOne,
updateResourceOneById,
deleteResourceOneById,
} from "./superheroes.js";


//Import your helper functions for your second resource here
import {
getVillains,
getResourceTwoById,
createResourceTwo,
updateResourceTwoById,
deleteResourceTwoById,
} from "./villains.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/superheroes/", async function (req, res) {
  const supers = await getSuperheroes();
  res.status(200).json({ status: "success", data: supers });
});


// Endpoint to retrieve a <resource_one> by id
app.get("/resourceone/:id", async function (req, res) {
});

// Endpoint to create a new <resource_one>
app.post("/resourceone/", async function (req, res) {
});

// Endpoint to update a specific <resource_one> by id
app.patch("/resourceone/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/resourceone/:id", async function (req, res) {
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VILLAINS PART

// Endpoint to retrieve all <resource_twos>
app.get("/villains/", async function (req, res) {
    const villains = await getVillains();
    res.status(200).json({ status: "success", data: villains });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/resourcetwo/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/resourcetwo/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/resourcetwo/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/resourcetwo/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});