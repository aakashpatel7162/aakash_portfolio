import React, { useState, useContext, useEffect } from 'react';
import Frame from '../frame/Frame'; // Your Frame component
import Aboutus from '../component/Aboutus'; // Your Aboutus component
import Experience from '../component/Experience'; // Your Experience component
import Contact from '../component/Contact'; // Your Contact component
import { FrameContext } from '../cart/FrameProvider'; // Import Frame context
import './home.style.css';

export default function Main() {
    const { frameVisible } = useContext(FrameContext);
    const [isSlidingDown, setIsSlidingDown] = useState(false); // State for slide-down animation

    useEffect(() => {
        // Slide down when the frame becomes visible
        if (frameVisible) {
            setIsSlidingDown(true);
        } else {
            setIsSlidingDown(false);
        }
      window.scroll
    }, [frameVisible]);

    return (
        <div className="main_back">
            {frameVisible && <Frame />} {/* Show Frame when it's visible */}

            <div className={`aboutus ${isSlidingDown ? 'slide-down' : ''}`}>
                <Aboutus />
            </div>

            <Experience />
            <Contact />
        </div>
    );
}
