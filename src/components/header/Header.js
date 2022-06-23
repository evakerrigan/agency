import logo from '../../assets/image/logo.png';

const Header = () => {

  return (
    <div  className="wrapper">
      <header className="header">
        <div className="container">
        <div className="header-menu">
          <div className="header-logo">
            <a href="#/" className="header-link">
              
              <img className="header-img" src={logo} alt="logo Agency" />
            </a>
          </div>
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <a href="#/" className="header-nav-link">About</a>
              </li>
              <li className="header-item">
                <a href="#/" className="header-nav-link">Services</a>
              </li>
              <li className="header-item">
                <a href="#/" className="header-nav-link">Pricing</a>
              </li>
              <li className="header-item">
                <a href="#/" className="header-nav-link">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="header-contact">
            <a href="#/" className="header-contact-link">contact</a>
          </div>
        </div>
        <h2 className="header-page-title">Portfolio</h2>
        <p className="header-page-description">
        Agency provides a full service range including technical skills, design, business understanding.
        </p>  
        </div>      
      </header>
    </div>
  )
  }
  
  export default Header