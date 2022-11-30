function Card({models}) {
    return ( 
        <div className={models.css + " grid place-items-center"}>
            <div className="font-text-roboto max-w-[300px] group hover:text-text-[#585ec2] duration-[.2s] hover:duration-[.2s] cursor-pointer">
                <p className="text-sm font-medium text-[#787878] uppercase group-hover:text-[#585ec2] duration-[.2s] group-hover:duration-[.2s]">
                    {models.suptitle}
                </p>
                <p className="text-black font-medium text-[18px] group-hover:text-[#585ec2] duration-[.2s] group-hover:duration-[.2s]">
                    {models.title}
                </p>
                <p className="text-sm font-normal text-[#787878] mb-[20px] group-hover:text-[#585ec2] duration-[.2s] group-hover:duration-[.2s]">
                    {models.subtitle}
                </p>
                <div className="inline-block overflow-hidden max-w-[300px] max-h-[300px]">
                    <img className="card__img block group-hover:scale-[1.1] duration-[.4s] group-hover:duration-[.4s]" src="https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/my23/v60-polestar-engineered/pdp/v60-hybrid-hero-4x3.jpg?iar=0&w=720" alt="" />
                </div>
                <p className="mt-[20px] text-[16px] text-[#787878] group-hover:text-[#585ec2] duration-[.2s] group-hover:duration-[.2s]">
                    Experience more electric power with our advanced plug-in hybrids.
                </p>
            </div>
        </div>
    );
}

export default Card;