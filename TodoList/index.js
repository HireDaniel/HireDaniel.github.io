// const todos = window.sessionStorage.getItem("todos") != null ? window.sessionStorage.getItem("todos").split(" ") : {}; let counter = window.sessionStorage.length;
const input = document.querySelector("#input");
const btn_add = document.querySelector("#btn-add");
const list = document.querySelector("#list");
let counter = window.sessionStorage.length;



//load the saved todos
// for(let i = 0; i < window.sessionStorage.length - 1; i++)
// {
//     const div_elem = document.createElement("div");
//     const btn_elem = document.createElement("button");
//     const list_elem = document.createElement("li");
//     list_elem.innerHTML = window.sessionStorage.getItem(window.sessionStorage.getItem(`todo${i}`));
//     btn_elem.className = "done";
//     btn_elem.innerHTML = "done";
//     div_elem.appendChild(list_elem);
//     div_elem.appendChild(btn_elem);
//     div_elem.id = `todo${i}`;
//     list.appendChild(div_elem);
//     let divs = document.querySelectorAll("div");
//     if(divs != null){
//         for(let div of divs){
//             div.addEventListener("click", function(){
//                 this.remove();
//                 window.sessionStorage.removeItem(this.id);
//             })
//         }
//     }
// }

//add a todo to the list
btn_add.addEventListener("click", function(ev) {
    ev.preventDefault();
    let list_elem = document.createElement("li");
    list_elem.innerHTML = input.value;
    const div_elem = document.createElement("div");
    const btn_elem = document.createElement("button");
    btn_elem.innerHTML = "done";
    div_elem.appendChild(list_elem)
    div_elem.appendChild(btn_elem);
    div_elem.id = `todo${counter}`;
    list.appendChild(div_elem);
    div_elem.addEventListener("click", function() {
        this.remove();
        // window.sessionStorage.removeItem(this.id);
    })
    // window.sessionStorage.setItem(`todo${counter}`, `${input.value}`); 
    counter++;
    input.value = "";
})

//create the eventlistener for the mission button and display the stuff
const btn_mission = document.querySelector("#mission");
btn_mission.addEventListener("click", function() {

    if(btn_mission.innerHTML == "hide that damn mission"){
        document.getElementById("hideout").innerHTML = "you really expected a working button on this site? c'mon, you'r better than that...";
        document.querySelector("img").style.display = "block";
    }
    document.getElementById("hideout").style.display = "block";
    btn_mission.innerHTML = "hide that damn mission";
})


//show image for the checkout link, of how hard we are working to solve the problem
document.querySelector("#checkout").addEventListener("click", function() {
    document.querySelector("#hard-work").style.display = "block";
})
