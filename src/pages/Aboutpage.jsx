function Aboutpage() {
    return (  
        <>
            <div className="pt-[150px] max-w-[1200px] m-auto font-text-roboto">
                <p className="text-[44px] font-bold text-center mb-[13px]">Our story</p>

                <div className="flex flex-row justify-center items-center gap-[20px] mb-[40px]">
                    <button className="text-[#787878] text-[17px] font-medium transition-[.4s] hover:text-black hover:transition-[.4s] focus:border-b-2 focus:border-blue-800 focus:bg-transparent focus:text-black">Our story</button>
                    <button className="text-[#787878] text-[17px] font-medium transition-[.4s] hover:text-black hover:transition-[.4s] focus:border-b-2 focus:border-blue-800 focus:bg-transparent focus:text-black">Our heritage</button>
                </div>

                <p className="text-[20px] font-light text-[#787878] text-center mb-[70px]">
                    From the very outset Volvo Cars has been a brand for people who <br /> care about the world we live in and the people around us. 
                    We have <br /> made it our mission to make life easier, better and safer for everyone.
                </p>
                <img className="mb-[70px]" src="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/ultimate-safety-test/xc60-1_21-9.jpg?iar=0&w=1920" alt="" />

            </div>  
        </>
    );
}

export default Aboutpage;