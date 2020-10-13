import React, { useState } from 'react';
import ImageCropper from './components/ImageCropper';

const App = () => {
    const [showIme, setShowIme] = useState(false);
    const [imgPath, setImgPath] = useState('');

    const imageUpload = (e) => {
        var val = e.target.files[0];
        var validExtensions = ['jpg', 'png', 'jpeg'];
        let fileExtension = val.name.split('.').pop();
        let isValidImage = validExtensions.filter(i => i === fileExtension).length;
        if (isValidImage > 0) {
            setShowIme(true)
            setImgPath(URL.createObjectURL(e.target.files[0]));
        } else {
            alert('Please upload a valid image file.')
        }
        e.target.value = null;
    }

    const handelReset = () => {
        setShowIme(false)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h4>Image Cropper</h4>
                    <input type="file" className="form-control" title="Upload image" onChange={e => imageUpload(e)} />
                    {showIme ? <ImageCropper imgPath={imgPath} handelReset={handelReset} /> : ''}
                </div>
            </div>
        </div>
    )
}

export default App;