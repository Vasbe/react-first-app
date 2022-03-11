import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                <div className="dialogs_items_users">
                    <div classNames='dialogs__items__users__user'>
                        <NavLink to={"/dialogs/1"}>Vasbe</NavLink>
                    </div>
                    <div className='dialogs__items__users__user'>
                        <NavLink to={"/dialogs/2"}>Chelpokoloko</NavLink>
                    </div>
                    <div className='dialogs__items__users__user'>
                        <NavLink to={"/dialogs/3"}>Nekromant</NavLink>
                    </div>
                    <div className='dialogs__items__users__user'>
                        <NavLink to={"/dialogs/4"}>V1lgor</NavLink>
                    </div>
                    <div className='dialogs__items__users__user'>
                        <NavLink to={"/dialogs/5"}>YaRicko</NavLink>
                    </div>
                </div>

                <div className='messages'>
                    <div className="dialogs__items__message">Привет</div>
                    <div className="dialogs__items__message">Как дела?</div>
                    <div className="dialogs__items__message">Скоро диплом</div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;