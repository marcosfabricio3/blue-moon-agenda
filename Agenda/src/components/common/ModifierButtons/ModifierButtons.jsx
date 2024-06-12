import React, { useState } from 'react';

function ModifierButtons({ defaultImage, hoverImage, onClick }) {
    const [image, setImage] = useState(defaultImage);


    return (
        <img
            src={image}
            className='EditorElement'
            onMouseOver={ () => setImage(hoverImage)} 
            onMouseOut={ () => setImage(defaultImage)}
            onClick={onClick}
            alt="" 
        />
    )
};

export default ModifierButtons;