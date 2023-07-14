"use strict"

const boxListWorker = document.querySelector(".box");

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
] 

//stampo in console l'array di gruppi 

for(let i = 0; i < workList.length; i++){
    console.log(workList[i]);   
    let singleWorker = workList[i];

    //stampo ogni singola proprietà dell'oggetto e stampo le foto (bonus - 1 )

    boxListWorker.innerHTML += `<p>${singleWorker.name} ${singleWorker.role} <img src="./assets/img/${singleWorker.photo}"></p>`
}


