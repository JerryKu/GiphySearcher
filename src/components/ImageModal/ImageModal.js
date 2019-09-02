import React from 'react';

function ImageModal (props) {
        return (
            props.image.images ? (
                <div className="image-modal-container">
                    <div className="dark-background"></div>
                    <span className="close-button" onClick={props.onCloseModal}>X</span>
                    <div className="image-modal-content">
                        <div className="modal-title">{props.image.title}</div>
                        <img className="modal-image" src={props.image.images.original.url} alt={props.image.title}/>
                        <div><span>URL: </span><input type="text" value={props.image.url}></input></div>
                    </div>
                </div>
            ) : <div></div>
        )
}

export default ImageModal;