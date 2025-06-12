import { createRoot } from 'react-dom/client'
import './index.css'
import photo from './react.svg'
const root = createRoot(document.getElementById('root'))


/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

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
    