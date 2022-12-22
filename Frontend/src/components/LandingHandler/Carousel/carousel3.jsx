
import React from "react";
import { Slide } from "react-slideshow-image";
import { useNavigate } from 'react-router-dom'

const products =[
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-16.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-20.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-23.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-25.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-28.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-29.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-33.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-34.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-37.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-38.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-07.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-08.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-15.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-02.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-10.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-16.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-20.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-23.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-25.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-28.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-29.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-33.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-34.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-37.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-38.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-07.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-08.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-15.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-02.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-10.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-16.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-20.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-23.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-25.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-28.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-29.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-33.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-34.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-37.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-38.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-07.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-08.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-15.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-02.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-10.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide1.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/BadmintonStringing.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide5.jpg",
  },
  {
    image:
      "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide2.jpg",
  },
];

export const Carousel3 = () => {
  const navigate = useNavigate();


    const style = {
        textAlign: 'center',
        background: '#fff',
        width: "80%",
        height: "80%",
        display: "flex",
        borderRadius: "5px",
        cursor: "pointer"


    };

    const properties = {
        duration: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div  style={{ width: "93%", MaxHeight: "98%" , margin: "auto"}} >
            <div>
                <Slide {...properties}>
                    {
                        products.map((item) => (
                            <div style={style} >


                                <div >
                                    <img width="140px" height="203px" src={item.image} alt="" />
                                </div>

                            </div>
                        ))
                    }
                </Slide>
            </div>
        </div>
    );
  
 
  
};


