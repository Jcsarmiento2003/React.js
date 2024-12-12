import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function About () {
  return (

    <div className="About-page">
      <br/> 
      <h1 style= {{ color: "cyan", fontSize: "50px", textShadow: "0 0 10px cyan, 0 0 20px cyan", textAlign: "center", }}><b> ABOUT ME</b></h1>
      <br/><br/>

      <Container>
      <Row>
      <Col sm={9}>
          <h2><b>John Carlo Sarmiento</b></h2>
          <br/>
          <p>I am a stdent from NCF currently taking BSIS course in 2nd year
            20 years old while making this website, from Naga City Camarines Sur. I am an aspiring game developer, I love playing video games and watching anime, movies and youtube and I also like reading visual novels.</p>
          <br/>
          <hr/>
      </Col>

      <Col sm={3}>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/397467961_6644225025655589_6293205501332996821_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeH6soBCvQDLBdr6hUnGYjlzhA_hPzUN11SED-E_NQ3XVF5Y2ETEW2x1Sh_FTa-StnM8wwcVXwjKTGV5VOTjZgab&_nc_ohc=M_xhISZocooQ7kNvgFIjF_v&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=AavtD2TY4eRq0T5KZxL6DjE&oh=00_AYChJmrhxMUnGVAlkR8qtGLWCoc4KOExe7tj-KGEBuVdqw&oe=675E3A36" />
    </Card>

      </Col>
      
      </Row>
    </Container>












      
    
    </div>
  )
}

export default About
