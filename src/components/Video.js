import React from 'react'
import video from '../images/video.mp4'
function Video() {
    return (
        <div>
            <section className="top-part">
                <video controls autoPlay loop>
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                </video>
            </section>
        </div>
    )
}
export default Video;