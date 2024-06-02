import './DataModifier.css';
import React, { useState } from 'react';
import ImageToggle from '../ImagToggle.jsx';
import FormAdd from '../Forms/AddForm/FormAdd.jsx'

// Icon inactive
import LogoAdd from '../../assets/Images/icons/addInactive.png';
import LogoEdit from '../../assets/Images/icons/editInactive.png';
import LogoDelete from '../../assets/Images/icons/deleteInactive.png';
// Icon Active
import ActiveAdd from '../../assets/Images/icons/addActive.png';
import ActiveEdit from '../../assets/Images/icons/editActiv.png'
import ActiveDelete from '../../assets/Images/icons/deleteActive.png';

function DataModifier () {
  return(
    <>
    <div className='EditSpace'>
      <div className='EditorContainer'>

        <ImageToggle defaultImage={LogoAdd}hoverImage={ActiveAdd}/>
        <ImageToggle defaultImage={LogoEdit}hoverImage={ActiveEdit}/>
        <ImageToggle defaultImage={LogoDelete}hoverImage={ActiveDelete}/>

      </div>
    </div>

    <FormAdd/>
    
    </>
  )
};

export default DataModifier;