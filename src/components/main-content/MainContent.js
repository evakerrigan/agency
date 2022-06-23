import Theme from  './theme/Theme';

const MainContent = () => {


return (
  <div  className="wrapper">
    <section className="portfolio main">
      <div className="container">
      <nav className="portfolio-menu">
        <ul className="portfolio-list">
          <li className="portfolio-item">
            <a href="#/" className="portfolio-link">Show All</a>
          </li>
          <li className="portfolio-item">
            <a href="#/" className="portfolio-link">Design</a>
          </li>
          <li className="portfolio-item">
            <a href="#/" className="portfolio-link">Branding</a>
          </li>
          <li className="portfolio-item">
            <a href="#/" className="portfolio-link">Illustration</a>
          </li>
          <li className="portfolio-item">
            <a href="#/" className="portfolio-link">Motion</a>
          </li>
        </ul>
      </nav>
      <div className="portfolio-theme">
        <ul className="portfolio-theme-list" id="themelist">
        <Theme/>
        </ul>        
      </div>
      <button className="portfolio-button">load more</button>
      </div>
    </section>
  </div>
)

}

export default MainContent