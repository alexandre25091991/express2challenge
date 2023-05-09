const users = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    city: "Paris",
    origin: "English",
  },
  {
    firstname: "Valeriy",
    lastname: "Appius",
    email: "valeriy.appius@example.com",
    city: "Moscow",
    origin: "Russian",
  },
  {
    firstname: "Ralf",
    lastname: "Geronimo",
    email: "ralf.geronimo@example.com",
    city: "New York",
    origin: "Italian",
  },
  {
    firstname: "Maria",
    lastname: "Iskandar",
    email: "maria.iskandar@example.com",
    city: "New York",
    origin: "German",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    email: "jane.doe@example.com",
    city: "London",
    origin: "English",
  },
  {
    firstname: "Johanna",
    lastname: "Martino",
    email: "johanna.martino@example.com",
    city: "Milan",
    origin: "Spanish",
  },
];

const getUsers = (req, res) => {
  const database = require("./database");
  database
    .query("select * from users")
    .then(([users]) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
  
    const user = users.find((user) => user.id === id);
  
    if (user != null) {
        res.status(200).json(user);
    } else {
      res.status(404).send("Not Found");
    }
  };


module.exports = {
  getUsers,
  getUserById,
};
