/*
  File: Assignment 2 - Authentication
  My name: Thuan An Quan - Anson
  Student number: 301101604
  Program: Software Engineering Technology
  Course: Web Application Development - Section 008
  Professor: Dr. Zakiyabanu Malek
  Date: October 29, 2022
*/

(function () {
    function Start() {
      console.log("App Started...");
      let deletebuttons = document.querySelectorAll(".btn-sm");
      for (button of deletebuttons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Are you sure!!! Do you want to delete it ?")) {
            event.preventDefault();
            window.location.assign("/business-list");
          }
        });
      }
    }
    window.addEventListener("load", Start);
  })();

function submitForm(){
    var message = "Thank you for contacting me! I have received your message! I will repsonse to you as soon as possible! Have a wonderful day!"
    window.alert(message);
}
document.getElementById("submit").addEventListener("click", submitForm, false);