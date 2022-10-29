/*
  File: Assignment 2 - Authentication
  My name: Thuan An Quan - Anson
  Student number: 301101604
  Program: Software Engineering Technology
  Course: Web Application Development - Section 008
  Professor: Dr. Zakiyabanu Malek
  Date: October 29, 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
