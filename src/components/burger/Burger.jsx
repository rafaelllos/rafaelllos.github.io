import './Burger.css'

function Burger({header, items, active, setActive}) {
    return (
        <>
            <nav>
                <div className="burger-btn" onClick={() => setActive(!active)}>
                    <span />
                </div>
                <div className="burger__logo">
                    <a href="">auto.com</a>
                </div>
            </nav>

            <div className={active ? 'burger active' : 'burger'} onClick={() => setActive(false)}>
                
                {/* <div className="blur" /> */}

                <div className="burger__content" onClick={e => e.stopPropagation()}>

                    <div className="burger__header">
                        {header}
                    </div>

                    <ul>
                        {items.map((item) => 
                            <li>
                                <span className='material-icons'>
                                    {item.icon}
                                </span>
                                
                                <a href={item.href}>
                                    {item.value}
                                </a>
                            </li>
                        )}
                    </ul>

                </div>
            </div>  
        </>
    );
}

export default Burger;