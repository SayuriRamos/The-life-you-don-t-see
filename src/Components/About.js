import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image2 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/Daniela.png';
import image1 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/Luis.png';
import image3 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/Dylan.png';
import image6 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/Mariana.png';
import image5 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/Sayuri.png';
import image4 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/LDDM.png';
import image7 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/lddmPaper.png';
import image8 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/image8.png';
import image9 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/image9.png';
import image10 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/image10.png';
import image11 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/image11.png';
import image12 from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/image12.png';





import './aboutstyle.css'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];

const images2 = [
  image8,
  image9,
  image10,
  image7,
  image11,
  image12
];


const ButtonGrid = ({ onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    onSelect(index);
  };

  return (
    <div className='divBotones'>
      <Row xs={3} md={2} className="justify-content-center">
        {images.map((image, index) => (
          <Col key={index} className="text-center" style={{ padding: '8px' }}>
            <Button
              onClick={() => handleButtonClick(index)}
              className={`rounded-button ${activeIndex === index ? 'active' : ''}`}>
              <img src={image} alt={`Image ${index + 1}`} className='image-container' />
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const ImageDisplay = ({ selectedImage }) => {
  return (
    <div className='container-done'>
      <img src={images2[selectedImage]} alt={`Selected Image`} width="700px" className='image-container' style={{paddingTop: '170px'}}/>
    </div>
  );
};

const About = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  return (
    <Container>
      <Row>
        <Col md={3} className="d-flex justify-content-center">
          <ButtonGrid onSelect={handleImageSelect} />
        </Col>
        <Col md={7}>
          <ImageDisplay selectedImage={selectedImage} />
        </Col>
      </Row>
      <div style={{backgroundColor: '#8FCAFF', height:'500px'}}>

      </div>
    </Container>
  );
};

export default About;