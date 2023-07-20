import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../constants/config.json';
import Alert from '../components/Alert';

const Home = () => {

    const [search, setSearch] = useState([])
    const [alert, setAlert] = useState({msg: '', show: false})

    const onChange = async (e) => {
        fetch(`${config.host}recipes/autocomplete?number=10&query=${e.target.value}&apiKey=${config.api}`)
        .then(data => data.json())
        .then(data => {
            if(data.status !== 'failure'){
                setSearch(data)
            }
            else{
                showAlert()
            }
        })
    }

    
    const showAlert = () => {
        setAlert({msg: 'API Key Exhausted', show: true})
        setTimeout(() => {
            setAlert({msg: 'API Key Exhausted', show: false})
        }, 3800);
    }

  return (
    <>
    <Alert message={alert.msg} show={alert.show}></Alert>
     <div className='w-full h-screen justify-center items-center flex flex-col'>
        <div className='flex justify-center text-center items-center flex-col text-3xl p-2 lg:text-5xl text-primary font-bold mb-8'>
            <p>Discover the Perfect Fusion of Flavors</p>
            <p>Unleash Your Culinary Creativity!</p>
        </div>
        <div className='w-96'>
            <input type="text" placeholder='search recipe' onChange={onChange} className='bg-input py-4 px-8 w-full rounded-md outline-none text-xl' />
            <div className='w-full flex flex-col rounded-md'>
            {search && search.map((recipe, index) => (
                <Link to={`recipe?id=${recipe.id}`} key={index} className='w-full bg-bg p-3 hover:bg-gray-100'>{recipe.title}</Link>
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Home