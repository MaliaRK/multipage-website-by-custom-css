import '@/app/styles/home.css'
import Navbar from '../navbar'

const Home = () => {
  return (
    <div className='hero'>
      <nav>
        <img src="/logo.png" alt="restaurant" className='logo'/>
        <Navbar/>
      </nav>
      <div className='hero-content'>
        <ul>
          <li>True Ingredients</li>
          <li>True Flavors</li>
          <li>True Passions</li>
        </ul>
        <p>the spirit of Italian dining to Ada Lane, capturing the effervescence of a classic trattoria within a sleek, warm and colourful setting.</p>
      </div>
      <button id='orderBtn'>Order Now</button>
    </div>
  )
}

export default Home