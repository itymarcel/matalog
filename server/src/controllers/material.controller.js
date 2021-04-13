import Material from "../models/material.model.js";

const materialGet = (request, response) => {
    Material.find().then((material) => response.json(material));
  };