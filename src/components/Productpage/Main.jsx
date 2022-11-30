function Main({car, setModalActive}) {
    return ( 
        <main className="max-w-[1200px] m-auto grid grid-cols-2 items-center gap-x-[100px] mt-[100px] mb-[100px]">
            <div className="main__block grid place-items-center">
                <p className="block__title font-text-roboto text-[40px] font-[700] text-center">
                    {car.car + ' ' + car.car_model + ' ' + car.car_model_year}
                </p>

                <p className="block__text font-text-roboto text-[17px] font-[300] text-center text-black mt-[20px]">
                    Whichever Volvo you choose, it will be one of the safest cars on the road. All our cars are equipped with the latest safety technologies.
                </p>

                <div className="block__properties mt-[20px] font-text-roboto text-[17px] font-[300] text-black text-center">
                    <p> {'Color: ' + car.car_color}</p>
                    <p>{'VIN: ' + car.car_vin}</p>
                    <p>{'Availability: ' + (car.availability ? 'Free' : 'Busy')}</p>
                </div>

                <button 
                    className="block__button font-text-roboto text-[15px] font-[400] text-center bg-[#e6e6e6] border-0 rounded-[20px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] mt-[40px] mr-0 mb-[20px] ml-0 flex-[0_0_auto] duration-[.5s] hover:bg-[#c8c8c8] hover:duration-[.5s]" 
                    onClick={() => setModalActive(true)}>
                        {car.price}
                </button>
            </div>

            <div className="main__block grid place-items-center">
                <img className="block__image rounded-[30px] w-full h-full" src={car.image} alt="" />      
            </div>
        </main>
    );
}

export default Main;