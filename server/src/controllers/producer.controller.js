import Producer from "../models/producer.model.js";

const producerGet = (request, response) => {
  Producer.find().then((company) => response.json(company));
};

const producerPost = (request, response) => {
  
    const company = new Producer(getCompany(request.body));
  
    if (isValidCompany(company)) {
      company
        .save()
        .then((company) => response.json(`${company.name} is now a producer`))
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

  const producerFind = (request, response) => {
    const producerId = request.params.producerId;
    Producer.find({ _id: producerId })
      .then((company) => response.json(company))
      .catch(() => response.json("Producer not found"));
  };

  const producerUpdate = (request, response) => {

    const producerId = request.params.producerId;

    Producer.find({ _id: producerId })
      .update(selectCompanyProps(request.body))
      .then((company) => response.json(company))
      .catch(() => response.json("Producer not updated"));
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

  const producerDelete = (request, response) => {
    const producerId = request.params.producerId ;
    Producer.findOneAndDelete({ _id: producerId  }).then((company) =>
      response.json(`${company.name} was removed from db.`)
    );
  };

export { producerGet, producerPost, producerFind, producerUpdate, producerDelete }