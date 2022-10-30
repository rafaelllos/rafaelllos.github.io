import './Header.css';

function Header({carDesc}) {
    return (  
        <header>
            <div className="header__title">
                <p>
                    {carDesc.title}
                </p>
            </div>

            <div className="header__img">
                <img src={carDesc.image} alt="" />
            </div>

            <div className="header__text">
                <p>
                    <span>{carDesc.span_text}</span>
                    {carDesc.text}
                </p>    
            </div>
        </header>
    );
}

export default Header;