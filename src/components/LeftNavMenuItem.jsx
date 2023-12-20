import React from 'react'


const LeftNavMenuItem = ({text, icon, classname, action}) => {
  return (
    <div className={"text-white cursor-pointer h-9 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + classname} onClick={action}>
      <span className="text-[15px] mr-5">{icon}</span>{text}
    </div>
  )
}

export default LeftNavMenuItem