"use strict";

let prenom = prompt("entrer votre prenom")
let nom = prompt("entrer votre nom")
let age = parseInt(prompt("entrer votre age"))

const ENFANCE = 5

alert(`Sapristi! On ne m'avait pas prévenu que c'était vous, ${prenom}! Euh... Je veux dire... Monsieur
` +
    `le grand magicien ${nom}! Cela fait déjà au moins ${age - ENFANCE} ans que vous faites rayonner notre
` +
    "contrée!")