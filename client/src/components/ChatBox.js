import React from 'react'
import ScrollableFeed from "react-scrollable-feed";
import Avatar from 'react-avatar';
import InputForm from './InputForm';
import ChatHeader from './ChatHeader';

const ChatBox = () => {
    return (

        <div className='chatBox'>
            <ChatHeader/>
            <ScrollableFeed>
                <div class="chat-container">
                    <Avatar size="50" round={true} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80' />
                    <div class="chat-bubble">
                        <div class="chat-info">
                            <span class="user-name">Gregory Goolsby</span>
                            <span class="chat-time">17:28</span>
                        </div>
                        <p class="chat-message">Hey everyone!</p>
                    </div>
                </div>
                <div class="chat-container">
                    <Avatar size="50" round={true} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80' />
                    <div class="chat-bubble">
                        <div class="chat-info">
                            <span class="user-name">Gregory Goolsby</span>
                            <span class="chat-time">17:28</span>
                        </div>
                        <p class="chat-message">Hey everyone!</p>
                    </div>
                </div>
                <div class="chat-container">
                    <Avatar size="50" round={true} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80' />
                    <div class="chat-bubble">
                        <div class="chat-info">
                            <span class="user-name">Gregory Goolsby</span>
                            <span class="chat-time">17:28</span>
                        </div>
                        <p class="chat-message">Hey everyone!</p>
                    </div>
                </div>
                <div class="chat-container">
                    <Avatar size="50" round={true} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80' />
                    <div class="chat-bubble">
                        <div class="chat-info">
                            <span class="user-name">Gregory Goolsbyzzz</span>
                            <span class="chat-time">17:28</span>
                        </div>
                        <p class="chat-message">Hey everyone!</p>
                    </div>
                </div>
                <div class="chat-container">
                    <Avatar size="50" round={true} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80' />
                    <div class="chat-bubble">
                        <div class="chat-info">
                            <span class="user-name">Gregory Goolsbysd</span>
                            <span class="chat-time">17:28</span>
                        </div>
                        <p class="chat-message">Hey everyone!</p>
                    </div>
                </div>
            </ScrollableFeed>
            {/* <span class="user-name">Gregory Goolsby</span>
            <span class="chat-time">17:28</span> */}

            <InputForm/>

        </div>

    )
}

export default ChatBox
