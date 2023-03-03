import axios from "axios";
require('dotenv').config();

async function login({ email, password }) {
  return await client("auth/login", { email: email, password: password })
    .then((info) => {
      console.log(info);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function register({ username, email, password, isAdmin }) {
  return await client("auth/register", {
    username: username,
    email: email,
    password: password,
    isAdmin: isAdmin,
  })
    .then((info) => {
      console.log(info);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// Request
async function client(path, data) {
  const config = {
    method: "POST",
    url: `${process.env.BASE_URL}/${path}`,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return await axios(config);
}

export { login, register };
