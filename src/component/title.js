import React from 'react';
import UploadForm from './uploadForm';
const Title = () => {
    return (
        <div className="title">
            <h1>React Firebase</h1>
            <div style={{marginTop:30,marginBottom:30,textAlign:"center"}}>
            <UploadForm/>
            </div>
        </div>
    )
}

export default Title;