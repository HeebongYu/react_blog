import React from "react";
import "./mypage.css";

export default function Mypage() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="mypage__wrap">
                <div className="mypage__form">
                    <h3>회원정보</h3>
                    <div className="mypage__intro">
                        <div className="face">
                            <img
                                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="이미지"
                            ></img>
                        </div>
                    </div>
                    <div className="mypage__info">
                        <div className="intro">자기소개해주세요~</div>
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
                            <li>
                                <strong>성별</strong>
                                <span>남자</span>
                            </li>
                            <li>
                                <strong>사이트</strong>
                                <span>https://hb-react-blog.netlify.app/</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mypage__btn">
                        <button href="/">수정하기</button>
                        <button href="/">탈퇴하기</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
