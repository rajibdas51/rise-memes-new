'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { defineChain, mainnet } from '@reown/appkit/networks'
import React, {type ReactNode} from 'react'
import jsonData from './evmdata/data.json'

const metadata = {
    name: "RISEPresale",
    description: "Presale of the upcoming RISE of Memes game.",
    url: 'http://localhost:3000',
    icons: ['http://localhost:3000/logo.png']
}

const localfork = defineChain({
    id: 1,  // Add this to match the chain Id you set for your Virtual TestNet
    caipNetworkId: 'eip155:1',
    chainNamespace: 'eip155',
    name: 'fork Mainnet',
    nativeCurrency: { name: 'fMainnet', symbol: 'fETH', decimals: 18 },
    rpcUrls: {
        default:{
            http: ["http://127.0.0.1:8545"],
        }
    },
        blockExplorers: {
            default:{
                name:'Tenderly Explorer',
                url: 'https://dashboard.tenderly.co/explorer/vnet/6a6910ba-5831-4758-9d89-1f8e3169433f', // replace this with your your Virtual TestNet's explorer URL
            }
    }
})

createAppKit({
    adapters: [new EthersAdapter],
    metadata,
    networks: [ mainnet, localfork ],
    projectId: jsonData.projectID,
    features: {
        analytics: true
    }
})

const shortenAddress = (address: string | undefined): string => {
    if(address) {
        return address.slice(0,5) + "..." + address.slice(-5);
    }
    return "";
}

const debugLog = (msg: string) => {
    if(jsonData.debugging) {
      console.log(msg)
    }
  }

export function Web3Context({children, cookies}: {children: ReactNode, cookies: string | null} ) {
    return(
        <>
            {children}
        </>
    )
}

export {shortenAddress, debugLog}