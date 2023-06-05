import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Display = () => {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [err, setErr] = useState('');




  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setLoad(false);
      setData(response.data['meals']);
    } catch (err) {
      setLoad(false);
      setErr(err);
    }

  }
  useEffect(() => {
    getData();
  }, []);

  if (isLoad) {
    return <h1>Plase Wait....</h1>
  }

  return (
    <div className='grid grid-cols-3 items-start p-9 gap-7 '>
      {data.map((food) => {
        return <div key={food.idMeal} className='space-y-3 shadow-2xl p-5 cursor-pointer'>
          <h1 className='text-center text-2xl font-bold'>{food.strMeal}</h1>
          <h1>{food.StrIngredient2}</h1>
          <img className='w-full' src={food.strMealThumb} alt="" />
          <iframe src="https://www.youtube.com/watch?v=9GUTC2Qwrf0" frameborder="0"></iframe>

        </div>
      })}



    </div>
  )
}

export default Display