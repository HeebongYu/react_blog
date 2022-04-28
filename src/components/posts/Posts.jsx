import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts() {
    return (
        <div className="container">
            <section className="post__cont">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </div>
    );
}
