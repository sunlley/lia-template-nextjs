'use client'
import styled from "styled-components";
import media from "styled-media-query";
/*
export const defaultBreakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
};
 */

export const Page = styled.div`
    height: calc(100% - 60px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //gap: 14px;
    //padding-top: 21px;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    ${media.lessThan('medium')`
        // height:auto;
         padding-top: 0;
    `}
`
export const PageBody = styled.div`
    flex: 1;
    //height: 100%;
    width: 100%;
    max-width: 1170px;
    position: relative;
    ${media.lessThan('large')`
        width:100%;
    `}
`
export const Banner = styled.div`
    width: 100%;
    border: 0 solid var('--border-1');
    border-radius: 10px;
    overflow: hidden;
    background-image: url("/banner-pc.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    object-fit: fill;
    min-height: 260px;
    //max-height: 140px;
    padding-top: 66px;
    padding-left: 50px;

    ${media.lessThan('large')`
        width:calc(100% - 28px);
        margin-left: 14px;
        margin-right: 14px;
    `}
    ${media.lessThan('medium')`
       width:calc(100% - 28px);
       margin-left: 14px;
       margin-right: 14px;
       background-image: url("/banner-h5.png");
       min-height: 453px;
       padding-top: 32px;
       padding-left: 20px;
       font-size:24px;
    `}
`
export const NodeContainer = styled.div`
    padding-top: 14px;
    padding-bottom: 14px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    ${media.lessThan('large')`
        width:calc(100% - 28px);
        margin-left: 14px;
        margin-right: 14px;
    `}

`
export const InfoLabel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3px 7px;
    font-size: 18px;
   
    div:nth-child(1){
        //color: red;
        width: 200px;
        color: var(--text-3);
    }
    div:nth-child(2){
        flex: 1;
        font-weight: bold;
        //color: green;
        //font-weight: bold;
    }


    ${media.lessThan('large')`
       
    `}
    ${media.lessThan('medium')`
       display: block;
    `}
`
