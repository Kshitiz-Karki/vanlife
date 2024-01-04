import axios from 'axios'
import { useEffect, useState } from 'react'
import Label from './Label'
import { Link } from 'react-router-dom'

const Vans = () => {

  const [vans, setVans] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3001/vans')
      .then(response => {
        // console.log(response);
        setVans(response.data)
      })
  }, [])

  // console.log(vans);

  const vanElements = vans.map(van => (
    <div key={van.id} className='van'>
      <Link 
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={van.name} className='van__img'/>
        <section className='row van__info'>
          <div><h2>{van.name}</h2></div>
          <div><h2>{`$${van.price}`}</h2></div>
        </section>
        <div className='van__per-day'>/day</div>
        {/* <button className='van__btn'>{van.type}</button> */}
        <Label vanType={van.type} />
      </Link>
    </div>

  ))
  return (
    <article className='container bg-color'>
      <h1 className='all-vans__title'>Explore our van options</h1>
      <section className='vans'>
        {vanElements}
      </section>

    </article>
  )
}

export default Vans