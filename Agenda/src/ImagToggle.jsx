import React, { useState } from 'react';

function ImagToggle({ defaultImage, hoverImage}) {
    const [image, setImage] = useState(defaultImage);


    return (
        <img
            src={image}
            className='EditorElement'
            onMouseOver={ () => setImage(hoverImage)} 
            onMouseOut={ () => setImage(defaultImage)}
            alt="" 
        />
    )
};

export default ImagToggle;