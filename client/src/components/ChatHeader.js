import React from 'react'
import { FaUserGroup } from "react-icons/fa6";

const ChatHeader = () => {
    return (

        <nav>
            <div className='first'>
                <h1>
                    Introductions
                </h1>
                <span>efhof oifoisdf dfs</span>
            </div>


            <div className='second'>
                <p>3/100</p>
                <FaUserGroup size={20}/>
            </div>
        </nav>

    )
}

export default ChatHeader
