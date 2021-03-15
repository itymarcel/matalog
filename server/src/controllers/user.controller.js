import User from "../models/user.model.js";

const userGet = (request, response) => {
  User.find().then((person) => response.json(person));
};

const userPost = (request, response) => {
  
  const userName = request.body.userName;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const country = request.body.country;
  const company = request.body.company;
  const occupation = request.body.occupation;
  const email = request.body.email;

  const person = new User({
    userName: userName,
    firstName: firstName,
    lastName: lastName,
    country: country,
    company: company,
    occupation: occupation,
    email: email,
  });

  if (userName && firstName && lastName && email && country && company && occupation) {
    person
      .save()
      .then((person) => response.json(`${person.firstName} is now a user`))
      .catch((error) => response.json(error));
  } else {
    response.json("ERROR: please enter all properties");
  }
};

const userFind = (request, response) => {
  const userId = request.params.userId;
  User.find({ _id: userId })
    .then((person) => response.json(person))
    .catch(() => response.json("User not found"));
};

const userUpdate = (request, response) => {

    const userName = request.body.userName;
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const country = request.body.country;
    const company = request.body.company;
    const occupation = request.body.occupation;
    const email = request.body.email;
    const userId = request.params.userId;

    User.find({ _id: userId })
      .update({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        country: country,
        company: company,
        occupation: occupation,
        email: email,
      })
      .then((person) => response.json(person))
      .catch(() => response.json("User not updated"));
  };

  const userDelete = (request, response) => {
    const userId = request.params.userId ;
    User.findOneAndDelete({ _Id: userId  }).then((person) =>
      response.json(`${person.userName} was removed from db.`)
    );
  };

export { userFind, userPost, userGet, userUpdate, userDelete };