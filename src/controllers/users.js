const { response, request } = require('express');


const getUsers = (req, res = response) => {
  res.json({
    status: 'Ok',
    message: 'get Api Controller'
  });
}


const sendUsers = (req = request, res = response) => {

  const { name, age } = req.body;

  res.json({
    status: 'Ok',
    message: 'post Api Controller',
    data: {
      name,
      age,
    }
  });
}

const updateUsers = (req = request, res = response) => {

  const { id } = req.params;

  res.json({
    status: 'Ok',
    message: 'put Api Controller',
    id,
  });
}

const patchUsers = (req = request, res) => {

  const { user = 'User default', age = 'age default' } = req.query;

  res.json({
    status: 'Ok',
    message: 'patch Api Controller',
    data: {
      user,
      age,
    }
  });
}

const deleteUsers = (req = request, res) => {
  res.json({
    status: 'Ok',
    message: 'delete Api Controller'
  });
}


module.exports = {
  getUsers,
  sendUsers,
  updateUsers,
  patchUsers,
  deleteUsers,
};