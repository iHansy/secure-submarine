const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const queryText = `SELECT "user".username FROM "user";`;
  pool.query(queryText)
    .then((result) => {
        console.log(result.rows); //should be list of users
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error getting usernameList', error);
        res.sendStatus(500); //internal server error
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
