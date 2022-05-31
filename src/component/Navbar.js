import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const Navbar = () => {
  const menulist = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&m Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다.
      console.log("keyword", keyword);
      navigate(`/:q=${keyword}`);
    }
  };
  return (
    <Container>
      <div className="login-button" onClick={goToLogin}>
        <div></div>
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img src="https://www.hm.com/entrance/assets/bundle/img/logo-8c3bf.png"></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="nav-search">
          <div></div>
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
