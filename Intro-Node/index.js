//jshint esversion:6

const superheroes = require('superheroes');

var myHero = superheroes.random();

const supervillains = require('supervillains');

var myVillain = supervillains.random();

console.log("Hero: "+myHero + "\nVillain: " + myVillain);