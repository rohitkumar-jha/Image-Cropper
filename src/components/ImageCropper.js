import React, { useState } from 'react';

const ImageCropper = ({ imgPath, handelReset }) => {
    const [croppedImg, setCroppedImg] = useState(imgPath);

    const cropHangel = (e) => {
        e.preventDefault();
        const img_to_crop = document.getElementById('originalImg');
        const croppedImgcanvas = document.createElement("canvas");
        const croppedImgCtx = croppedImgcanvas.getContext("2d");
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) to understand
        croppedImgCtx.drawImage(img_to_crop, 0, 0, 100, 100, 0, 0, 100, 100);
        img_to_crop.src = croppedImgcanvas.toDataURL("image/png");
        setCroppedImg(img_to_crop.src);
    }

    const resetHandel = (e) => {
        e.preventDefault();
        handelReset();
    }

    return (
        <div className="mt-2">
            <img src={imgPath} alt="to crop" className="img-fluid" id="originalImg" /><br />
            <button onClick={e => cropHangel(e)} className="btn btn-success mr-2 mt-2">Crop</button>
            <a className="btn btn-success mt-2" href={croppedImg} download>Save</a>
            <button onClick={e => resetHandel(e)} className="btn btn-success ml-2 mt-2">Reset</button>
        </div>
    )
}

export default ImageCropper;