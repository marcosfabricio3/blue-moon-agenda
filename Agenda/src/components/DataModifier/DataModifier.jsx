import './DataModifier.css';
import React, { useRef, useState, useEffect } from 'react';
import ModifierButtons from '../ModifierButtons.jsx';
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
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if(formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return(
    <>
    <div className='EditSpace'>
      <div className='EditorContainer'>

        <ModifierButtons defaultImage={LogoAdd}hoverImage={ActiveAdd}onClick={() => setShowForm(true)}/>

        <ModifierButtons defaultImage={LogoEdit}hoverImage={ActiveEdit}/>
        <ModifierButtons defaultImage={LogoDelete}hoverImage={ActiveDelete}/>

      </div>

      <div className='FormContainer'>
    {showForm && (
      <div className='FormAddContainer' ref={formRef}>
        <FormAdd/>
      </div>
    )}
    </div>
    
    </div>
    
    </>
  )
};

export default DataModifier;