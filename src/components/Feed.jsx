import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../context/contextAPI'

import LeftNav from './LeftNav'
import VideoCard from './VideoCard'


const Feed = () => {

  const { loading, searchResults } = useContext(Context)
  let [mystate, setmystate] = useState([])

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
    if (searchResults !== false) {
      setmystate(searchResults)
    }
  })



  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="group w-[calc(100%-240px)] h-full overflow-auto bg-black">
        <div className="grid w-[100%] md:grid-cols-11 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && mystate && mystate?.map((item) => {
            if (item?.type !== "video") return false
            return (
              <VideoCard key={item?.video?.videoId} video={item?.video} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Feed