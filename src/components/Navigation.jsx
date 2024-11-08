

const Navigation = () => {
    return(
        <div>
        <nav className="container">
          <div
            className="logo">
            <img src="/images/brand.png" alt="brand" />
          </div>
          <ul className="flex">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">Contact</li>
            <li href="#">About us</li> 
  
          </ul>
  
          <button>
            login
          </button>
        </nav>
      </div>
    )
}

export default Navigation;