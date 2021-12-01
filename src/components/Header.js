import React from "react";

function Header() {
  return (
    <header className="Header">
      <div className="Logo">Five</div>
      <nav className="Nav">
        <a href="/">Login</a>
        <a href="/create">Create User</a>
        <a href="/user/id">User Profile</a>
      </nav>
    </header>
  );
}

export default Header;
