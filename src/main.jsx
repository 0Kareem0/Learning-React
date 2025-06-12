import { createRoot } from 'react-dom/client'
import './index.css'
import photo from './react.svg'
const root = createRoot(document.getElementById('root'))


function App(){
  return(
    <main>
      <header>
        <img src={photo} alt="photo"/>
        <h1>Fun facts about React</h1>
      </header>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <footer>© 2025 Kareem development. All rights reserved.</footer>
      </main>
  )
}


root.render(
  <App/>
)
    