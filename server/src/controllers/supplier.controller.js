import Supplier from "../models/supplier.model.js";

const supplierGet = (request, response) => {
  Supplier.find().then((company) => response.json(company));
};

const supplierPost = (request, response) => {
  
  const name = request.body.name;
  const address = request.body.address;
  const phone = request.body.phone;
  const website = request.body.website;

  const company = new Supplier({
    name: name,
    address: address,
    phone: phone,
    website: website
  });

  if (name && address && phone && website) {
    company
      .save()
      .then((company) => response.json(`${company.name} is now a supplier`))
      .catch((error) => response.json(error));
  } else {
    response.json("ERROR: please enter all properties");
  }
};

const supplierFind = (request, response) => {
  const supplierId = request.params.supplierId;
  Supplier.find({ _id: supplierId })
    .then((company) => response.json(company))
    .catch(() => response.json("Supplier not found"));
};

const supplierUpdate = (request, response) => {

    const name = request.body.name;
    const address = request.body.address;
    const phone = request.body.phone;
    const website = request.body.website;
    const supplierId = request.params.supplierId;

    Supplier.find({ _id: supplierId })
      .update({
        name: name,
        address: address,
        phone: phone,
        website: website
      })
      .then((company) => response.json(company))
      .catch(() => response.json("Supplier not updated"));
  };

  const supplierDelete = (request, response) => {
    const supplierId = request.params.supplierId ;
    Supplier.findOneAndDelete({ _Id: supplierId  }).then((company) =>
      response.json(`${company.name} was removed from db.`)
    );
  };

export { supplierFind, supplierPost, supplierGet, supplierUpdate, supplierDelete };