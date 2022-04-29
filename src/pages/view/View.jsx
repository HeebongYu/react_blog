import React from "react";
import "./view.css";
import SinglePost from "../../components/singlePost/SinglePost";
import SingleLabel from "../../components/singleLabel/SingleLabel";
import Side from "../../components/side/Side";

export default function View() {
    return (
        <main id="view__wrap">
            <SingleLabel />
            <div className="container">
                <div className="view__layout">
                    <SinglePost />
                    <Side />
                </div>
            </div>
        </main>
    );
}
