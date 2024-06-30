/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createRef, useRef, useState } from "react";
import "./uploade.scss"
import { MdAttachFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { FaPause } from "react-icons/fa";


const Uploadeproject = ({images , setimages}) => {
// const [currentimage , setcurrentimage] = useState()
const videoref = useRef({})
const [duration, setIsDeuration] = useState({});
const handelDelateimage = (imageName) => {
const newimages = images.filter((image) => image.name !== imageName)
return setimages(newimages)
}
const handelplay = async (imagenam) => {
  
    const video = videoref.current[imagenam]
    try {
        if(video.paused) {
            await video.play().catch((error) => {
                 console.log("Play error:", error)})
               
         }else{
            await video.pause()
           
         }
    } catch (error) {
        console.log(error);
    }
   

//    return setPlay(!isPlay)
}

  return (
    <div className="uploads  border">
        <div className="row  gap-4" style={{width:"80%" , height:"100%"}}>
            <div className="text-lenght-image d-flex gap-2 mb-4">
            <span>
                    <MdAttachFile />
             </span>
                <p>الصور والفديوهات ({images.length})</p>
              

            </div>
            {
                images.map((image , i) => {
                    return (
                        <div className="col-3 mb-4"  key={image.name}>
                          
                              <div className="imagesection">
                                {
                                    image?.type?.includes("image") ?  (
                                        <>
                                        <img src={URL.createObjectURL(image)} alt={image.name}  />
                                        <div className="overly">
                                        <button type="button" className="delate-image" onClick={() => handelDelateimage(image.name)}>
                                            <RiDeleteBin6Line />
                                        </button>
                                        <p className="size-file"><span>{image.size / 1024 < 900  ? (image.size / 1024).toFixed(2) + "KB" : (image.size / (1024 * 1024)).toFixed(2) + "MB"}</span></p>
                                    </div> </>):
                                   <div className="video">
                                    <video ref={(video) => videoref.current[image.name] = video} src={URL.createObjectURL(image)} alt={image.name}  type="video/mp4"/>
                                        <div className="overly-video">
                                        <button type="button" className="delate-video" onClick={() => handelDelateimage(image.name)}>
                                           
                                            <RiDeleteBin6Line /> 
                                           
                                        </button>
                                   
                                            <button className="play-video" type="button" onClick={() => handelplay(image.name)}>
                                                
                                                   
                                                      <FaPlayCircle />
                                                
                                           
                                            </button>
                                            <p className="size-video"><span>{image.size / 1024 < 900  ? (image.size / 1024).toFixed(2) + "KB" : (image.size / (1024 * 1024)).toFixed(2) + "MB"}</span></p>

                                        </div>
                                   </div>
                                     
                                    
                                }
                            
                        
                        
                        </div>
                        </div>
                      
                    )
                })
            }

</div>
<br />

    </div>
  )
}

export default Uploadeproject
{/* <div>
<p>{image.name}</p>
<p> </p>
</div> */}