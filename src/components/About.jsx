import aboutImg from '../assets/about.png'
const About = () => {

  return (
    <section className='container bg-color'>
      <img 
        src={aboutImg} 
        alt="about vanlife" 
        width={1365}
        height={581}
        className='about__img' />
      <article className='about'>
        <section className='about__description'>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </section>
        <section className='about__explore'>
          <h2>
            Your destination is waiting. Your van is ready.
          </h2>
          <button className='about__explore--btn'>Explore our vans</button>
        </section>
      </article>
    </section>
  )
}

export default About