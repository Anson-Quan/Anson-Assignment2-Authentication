/*
  File: Assignment 2 - Authentication
  My name: Thuan An Quan - Anson
  Student number: 301101604
  Program: Software Engineering Technology
  Course: Web Application Development - Section 008
  Professor: Dr. Zakiyabanu Malek
  Date: October 29, 2022
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let businessModel = mongoose.Schema(
  {
    name: String,
    number: Number,
    emailaddress: String,
  },

  {
    collection: "business",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("BusinessList", businessModel);
