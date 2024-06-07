import React, { useRef, useState, useEffect } from "react";

// COMPONENTS
import ModifierButtons from "../common/ModifierButtons/ModifierButtons.jsx";
import FormAdd from "../Forms/AddForm/FormAdd.jsx";
import EditForm from "../Forms/EditForm/EditForm.jsx";
import DeleteForm from "../Forms/DeleteForm/DeleteForm.jsx";

// CSS
import "./DataModifier.css";

// Icon inactive
import LogoAdd from "../../assets/Images/icons/addInactive.png";
import LogoEdit from "../../assets/Images/icons/editInactive.png";
import LogoDelete from "../../assets/Images/icons/deleteInactive.png";

// Icon Active
import ActiveAdd from "../../assets/Images/icons/addActive.png";
import ActiveEdit from "../../assets/Images/icons/editActiv.png";
import ActiveDelete from "../../assets/Images/icons/deleteActive.png";

function DataModifier() {
  // HIDE FORM
    const [currentForm, setCurrentForm] = useState(null);
    const formRef = useRef(null);

    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setCurrentForm(null);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  //

  return (
    <>
      <div className="EditSpace">

        {/* EDIT BUTTONS */}
          <div className="EditorContainer">

            <ModifierButtons defaultImage={LogoAdd} hoverImage={ActiveAdd} onClick={() => setCurrentForm('add')}/>

            <ModifierButtons defaultImage={LogoEdit} hoverImage={ActiveEdit} onClick={() => setCurrentForm('edit')}/>

            <ModifierButtons defaultImage={LogoDelete} hoverImage={ActiveDelete} onClick={() => setCurrentForm('delete')}/>

          </div>
        {/*  */}

        {/* FORMS AREA */}
          <div className="FormContainer">

            {currentForm === 'add' && (
              <div className="FormAddContainer" ref={formRef}>
                <FormAdd />
              </div>
            )}

            {currentForm === 'edit' && (
              <div className="FormAddContainer" ref={formRef}>
                <EditForm />
              </div>
            )}

            {currentForm === 'delete' && (
              <div className="FormAddContainer" ref={formRef}>
                <DeleteForm />
              </div>
            )}
            
          </div>
        {/*  */}

      </div>
    </>
  );
}

export default DataModifier;