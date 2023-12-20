import React, { useContext } from 'react'

import LeftNavMenuItem from './LeftNavMenuItem'
import { categories } from '../utils/Constants'
import { Context } from '../context/contextAPI'
import { useNavigate } from 'react-router-dom'

const LeftNav = () => {

  const { selectCategory, setSelectCategory, mobileMenu } = useContext(Context)

  const navigate = useNavigate()

  const clickHandle = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name)
      case "home":
        return setSelectCategory(name)
      case "menu":
        return false
      default:
        break;
    }
  }

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black text-white/[0.9] absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""}`}>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem text={item.type === "home" ? "Home" : item.name} icon={item.icon} action={() => { clickHandle(item.name, item.type); navigate("/"); }} classname={`${selectCategory === item.name ? "bg-white/[0.15]" : ""}`} />
              {item.divider && (
                <hr className="my-5 border-white/[0.2]" />
              )}
            </React.Fragment>
          )
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5]">
          Clone by : Harsh Vashishta
        </div>
      </div>
    </div >
  )
}

export default LeftNav