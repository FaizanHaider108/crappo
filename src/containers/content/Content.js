import React from 'react'
// count in
import CountUp from "react-countup";
// Use inView from react
import { useInView } from 'react-intersection-observer';
// import CSS file
import './content.css'
// import icons
import Growth from "../../assets/graph.png";
import person from "../../assets/person.png";
import world from "../../assets/world.png";

const Content = () => {
    const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className='Content section__padding' id='about'> 
        <div className='Content-section'>
          <div className='Content_flex-box'>

              <div className='Content_flex'>
              <img src={Growth} alt='Grapth' />
              <div className='Content_heaading-content'>
                <div ref={ref} className='content_text'>
                <h1>$
                  {
                  inView ? <CountUp start={0} end={30} duration={3}/> : null}
                  B</h1>
                <p>Digital Currency Exchanged</p>
                </div>
                </div>
              </div>
              <div className='Content_flex'>
              <img src={person} alt='Grapth' />
              <div className='Content_heaading-content'>
                <div ref={ref} className='content_text'>
                <h1>
                  {
                  inView ? <CountUp start={0} end={10} duration={3}/> : null}
                  M+</h1>
                <p>Trusted Wallets Investor</p>
                </div>
                </div>
              </div>
              <div className='Content_flex'>
              <img src={world} alt='Grapth' />
              <div className='Content_heaading-content'>
                <div ref={ref} className='content_text'>
                <h1>
                  {
                  inView ? <CountUp start={0} end={195} duration={3}/> : null}
                  </h1>
                <p>Countries Supported</p>
                </div>
                </div>
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default Content