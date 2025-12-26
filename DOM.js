// Dom = document oject model
//       Object that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web broswers construct the DOM when a it loads an HTML document.
//       and structures all the elements in a tree- like representation.
//       JavaScript can access and the to dynamically 
//       change the content, structure, and style of a web page.

const username = " ";
const wellcomeMessage = document.getElementById("welcome-message");

wellcomeMessage.textContent += username === " " ? `Guest` : username;
console.log(document)
