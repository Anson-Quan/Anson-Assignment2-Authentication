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

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomepage);

/* GET home page. */
router.get("/home", indexController.displayHomepage);

/* GET About Us page. */
router.get("/about", indexController.displayAboutpage);

/* GET Products page. */
router.get("/products", indexController.displayProductspage);

/* GET Services page. */
router.get("/services", indexController.displayServicespage);

/* GET Contact Us page. */
router.get("/contact", indexController.displayContactpage);

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
