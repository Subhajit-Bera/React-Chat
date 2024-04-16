import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data';

import { MdEmojiEmotions } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const InputForm = () => {

    const [isPickerVisible, setPicerVisible] = useState(false);
    const [message, setMessage] = useState('');


    return (
        <div className='input-form'>
            <div className='emoji-picker-box'>
                {
                    isPickerVisible ?
                        (<IoIosClose  as button className='emoji-icon' onClick={() => setPicerVisible(false)} size='3rem' />)
                        :
                        (<MdEmojiEmotions as button className='emoji-icon' onClick={() => setPicerVisible(true)} size='3rem' />)

                }
                {/* <MdEmojiEmotions as button className='emoji-icon' onClick={() => setPicerVisible(!isPickerVisible)} size='3rem' /> */}
                <div className={isPickerVisible ? 'd-block' : 'd-none'}>
                    <Picker data={data} previewPosition="none" onEmojiSelect={(e) => {
                        setMessage(message + e.native)
                    }} />
                </div>
            </div>
            <form className='form'>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    placeholder="Enter a message.."
                />
                {/* <button type="submit" className='send-button'>
                    <AiOutlineSend size={20} />
                </button> */}

                <AiOutlineSend as button size='3rem' />
            </form>
        </div>
    )
}

export default InputForm
