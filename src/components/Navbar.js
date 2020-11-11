import React, { useContext } from "react";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { Link } from "gatsby";
import { GatsbyContext } from '../context/context';

const Navbar = () => {
  const { isSidebarOpen, showSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <div className="logo-container">
              <p id="logo">TC</p>
              <p className="certified">Microsoft Certified</p>
            </div>
          </Link>
          <button className="toggle-btn" onClick={showSidebar}>
            <GoThreeBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to='#abouts'>About</Link>
          </li>
          <li>
            <Link to='#projects'>Projects</Link>
          </li>
          <li>
            <Link to='#contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
    }
    .logo-container {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      #logo{
        font-family: 'Great Vibes', cursive;
        font-size: 1.4rem;
        font-weight: bold;
        color: yellow;
        margin-top: 0.9rem;
        padding-left: 3rem;
      }
      .certified{
        font-size: 1rem;
        /* font-weight: bold; */
        color: yellow;
        margin-top: 0.7rem;
        font-family: 'roboto';
        padding-top: 0.5rem;
      }
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
      margin-top: 2.8rem;
      margin-left: 3rem;
      
    }
    li {
      padding: 1rem 0;
      position: relative;
      a{
        color:white;
      }
      a:hover{
        color: yellow;
      }
    }
    button {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }
`

export default Navbar