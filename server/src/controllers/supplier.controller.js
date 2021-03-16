import Supplier from "../models/supplier.model.js";

const supplierGet = (request, response) => {
  Supplier.find().then((company) => response.json(company));
};

const supplierPost = (request, response) => {

  const company = new Supplier(getCompany(request.body));

  if (isValidCompany(company)) {
    company
      .save()
      .then((company) => response.json(`${company.name} is now a supplier`))
      .catch((error) => response.json(error));
  } else {
    response.json("ERROR: please enter all properties");
  }
};

function getCompany(companySchema) {
    const { 
        name, 
        address, 
        phone,  
        website
    } = companySchema

    return {
        name: name,
        address: address,
        phone: phone,
        website: website
    }
}

function isValidCompany(company) {
    return (
        company.name && 
        company.address && 
        company.phone && 
        company.website
    )
}

const supplierFind = (request, response) => {
  const supplierId = request.params.supplierId;
  Supplier.find({ _id: supplierId })
    .then((company) => response.json(company))
    .catch(() => response.json("Supplier not found"));
};

const supplierUpdate = (request, response) => {

    const supplierId = request.params.supplierId;

    Supplier.find({ _id: supplierId })
      .update(selectCompanyProps(request.body))
      .then((company) => response.json(company))
      .catch(() => response.json("Supplier not updated"));
  };

  function selectCompanyProps(companySchema) {

    const company = getCompany(companySchema)

    Object.keys(company).forEach(key => {
            if (company[key] === undefined) {
                delete company[key];
            }
        })

    return company
    
}

  const supplierDelete = (request, response) => {
    const supplierId = request.params.supplierId ;
    Supplier.findOneAndDelete({ _id: supplierId  }).then((company) =>
      response.json(`${company.name} was removed from db.`)
    );
  };

export { supplierFind, supplierPost, supplierGet, supplierUpdate, supplierDelete };