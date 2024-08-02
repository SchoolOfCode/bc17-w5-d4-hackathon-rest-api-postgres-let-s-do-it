// Import the required modules
import express from "express";



// Import your helper functions for your first resource here
import {
getSuperheroes,
getSuperheroesById,
createSuperhero ,
updateSuperheroById,
deleteRowById,
} from "./superheroes.js";


//Import your helper functions for your second resource here
import {
getVillains,
getVillainsById,
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
app.get("/superheroes/:id", async function (req, res) {
  const id = req.params.id;
  const superheroesById = await getSuperheroesById(id);
  // Assume 404 status if the author is not found
  if (!superheroesById) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Superhero not found" } });
  }
  res.status(200).json({ status: "success", data: superheroesById });
});

// Endpoint to create a new <resource_one>
app.post("/superheroes", async function (req, res) {
  const newSuperhero = await createSuperhero(req.body);
  if (!newSuperhero) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Superhero not added" } });
  }
  res.status(200).json({ status: "success", data: newSuperhero });
});



// Endpoint to update a specific <resource_one> by id
app.patch("/superheroes/:id", async function (req, res) {

  const updatedRow = await updateSuperheroById(req.params.id, req.body);
  if (!updatedRow) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Superhero not updated" } });
  }
  res.status(200).json({ status: "success", data: deletedRow });
});





// Endpoint to delete a specific <resource_one> by id
app.delete("/superheroes/:id", async function (req, res) {
  const deletedRow= await deleteRowById(req.params.id);
  if (!deletedRow) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Superhero not deleted" } });
  }
  res.status(200).json({ status: "success", data: deletedRow });

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VILLAINS PART

// Endpoint to retrieve all <resource_twos>
app.get("/villains/", async function (req, res) {
    const villains = await getVillains();
    res.status(200).json({ status: "success", data: villains });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/villains/:id", async function (req, res) {
  const id = req.params.id;
  const villainsById = await getVillainsById(id);
  // Assume 404 status if the author is not found
  if (!villainsById) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Villain not found" } });
  }
  res.status(200).json({ status: "success", data: villainsById });
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