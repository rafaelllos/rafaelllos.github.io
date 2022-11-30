import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { items } from '../data/items';

import Burger from '../components/Burger/Burger';
import Footer from '../components/Footer/Footer';

function Layoutpage() {
    const [menuActive, setMenuActive] = useState(0);

    return (  
        <>
            <Burger active={menuActive} setActive={setMenuActive} header={'Menu'} items={items} />

            <Outlet />

            <Footer />
        </>
    );
}

export default Layoutpage;