import React, { useState } from 'react';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottle';
import styled from 'styled-components';
const MenuCircle = styled.div`
    .tab {
        position: fixed;
        z-index: 100;
        cursor: pointer;
        top: 1.2rem;
        right: 5.5rem;
        width: 62px;
        height: 62px;
        box-shadow: 1px 3px 6px rgba(0,0,0, 51%);
        outline: none;
        filter: brightness(0.8);
        transform: translateY(0);
        transition: transform 0.3s ease;
        span {
        display: block;
        background-color: #BCBCBC;
        height: 1.5px;
        width: 35px;
        margin-top: -1.15rem;
        position: relative;
        border-radius: 10%;
        &:before {
            content: '';
            position: absolute;
            height: inherit;
            width: inherit;
            background-color: inherit;
            top: 0.6rem;
            border-radius: inherit;
        }
        &:after {
            content: '';
            position: absolute;
            height: inherit;
            width: inherit;
            background-color: inherit;
            top: 1.2rem;
            border-radius: inherit;
        }
      }
    }
    .tab.hidden {
        transform: translateY(-300%);
    }
    .block {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='rgb(188,188,188)' stroke-width='3' stroke-dasharray='18%25%2c 8%25' stroke-dashoffset='46' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 100px;
      height: inherit;
      width: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

const MenuTab = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowHeader, setShouldShowHeader] = useState(false)

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrollDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowHeader(currentScrollTop > 2);
    setTimeout(() => {
      setShouldHideHeader(isScrollDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })
  
  const shadowStyle = shouldShowHeader ? 'shadow' : "";
  const hiddenStyle = shouldHideHeader ? 'hidden' : "";

  return(
      <MenuCircle>
        <div className={`tab ${hiddenStyle} ${shadowStyle}`}>
            <div className="block">
              <span></span>
            </div>
        </div>
      </MenuCircle>
      // <MenuCircle>
      //   <div className={`menu ${hiddenStyle} ${shadowStyle}`}>
      //       <span>MENU</span>
      //   </div>
      // </MenuCircle>
    
  )
}

export default MenuTab 