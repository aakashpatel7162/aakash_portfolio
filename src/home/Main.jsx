import React, { useState, useContext, useEffect } from 'react';
import Frame from '../frame/Frame'; // Your Frame component
import Aboutus from '../component/Aboutus'; // Your Aboutus component
import Experience from '../component/Experience'; // Your Experience component
import Contact from '../component/Contact'; // Your Contact component
import { FrameContext } from '../cart/FrameProvider'; // Import Frame context
import OverviewSection from '../component/Overview'
import './home.style.css';

export default function Main() {
    const { frameVisible } = useContext(FrameContext);
    const [isSlidingDown, setIsSlidingDown] = useState(false); // State for slide-down animation

    useEffect(() => {
        if (frameVisible) {
            setIsSlidingDown(true);
        } else {
            setIsSlidingDown(false);
        }
      window.scroll(0,0)

    }, [frameVisible]);

    return (
        <div className="main_back">
            {frameVisible && <Frame />}
            <div className={`aboutus ${isSlidingDown ? 'slide-down' : ''}`}>
                <Aboutus />
            </div>

            <Experience />
            <OverviewSection/>
            <Contact />
        </div>
    );
}
