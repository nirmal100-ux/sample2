import React from 'react'
import HomePage from './pages/HomePage';
import RootLayOut from './pages/RootLayOut';
import { Route, Routes } from 'react-router';
import NotFound from './pages/NotFound';


const App = () => {
  //string
  /* const personname = 'hariram';
   const firstname = "ram";
   const lastname = "rai";
   const amount = 90;
   const details = 'nepal';
 
   const templatestring = `${personname} ${firstname} ${lastname} ${amount}`;
   //trimStart() removes whitespace only from the start of a string.
   //trim() method removes whitespace from both sides of a string:
   //console.log(amount.tostring());
 
   //console.log(personname.slice(3,5))..to count letter
 
   //to replace
   //const per = personname.replace('hariram', 'good');
   //console.log(per);
 
   //replace all
   //const per = personname.replaceAll('a', 'b');
   //console.log(per);
 
   //for details
   // console.log(details.substring(0, 2) + '...');
   //console.log(personname.toLocaleLowerCase())
 
   //The charAt() method returns the character at a given position in a string:
   //The charCodeAt() method returns the unicode of the character at a specified index in a string:
   //console.log(personname.charAt(0))
 
   //console.log(personname.length)
 
   // const m = personname.toLocaleLowerCase()
   //console.log(m);
 
   //ture or false
   //console.log(personname.includes('ari'))
 
   //position
   //the lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
   //console.log(personname.indexOf('h'))
 
   //repeat
   // console.log(personname.repeat(5))
 
   //amount
   //console.log(typeof (amount));
 
   //to print all
   // console.log(firstname.concat(' ', + lastname, 'he is'));
   //console.log('hello' + '' + 'world'); */

  //Number
  /*const amount = '900';
  const rating = '90.90'
  const n = Number(amount);
  const m = Number.parseInt(amount);
  const r = Number.parseFloat(rating);
  console.log(typeof (n));
  console.log(n + 1000);
  console.log(m);
  console.log(r);
  console.log(Number.isInteger(amount)); */

  //math
  //const rating = 90.34578356875;
  //const m = 4;

  /*console.log(Math.sqrt(4));
  console.log(Math.ceil(rating));
  console.log(Math.round(rating));
  console.log(Math.floor(rating));
  console.log(Math.pow(2, 4)); */

  //const random = Math.random() * 10;
  //console.log(Math.floor(random));

  //const m = 4;
  //const r = rating.tiFixed(2);

  //operator
  /*const a = 20;
  const b = 90;
  const simplify = 90 + (90 * 90) / 9;
  console.log(simplify);
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a % b); */

  //let
  /*let a = 80;
  a++;
  console.log(a);*/
  //const a = 90;
  //const b = 100;
  //const msg = a > b ? 'ok' : 'wrong';
  //console.log(msg);
  /*const age = 30;
  if (age > 17) {
    return <h1>youare junior</h1>
  } else if (age > 17 && age < 50) {
    return <h1>your are regular</h1>
  } else {
    return <h1> you are senior</h1>
  } */

  // const greet = (greet, user) => {
  // alert(`${greet} ${user}`)

  const persons = ['ram', 'hari', 'sita'];
  const numbers = [22, 77, 99];
  let total = 0;
  numbers.forEach((n) => {
    total = total + n;
  });
  let names = '';
  persons.forEach((m) => {
    names = names + m[0] + m[1];
  });

  //const newpersons = persons.map((p) => {
  //return p + 'per';
  //});
  //const newnumbers = numbers.map((n) => {
  // return n * 5;
  //});
  // console.log(newpersons);
  //console.log(newnumbers);


  //const number = [1, 3, 2, 3, 20, 5];


  /* const n = number.reduce((p, n) => {
    return p < n ? n : p;
  });
  console.log(n); */
  /*const data = [
    { id: 1, name: 'ram', gender: 'male' },
    { id: 2, name: 'rita', gender: 'female' },
    { id: 3, name: 'sita', gender: 'female' },
  ];
  const femaleData = data.filter((d) => {
    return d.gender === 'female';
  });
  const singleData = data.find((d) => {
    return d.name === 'ram';
  });
  console.log(femaleData);
  console.log(singleData);




  const n = number.find((n) => {
    return n > 6;
  });

  const d = number.filter((n) => {
    return n > 2;
  });

  console.log(n);
  console.log(d); */

  return (
    <>
      <Routes >
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />

          <Route path='/' element={<NotFound />} />

        </Route>

      </Routes>

    </>
  )
}

export default App