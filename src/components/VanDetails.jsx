import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Label from "./Label"

const VanDetails = () => {

  const [van , setVan] = useState(null)
  const { id } = useParams()
  // console.log('id - ', id);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/vans/${id}`)
      .then(response => {
        // console.log(response.data);
        setVan(response.data)
      })
  }, [id])
  return (
    
    <article className="container bg-color van-details">
      {van 
        ? <>
            <img 
              src={van.imageUrl} 
              alt={van.name}
              className="van__img" 
            />
            <div className="margin">
              <Label vanType={van.type} />
            </div>
            <h1>{van.name}</h1>
            <h3>{`$${van.price}`}<span className="van__per-day">/day</span></h3>
            <p className="van__desc">{van.description}</p>
            <button className="van__type van__btn">Rent this van</button>
          </>
        : <h2>Loading ...</h2>
      }
    </article>
  )
}

export default VanDetails