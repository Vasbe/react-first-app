import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

    let PostData =
        [
            {id: 1, postMessage: 'Как семёрка?', likesCount: 12},
            {id: 2, postMessage: 'Это мой первый пост', likesCount: 16},
            {id: 3, postMessage: 'Закрутил?'},
            {id: 4, postMessage: 'Как ты?'},
            {id: 5, postMessage: 'Привет'},
            {id: 6, postMessage: 'Привет'},
        ]

    return (
        <div className="mypost__conetent">
            <div>
                <h3>Мои посты</h3>
                <div>Новый пост</div>
                <div>
                    <textarea>Напишите о чём-нибудь</textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <Post message={PostData[0].postMessage} likesCount = {PostData[0].likesCount}/>
            <Post message={PostData[1].postMessage} likesCount = {PostData[1].likesCount}/>

        </div>
    );
};

export default MyPosts;
