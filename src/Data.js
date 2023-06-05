import React from 'react'
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
  return (
    <>
    </>
  )
}
export default Data

