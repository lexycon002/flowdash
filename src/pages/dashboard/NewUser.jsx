import React from 'react';
import user01 from "../../assets/image01.png";
import user02 from "../../assets/image02.png";
import user03 from "../../assets/image03.png";
import user04 from "../../assets/image04.png";
import user05 from "../../assets/image05.png";
import user06 from "../../assets/image06.png";
import { BsThreeDotsVertical, BsShare, BsChatLeftText, BsEnvelope, BsPaperclip, BsCalendarCheck } from "react-icons/bs";

function NewUser() {
    const newData = [
        {image: user01, firstName: "Elon Jonado", secondName: "elon_deo"},
        {image: user02, firstName: "Alexzender Clito", secondName: "zli_alexzender"},
        {image: user03, firstName: "Michle Tinko", secondName: "tinko_michle"},
        {image: user04, firstName: "KailWemba", secondName: "wemba_kl"},
        {image: user05, firstName: "Henhco Tino", secondName: "henhco_tino"},
        {image: user06, firstName: "Gonjiko Fernando", secondName: "gonjiko_fernando"},
        {image: user01, firstName: "Specer Kilo", secondName: "specer_kilo"},
        {image: user02, firstName: "KailWemba", secondName: "wemba_kl"},
    ];

  return (
    <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text-main">New Users</h3>
            <span className="text-xl text-gray-500 cursor-pointer hover:text-text-main"><BsThreeDotsVertical/></span>
        </div>

        {/* List - Applied 'hover-scrollbar' here */}
        <div className="flex-1 overflow-y-auto hover-scrollbar pr-2 space-y-5">
            {newData.map((item, idx)=> (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <img src={item.image} alt="user" className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-indigo-500 transition-all" />
                        <div>
                            <h3 className="text-sm font-medium text-text-main">{item.firstName}</h3>
                            <p className="text-xs text-gray-500">{item.secondName}</p>
                        </div>
                    </div>
                    {/* Checkbox Placeholder (Square) */}
                    <div className="w-4 h-4 rounded border border-gray-600 group-hover:border-indigo-500 transition-colors"></div>
                </div>
            ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center text-gray-400">
            <BsShare className="cursor-pointer hover:text-text-main transition-colors" size={16}/>
            <BsChatLeftText className="cursor-pointer hover:text-text-main transition-colors" size={16}/>
            <BsEnvelope className="cursor-pointer hover:text-text-main transition-colors" size={18}/>
            <BsPaperclip className="cursor-pointer hover:text-text-main transition-colors" size={18}/>
            <BsCalendarCheck className="cursor-pointer hover:text-text-main transition-colors" size={16}/>
        </div>
    </div>
  )
}

export default NewUser;