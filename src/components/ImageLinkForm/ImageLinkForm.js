import { render } from '@testing-library/react';
import './ImageLinkForm.css';

const ImageLinkForm = ({inputChange, buttonSubmit}) => {
    return(
        <div>
            <p>
                {'This Magic Brain will detect faces in your pictures! Give it a try'}
            </p>
            <div className='center'>
                <div className='inputBox center'>
                    <div className='container'>
                        <input onChange={inputChange} type='text' placeholder='Paste your link!'></input>
                        <button onClick={buttonSubmit}>Detect!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;