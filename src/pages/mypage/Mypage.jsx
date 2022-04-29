import React from "react";
import "./mypage.css";

export default function Mypage() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join-type">
                <div className="member-form">
                    <h3>회원정보</h3>
                    <div className="join-intro">
                        <div className="modify_img">
                            <div htmlFor="youPhoto" className="youFace youFace2">
                                <img src="../assets/img/mypage/" alt="이미지"></img>
                            </div>
                        </div>
                        <div className="intro">자기소개:</div>
                    </div>
                    <div className="join-info">
                        <ul>
                            <li>
                                <strong>이메일</strong>
                                <span>qhd1994@naver.com</span>
                            </li>
                            <li>
                                <strong>닉네임</strong>
                                <span>개미</span>
                            </li>
                            <li>
                                <strong>이름</strong>
                                <span>유희봉</span>
                            </li>
                            <li>
                                <strong>생일</strong>
                                <span>1994-07-28</span>
                            </li>
                            <li>
                                <strong>번호</strong>
                                <span>010-7579-0168</span>
                            </li>
                        </ul>
                    </div>
                    <div className="join-btn">
                        <a href="/">수정하기</a>
                        <a href="/">탈퇴하기</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
