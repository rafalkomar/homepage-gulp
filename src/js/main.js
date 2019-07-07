"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

console.log('siema');
const name ='Rafal Komar';
const age=26;
console.log(name);
console.log(age);
console.log(`Nazywam sie ${name} i mam ${age} lat`)










if ('javascript'!='java'){

    console.log('prawda');
}

if (name || dupa){

    console.log('brawo')
}

if(age<20){

    console.log('masz wiecej niz 20 lat');
} else if (age>=20 && age <= 30){
    console.log('masz wiecej niz 20 lat ale mniej niz 30')
}


switch (age){

    case 20:
    console.log('masz rowno  20 lat');
    break;

    case 30:
    console.log('masz rowno 30 lat');
    break;

    default:
    console.log(`masz ${age} lat`);
    break;        
}




const old= (age>10) ? 'yes': 'no';
console.log(old);



function calculate(x){
x=x+3;
return x

}
console.log(calculate(2))






const calcu = (x) =>{
    x=x+3;
    console.log(`fat:${x}`);
    return x*7

}
console.log(calcu(2))




function welcome(imie,wiek){
 
return(`Witam Cię : ${imie} masz : ${wiek} lat `);

}

console.log(welcome('Rafal' , 26 ));



const button = document.querySelector('.navigation__switcher--js');  

button.addEventListener('click',(e)=> {

const navigationList=document.querySelector('.navigation__list--js')


navigationList.classList.toggle('navigation__list--visible')

});