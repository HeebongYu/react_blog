import React from "react";
import "./post.css";

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <img src="https://source.unsplash.com/800x600/?nature,water" alt="dd"></img>
            </figure>
            <div className="post__body">
                <span className="post__cate">javascript</span>
                <div className="post__title">포스트 제목입니다</div>
                <div className="post__desc">
                    post__desc post__desc post__desc post__desc post__desc post__desc post__desc post__desc post__desc
                    post__desc post__desc post__desc post__desc post__desc
                </div>
                <div className="post__info">
                    <span className="author">유희봉</span>
                    <span className="date">2022-04-03</span>
                </div>
            </div>
        </article>
    );
}
