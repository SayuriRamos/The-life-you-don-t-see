import React, { useState, useEffect, useRef } from 'react';
import video from '../vi.mp4'
import { Container, Row, Col } from 'react-bootstrap';
import './home.css'
import paper2 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/paper2.png';
import paper1 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/paper1.png'
import titlelanding from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/titlelanding.png';
import titlelandingods from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/titlelandingods.png';





const VideoComponent = () => {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const [showComponent, setShowComponent] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (opacity === 0) {
      const hideTimer = setTimeout(() => {
        setShowComponent(false);
      }, 500);
      return () => clearTimeout(hideTimer);
    }
  }, [opacity]);

  if (!showComponent) {
    return <LandingPage />;
  }

  return (
    <div style={{
      opacity,
      transition: 'opacity 0.5s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <video width="100%" 
        height="100%" 
        muted 
        playsInline 
        ref={videoEl}
        src={video} 
      ></video>
    </div>
  );
};

const LandingPage = () => {
  return(
    <div className="home-container">
      <Container className='gradient-container' fluid style={{ minHeight: '100vh', padding: '2rem' }} >
        <Row className='sayuri justify-content-center align-items-center ' >
          <Col md={6} className='padding-text' >
            <Row>
            <img src={titlelanding} alt="Logo" width="450px" className='image-container'/>
            </Row>
            <Row style={{paddingTop: '20px'}}>
              <Col><p className='Msemibold' style={{ textAlign: 'justify' }}>El cortometraje animado explora diversas situaciones de discriminación e injusticia que afectan la vida de diferentes personas. A través de estas situaciones, se resalta la falta de comprensión por parte de quienes juzgan y perjudican a los demás. </p></Col>
              <Col><p className='Msemibold' style={{ textAlign: 'justify' }}>El objetivo del cortometraje es representar el impacto negativo que tienen estas formas de discriminación en la vida de los personajes, al mismo tiempo que critica la injusticia presente en nuestra sociedad. </p></Col>
            </Row>
          </Col>
          
          <Col md={6} className='center-img' style={{ paddingLeft:'0px', paddingRight:'100px'  }}>
            <img src={paper1} alt="Logo" width="400px" className='image-container'/>
          </Col>
        </Row>
      </Container>

      <Container fluid className='gradient-container' style={{ minHeight: '100vh', padding: '2rem' }} >
        <Row className='sayuri justify-content-center align-items-center'>
          <Col className='padding-text' md={6}  >
            <Row>
            <img src={titlelandingods} alt="Logo" width="450px" className='image-container'/>
            </Row>
          </Col>
          
          <Col md={6} className='center-img' style={{ paddingLeft:'0px', paddingRight:'100px'  }}>
            <img src={paper2} alt="Logo" width="400px" className='image-container'/>  
          </Col>
        </Row>
      </Container>
      </div>
    
    );    
};

const Home = () => {
    return (
      <div>
            <VideoComponent />
    </div>

    );
  };

export default Home;