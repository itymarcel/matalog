import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import {
    userFind,
    userGet,
    userPost,
    userUpdate,
    userDelete
  } from "./controllers/user.controller.js";

import { 
    supplierFind, 
    supplierPost, 
    supplierGet, 
    supplierUpdate,
    supplierDelete 
} from "./controllers/supplier.controller.js";

import { 
    producerGet, 
    producerPost,
    producerFind,
    producerUpdate,
    producerDelete
} from "./controllers/producer.controller.js";


const connectionString = "mongodb://localhost:27017/matalog";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = express();
server.use(bodyParser.json());

server.get("/", (request, response) => {
  response.json({ status: "server is running" });
});

//USERS
server.get("/users", userGet);
server.post("/users", userPost);
server.get("/users/:userId", userFind);
server.patch("/users/:userId", userUpdate);
server.delete("/users/:userId", userDelete);

//SUPPLIERS
server.get("/suppliers", supplierGet);
server.post("/suppliers", supplierPost);
server.get("/suppliers/:supplierId", supplierFind);
server.patch("/suppliers/:supplierId", supplierUpdate);
server.delete("/suppliers/:supplierId", supplierDelete);

//PRODUCERS
server.get("/producers", producerGet);
server.post("/producers", producerPost);
server.get("/producers/:producerId", producerFind);
server.patch("/producers/:producerId", producerUpdate);
server.delete("/producers/:producerId", producerDelete);

server.listen(4000);