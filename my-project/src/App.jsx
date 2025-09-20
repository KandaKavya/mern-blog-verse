import ProductCard from "./ProductCard"
import NavBar from "./NavBar"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Home from "./Home"
import {Routes,Route} from 'react-router-dom'
function App(){
  
  return(
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
    </Routes>
  )
}
export default App