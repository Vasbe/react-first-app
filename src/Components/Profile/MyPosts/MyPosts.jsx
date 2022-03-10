import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";
const MyPosts = () => {
    return (
        <div className="content">
            <div>
                Мои посты
                <div>Новый пост</div>
                <textarea>Напишите о чём-нибудь</textarea>
                <button>Добавить пост</button>
            </div>
            <Post message = 'Как ты?' />
            <Post message = 'Это мой первый пост' />
        </div>
    );
};

export default MyPosts;
