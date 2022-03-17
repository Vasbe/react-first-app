import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;
    return (
        <div className="dialogs_items_users">
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

const MessagesItem = (props) => {
    return (
        <div className="dialogs__items__message">{props.message}</div>
    );

}

const Dialogs = () => {

    let dialogsData =
        [
            {id: 1, name: 'Vasbe'},
            {id: 2, name: 'Chelpokoloko'},
            {id: 3, name: 'V1lgor'},
            {id: 4, name: 'Yariko'},
            {id: 5, name: 'Abdurozik'},
            {id: 6, name: 'ironfire5000'},
        ]
    let messageData =
        [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Шалом'},
            {id: 3, message: 'Привет'},
            {id: 4, message: 'Привет'},
            {id: 5, message: 'Привет'},
            {id: 6, message: 'Привет'},
    ]
    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                <div className="dialogs_items_users">
                    <div className='dialogs__items__user'>
                        <DialogItem name ={dialogsData[0].name} id = {dialogsData[0].id}/>
                        <DialogItem name ={dialogsData[1].name} id = {dialogsData[1].id}/>
                    </div>
                </div>
                <div className='messages'>
                    <MessagesItem message={messageData[0].message}/>
                    <MessagesItem message={messageData[1].message}/>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;