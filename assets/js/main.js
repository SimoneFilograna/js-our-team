"use strict"

const boxListWorker = document.querySelector(".box");



//array di oggetti con dati

const workList = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
] 

//stampo in console l'array di gruppi 

for(let i = 0; i < workList.length; i++){
    console.log(workList[i]);   
    const singleWorker = workList[i];

    //stampo ogni singola proprietà dell'oggetto e stampo le foto (bonus - 1 )

    boxListWorker.innerHTML += `<p>${singleWorker.nome} ${singleWorker.ruolo} <img src="./assets/img/${singleWorker.foto}"></p>`
}


