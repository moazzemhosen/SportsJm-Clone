import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Astrox100zz.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/rafa21.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Ezone-2022.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PAANY-R.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/wilson-squash.jpg",

];


export const Carousel1 = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <>
    <div style={{ width: "98%", MaxHeight: "90%" , margin: "auto" , marginBottom: "35px"}}  >
        <Slide autoplay={autoplay}>
            {slideImages.map((item) => (
                <div className="each-slide" >
                    <div style={{ width: "100%", height: "auto" }}>
                        <img src={item} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                    </div>
                </div>
            ))}

        </Slide>
    </div >
</>
   
  );
};