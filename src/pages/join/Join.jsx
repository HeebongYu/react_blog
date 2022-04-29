import React from "react";
import "./join.css";

export default function Join() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join__wrap">
                <div className="join__form">
                    <h3>회원가입</h3>
                    <form>
                        <fieldset>
                            <legend className="ir_so">회원가입 입력폼</legend>
                            <div className="join__box">
                                <div>
                                    <label htmlFor="youName">이름</label>
                                    <input
                                        type="text"
                                        id="youName"
                                        name="youName"
                                        maxLength="5"
                                        placeholder="이름을 적어주새요."
                                        autoComplete="off"
                                        autoFocus
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="youEmail">이메일</label>
                                    <input
                                        type="email"
                                        id="youEmail"
                                        name="youEmail"
                                        placeholder="Sample@naver.com"
                                        autoComplete="off"
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="youPass">비밀번호</label>
                                    <input
                                        type="password"
                                        id="youPass"
                                        name="youPass"
                                        maxLength="20"
                                        placeholder="비밀번호를 적어주세요."
                                        autoComplete="off"
                                    ></input>
                                </div>
                            </div>
                            <button id="joinBtn" className="join__btn" type="submit">
                                회원가입
                            </button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
    );
}
