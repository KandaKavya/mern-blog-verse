import ProductCard from "./ProductCard.jsx"
import NavBar from "./NavBar.jsx"
import SignUp from "./SignUp.jsx"
import SignIn from "./SignIn.jsx"
import Home from "./Home.jsx"
import {Routes,Route} from 'react-router-dom'

//w-1/3
// sm 40rem(640px)
// md 48rem(768px)
// lg 64rem(1024px)
// xl 80rem(1280px)
// 2xl 96rem()
const App = () =>{
  
  return(
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
    </Routes>
  )
}
export default App;