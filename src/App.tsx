import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Card } from './components/Card/Card'
import { el } from './models/elModel'
import { Loader } from './components/Loader/Loader';
import { notifySuccess } from './tools/toaster';
import { ToastContainer } from 'react-toastify';

function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect (() => {
    axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
      .then((res)=>{
        setData(res.data)
        setIsloading(false)
        notifySuccess('Карточек больше нет')
      }
    )
  }, [])
  
  console.log(data);
 

  return (
    <div className="App">
      <p className='link'>Похожие объявления</p>
      <div className='card_wrapper'>
        {isLoading ? <Loader /> : data.slice(0, 16).map((el: el)=> <Card key={el.id} {...el} />)}
        <div className='link_down'>Показать еще ⌵</div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
