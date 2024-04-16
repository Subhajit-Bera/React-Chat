import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

const InputForm = () => {
    return (
        <div className='input-form'>
            <form className='form'>
                <input
                    type="text"
                    // value={newMessage}
                    // onChange={typingHandler}
                    placeholder="Enter a message.."
                />
                <button type="submit" className='send-button'>
                    <AiOutlineSend />
                </button>
            </form>
        </div>
    )
}

export default InputForm
