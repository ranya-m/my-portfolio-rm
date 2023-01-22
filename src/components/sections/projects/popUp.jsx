import React from "react";
import imgtest from "../../../assets/img/profile-square.jpg";

function PopUp({onClose }) {
    return (
        <div onClick={onClose} className="overlay">
          <div 
          onClick={(e) => {
            e.stopPropagation()
          }} 
          className="modalContainer">
            <img src={imgtest} alt="" />
    
            <div className="modalParts">
                <div className="modalTop">
                    <h3 className="modalTitle"></h3>
                     <p onClick={onClose} className="closeBtn"> X </p>
                </div>
              
                <div className="modalBottom">
                    <p>Test description of a project.Test description of a project.Test description of a project. </p>
                    <a href='https://github.com/ranya-m?tab=repositories' target='_blank' className="text-[0.9rem] font-medium shadow-lg hover:bg-spaceBlue rounded-full py-2 px-6 hover:text-mylightOpaque bg-mylight bg-opacity-95 text-mydark cursor-pointer ">See more projects</a>
                </div>
            </div>
          </div>
        </div>
      );
}

export default PopUp;

