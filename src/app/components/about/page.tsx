import React from 'react'
import '@/app/components/about/about.css'

const About = () => {
  return (
    <div className='maindiv'>
      <div className='about'>
          <h2>About Us</h2>
          <p>This was born out of a desire to bring the spirit of Italian dining to Ada Lane, capturing the effervescence of a classic trattoria within a sleek, warm and colourful setting. The compact and pink design nods to the architecture of both ancient and contemporary Italy. 

              The food is focused on perfecting simple, classic Italian dishes with a nod to the Australian climate and dining sphere, honouring fresh produce and seasonality. It is an important part to work from the foundation up, creating our own pastas and breads all in-house. Like all our restaurants, it is best to share, selecting from an extensive antipasti menu to accompany our wood-fired breads, pastas and secondi. 

              The wines assist all the conviviality; Italian in provenance or variety, they serve to complement the dishes as beautifully as they would poured into a tumbler whilst sitting in the Italian sunshine. The cocktails are seasonal and use local ingredients, serving as perfect aperitifs or digestifs to accompany the meal. Come, sit and stay for a while.
          </p>
      </div>
      <div className='phrase'>
        <p>A good Restaurant is like a vacations; it transports you, and it becomes a lot more than just about the food.</p>
      </div>
      <div className='sections'>
        <div className='ourMenu' id='Menu'>
          <div className='maindish'>
            <h2>Our Menu</h2>
            <table>
              <thead>
                <tr>
                  <th>Maindish</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cannolo, beef tartare, tuna dressing, white anchovy.</td>
                  <td>16$</td>
                </tr>
                <tr>
                  <td>Agnes Bakery ciabatta.</td>
                  <td>10$</td>
                </tr>
                <tr>
                  <td>Whipped ricotta, zucchini, squash, pine nuts.</td>
                  <td>14$</td>
                </tr>
                <tr>
                  <td>Mushroom marinati.</td>
                  <td>8$</td>
                </tr>
                <tr>
                  <td>Smoked mortadella.</td>
                  <td>12$</td>
                </tr>
                <tr>
                  <td>Calamari fritti, lemon aioli.</td>
                  <td>15$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src="../4 1.png" alt="menu" />
        </div>
        <div className="chef">
          <img src="../image 2.png" alt="chef" />
          <div className='masterchef'>
            <h2>Our MasterChef</h2>
            <p>Michael Lin is a professional cook and tradesperson who is proficient in all aspects of food preparation, often focusing on a particular cuisine12345. He use his thorough knowledge of food and preparations to create quality meals.
            <br /><br />
            He is a professional cook who is proficient or masterful at professional-level food preparation. Often specialising in a particular type of cuisine, though many use his expertise to create fusion recipes.
            </p>
            <div className="hr">
            </div>
            <p><br />
            <span>Awards</span><br />
            Michael Lin✨✨✨
            </p>
          </div>
        </div>
        <div className='reservation' id='reservation'>
            <h2>Reservation</h2>
        </div>
      </div>   
    </div>
  )
}

export default About