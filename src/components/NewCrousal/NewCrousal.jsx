import React, { useEffect, useRef } from 'react';
import './NewCrousal.css';

const NewCrousal = () => {
    const slidesRef = useRef([]);

    useEffect(() => {
        const slides = slidesRef.current;

        function addActive(slide) {
            slide.classList.add('active');
        }

        function removeActive(slide) {
            slide.classList.remove('active');
        }

        addActive(slides[0]);
        const interval = setInterval(() => {
            for (let i = 0; i < slides.length; i++) {
                if (i + 1 === slides.length) {
                    addActive(slides[0]);
                    setTimeout(removeActive, 550, slides[i]);
                    break;
                }
                if (slides[i].classList.contains('active')) {
                    setTimeout(removeActive, 550, slides[i]);
                    addActive(slides[i + 1]);
                    break;
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="crousalCOmponent">

        <div className="carousel">
                <div className="carousel-item" ref={el => slidesRef.current[1] = el}>
                    <img className="slide-image" src='/TopCrousalIMages/1st.png' ></img>
                    
                </div>
                <div className="carousel-item" ref={el => slidesRef.current[0] = el}>
                    <img className="slide-image" src='/TopCrousalIMages/new.jpeg' ></img>
                    
                </div>
                
                
            {/*<div className="carousel-item" ref={el => slidesRef.current[2] = el}>
            <img className="slide-image" src='/TopCrousalIMages/2.png' ></img>
                 <div className="slide-image"
                    style={{ backgroundImage: 'url(/TopCrousalIMages/DSC_2109.jpg)' }}>
                </div> 
            </div>*/}
            <div className="carousel-item" ref={el => slidesRef.current[2] = el}>
            <img className="slide-image" src='/TopCrousalIMages/Faculty.png' ></img>
                {/* <div className="slide-image"
                    style={{ backgroundImage: 'url(/TopCrousalIMages/PCE.jpg)' }}>
                </div> */}
            </div>
            
        </div>
        </div>
    );
};

export default NewCrousal;
