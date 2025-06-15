import photo from '../react.svg'

 function Navbar() {
  return (
      <header>
          <nav>
              <img src={photo} alt="React logo" />
              <span>ReactFacts</span>
          </nav>
      </header>
  )
}

  export default Navbar