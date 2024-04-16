import React from 'react'
import ScrollableFeed from "react-scrollable-feed";
import InputForm from './InputForm';
import ChatHeader from './ChatHeader';
import Message from './Message';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]

const ChatBox = () => {
    return (

        <div className='chatBox'>
            <ChatHeader/>
            <ScrollableFeed>
                

                <Message name="Alan" time="17:28" message="Hey everyone!" />
                <Message name="Dean" time="17:30" message="Introduce Yourself" />
                <Message name="Carol" time="17:35" message="Hey everyone!" />
                <Message name="Bob" time="16:11" message="Hey everyone!" />
                <Message name="Alan" time="16:28" message="My name is Alan" />

            </ScrollableFeed>
            {/* <span class="user-name">Gregory Goolsby</span>
            <span class="chat-time">17:28</span> */}

            <InputForm/>

        </div>

    )
}

export default ChatBox
