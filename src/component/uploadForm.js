import React, { useState } from 'react';
import ProgressBar from './progressBar';

const UploadForm = () => {
    let [file, setFile] = useState(null);
    let [error, setError] = useState(null);

    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) => {
            let selected = e.target.files[0];
            setError('');
            if(selected && types.includes(selected.type)) 
            {
                setFile(selected);
            }else{
                setFile(null);
                setError('Please select an image file');
            }
    }

    return(
        <form>
            <label>
            <input style={{opacity:0}} type="file" onChange={changeHandler}/>
            <span style={{fontSize:70}}>+</span>
            </label>
            <label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
            </label>
        </form>
    )
}

export default UploadForm;