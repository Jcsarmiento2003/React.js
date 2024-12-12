import React from 'react';
import './Footer.css';
function Footer() {

  return (
    <div className='footer'>
    <footer style = {{textAlign: "center"}}>
      <p>&copy; 2024 Carlo. All rights reserved.</p>   
      <a href = "https://www.facebook.com/johncarlo.sarmiento.752">
    Facebook
      </a> 
      &nbsp;&nbsp;&nbsp;
      <a href = "https://github.com/settings/profile">
    Github
      </a>
    </footer>
    </div>
  
  );
}
export default Footer;