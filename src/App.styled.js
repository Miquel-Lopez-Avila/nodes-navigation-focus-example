import styled, { css } from 'styled-components';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const Title = styled.h1`
  text-align: left;
  font-size: 25px;
  color: white;
  margin: 5px;
  width: 100%;
`

/* MENU */

export const MenuWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 10px;
  background-color: #BE93FD;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

export const MenuItem = styled.div`
  background-color: #eeccff;
  color: white;
  width: 100%;
  padding: 15px 32px;
  height: 20px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  font-size: 16px;
  ${({ focused }) => focused && focusedStyle}
`

/* HEADER CONTENT */

export const Header = styled.div`
  background-color: #A178DF;
  width: 100%;
  margin: auto;
  height: 10%;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 9;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px #7a5aa9;
`

export const TitleSection = styled.h1`
  text-align: center; 
  font-size: 50px; 
  color: white;
`

/* CONTENT */

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #845EC2;
  flex-direction: column;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  box-sizing: border-box;
`

/* LIST */

export const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 5px;
  padding: 20px;
  box-sizing: border-box;
  height: 60%;
`

export const Row = styled.div`
  gap: 7px;
  padding: 5px 5px;
  height: 150px;
  width: 100%;
  overflow: hidden;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  display: -webkit-box;
`

export const Item = styled.div`
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  box-sizing: border-box;
  height: 100%;
  background-color: #eeccff;
  ${({ focused }) => focused && focusedStyle}
`

/* MATRIX */

export const MatrixWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 5px;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  height: 60%;
  margin-bottom: 50px;
`

export const MatrixRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  height: 150px;
  width: 100%;
  overflow: hidden;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
`

export const MatrixItem = styled.div`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  background-color: #eeccff;
  ${({ focused }) => focused && focusedStyle}
`


/* PANEL */

export const WrapperPanel = styled.div`
  width: 100%;
  height: 45%;
`

export const PanelStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 20px;
  box-sizing: border-box;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  display: -webkit-box;
  gap: 10px;
`

export const SliderItem = styled.div`
  border-radius: 5px;
  width: 75vw;
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  background-color: #eeccff;
  ${({focused}) => focused && focusedStyle}
`


/* FOCUS */

const focusedStyle = css`
  &::after {
    border-radius: 4px;
    border: 4px solid rgba(255, 255, 255, 1);
    inset: 0px;
    content: "";
    position: absolute;
    transition: border 150ms linear 0s;
  }
`

export const RelativeContainer = styled.div`
  display: flex;
  width: ${({ width }) => width && width };
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
`
