import './App.css'
import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState, useRef } from 'react';
import landscape from './assets/landscape.jpg';
import CircleType from 'circletype'

function App() {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(100);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div className="loading" style={{
        opacity: !isLoaded ? '1' : '0',
        zIndex: !isLoaded ? '3' : '1',
        tranistion: '250ms'
      }}>
        <h1>
          <div ref={circleInstance}>Loading Loading Loading Loading Loading Loading</div>
        </h1>
      </div>

      <Parallax translateY={[-20, 20]} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', paddingBottom: '15rem' }}>
        <div className="bg">
          {!isLoaded &&
            <img src={landscape} onLoad={() => {
              setIsLoaded(true);
            }} className="main-image" />
          }
          <Parallax translateY={['-1200px', '1200px']}>
            <h1 className="title">
              for a relaxing
              <br />
              <span>journey,</span>
              <br />
              call us.
            </h1>

            <Parallax opacity={[-1, 3]}>
              <h2 className="links">
                <span>book a trip</span>
                <div>
                  <FontAwesomeIcon onClick={() => {
                    window.open('https://github.com/Yefee8')
                  }} icon={faGithub} style={{ marginRight: '10px', color: '#FF8008' }} />
                  <FontAwesomeIcon onClick={() => {
                    window.open('https://instagram.com/yefee8')
                  }} icon={faInstagram} />
                </div>
              </h2>
            </Parallax>
          </Parallax>
        </div>
      </Parallax>
    </div>
  )
}

export default App
