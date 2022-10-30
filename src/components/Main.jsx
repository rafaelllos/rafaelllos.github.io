import './Main.css';

function Main({car, setModalActive}) {
    return ( 
        <main>
            <div className="main__block">

                <div className="block__title">
                    <p>
                        {car.car + ' ' + car.car_model + ' ' + car.car_model_year}
                    </p>
                </div>

                <div className="block__text">
                    <p>
                        Whichever Volvo you choose, it will be one of the safest cars on the road. All our cars are equipped with the latest safety technologies.
                    </p>
                </div>

                <div className="block__properties">
                    <p>
                        {'Color: ' + car.car_color}
                    </p>

                    <p>
                        {'VIN: ' + car.car_vin}
                    </p>

                    <p>
                        {'Availability: ' + (car.availability ? 'Free' : 'Busy')}
                    </p>
                </div>

                <div className="block__button">
                    <button onClick={() => setModalActive(true)}>
                        {car.price}
                    </button>
                </div>
            </div>

            <div className="main__block">
                <div className="block__image">
                    <img src={car.image} alt="" width="500" height="500" />
                </div>       
            </div>
        </main>
    );
}

export default Main;