import React from "react";
import "./singleLabel.css";

export default function SingleLabel() {
    return (
        <>
            <div className="view__label">
                <h3 className="title">봄은 꽃이다, 서초 양재꽃시장과 양재천 벚꽃길</h3>
                <div>
                    <span className="author">
                        <a href="/">유희봉</a>
                    </span>
                    <span className="date">2022-04-15</span>
                    <div>
                        <span className="modify">
                            <a href="/">수정</a>
                        </span>
                        <span className="delete">
                            <a href="/">삭제</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
