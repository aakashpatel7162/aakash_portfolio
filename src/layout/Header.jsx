import React, { useRef, useEffect,useContext } from 'react';
import IMAGES from "../assets/images";
import data from "../constant/data";
import './layout.style.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CartList from '../cart/Cartlist';  // Ensure this path is correct
import { useState } from 'react';
import { FrameContext } from '../cart/FrameProvider'; // Import FrameContext for frame interaction
export default function Header({ toggleSidebar, menuBar }) {
  const sidebarRef = useRef(null);  // Create a ref for the sidebar
  const { profile } = data;  // Destructure profile from data
  const { contactInfo, setFrameVisible } = useContext(FrameContext); // Access contact data from FrameContext

  const [activeIndex, setActiveIndex] = useState(0); // Initialize to the first link

  const handleScroll = (scrollTo) => {
    setActiveIndex(scrollTo); // Set the active index based on the clicked item

    let scrollHeight = 0;

    // Determine the scroll position based on the clicked item index
    switch (scrollTo) {
      case 0:
        scrollHeight = 0; // Scroll to the top
        break;
      case 1:
        scrollHeight = 700; // Adjust according to your layout
        break;
      case 2:
        scrollHeight = 1280; // Adjust according to your layout
        break;
      case 3:
        scrollHeight = 100; // Adjust according to your layout
        break;
      case 4:
        scrollHeight = 2050; // Adjust according to your layout
        break;
      default:
        break;
    }

    window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
  };
  useEffect(() => {
    if (contactInfo) {
      handleScroll(4);  // Scroll to the Contact section
    }
  }, [contactInfo]);
  const handleScrollUpdate = () => {
    const scrollPosition = window.scrollY; // Current scroll position

    data.header_list.forEach((_, index) => {
      let sectionStart; // Starting point for the current section
      let sectionEnd; // Ending point for the current section

      // Determine the starting and ending scroll position for each section
      switch (index) {
        case 0:
          sectionStart = 0;
          sectionEnd = 400; // Adjust as per your layout
          break;
        case 1:
          sectionStart = 400;
          sectionEnd = 800; // Adjust as per your layout
          break;
        case 2:
          sectionStart = 800;
          sectionEnd = 1200; // Adjust as per your layout
          break;
        case 3:
          sectionStart = 1200;
          sectionEnd = 1600; // Adjust as per your layout
          break;
        case 4:
          sectionStart = 2050;
          sectionEnd = Infinity; // End of the last section
          break;
        default:
          break;
      }

      // Check if the current scroll position is within the section
      if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
        setActiveIndex(index); // Set active index based on section
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollUpdate);
    return () => {
      window.removeEventListener('scroll', handleScrollUpdate); // Clean up the event listener
    };
  }, [data.header_list]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setTimeout(()=>{
          toggleSidebar();
        },1000)
     
      }
    };

    if (menuBar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuBar, toggleSidebar]);

  
  return (
    <div className={`header_main ${menuBar ? 'expanded' : ''}`} style={{ backgroundColor: '#343a40', padding: '10px 15px', borderBottom: '1px solid #e1e1e1', display: 'flex', alignItems: 'center' }}>
      
      {menuBar && (
        <div ref={sidebarRef}>
          <CartList onClose={toggleSidebar} />  
        </div>
      )}

      <div className="logo" onClick={toggleSidebar} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '5px' }}>
        <MenuOutlinedIcon style={{ color: 'white', marginRight: '5px' }} />
        <img src={IMAGES.logo} alt="Logo" className="logo_image" style={{ height: '40px', marginLeft:"8px" }} />
      </div>

      <div className="center_nav" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        {data.header_list.map((text, index) => (
          <div key={index}          className={`nav_link ${activeIndex === index ? 'active_nav_ink' : ''}`} 
          
          onMouseOver={e => e.currentTarget.style.color = 'red'} onMouseOut={e => e.currentTarget.style.color = ''} onClick={()=>handleScroll(index)}>
            {text}
          </div>
        ))}
      </div>

      <div className="profile_section" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img src={profile.img} alt="Profile" className="profile_image" style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }} />
        <div className="profile_info" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', color: 'white' }}>{profile.name}</span>
          <span style={{ fontSize: '12px', color: '#adb5bd' }}>{profile.occupation}</span>
        </div>
      </div>
     
    </div>
  );
}
