import Home from "./components/Home"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks"
import { useState } from "react"



function App() {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState<boolean>(false);

  return (
    <div>
      <NavBar isHamburgerOpened={isHamburgerOpened} setIsHamburgerOpened={setIsHamburgerOpened}/>
      <Home isHamburgerOpened={isHamburgerOpened} />
      <About isHamburgerOpened={isHamburgerOpened}/>
      <Portfolio isHamburgerOpened={isHamburgerOpened}/>
      <Experience isHamburgerOpened={isHamburgerOpened}/>
      <Contact isHamburgerOpened={isHamburgerOpened}/>
      <SocialLinks isHamburgerOpened={isHamburgerOpened}/>
    </div>
  )
}

export default App
