import './FaceRecognition.css'

const FaceRecognition = ({box, imageUrl}) => {
    return(
    <div className='center' style={{margin:'0', width:'100&'}}>
        <div style={{position: 'absolute', paddingTop: '1em'}}>
            <img id='clarifaiImage' style={{width:'500px', height:'auto'}} alt='' src={imageUrl}/> 
            {console.log(box)}
            <div className='FaceBox' style={{right: box.rightCol, top: box.topRow, left: box.leftCol, bottom: box.bottomRow}}></div>
        </div>
    </div>
    )
}

export default FaceRecognition;