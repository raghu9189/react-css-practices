import CardsSlider from "./components/CardsSlider"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import NoPage from "./components/NoPage"
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Footer/>} />
              <Route path="signup" element={<SignUp />} />
              <Route path="blog" element={<Home/>} />
              <Route path="*" element={<NoPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
