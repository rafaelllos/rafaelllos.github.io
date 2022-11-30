import { NavLink, Link } from 'react-router-dom';

function Burger({header, items, active, setActive}) {
    const setFocus = ({isActive}) => isActive ? 'active-link text-[#5050c8]' : 'duration-[.4s] hover:text-[#7378cb] hover:duration-[.4s]';

    return (
        <>
            <nav className="w-[170%] h-[60px] bg-[#e6e6e6] fixed z-50 flex items-center justify-start">
                <div 
                    className=
                        "burger-btn before:content-[''] before:absolute before:top-0 before:w-[20px] before:bg-black before:h-[2px] after:content-[''] after:absolute after:bottom-0 after:w-[20px] after:bg-black after:h-[2px] w-[20px] h-[20px] ml-[20px] relative cursor-pointer" 
                    onClick={() => setActive(!active)}>
                    <span className="absolute top-[9px] w-[20px] bg-black h-[2px]" />
                </div>

                <Link className="burger__logo font-text-freehand text-[40px] font-[400] text-black ml-[50px]" to='/'>auto.com</Link>

            </nav>

            <div className={active ? 'burger active fixed w-full h-full top-[60px] left-0 translate-x-0 duration-[.5s] font-text-roboto' : 'burger fixed w-full h-full top-[60px] left-0 translate-x-[-130%] duration-[.5s] font-text-roboto'} onClick={() => setActive(0)}>
                
                {/* <div className="blur w-full h-full left-[18.5%] backdrop-blur-[2px] absolute" /> */}

                <div className="burger__content w-[18.5%] h-full bg-[#e6e6e6] flex flex-col items-center" onClick={e => e.stopPropagation()}>

                    <div className="burger__header text-[2rem] text-black p-[10px] border-b-[.5px] border-black border-solid w-full text-center">
                        {header}
                    </div>

                    <ul className="flex items-center text-center flex-col mt-[10px] text-black no-underline text-[1.3rem] m-[5px_0]">
                        {items.map((item) => 
                            <li className="flex items-center">
                                <span className="material-icons text-black mr-[20px]">
                                    {item.icon}
                                </span>
                                
                                <NavLink to={item.href} className={setFocus}>
                                    {item.value}
                                </NavLink>
                            </li>
                        )}
                    </ul>

                </div>
            </div>  
        </>
    );
}

export default Burger;