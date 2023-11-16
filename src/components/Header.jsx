import { PATHS } from "@/contants/path";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
const Header = () => {
  const href = window.location.href;
  const location = useLocation();
  const [name, setName] = useState("home");
  const [linkName, setLinkName] = useState();
  const handleItemClick = (name) => {
    setName(name);
  };
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate(name);
  // }, [name]);
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <Link to={PATHS.HOME}>HOME</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={PATHS.ABOUT}>ABOUT</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={PATHS.CONTACT}>CONTACT</Link>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Header;
