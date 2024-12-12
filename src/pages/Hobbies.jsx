import React from 'react'
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Hobbies () {
  return (
    <div style = {{ textAlign: "center", }}>

<br></br>
<h1 style= {{ color: "cyan", fontSize: "50px", textShadow: "0 0 10px cyan, 0 0 20px cyan", }}><b> MY HOBBIES</b></h1>
<br></br><br></br>

      <Card border="info" style={{ width: '20rem',  color: 'white' }} >
      <Card.Img variant="top" src="https://th.bing.com/th?id=OIF.nCZOqvR%2fvvDYj7zg8y1Idw&w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <Card.Header><b>GAMING🎮</b></Card.Header>
        <Card.Body>
          <Card.Title>Lurking guy</Card.Title>
          <Card.Text>
          Gaming is the first hobby of mine that I love doing. I played a lot of varieties now starting from <b>PS2, Xbox360, PC and mobile</b>. Since I was a kid gaming is the only thing that help me when I’m feeling down or alone. I’ve met a bunch of people that turns from stranger to friends. Some people might say it’s a complete waste of time but for us gamers we couldn’t say it’s a waste of time when we enjoy it while doing. This hobby of mine started on elementary after transferring to Camarines Sur some random kid asks me to play this fps game called <b>Medal of honor</b> on ps2 aka videogame man. I’m hooked up immediately the gameplay is different and the graphics at that time is great and that’s where it all start. <u>GTA V, COD black ops and State of Decay</u> on <b>Xbox360</b>, <u>League of legends, Point Blank and Rules of Survival</u> on <b>PC</b>, <u>Mobile Legends</u> on <b>Mobile</b> and <b>PS2</b> <u>Need for Speed Underground 2, Gta San Andreas, Basara, Resident Evil 2, Time Splitter and of course Medal of honor</u>.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card border="info" style={{ width: '20rem', color : 'white' }}>
       <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.kxji22GgXrT4FlUhy6B7UgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" /> 
        <Card.Header><b>WATCHING📺</b></Card.Header>
        <Card.Body>
          <Card.Title>Hibernation process</Card.Title>
          <Card.Text>
          I love watching Youtube, Anime, and Movies, because its one of the easiest type of hobby to consume, not only that I enjoy the things that I learn while watching those especially youtube. Speaking of Youtube Pewdiepie is the first person that I watch regularly on Youtube however these days I barely watch him because he shifts from being a gaming guy to a dad which is quite awesome, I’m happy for him. Now movies believe it or not I love watching war movies because of the history and intense action in the battlefield. I also love animation type of movies the best animated movies for me are Cars, Toy Story, Wall e and a lot more especially Pixar movies. What about anime, anime is great the combination of genre that I usually watch are romance and comedy if I want to lighten my day, action and thriller if I want spice things up lastly crime and mystery for rainy days.  Watching content is also my way of relaxing aside from gaming and also watching content doesn’t require a lot of effort to do.
          </Card.Text>
        </Card.Body>
      </Card>





    </div>
  )
}

export default Hobbies;