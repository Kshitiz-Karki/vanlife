import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav className='container row nav'>
      <div className='col'>
        <Link to={'/'} className='nav__title'>#VANLIFE</Link>
      </div>
      <div className='col row'>
        <div className='col'>
          <Link to={'/about'} className='nav__subtitle'>About</Link>
        </div>
        <div className="col">
          <Link to={'/vans'} className='nav__subtitle'>Vans</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation