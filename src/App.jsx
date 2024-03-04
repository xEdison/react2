import { useRoutes } from 'react-router-dom'
import './App.css'
import { Items } from './components/Items/Items'
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { Navbar } from './components/Navbar/Navbar'
import { NotFound } from './components/NotFount/NotFound'
import { Home } from './components/Pages/Home/Home'
import { References } from './components/Pages/Home/References/References'
import { Services } from './components/Pages/Home/Services/Services'
import { Title } from './components/Title/Title'
import { Sena } from './components/Sena/Sena'
import { FaFacebook, FaWhatsapp , FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Projects } from './components/Pages/Home/Projects/Projects'
import { Experience } from './components/Pages/Home/Experience/Experience'





const AppRoutes = () =>{
  let routes = useRoutes ([
    { path: '/', element: <Home/>}, 
    { path: '/services', element: <Services/>},
    { path: '/references', element: <References/>},
    { path: '/projects', element: <Projects/>},
    { path: '/experiencia', element: <Experience/>},
    { path: '*', element: <NotFound/>}
  ])
  return routes
}


function App() {
  

  return (
    <>
    <Header>
          <Logo/>
          <Title/>  
          <Navbar>
              <Items content = "Inicio" route='/'/>
              <Items content = "Perfil"  route='/services'/>
              <Items content = "proyectos" route='/projects'/>
              <Items content = "Referencias" route='/references'/>
              <Items content = "Experiencia" route='/experiencias'/>
              <Sena/>

          </Navbar>
          <div className='Networks'>
              <FaFacebook />
              <FaWhatsapp />
              <FaInstagram  />
              <FaTwitter  />
              <FaLinkedin />
          </div>
     


    </Header>

    <AppRoutes/>
    </>
  )
}

export default App
