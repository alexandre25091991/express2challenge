const database = require ("./database");


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

  const postUser = (req, res) => {
    const { firstname, lastname, email, city, language } = req.body;
  
    database
      .query(
        "INSERT INTO users( firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
        [ firstname, lastname, email, city, language]
      )
      .then(([result]) => {
        res.location(`/api/users/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving the user");
      });
  };


module.exports = {
  getUsers,
  getUserById,
  postUser,
};
