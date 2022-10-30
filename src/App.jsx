import './App.css';

import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/modal/Modal';
import Burger from './components/burger/Burger';
import Header from './components/Header';

import { useState } from 'react';
import { cars } from './data/cars';

function App() {
  const [menuActive, setMenuActive] = useState(0);
  const [active, setActive] = useState(0);

  const items = [
    {value:'Main', href: '/main', icon:'account_balance'}, 
    {value:'Service', href: '/service', icon:'add_shopping_cart'}, 
    {value:'Accessories', href: '/accessories', icon:'android'}, 
  ];

  const carDesc = {
    title: 'Volvo Cars',
    image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/fuel/fuel_hero_21_9.jpg?iar=0&w=1920',
    span_text: 'Created for movement. ',
    text: 'Take a look at other types of Volvo powerplants, including smooth and economical soft hybrids.'
  };

  return (
    <>  
        <Burger active={menuActive} setActive={setMenuActive} header={'Menu'} items={items} />

        <Modal active={active} setActive={setActive} children={"Welcome to our website! We glad to see you here, have fun shopping."} />

        <Header carDesc={carDesc} />

        { cars.map((car) => 
          <Main car={car} key={car.id} setModalActive={setActive} />) 
        }

        <Footer />
    </>
  );
}

export default App;
