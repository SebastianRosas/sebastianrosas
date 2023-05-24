import React, { useState }  from 'react'
import './archive.css'
import crisisImage from './Assets/Images/archivePreviews/crisis.png';
import paranoiaImage from './Assets/Images/archivePreviews/paranoiaCover.png';
import acoploImage from './Assets/Images/archivePreviews/acoploLogo.png';
import alimentameImage from './Assets/Images/archivePreviews/alimentamePoster.png';
import piwaImage from './Assets/Images/archivePreviews/piwa.png';



const Archive = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  }
  
  return (
    <div className='archiveContainer'>
      <div className='archiveTitleContainer'>
        ARCHIVE
      </div>
      <div className='columsContainer'>
              <div className='columContainer'>
                    <div className='columTitleContainer'>
                      GRAPHIC DESIGNE
                    </div>
                    <div className='columListContainer'>

                    <div className="titleListContainer">
                      <div className="container " onMouseEnter={handleHover} onMouseLeave={handleHover}>
                      CR1S1S<span className='dateArchiveList'>@2023</span>
                      {isHovered && <img className="image" src={crisisImage} alt="Imagen" />}
                      </div>
                      </div>


                    <div  className="titleListContainer">
                     <div className="container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                     BRUNO<span className='separationArchiveList'>-</span>PARANOIA <span className='dateArchiveList'>@2023</span>
                     {isHovered && <img className="image" src={paranoiaImage} alt="Imagen" />}
                      </div>
                      </div>

                    <div className="titleListContainer">
                    <div className="container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                      ACOPLO<span className='dateArchiveList'>@2022</span>
                      {isHovered && <img className="image" src={acoploImage} alt="Imagen" />}
                      </div>
                      </div>

                      <div className="titleListContainer">
                        <div className="container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                        ROCIO LEVANTESI<span className='separationArchiveList'>-</span>ALIMENTAME.JPG <span className='dateArchiveList'>@2022</span>
                        {isHovered && <img className="image" src={alimentameImage} alt="Imagen" />}
                        </div>
                      </div>

                      <div className="titleListContainer">
                        <div className="container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                        PIWA LA PIWA<span className='separationArchiveList'>-</span>MARGARITA XIRU <span className='dateArchiveList'>@2022</span>
                       {isHovered && <img className="image" src={piwaImage} alt="Imagen" />}
                        </div>
                      </div>

                      <div className='titleListContainer'>
                        <div>
                        AÑO CERO<span className='dateArchiveList'>@2022</span>
                        </div>
                      </div>

                      <div className='titleListContainer'>
                        <div>
                        WOBBLE BOYS<span className='separationArchiveList'>-</span>WOBBLE IS BACK <span className='dateArchiveList'>@2022</span>
                        </div>
                     </div>

                      <div className='titleListContainer'>
                        <div>
                        WOBBLE BOYS<span className='separationArchiveList'>-</span>TIME TO WABBLE <span className='dateArchiveList'>@2021</span>
                        </div>
                      </div>
                    
                    </div>
              </div>
              <div className='columContainer extraSpaceTopMobile'>
                    <div className='columTitleContainer'>
                     WEB DEVELOPING
                    </div>
                    <div className='columListContainer'>
                    <div className='titleListContainer'>
                      ACOPLO <span className='dateArchiveList'>@2022</span>
                      </div>
                      <div className='titleListContainer'>
                      SIMPLESTUDIO  <span className='dateArchiveList'>@2021</span>
                      </div>
                      <div className='titleListContainer'>
                      SOBREMESA  <span className='dateArchiveList'>@2020</span>
                      </div>
                      <div className='titleListContainer'>
                      RAMIRO  <span className='dateArchiveList'>@2020</span>
                      </div>
                    </div>
              </div>
              <div  className='columContainer extraSpaceTopMobile'>
                    <div className='columTitleContainer'>
                     DRAWINGS
                    </div>
                    <div className='columListContainer '>
                    <div className='titleListContainer'>
                      UNTITLED  <span className='dateArchiveList'>@2023</span>
                      </div>
                      <div className='titleListContainer'>
                      UNTITLED  <span className='dateArchiveList'>@2023</span>
                      </div>
                      <div className='titleListContainer'>
                      SHADOWS#  <span className='dateArchiveList'>@2023</span>
                      </div>
                      <div className='titleListContainer'>
                      ESQUEMAS<span className='separationArchiveList'>-</span>2<span className='dateArchiveList'>@2022</span>
                      </div>
                      <div className='titleListContainer'>
                      ESQUEMAS<span className='separationArchiveList'>-</span>1<span className='dateArchiveList'>@2022</span>
                      </div>
                    </div>
              </div>
      </div>
    </div>
  )
}

export default Archive