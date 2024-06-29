var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/* POST Confirm */

router.post('/confirm', (req, res) => {
  const usersList = req.body;

  // Save the data of user that was sent by the client

  // Send a response to client that will show that the request was successfull.
  res.sendStatus(200);
});

module.exports = router;
