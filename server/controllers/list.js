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

let jwt = require('jsonwebtoken');

//create reference to the model (dbschema )
let BusinessList = require("../models/list");

module.exports.displayBusinessList = (req, res, next) => {
  BusinessList.find((err, businessList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(listsList);

      res.render("list/list", { title: "Business Contact", BusinessList: businessList,
      displayName: req.user ? req.user.displayName : ''});
    }
  });
};

module.exports.addPage = (req, res, next) => {
  res.render("list/add", {
    title: "Add Business Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addProcessPage = (req, res, next) => {
  let newBusiness = BusinessList({
    "name": req.body.name,
    "number": req.body.number,
    "emailaddress": req.body.emailaddress,
  });
  BusinessList.create(newBusiness, (err, BusinessList) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the lists list
      res.redirect("/business-list");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  BusinessList.findById(id, (err, listToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("list/edit", { title: "Edit Business List", BusinessList: listToEdit, 
      displayName: req.user ? req.user.displayName : ''});
    }
  });
};

module.exports.processingEditPage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updateLists = BusinessList({
    "_id": id,
    "name": req.body.name,
    "number": req.body.number,
    "emailaddress": req.body.emailaddress,
  });
  BusinessList.updateOne({ _id: id }, updateLists, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the lists list
      res.redirect("/business-list");
    }
  });
};

module.exports.deletePage = (req, res, next) => {
  let id = req.params.id;
  
  BusinessList.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh lists list
      res.redirect("/business-list");
    }
  });
};
