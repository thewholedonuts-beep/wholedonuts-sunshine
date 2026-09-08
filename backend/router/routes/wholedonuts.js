'use strict';

/**
 * routes/wholedonuts.js — Whole Donuts ecosystem routes.
 *
 * In production this router is mounted when a wholedonuts.* or
 * wholedonuts domain is detected. Until a dedicated application is live,
 * visitors return to the canonical Whole Donuts entry.
 */

const express = require('express');
const router  = express.Router();

router.get('/health', function (req, res) {
  res.json({ status: 'ok', ecosystem: 'donuts', domain: req.detectedDomain });
});

router.get('*', function (req, res) {
  res.redirect(302, 'https://wenevergonnaclose.com/#awd');
});

router.use(function (req, res) {
  res.status(404).json({ error: 'Not found', ecosystem: 'donuts' });
});

module.exports = router;
