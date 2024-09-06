import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='firstContainer'>
                <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1561396598/assets/d1/5e6c05-c663-4933-993a-7cd270b34a41/original/DPE2.1.2.jpg'/>
            </div>
            <div className='avatar'>
                <img src='https://img.freepik.com/darmowe-wektory/ptak-kolorowe-logo-wektor-gradientu_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'/>
            </div>
            <div className='nameOfSite'>
                Kaliop Delivery
                <div className='info'>
                    403 population & 408 observation
                </div>
                <div className='avatars'>
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'/>
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'/>
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'/>
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'/>
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'/>
                </div>
            </div>
            <div className='nav'>
                <button>wiedomosczi</button>
                <button>Lubicz to</button>
                <button>Shukai</button>
            </div>
            <div className='secondContainer'>
                <ul>
                    <li className='post'>
                        Posty
                        <div className='line'>
                        </div>
                    </li>
                    <li>
                        Informacie
                    </li>
                    <li>
                        Wzmianki
                    </li>
                    <li>
                        Opimie
                    </li>
                    <li>
                        observacia
                    </li>
                    <li>
                        Zdjecia
                    </li>
                    <li>
                        Wiecej
                    </li>
                </ul>
                <div className='but'>
                    <button>
                        ...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;