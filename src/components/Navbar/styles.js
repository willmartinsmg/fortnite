import styled from 'styled-components';

const contentwidth = '1000px';
const breakpoint = '799px';
const navheight = '70px';
const navbackground = '#f6e05e';
const navfontcolor = '#2d3748';
const linkhovercolor = '#ecc94b';

export const HeaderBar = styled.section`
  .navigation {
    height: ${navheight};
    background: ${navbackground};
  }

  img {
    width: 80%;
    padding-top: 15px;
  }

  .brand {
    position: absolute;
    padding-left: 20px;
    float: left;
    line-height: ${navheight};
    text-transform: uppercase;
    font-size: 1.4em;
    a,
    a:visited {
      color: ${navfontcolor};
      text-decoration: none;
    }
  }

  .nav-container {
    max-width: ${contentwidth};
    margin: 0 auto;
  }

  nav {
    float: right;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        float: left;
        position: relative;
        a,
        a:visited {
          display: block;
          padding: 0 20px;
          line-height: ${navheight};
          background: ${navbackground};
          color: ${navfontcolor};
          text-decoration: none;
          &:hover {
            background: ${linkhovercolor};
            color: ${navfontcolor};
          }
          &:not(:only-child):after {
            padding-left: 4px;
            content: ' ▾';
          }
        } // Dropdown list
        ul li {
          min-width: 190px;
          a {
            padding: 15px;
            line-height: 20px;
          }
        }
      }
    }
  }

  .nav-dropdown {
    position: absolute;
    display: none;
    z-index: 1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  }

  /* Mobile navigation */
  .nav-mobile {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: ${navbackground};
    height: ${navheight};
    width: ${navheight};
  }
  @media only screen and (max-width: 798px) {
    .nav-mobile {
      display: block;
    }
    nav {
      width: 100%;
      padding: ${navheight} 0 15px;
      ul {
        display: none;
        li {
          float: none;
          a {
            padding: 15px;
            line-height: 20px;
          }
          ul li a {
            padding-left: 30px;
          }
        }
      }
    }
    .nav-dropdown {
      position: static;
    }
  }
  @media screen and (min-width: ${breakpoint}) {
    .nav-list {
      display: block !important;
    }
  }
  #nav-toggle {
    position: absolute;
    left: 18px;
    top: 22px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;
    span,
    span:before,
    span:after {
      cursor: pointer;
      border-radius: 1px;
      height: 5px;
      width: 35px;
      background: ${navfontcolor};
      position: absolute;
      display: block;
      content: '';
      transition: all 300ms ease-in-out;
    }
    span:before {
      top: -10px;
    }
    span:after {
      bottom: -10px;
    }
    &.active span {
      background-color: transparent;
      &:before,
      &:after {
        top: 0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  article {
    max-width: ${contentwidth};
    margin: 0 auto;
    padding: 10px;
  }
`;

export const Navbar = styled.nav``;

export const Logo = styled.img``;
