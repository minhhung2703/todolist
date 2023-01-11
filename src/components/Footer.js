import navIcon1 from '../assets/img/github.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export default function Footer() { 
    return (
        <div className="flex justify-between py-5 bg-footer
        bg-cover bg-center bg-no-repeat
            xl:flex-row xl:px-40 
            md:px-10 md:flex-row
            sm:flex-col">
            <div className="flex flex-col text-center">                
                <a href="/" className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-4xl font-bold uppercase mb-2">
                    Logo
                </a>
                <p>© 2022 TodoList</p>
            </div>
            <div className="flex justify-center space-x-5 
            sm: mt-4">
                <a href="https://github.com/CuongXuanLe"><img  src={navIcon1} alt="LinkedIn"/></a>
                <a href="https://www.facebook.com/cuongle322002/"><img  src={navIcon2} alt="Facebook"/></a>
                <a href="https://www.instagram.com/lee.c_23/"><img  src={navIcon3} alt="Instagram"/></a>
            </div>
        </div>
    )
}