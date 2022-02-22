// "use-strict";
// import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";

//check if the user wants a dark theme
if(document.cookie == "darkMode=true"){
    document.getElementById("link").href = "./dark.css";
    document.querySelector("#btn-dark").value = "light mode";
}

// toogle dark and light theme
btn_dark = document.getElementById("btn-dark");
btn_dark.addEventListener("click", function() {
    if(btn_dark.value == "dark mode") {
        document.getElementById("link").href = "./dark.css";
        btn_dark.value = "light mode";
        document.cookie = "darkMode=true";
    } else {
        document.getElementById("link").href = "./index.css";
        btn_dark.value = "dark mode";
        document.cookie = "darkMode=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
})





//get the general text input
const input = document.querySelector("[type='text']");


//make sure the buttons are only loaded if we are on the index.html page
if(document.URL.includes("index.html")) {

//trying to make my first request to a webpage

//the fuck is cors? and why is it boing me???
// const http = new  XMLHttpRequest();
// const url = `https://jsonplaceholder.typicode.com/post`;
// http.open("GET", url);
// http.send();
// http.onreadystatechange=(e)=>{console.log(http.responseText)}



//making a stupid header; fuck you cors!
const url = "http://ip.jsontest.com/";
const params = {
    headers : {
        "content-type" : "application/json; charset=UTF-8"  
    },
    method : "GET",
    mode: "no-cors"
    // refererOrigin : "https://www.google.com"
 }   

 fetch(url, params).then(function(data){
     return data.json();
 }).then(function(res){
     console.log(res);
 }).catch(function(e){
   console.log(e);
 })


//go to an image gallery thats not the shit google offers (filthy cookie suckers!!!)
const btn_juice = document.querySelector(".btn-juice");
btn_juice.addEventListener("click", function() {
    window.open(`https://pixabay.com/images/search/${input.value}`);
})

// //go to wikipedia with the topic the user entered when clicking the summary btn
// const btn_summary = document.querySelector(".btn-summary");
// btn_summary.addEventListener("click" , function()  {
//     window.open(`https://en.wikipedia.org/wiki/${input.value}`);
// })

//go to mad lips generator
const btn_story = document.querySelector(".btn-story");
btn_story.addEventListener("click", function() {
    window.open("https://www.glowwordbooks.com/blog/category/kids-online-mad-libs/");
});


//go to memory palace builder
const btn_palace = document.querySelector(".btn-palace");
btn_palace.addEventListener("click", function() {
    // window.open("https://www.memorypalace.com/#home")
    
});


//get movies and series related to the topic from imdb



//create more text inputs for the mad lips story
const btn_add = document.querySelector(".btn-add");
btn_add.addEventListener("click", function() {
    const new_input = document.createElement("input");
    new_input.type = "text";
    new_input.placeholder = "key fact";
    new_input.className = "new";
    const text_input = document.querySelector("#text-input")
    text_input.insertAdjacentElement("afterend", new_input);
    // console.log("hey");
})

//delete to much text inputs
const btn_decr = document.querySelector("#btn-decr");
btn_decr.addEventListener("click", function() {
 //TODO delete the last created element
    const new_elements = document.querySelectorAll(".new");
    new_elements[new_elements.length-1].remove();
})

} 