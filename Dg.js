// Dom Navigaition = The process of navigation through the structure
//                   of an HTML document using js.


//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previosElementSibling
//.parentElement
//.children

// -------------- .firstElementChild----------------

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElements => {
//     const firstChild = ulElements.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })


// ------------------ //.lastElementChild-----------------

// const element = document.getElementById("fruits")

// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor= "green";

// const uilElements = document.querySelectorAll("ul")

// uilElements.forEach(uilElements => {
//     const lastChild = uilElements.lastElementChild;
//     lastChild.style.backgroundColor= "green"
// })


// ------------- //.nextElementSibling ----------------

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "green"

