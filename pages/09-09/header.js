import React from 'react';

export default function Header() {

  return (
    <>
    <header className="site-header">
      <div className="logo-container">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e22e06dc36046a39be848b8619e96502df75ff3f84423e3008f737fe7824440?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="Company Logo" className="logo-image" />
        <h1 className="company-name">會營ㄛ</h1>
      </div>
      <nav className="main-navigation">
        <ul>
          <li><a href="#spaces">查看空位</a></li>
          <li><a href="#equipment">露營用具</a></li>
          <li><a href="#news">活動情報</a></li>
          <li><a href="#support">客服中心</a></li>
        </ul>
      </nav>
      <div className="user-profile">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7b61e080cfcea57ed93163302aae1cbbff4fa447bf2a4dc7aff3e9bc6431b6?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="User Avatar" className="user-avatar" />
        <span className="user-name">小八</span>
      </div>
    </header>
    </>
  );

}

