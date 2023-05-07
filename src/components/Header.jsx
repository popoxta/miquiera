import {Link, NavLink} from "react-router-dom";

export default function Header({atHome}) {

    return (
        <>
            <div className={atHome ? 'header no-title' : 'header' }>
                {!atHome && <Link to={'/'}><h1 className={'title'}>MIQUIERA</h1></Link>}
                <nav className={'nav'}>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'shop'}>Shop</NavLink>

                    <div className={'nav-search'}>
                        <label htmlFor={'query'}>Search</label>
                        <input name={'query'} id={'query'}/>
                    </div>

                    <div className={'nav-cart'}>
                        1
                    </div>

                </nav>

            </div>
        </>
    )
}