import React from "react";
import Image from 'next/image';
import styled from 'styled-components';
import media from "styled-media-query";


import {useTranslations} from "next-intl";
import clsx from "clsx";
import {useSwitchChain, useWatchAsset} from "wagmi";
import {CURRENT_CHAIN_ID, fixStringWithMiddle, TOKENS} from "@/utils";
import {Polygon, TetherUSD} from "@/components/widgets/Images";

const FooterContainer = styled.div`
    width: 100%;
    padding: 21px;
    color: var(--gray-2);
    background-color: var(--gray-6);
    display: flex;
    flex-direction: row;
    gap: 21px;
    justify-content: center;
    font-size: 12px;
    ${media.lessThan('medium')`
     flex-direction: column;
    
    `}
`

const Footer = () => {
    const t = useTranslations('Footer');
    const {watchAsset} = useWatchAsset();
    const {switchChain} = useSwitchChain();


    const add_usdt = async () => {
        const token = TOKENS[CURRENT_CHAIN_ID].USDT;
        watchAsset({
            type: 'ERC20',
            options: {
                ...token
            }
        });
    }


    const add_network = () => {
        // provider
        switchChain({chainId: 137})
    }
    return <FooterContainer style={{
        color: 'var(--gray-2)'
    }}>
        <div className={clsx('pr-[21px]')}>
            <div className={clsx('flex items-center gap-[14px] pb-2')}>
                <img className={clsx('w-[30px]')} src={'/icon-light.png'} alt={''}/>
                <span className={clsx('text-[14px]')}>{t('PoweredBy')}</span>
            </div>
            <div
                className={clsx('text-[10px] border-0 border-b border-solid border-b-gray pb-2')}>{t("PoweredByTips")}</div>
        </div>
        <div className={'flex-1'}></div>

        <div className={clsx('min-w-[200px]')}>
            <div>{t('Add Chain to Wallet')}</div>
            <div className={` cursor-auto lg:hover:scale-105 duration-500 lg:cursor-pointer`}
                 onClick={() => {
                     add_network();
                 }}>
                <div className={clsx('flex items-center gap-1')}>
                    <Polygon className={'rounded-lg'}/>
                    <div className={'text-4'}>Polygon</div>
                </div>
            </div>
        </div>
        <div className={clsx('min-w-[200px]')}>
            <div>{t('Add Token to Wallet')}</div>
            <div className={`flex items-center gap-2 cursor-auto lg:hover:scale-105 duration-500 lg:cursor-pointer`}
                 onClick={() => {
                     add_usdt();
                 }}>
                <div className={clsx('flex items-center gap-1')}>
                    <TetherUSD className={'rounded-lg'}/>
                    <div className={'text-4'}>USDT</div>
                </div>
                <div className={'text-4'}>{fixStringWithMiddle(TOKENS[CURRENT_CHAIN_ID].USDT.address, 8, '....')}</div>
            </div>
        </div>
    </FooterContainer>
}
export default Footer;