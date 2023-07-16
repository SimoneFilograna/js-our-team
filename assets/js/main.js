"use strict"

const boxListWorker = document.querySelector(".box-card");
const subBtn = document.getElementById("sub-btn");
const addBtn = document.getElementById("add-member");
const emptyForm = document.getElementById("form-empty");
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const userPhoto = document.getElementById("user-photo");


let userData = {
    name: "",
    role: "",
}



//array di oggetti con dati

const workList = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },
];


//stampo in console l'array di gruppi 

for(let i = 0; i < workList.length; i++){
    console.log(workList[i]);   
    let singleWorker = workList[i];

    //stampo ogni singola proprietà dell'oggetto e stampo le foto (bonus - 1 )

    // boxListWorker.innerHTML += `<span>${singleWorker.name} ${singleWorker.role} <img src="./assets/img/${singleWorker.photo}"></span>`

    // style card

    boxListWorker.innerHTML += ` 
        <div class="card" style="width: 18rem;">
            <img src="./assets/img/${singleWorker.photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <small class="card-text fw-bold">${singleWorker.role}</small>
                <p class="card-text">${singleWorker.name}</p>
            </div>
        </div>`
};

//aggiungo evento al button principale per rendere il form visibile

subBtn.addEventListener("click", function(){
    userName.value = "";
    userRole.value = "";
    emptyForm.classList.toggle("d-none");
});


// aggiungo il nuovo membro all'array
addBtn.addEventListener("click", function(){

    userData = {
        name: userName.value,
        role: userRole.value,
    }

    console.log(userData)
    workList.push(userData);
    boxListWorker.innerHTML += ` 
    <div class="card" style="width: 18rem;">
        <img src="https://loremflickr.com/400/429" class="card-img-top" alt="...">
        <div class="card-body">
            <small class="card-text fw-bold">${userData.role}</small>
            <p class="card-text">${userData.name}</p>
        </div>
    </div>`

    userName.value = "";
    userRole.value = "";
})



