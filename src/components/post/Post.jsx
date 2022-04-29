import React from "react";
import "./post.css";

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <img src="https://source.unsplash.com/800x600/?spring,flower" alt="dd"></img>
            </figure>
            <div className="post__body">
                <span className="post__cate">javascript</span>
                <div className="post__title">봄은 꽃이다, 서초 양재꽃시장과 양재천 벚꽃길</div>
                <div className="post__desc">
                    서울 양재꽃시장은 화훼공판장과 F스퀘어로 나뉜다. 1991년에 문을 연 화훼공판장은 전국 최대 규모 법정
                    도매시장으로, 봄이 되면 화사한 빛깔로 가득하다.
                </div>
                <div className="post__info">
                    <span className="author">유희봉</span>
                    <span className="date">2022-04-03</span>
                </div>
            </div>
        </article>
    );
}
