const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // paths
    this.userRoutes = '/api/users';

    // middleware
    this.middleware();

    // routes
    this.routes();
  }


  middleware() {
    // cors
    this.app.use(cors());
    // public files
    this.app.use(express.static(`src/public`));
    // parser
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.userRoutes, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Run on port: ${this.port}`);
    })
  }
}

module.exports = Server;