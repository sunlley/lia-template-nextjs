import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import {mainnet, polygon,} from 'wagmi/chains';
import {bitgetWallet, injectedWallet, metaMaskWallet, okxWallet, trustWallet} from "@rainbow-me/rainbowkit/wallets";


export const config = getDefaultConfig({
    appName: 'Lia next',
    projectId: "YOU'S PROJECT ID",
    chains: [
        mainnet,
        polygon,
    ],
    wallets: [
        {
            groupName: 'Recommended',
            wallets: [bitgetWallet, metaMaskWallet, okxWallet, trustWallet],
        },
        {
            groupName: 'Others',
            wallets: [injectedWallet],
        },
    ],
    ssr: true,
});