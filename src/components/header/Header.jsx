import './header.css';

function Header() {
  return (
    <header>
      <a href='/' className='logo'>
        REACT
      </a>
      <nav>
        <a href='#home' className='nav-link'>
          Home
        </a>
        <a href='#about' className='nav-link'>
          About
        </a>
        <a href='#contact' className='nav-link'>
          Contact us
        </a>
      </nav>
    </header>
  );
}

export default Header;
