import User from "../models/user.model.js";

const userGet = (request, response) => {
  User.find().then((person) => response.json(person));
};

const userPost = (request, response) => {

    const person = new User(getPerson(request.body))

    if(isValidPerson(person)) {
    person
        .save()
        .then((person) => response.json(`${person.firstName} is now a user`))
        .catch((error) => response.json(error));
    }
    else {
        response.json({error: 'all properties are required'})
    }
  };

function getPerson(personSchema) {

    const { 
        userName, 
        firstName, 
        lastName, 
        country,    
        company,
        occupation, 
        email 
    } = personSchema
    
    return {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        country: country,
        company: company,
        occupation: occupation,
        email: email,
    }
    
}

function isValidPerson(person) {
    return (
        person.userName &&
        person.firstName && 
        person.lastName &&
        person.country &&
        person.company &&
        person.occupation &&
        person.email
        ) 
}


const userFind = (request, response) => {
  const userId = request.params.userId;
  User.find({ _id: userId })
    .then((person) => response.json(person))
    .catch(() => response.json("User not found"));
};

const userUpdate = (request, response) => {

    const userId = request.params.userId;

    User.find({ _id: userId })
      .update(selectPersonProps(request.body))
      .then((person) => response.json(person))
      .catch(() => response.json("User not updated"));
  };

function selectPersonProps(personSchema) {

    const person = getPerson(personSchema)

    Object.keys(person).forEach(key => {
            if (person[key] === undefined) {
                delete person[key];
            }
        })

    return person
    
}

  const userDelete = (request, response) => {
    const userId = request.params.userId ;
    User.findOneAndDelete({ _id: userId  }).then((person) =>
      response.json(`${person.userName} was removed from db.`)
    );
  };

export { userFind, userPost, userGet, userUpdate, userDelete };