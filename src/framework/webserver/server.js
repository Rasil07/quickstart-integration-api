const { createTunnel } = require('../../application/helpers/tunnel');

function serverConfig(app, config, database) {
  function startServer() {
    database
      .connect(config)
      .then((connection) => {
        console.log('Database connected');
        app.listen(config.port, () => {
          console.log(`Express server listening on ${config.port}`);
          createTunnel(config.port);
        });
      })
      .catch((err) => {
        console.log('Couldnot connect to database');
      });
  }

  return {
    startServer,
  };
}

module.exports = serverConfig;
