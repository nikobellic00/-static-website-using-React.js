import React from 'react';


function Profilecard({title,handle, image, content}) {
  return (
     <div>
    <div className="card">
  <div className="card-image">
    <figure className="image is-1by1">
      <img src={image} alt="logos"/>
    </figure>
    </div>
    <div className="card-content">
    <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
      </div>
      <div className='content'>{content}</div>
      </div>
  </div>
     </div>
  )
}

export default Profilecard