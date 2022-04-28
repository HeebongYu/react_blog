import React from "react";
import "./login.css";

export default function Login() {
    return (
        <main id="contents">
            <h2 class="ir_so">컨텐츠 영역</h2>
            <section class="join-type gray">
                <div class="member-form">
                    <h3 class="mb30">로그인</h3>
                    <form action="loginSave.php" name="login" method="post">
                        <fieldset>
                            <legend class="ir_so">회원가입 입력폼</legend>
                            <div class="join-box">
                                <div>
                                    <label for="youEmail">이메일</label>
                                    <input
                                        type="email"
                                        id="youEmail"
                                        name="youEmail"
                                        placeholder="sample@naver.com"
                                        autocomplete="off"
                                        autofocus
                                        required
                                    ></input>
                                </div>
                                <div>
                                    <label for="youPass">비밀번호</label>
                                    <input
                                        type="password"
                                        id="youPass"
                                        name="youPass"
                                        maxlength="20"
                                        placeholder="비밀번호를 적어주세요."
                                        autocomplete="off"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <button id="joinBtn" class="join-submit" type="submit">
                                로그인
                            </button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
    );
}
