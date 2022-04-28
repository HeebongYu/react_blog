import React from "react";
import "./posts.css";
import Post from "../post/Post";

function PostFor() {
    const rendering = () => {
        const result = [];
        for (let i = 0; i < 12; i++) {
            result.push(<Post />);
        }
        return result;
    };
    return rendering();
}

export default function Posts() {
    return (
        <div className="container">
            <section className="post__cont">
                <PostFor />
            </section>
        </div>
    );
}
