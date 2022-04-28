import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="/">
                    React <em>blog</em>
                </a>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">ABOUT</a>
                    </li>
                    <li>
                        <a href="/">CONTACT</a>
                    </li>
                    <li>
                        <a href="/">WRITE</a>
                    </li>
                    <li>
                        <a href="/join">JOIN</a>
                    </li>
                    <li>
                        <a href="/login">LOGIN</a>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <img
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="이미지"
                />
                <span className="text">희봉님 환영해요!</span>
            </div>
        </header>
    );
}
