import moment from 'moment'
import React from 'react'

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = moment().startOf("day").seconds(time).format("H:mm:ss")
    return (
        <div className="absolute bottom-2 right-2 bg-black text-white py-1 px-2 text-xs rounded-md">
            {videoLengthInSeconds}
        </div>
    )
}

export default VideoLength