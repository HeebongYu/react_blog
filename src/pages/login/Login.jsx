import React from "react";
import "./login.css";

export default function Login() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="login__type">
                <div className="login__form">
                    <h3>로그인</h3>
                    <form>
                        <fieldset>
                            <legend className="ir_so">회원가입 입력폼</legend>
                            <div className="login__box">
                                <div>
                                    <label htmlFor="youEmail">이메일</label>
                                    <input
                                        type="email"
                                        id="youEmail"
                                        name="youEmail"
                                        placeholder="sample@naver.com"
                                        autoComplete="off"
                                        autoFocus
                                        required
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
                                        required
                                    ></input>
                                </div>
                            </div>
                            <button id="loginBtn" className="login__btn" type="submit">
                                로그인
                            </button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
    );
}
