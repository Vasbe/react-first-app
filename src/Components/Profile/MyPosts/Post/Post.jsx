import React from "react";
import "./Post.css";
const Post = (props) => {
    return (
        <div className="content">
                <div className='post'>
                    <img src='https://avatars.yandex.net/get-music-user-playlist/59900/522453638.1003.652/m1000x1000?1513785396380&webp=false' />
                    {props.message}
                </div>
            <div>
                <span>Лайк</span>
                <span>Дизлайк</span>
            </div>

        </div>
    );
};

export default Post;
