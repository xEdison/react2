import React from 'react'
import services from '../../../../assets/Sena2.png'
import experience from '../../../../assets/react.png'
import node from '../../../../assets/node.png'
import mongo from '../../../../assets/mongo.png'
import java from '../../../../assets/java.png'

import './Experience.css'
export const Experience = () => {
  return (
    <section>
          
          <h1><img class="Services" src={services} alt='services'/>EXPERIENCIA</h1>
          <div className="all">
              <div className='one'>
              <img class="Node" src={node} alt='node' /><br />
              <progress max='100' value='40'></progress>
              <p className='base'>BASE</p>
              </div>
              <div className='one'>
              <img class="Node" src={experience} alt='experience' /><br />
              <progress max='100' value='60'></progress>
              <p className='base'>INTERMEDIO</p>
              </div>
              <div className='one'>
              <img class="Node" src={mongo} alt='mongo' /><br />
              <progress max='100' value='50'></progress>
              <p className='base'>INTERMEDIO</p>
              </div>
              <div className='one'>
              <img class="Node" src={java} alt='java' /><br />
              <progress max='100' value='50'></progress>
              <p className='base'>INTERMEDIO</p>
              </div>
          </div>
    </section>
  )
}
