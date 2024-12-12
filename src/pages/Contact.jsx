import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import './Contact.css';


function Contacts () {
  return (

    <div>
<br></br>

<h1 style= {{ color: "cyan", fontSize: "50px", textShadow: "0 0 10px cyan, 0 0 20px cyan", textAlign: "center", }}><b> CONTACT ME</b></h1>
<br></br><br></br>
    
<h1 style= {{ color: "cyan", fontSize: "20px", textShadow: "0 0 10px cyan, 0 0 20px cyan", textAlign: "center", }}><b> SOCIAL MEDIA</b></h1>   
      
      <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item variant = "info"  action href="https://www.facebook.com/johncarlo.sarmiento.752">
       Facebook profile
      </ListGroup.Item>

<h3 style= {{ color: "cyan", fontSize: "20px", textShadow: "0 0 10px cyan, 0 0 20px cyan", textAlign: "center", }}><b> EMAILS</b></h3>
      
<ListGroup.Item variant = "info">
  <a href="mailto:sarmientojohncarlo31@gmail.com">sarmientojohncarlo31@gmail.com</a>
</ListGroup.Item>

<ListGroup.Item variant = "info">
  <a href="mailto:jcsarmiento@gbox.ncf.edu.ph">jcsarmiento@gbox.ncf.edu.ph</a>
</ListGroup.Item>

<h4 style= {{ color: "cyan", fontSize: "20px", textShadow: "0 0 10px cyan, 0 0 20px cyan", textAlign: "center", }}><b> NUMBER</b></h4>
      <ListGroup.Item variant = "info">
      09939455441
      </ListGroup.Item>

      </ListGroup>

  </div>
  )
}

export default Contacts;