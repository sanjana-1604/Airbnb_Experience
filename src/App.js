import NavBar from "./Components/NavBar"
import Hero from "./Components/HeroComponent"
import Card from "./Components/Card"
import data from './Components/data'
import card1 from './img/card-1.png'
import card2 from './img/card-2.png'
import card3 from './img/card-3.png'

import './App.css';

function App() {
  const arr = data.map((item)=>{
    return(
      <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
     <section className="cards-list">
                {arr}
            </section>
    
    </div>
  );
}

export default App;
