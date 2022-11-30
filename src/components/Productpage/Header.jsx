function Header({header_preview}) {
    return (  
        <header className="pt-[100px] max-w-[1200px] m-auto flex flex-col justify-center items-center">
            <p className="header__title font-text-roboto text-[50px] font-[400] text-black mb-[20px]">
                {header_preview.title}
            </p>

            <img className="header__img mb-[20px]" src={header_preview.image} alt="" />
            
            <p className="header__text font-text-roboto font-[900] text-[30px] text-[#646464]">
                <span className="text-black">{header_preview.span_text}</span>{header_preview.text}
            </p>    
        </header>
    );
}

export default Header;