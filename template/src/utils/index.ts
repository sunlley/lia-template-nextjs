import IconUsdt from '@/components/images/icon_usdt.png';
import IconEth from '@/components/images/icon_eth.png';
import Decimal from "decimal.js";

export * from './http'
export const ICONS: any = {
    USDT: IconUsdt,
    ETH: IconEth,
    POL: "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"28\" height=\"28\"><defs><linearGradient id=\"A\" x1=\"-18.275%\" x2=\"84.959%\" y1=\"8.219%\" y2=\"71.393%\"><stop offset=\"0%\" stop-color=\"%23a229c5\"/><stop offset=\"100%\" stop-color=\"%237b3fe4\"/></linearGradient><circle id=\"B\" cx=\"14\" cy=\"14\" r=\"14\"/></defs><g fill-rule=\"evenodd\"><mask id=\"C\" fill=\"%23fff\"><use xlink:href=\"%23B\"/></mask><g fill-rule=\"nonzero\"><path fill=\"url(%23A)\" d=\"M-1.326-1.326h30.651v30.651H-1.326z\" mask=\"url(%23C)\"/><path fill=\"%23fff\" d=\"M18.049 17.021l3.96-2.287a.681.681 0 0 0 .34-.589V9.572a.683.683 0 0 0-.34-.59l-3.96-2.286a.682.682 0 0 0-.68 0l-3.96 2.287a.682.682 0 0 0-.34.589v8.173L10.29 19.35l-2.777-1.604v-3.207l2.777-1.604 1.832 1.058V11.84l-1.492-.861a.681.681 0 0 0-.68 0l-3.96 2.287a.681.681 0 0 0-.34.589v4.573c0 .242.13.468.34.59l3.96 2.286a.68.68 0 0 0 .68 0l3.96-2.286a.682.682 0 0 0 .34-.589v-8.174l.05-.028 2.728-1.575 2.777 1.603v3.208l-2.777 1.603-1.83-1.056v2.151l1.49.86a.68.68 0 0 0 .68 0z\"/></g></g></svg>",
}
export const CHAIN_LOGO:any={
    1:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="%2325292E" fill-rule="evenodd" d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" clip-rule="evenodd"/><path fill="url(%23a)" fill-opacity=".3" fill-rule="evenodd" d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z" clip-rule="evenodd"/><path fill="url(%23b)" d="M8.19 14.77 14 18.21l5.8-3.44-5.8 8.19-5.81-8.19Z"/><path fill="%23fff" d="m14 16.93-5.81-3.44L14 4.34l5.81 9.15L14 16.93Z"/><defs><linearGradient id="a" x1="0" x2="14" y1="0" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="%23fff"/><stop offset="1" stop-color="%23fff" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="14" x2="14" y1="14.77" y2="22.96" gradientUnits="userSpaceOnUse"><stop stop-color="%23fff"/><stop offset="1" stop-color="%23fff" stop-opacity=".9"/></linearGradient></defs></svg>%0A',
    137:ICONS.POL,
}
export const TOKENS: any = {
    1: {
        NATIVE: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
            address: '0x0000000000000000000000000000000000000000'
        },
        ETH: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
            address: '0x0000000000000000000000000000000000000000'
        },
        USDT: {
            name: 'Tether USD',
            symbol: 'USDT',
            decimals: 6,
            address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
        }
    },
    137: {
        NATIVE: {
            name: 'Polymath Network',
            symbol: 'POL',
            decimals: 18,
            address: '0x0000000000000000000000000000000000000000'
        },
        POL: {
            name: 'Polymath Network',
            symbol: 'POL',
            decimals: 18,
            address: '0x0000000000000000000000000000000000000000'
        },
        USDT: {
            name: '(PoS) Tether USD',
            symbol: 'USDT',
            decimals: 6,
            address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
        }
    },
}
export const CHAINS: any = {
    1: {
        name: 'Ethereum',
        logo: 'https://etherscan.io/images/main/empty-token.png',
        explorer: 'https://etherscan.io/',
        chainId: 1
    },
    137: {
        name: 'Polygon',
        logo: 'https://polygonscan.com/assets/poly/images/svg/brandassets/logo-symbol.svg?v=24.11.3.1',
        explorer: 'https://polygonscan.com',
        chainId: 137
    }
}
export const CURRENT_CHAIN_ID = 137;
export const CONTRACTS: any = {
    USDT: {
        ABI: [
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    }
}
export const HEADERS=[
    {
        label:"Home",
        url:'/home'
    }
]

export const delay = (time: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export const fromDecimals = (data: any, decimals: number): string => {
    return new Decimal(data).div(Math.pow(10, decimals)).toFixed();
}
export const toDecimals = (data: any, decimals: number): string => {
    return new Decimal(data).mul(Math.pow(10, decimals)).toFixed();
}

export function fixStringWithMiddle(str: string, length: number, middle: string) {
    if (str.length <= length) return str;
    return str.slice(0, length) + middle + str.slice(str.length - length);

}

/**
 * @param startTime ms
 */
export const calc_time = (startTime:number,maxTime?:number) => {
    let runTime = Date.now() - startTime;
    if (maxTime && runTime > maxTime){
        return format_time(maxTime);
    }
    return format_time(runTime);
}
/**
 *
 * @param time ms
 */
export const format_time = (time:number) => {
    let result = {
        value:0,
        unit:'days'
    }
    let runTime = time;
    //mins
    let mins = runTime / 1000 / 60;
    //hours
    let hours = runTime / 1000 / 60 / 60;
    //days
    let days = runTime / 1000 / 60 / 60 / 24;
    if (days > 1) {
        result.unit='days';
        result.value=parseInt(`${days}`);
    }
    if (hours > 1) {
        result.unit='hours';
        result.value=parseInt(`${hours}`);
    } else {
        result.unit='mins';
        result.value=parseInt(`${mins}`);
    }
    return result;
}
