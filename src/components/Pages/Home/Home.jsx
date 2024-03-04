import React from 'react'
import { Main } from '../../Layouts/Header/Main/Main'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { Services } from './Services/Services'
import './Homen.css'
import { Projects } from './Projects/Projects'
import { References } from './References/References'
import { Experience } from './Experience/Experience'







export const Home = () => {
  return (
    <>

    <Main>
      <PictureProfile/>
      <Services/>
      <Projects/>
      <References/>
      <Experience/>
      
    </Main>
    </>
  )
}
