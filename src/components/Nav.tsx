import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
       <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
       
      <img src={Logo} alt="Dev Stack Logo" className='w-24 h-auto object-contain' />
      <ul className="flex gap-6 items-center text-xs font-medium">
      
        <li className="text-[#DB2777]">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-4 items-center text-xs font-medium">
        <button className="text-gray-700">Sign In</button>
        <button className="rounded-full bg-[#DB2777] text-white px-5 py-2">Sign Up</button>

      </div>
        </div>
    </nav>
    );
};

export default Nav;