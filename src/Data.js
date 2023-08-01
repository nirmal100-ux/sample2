import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const Data = () => {
  const number = [22, 55, 44];
  const person = ['ram', 'ram', 'sita'];
  person.reverse();
  console.log(person);
  person.sort();
  console.log(person);
  const newArr = number.concat(11, 44);
  console.log(newArr);

  console.log(person.join(''));
  //true or false
  console.log(person.includes('rita'));

  console.log(number.at(1));
  console.log(number);
  number.push(101);
  number.shift();
  number.pop();
  number.unshift();
  const m = number.slice(2);
  console.log(m);
  //delete
  number.splice(2, 1);
  console.log(number);
  number.splice(1, 3);
  //array

  //<NavLink to='/about'>About</NavLink>
  //outlet= all the page connection

  //youtube

  //const{stryoutube}=state;
  //const key=stryoutube.split('=')[1];

  ///embed/${key}?

  //<div onClick={() => nav(`/detail/${meal.idMeal}`, { state: meal })}>
  //<h1>{meal.strMeal}</h1>
  // <img src={meal.strMealThumb} alt="" />
  // </div>
  // </div>


  //pops


  //use sate
  /* const[count sectcount]=useState(0);
   <div>
     <button> onClick={(setcount(count +1))}</button>
   </div> */



  return (
    <>
    </>
  )
}
export default Data

