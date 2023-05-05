
export default function Header() {
    return (
        <div className={'header'}>
            <h1 className={'title'}>MIQUIERA</h1>

            <nav className={'nav'}>
                <a  href={''}>Home</a>
                <a  href={''}>Shop</a>

                <div className={'nav-search'}>
                    <label htmlFor={'query'}>Search</label>
                    <input name={'query'} id={'query'}/>
                </div>

                <div className={'nav-cart'}>
                    1
                </div>

            </nav>

        </div>
    )
}