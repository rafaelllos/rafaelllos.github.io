import { useState } from 'react';

import Modal from '../components/Modal/Modal'
import Main from '../components/Productpage/Main';
import Header from '../components/Productpage/Header';

import { header_preview } from '../data/header_preview';
import { products } from '../data/products';

function CarPage() {
    const [active, setActive] = useState(0);

    return (  
        <>
            <Modal active={active} setActive={setActive} children={'Welcome to our website!'} />
            <Header header_preview={header_preview} />
            
            { products[0].map((product) => 
                <Main car={product} key={product.id} setModalActive={setActive} />) 
            }
        </>
    );
}

export default CarPage;