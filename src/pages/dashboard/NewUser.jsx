import React from 'react'
import user01 from "../../assets/image01.png"
import user02 from "../../assets/image02.png"
import user03 from "../../assets/image03.png"
import user04 from "../../assets/image04.png"
import user05 from "../../assets/image05.png"
import user06 from "../../assets/image06.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoShareSocialOutline, IoChatboxEllipsesOutline, IoAttach, IoCalendarClearOutline   } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function NewUser() {
    const newData = [
        {image: user01, firstName: "Jasmine florence", secondName: "jas_flo", icon : IoShareSocialOutline },
        {image: user02, firstName: "Elyon Kingsley", secondName: "Ely_King", icon : IoChatboxEllipsesOutline},
        {image: user03, firstName: "Patrick Curtis", secondName: "Pat_Cur", icon : IoAttach},
        {image: user04, firstName: "Hammad Olamilekan", secondName: "Ham_Ola", icon : IoCalendarClearOutline},
        {image: user05, firstName: "Abdoulaye Malik", secondName: "abdou_mal", icon : MdOutlineEmail},
        {image: user06, firstName: "Floian Teckhiro", secondName: "flo_teck"},
        {image: user01, firstName: "Brabas Schlupp", secondName: "Bra_Schl"},
        {image: user01, firstName: "Ricardo lilian", secondName: "Ric_lil"},
    ]
  return (
    <div className="new-user-container">
        <div className="new-user">
            <h3>New user</h3>
            <span><BsThreeDotsVertical/></span>
        </div>
        {newData.map((item, idx)=> (
            <>
            <div className="new-user-cont">
                <div className="new-user-wrap">
                    <div className="new-user-img">
                        <img src={item.image} alt="user image" />
                    </div>
                    <div className="new-user-data">
                        <h3>{item.firstName}</h3>
                        <p>{item.secondName}</p>
                    </div>
                </div>
                <input type="checkbox" />
            </div>
            <div className="user-icons">
                <span>{item.icon}</span>
            </div>
            </>
        ))}
    </div>
  )
}

export default NewUser