import { useEffect, useState } from "react";
import Todaysmovie from "./TodaysMovie";
import image1 from "./img1.png"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"
import image4 from "./img2.jpg"
import Card from "./startcards";
import cadstyle from "./cardstyle.css";


function Movie() {


  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages] = useState([image1, image2, image3, image4])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 10000)
  }, [])

  return (
    <div>
    <link rel="stylesheet" href={cadstyle} type="txt/css"/>
  <br/>
  <br/>
  <br/>
    <div className="trailer">
    <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/v8yrZSkKxTA"
  frameborder="0"></iframe>
  
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
    <div className="images">
    <div className="cardg">
      
    <Card/>
    </div>
    <div className="pics ">
      <img  width={500} height={360} src={allImages[selectedImage]} alt="Movie Name" /> <br />
      </div>
    <div className="cardg">
      
    <Card/>
    </div>
    </div>
    <br/>
    <div class="d-grid gap-2 col-6 mx-auto button-wrapper">
      <button class="btn fill" type="button"
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      >PREVIOUS IMAGE</button>

      <button class="btn fill" type="button"
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      >NEXT IMAGE</button>
     </div> 
     <div className="moremovies"> 
     </div>

    </div>
  );
}

export default Movie;