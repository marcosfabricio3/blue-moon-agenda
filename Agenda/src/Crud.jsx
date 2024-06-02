import './Crud.css';
import React, { useState } from 'react';
import ImageToggle from './ImagToggle';
import FormAdd from './FormAdd.jsx'

// Icon inactive
import LogoAdd from './Images/icons/addInactive.png';
import LogoEdit from './Images/icons/editInactive.png';
import LogoDelete from './Images/icons/deleteInactive.png';
// Icon Active
import ActiveAdd from './Images/icons/addActive.png';
import ActiveEdit from './Images/icons/editActiv.png'
import ActiveDelete from './Images/icons/deleteActive.png';

function Crud () {
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

export default Crud;