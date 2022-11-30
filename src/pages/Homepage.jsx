import { Link } from 'react-router-dom';

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Card from '../components/Homepage/Card';

function Homepage() {
    const car_models = [
        {id: 1, css: 'wagon', suptitle: 'Wagon', title: 'V60 Recharge', subtitle: 'Starting at $70,550 MSRP'},
        {id: 2, css: 'suv', suptitle: 'SUV', title: 'XC90', subtitle: 'Starting at $56,800 MSRP'},
        {id: 3, css: 'wagon', suptitle: 'Wagon', title: 'V60 Cross Country', subtitle: 'Starting at $48,800 MSRP'},
        {id: 4, css: 'suv', suptitle: 'SUV', title: 'XC90 Recharge', subtitle: 'Starting at $71,900 MSRP'},
        {id: 5, css: 'wagon', suptitle: 'Wagon', title: 'V90 Cross Country', subtitle: 'Starting at $58,450 MSRP'},
        {id: 6, css: 'suv', suptitle: 'SUV', title: 'XC60 Recharge', subtitle: 'Starting at $57,200 MSRP'},
        {id: 7, css: 'suv', suptitle: 'SUV', title: 'XC40 Recharge', subtitle: 'Starting at $53,550 MSRP'},
        {id: 8, css: 'suv', suptitle: 'SUV', title: 'C40 Recharge', subtitle: 'Starting at $55,300 MSRP'},
    ];

    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3 
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];

    return (
        <>
            <div className="container pt-[90px] mb-[100px] max-w-full h-[670px] bg-[url('https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/homepage/heroes/xc90-hero-large-2560x896.jpg?iar=0&w=1920')]">
                <div className="title font-text-roboto text-xl font-[800] text-white text-center mb-[10px]">
                    <p>Volvo XC90 Mild Hybrid</p>
                </div>

                <div className="subtitle font-text-dosis text-5xl font-[900] text-white text-center uppercase mb-[15px]">
                    <p>Go the extra mile</p>
                </div>

                <div className="button font-text-roboto text-base font-[500] text-white flex flex-row justify-center border-0 bg-transparent">
                    <Link to="/product" className="hover:text-[#7378CB] duration-[.4s] hover:duration-[.4s] uppercase">Learn More</Link>
                </div>
            </div>

            <div className="container max-w-[1200px] m-auto">
                <p className="title font-text-roboto text-3xl font-[800] text-black text-center mb-[50px]">Our full range</p>

                <div className="navigation font-text-roboto text-base font-[400] text-[#787878] grid grid-cols-5-100px justify-center mb-[40px]">
                    <button className="button focus:bg-transparent focus:text-[#5050c8] hover:text-[#7378cb]">All</button>
                    <button className="button focus:bg-transparent focus:text-[#5050c8] hover:text-[#7378cb]">Crossover</button>
                    <button className="button focus:bg-transparent focus:text-[#5050c8] hover:text-[#7378cb]">SUV</button>
                    <button className="button focus:bg-transparent focus:text-[#5050c8] hover:text-[#7378cb]">Sedan</button>
                    <button className="button focus:bg-transparent focus:text-[#5050c8] hover:text-[#7378cb]">Wagon</button>
                </div>

                <div className="slider mb-[150px]"> 
                    <Slide slidesToScroll={3} slidesToShow={3} responsive={responsiveSettings} indicators={false} duration={5000} transitionDuration={2000} arrows={false} autoplay={false} canSwipe={true}>
                        { car_models.map((models) => 
                            <Card models={models} key={models.id} />
                        )}
                    </Slide>
                </div> 

                <div className="grid grid-cols-2 bg-[#fafafa] mb-[40px]">
                    <div className="pl-[100px] pt-[100px] mr-[50px] font-text-roboto">
                        <p className="text-4xl font-medium text-black mb-[20px]">Electrify your life with Volvo Recharge</p>
                        <p className="text-xl font-light text-[#787878] mb-[20px]">Find out more about our electric cars, including cost of ownership, charging, and how to buy or subscribe online.</p>
                        <button className="pt-[10px] pr-[40px] pb-[10px] pl-[40px] border-[1px] rounded-md border-[#1c6bba] text-[#1c6bba] font-medium uppercase hover:bg-[#14487b] hover:text-white duration-[.4s] hover:duration-[.4s]">Discover Electrification</button>
                    </div>

                    <div className="pt-[30px]">
                        <img className="w-auto h-auto pr-[20px] pb-[20px]" src="https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/images/homepage/local-content/ste-592-4x3.jpg?iar=0&w=1080" alt="" />
                    </div>
                </div>

                <div className="flex gap-[30px] mb-[110px]">
                    <div className="grid grid-rows-2 bg-[#fafafa]">
                        <img className="w-[600px] h-[260px]" src="https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/images/grey-image-2.png?iar=0&w=1080" alt="" />

                        <div className="pt-[50px] font-text-roboto text-center">
                            <p className="text-4xl font-medium text-black mb-[20px]">Explore our electric cars</p>
                            <p className="text-l font-light text-[#787878] mb-[20px]">Learn more and shop our range of pure electric cars.</p>
                            <button className="pt-[10px] pr-[40px] pb-[10px] pl-[40px] border-[1px] rounded-md border-[#1c6bba] text-[#1c6bba] font-medium uppercase hover:bg-[#14487b] hover:text-white duration-[.4s] hover:duration-[.4s]">Explore Pure Electric</button>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 bg-[#fafafa]">
                        <img className="w-[600px] h-[260px]" src="https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/images/xc90-2560x1096.jpg?iar=0&w=1080" alt="" />

                        <div className="pl-[50px] pt-[50px] font-text-roboto text-center">
                            <p className="text-4xl font-medium text-black mb-[20px]">Explore our plug-in hybrids</p>
                            <p className="text-l font-light text-[#787878] mb-[20px]">Learn more and shop our range of plug-in hybrid cars.</p>
                            <button className="pt-[10px] pr-[40px] pb-[10px] pl-[40px] border-[1px] rounded-md border-[#1c6bba] text-[#1c6bba] font-medium uppercase hover:bg-[#14487b] hover:text-white duration-[.4s] hover:duration-[.4s]">Explore Hybrids</button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[30px] mb-[110px]">
                    <div className="grid grid-rows-2 bg-[#fafafa]">
                        <img className="w-[600px] h-[260px]" src="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/xc90-fuel-light/xc90-fuel-hero-21x9.jpg?iar=0&w=1080" alt="" />

                        <div className="pt-[50px] font-text-roboto text-center">
                            <p className="text-4xl font-medium text-black mb-[20px]">Explore our mild hybrids</p>
                            <p className="text-l font-light text-[#787878] mb-[20px]">Learn more and shop our range of mild hybrid cars.</p>
                            <button className="pt-[10px] pr-[40px] pb-[10px] pl-[40px] border-[1px] rounded-md border-[#1c6bba] text-[#1c6bba] font-medium uppercase hover:bg-[#14487b] hover:text-white duration-[.4s] hover:duration-[.4s]">Learn More</button>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 bg-[#fafafa]">
                        <img className="w-[600px] h-[260px]" src="https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/images/homepage/local-content/2560-x-1096.jpg?iar=0&w=1080" alt="" />

                        <div className="pl-[50px] pt-[50px] font-text-roboto text-center">
                            <p className="text-4xl font-medium text-black mb-[20px]">Certified by Volvo</p>
                            <p className="text-l font-light text-[#787878] mb-[20px]">The safety you deserve from a certified pre-owned Volvo, for the <br /> moments that matter the most.</p>
                            <button className="pt-[10px] pr-[40px] pb-[10px] pl-[40px] border-[1px] rounded-md border-[#1c6bba] text-[#1c6bba] font-medium uppercase hover:bg-[#14487b] hover:text-white duration-[.4s] hover:duration-[.4s]">Learn More</button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Homepage;