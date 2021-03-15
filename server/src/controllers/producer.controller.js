import Producer from "../models/producer.model.js";

const producerGet = (request, response) => {
  Producer.find().then((company) => response.json(company));
};

const producerPost = (request, response) => {
  
    const name = request.body.name;
    const address = request.body.address;
    const phone = request.body.phone;
    const website = request.body.website;
  
    const company = new Producer({
      name: name,
      address: address,
      phone: phone,
      website: website
    });
  
    if (name && address && phone && website) {
      company
        .save()
        .then((company) => response.json(`${company.name} is now a producer`))
        .catch((error) => response.json(error));
    } else {
      response.json("ERROR: please enter all properties");
    }
  };

  const producerFind = (request, response) => {
    const producerId = request.params.producerId;
    Producer.find({ _id: producerId })
      .then((company) => response.json(company))
      .catch(() => response.json("Producer not found"));
  };

  const producerUpdate = (request, response) => {

    const name = request.body.name;
    const address = request.body.address;
    const phone = request.body.phone;
    const website = request.body.website;
    const producerId = request.params.producerId;

    Producer.find({ _id: producerId })
      .update({
        name: name,
        address: address,
        phone: phone,
        website: website
      })
      .then((company) => response.json(company))
      .catch(() => response.json("Producer not updated"));
  };

  const producerDelete = (request, response) => {
    const producerId = request.params.producerId ;
    Producer.findOneAndDelete({ _Id: producerId  }).then((company) =>
      response.json(`${company.name} was removed from db.`)
    );
  };

export { producerGet, producerPost, producerFind, producerUpdate, producerDelete }