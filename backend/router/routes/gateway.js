'use strict';

/**
 * routes/gateway.js — Legacy gateway requests return to the canonical Universe.
 */

const express = require('express');

const router = express.Router();
router.get('*', function (req, res) {
  res.redirect(302, 'https://wenevergonnaclose.com/');
});

module.exports = router;
