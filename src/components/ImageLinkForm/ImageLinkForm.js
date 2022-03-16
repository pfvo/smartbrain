import { render } from '@testing-library/react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p>
                {'This Magic Brain will detect faces in your pictures! Give it a try'}
            </p>
            <div className='center'>
                <div className='inputBox center'>
                    <div className='container'>
                        <input type='text' placeholder='Paste your link!'></input>
                        <button>Detect!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;