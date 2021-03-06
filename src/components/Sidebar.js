import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 130px; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top of everything */
  top: 3.4em; /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path:
            "/" /* path is used as id to check which NavItem is active basically */,
          name: "Home",
          css: "fa fa-fw fa-home",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
        },
        {
          path: "/about",
          name: "About",
          css: "fa fa-fw fa-clock",
          key: 2,
        },
        {
          path: "/flexdirectionflexgrow",
          name: "FlexDirectionFlexGrow",
          css: "fas fa-hashtag",
          key: 3,
        },
      ],
    };
  }

  onItemClick = (path) => {
    this.setState({ activePath: path });
  };

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        <Navbar.Brand href="/myexample">Example</Navbar.Brand>
        <Navbar.Brand href="/gridtemplatecolumnrow">Template</Navbar.Brand>
        <Navbar.Brand href="/gridtemplateareasgridarea">Areas</Navbar.Brand>
        <Navbar.Brand href="/gridjustifyself">Justify</Navbar.Brand>
        <Navbar.Brand href="/alignself">Align</Navbar.Brand>
        <br />
        <Navbar.Brand href="/gridgap">Gap</Navbar.Brand>
        <Navbar.Brand href="/placeself">Place self</Navbar.Brand>
        <Navbar.Brand href="/justifyitems">Justify items</Navbar.Brand>
        <Navbar.Brand href="/alignitems">Align items</Navbar.Brand>
        <Navbar.Brand href="/placeitems">Place items</Navbar.Brand>
        <Navbar.Brand href="/justifycontentaligncontent">
          Justify content
        </Navbar.Brand>
        <Navbar.Brand href="/placecontent">Place content</Navbar.Brand>
        <Navbar.Brand href="/gridauto">Grid auto</Navbar.Brand>
        <Navbar.Brand href="/autoflow">Auto flow</Navbar.Brand>

        <Navbar.Brand href="/grid">Grid</Navbar.Brand>
        {items.map((item) => {
          return (
            <NavItem
              path={item.path}
              name={item.name}
              text={item.name}
              css={item.css}
              onItemClick={this.onItemClick}
              active={item.path === activePath}
              key={item.key}
            />
          );
        })}
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0; /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "#9FFFCB")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}

const NavIcon = styled.div``;

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
