const healthCheck = (express) => {
  const router = express.Router();

  router.get('/', function (req, res) {
    res.json(getHealth());
  });

  router.get('/health', function (req, res) {
    res.json(getHealth());
    res.end();
  });

  function getHealth() {
    return {
      ok: true,
      message: 'Healthy',
    };
  }
  return router;
};

module.exports = healthCheck;
