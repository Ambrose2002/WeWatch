import React, { useState } from 'react';
import './uploadForm.css';

const UploadForm = ({ onClose }) => {
    console.log('form')
    const [videoTitle, setVideoTitle] = useState('');
    const [videoFile, setVideoFile] = useState(null);

    const handleTitleChange = (e) => {
        setVideoTitle(e.target.value);
    };

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform your video upload logic here
        console.log('Video Title:', videoTitle);
        console.log('Video File:', videoFile);

        // Clear the form after submission
        setVideoTitle('');
        setVideoFile(null);

        // Close the modal
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Video Title:
                        <input type="text" className='video_title' value={videoTitle} onChange={handleTitleChange} />
                    </label>

                    <label>
                        Choose a Video:
                        <input type="file" accept="video/*" onChange={handleFileChange} />
                    </label>

                    <button type="submit" className='upload_button'>Upload Video</button>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;
