import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      padding: 4px 0;
      > a {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag" />
            标签页
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money" />记账页
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chart" />
            统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;