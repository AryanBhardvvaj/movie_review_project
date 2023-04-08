import { useEffect, useState } from "react";
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"
import image4 from "./img2.jpg"

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
    <div className="trailer">
    
    <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/v8yrZSkKxTA"
  frameborder="0"></iframe>
  </div>
    <div className="images">
      <img  width={640} height={360} src={allImages[selectedImage]} alt="Movie Name" /> <br />
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button"
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      >PREV</button>

      <button class="btn btn-primary" type="button"
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      >NEXT</button>
     </div> 

    </div>
  );
}

export default Movie;