"use client";

import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import FormButton from "../form-button";
import CustomInput from "../custom-input";
import Image from "next/image";
import CustomProgressBar from "../custom-progress-bar";
import CountdownTimer from "../countdown-timer";
import { Info } from "@/app/svg";

import { useAppKitAccount } from "@reown/appkit/react";

import jsonData from "@/context/evmdata/data.json";
import jsonABI from "@/context/evmdata/PresaleABI.json";
import jsonUSDT from "@/context/evmdata/usdt.json";
import BigNumber from "bignumber.js";
import { Contract, JsonRpcProvider } from "ethers";
import { debugLog } from "@/context/Web3Context";

const usedChain = jsonData.localfork;

type UserBalances = {
  eth: BigNumber,
  usdt: BigNumber
}

type StageInfo = {
  stagePrice: BigNumber,
  stageTokens: BigNumber,
}

const HeroForm = () => {
  const handleTimerComplete = (): void => {
    console.log("Timer completed!");
  };

  const { address, isConnected } = useAppKitAccount();

  const [raisedUSD, setRaisedUSD] = useState<BigNumber>(new BigNumber(0));
  const [actualPrice, setActualPrice] = useState<BigNumber>(new BigNumber(0));
  const [actualETHPrice, setActualETHPrice] = useState<BigNumber>(new BigNumber(0));
  const [userBalances, setUserBalances] = useState<UserBalances>({
    eth: new BigNumber(0),
    usdt: new BigNumber(0)
  });

  const [stageInfo, setStageInfo] = useState<StageInfo>({
    stagePrice: new BigNumber(0),
    stageTokens: new BigNumber(0)
  });



  useEffect(() => {
    const fetchPrice = async () => {
      const provider = new JsonRpcProvider(usedChain.publicRPC);
      const presale = new Contract(usedChain.presaleAddress, jsonABI, provider);
  
      const tempPrice = new BigNumber(await presale.getActualStagePrice());
  
      debugLog("USDT Price: " + tempPrice.toString());
  
      setActualPrice(tempPrice);
    }
  
    const fetchETHPrice = async () => {
      const provider = new JsonRpcProvider(usedChain.publicRPC);
      const presale = new Contract(usedChain.presaleAddress, jsonABI, provider);
  
      const tempPrice = new BigNumber(await presale.getETHPrice());
  
      debugLog("ETH Price: " + tempPrice.shiftedBy(-6).toString());
  
      setActualETHPrice(tempPrice);
    }
  
    const fetchRaisedUSD = async () => {
      const provider = new JsonRpcProvider(usedChain.publicRPC);
      const presale = new Contract(usedChain.presaleAddress, jsonABI, provider);
  
      const tempPrice = new BigNumber(await presale.usdtRaised());
  
      debugLog("Raised USD: " + tempPrice.shiftedBy(-6).toString());
  
      setRaisedUSD(tempPrice);
    }
  
    const fetchBalances = async () => {
      if(!address) return;
  
      const provider = new JsonRpcProvider(usedChain.publicRPC);
      const usdt = new Contract(usedChain.usdt, jsonUSDT, provider);
  
      const usdtbal = new BigNumber(await usdt.balanceOf(address));
      const ethbal = new BigNumber((await provider.getBalance(address)).toString());

      debugLog("USDT: " + usdtbal.toString());
      debugLog("ETH: " + ethbal.toString());
  
      setUserBalances({
        eth: ethbal,
        usdt: usdtbal
      });
    }
  
    const fetchStageInfo = async () => {
      const provider = new JsonRpcProvider(usedChain.publicRPC);
      const presale = new Contract(usedChain.presaleAddress, jsonABI, provider);
  
      const tempStage = new BigNumber(await presale.actualStage());
      const tempStagePrice = new BigNumber(await presale.stagePrices(tempStage.toString()));
      const tempStageTokens = new BigNumber(await presale.stageTokens(tempStage.toString()));
  
      debugLog("actual stage: " + tempStage.shiftedBy(-6).toString());
  
      setStageInfo({
        stagePrice: tempStagePrice,
        stageTokens: tempStageTokens
      })
    }

    fetchPrice();
    fetchETHPrice();
    fetchRaisedUSD();
    fetchBalances();
    fetchStageInfo();

  }, [actualPrice, actualETHPrice, raisedUSD, userBalances, address])

  const renderPrice = (): string => {
    if(selectedCurrency === "ETH") {
      const ethPrice = actualPrice.dividedBy(actualETHPrice).toFixed(10).toString();
      debugLog("ETHValue: " + ethPrice);
      return ethPrice;
    } else {
      return actualPrice.shiftedBy(-6).toFixed(6).toString();
    }
  }

  const handleBuy = async () => {

    if(!isConnected) return;

    if(selectedCurrency === 'ETH') {

    } else if(selectedCurrency === 'USDT') {

    } else {

    }
  }

// Handle the presale widget input change
const handleInputChange1 = (value) => {
  // Allow only valid numeric inputs
  if (isNaN(value) || value === null || value === '') {
      setPayWithValue('0'); // Clear input for invalid values
      setReceiveValue('0'); // Reset result
      return;
  }

  setPayWithValue(value); // Update input field with valid value

  // Common calculation logic for both ETH and USDT
  const calculateResult = (price, value) => {
      price = price.toString();
      // Make sure price is a decimal and rounded up to 2 decimals
      console.log(`Price: ${price}`);
      if (isNaN(price) || price === 0) {
          setReceiveValue('0');
          return;
      }

      const tokens = new BigNumber(value).div(price).toNumber(); // Base tokens
      console.log(`Tokens: ${tokens}`);

      // Final result with tokens + bonus, rounded to 2 decimals
      const finalResult = Math.round((tokens) * 100) / 100;
      setReceiveValue(finalResult.toString());
  };

  if (selectedCurrency === 'ETH') {
      const price = new BigNumber(actualPrice).shiftedBy(-6);
      const ethAmount = new BigNumber(value); // Use `value` directly
      const usdtAmount = ethAmount.multipliedBy(new BigNumber(actualETHPrice).shiftedBy(-6)); // Convert ETH to USDT
      console.log(`USDT amount: ${usdtAmount.toString()}`); // Debug USDT amount
      calculateResult(price, usdtAmount.toNumber());
  } else {
      const price = new BigNumber(actualPrice).shiftedBy(-6);
      console.log(`USDT price: ${price.toString()}`); // Debug USDT price
      calculateResult(price, value);
  }
};

  const handleMaxButton = () => {
    if(selectedCurrency == "ETH") {
      handleInputChange1(userBalances.eth.shiftedBy(-18).dividedBy(actualPrice.dividedBy(actualETHPrice).toFixed(10).toString()).toFixed(5).toString())
    }

    if(selectedCurrency === "USDTyar") {
      handleInputChange1(userBalances.usdt.dividedBy(actualPrice).shiftedBy(-6).toFixed(5));
    }
  }

  const containerShadowStyle = {
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))",
  };

  const [payWithValue, setPayWithValue] = useState<string>("");
  const [receiveValue, setReceiveValue] = useState<string>("");

  const [selectedCurrency, setSelectedCurrency] = useState<string>("ETH");

  const getPayWithLabel = () => `Pay with ${selectedCurrency}`;

  return (
    <div className="w-full h-full px-14 sm:px-16 xl:px-16 2xl:px-20 flex flex-col justify-start items-center">
      <div className="w-full max-w-xl ">
        <h1
          className="text-gradient text-shadow-gradient 2xl:text-3xl text-2xl font-semibold pt-10 lg:pt-5 pb-2 2xl:py-8 relative text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]"
          style={containerShadowStyle}
        >
          Buy $Rise presale
        </h1>
        <CountdownTimer
          onComplete={handleTimerComplete}
        />
        <p
          className="text-center text-gradient font-semibold text-lg mt-1 "
          style={containerShadowStyle}
        >
          Until Next price increase
        </p>
        <div className="w-full flex justify-center gap-10 my-3">
          <p
            className="text-lg text-gradient font-semibold"
            style={containerShadowStyle}
          >
            ${raisedUSD.shiftedBy(-6).toFixed(2).toString()}
          </p>
          <p
            className="text-lg text-gradient font-semibold opacity-80"
            style={containerShadowStyle}
          >
            ${stageInfo.stageTokens.multipliedBy(stageInfo.stagePrice.shiftedBy(-6)).toFixed(2).toLocaleString()}
          </p>
        </div>
        <div>
          <CustomProgressBar progress={80} />
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center my-3">
          <p
            className="flex items-center text-gradient font-semibold text-sm lg:text-md xxl:text-lg uppercase"
            style={containerShadowStyle}
          >
            <span>Your Purchased $Rise</span> <span className="mx-1">=</span>{" "}
            <span>0</span>
            <span className="ml-2 text-[#e6c790] relative">
              <Info />
            </span>
          </p>
          <p
            className="flex items-center text-gradient font-semibold text-sm lg:text-md xxl:text-lg"
            style={containerShadowStyle}
          >
            <span>Your Stakeable $Rise</span> <span className="mx-1">=</span>{" "}
            <span>0</span>
            <span className="ml-2 text-[#e6c790]">
              <Info />
            </span>
          </p>
        </div>
        <div className="z-50 w-full flex justify-center gap-2 my-3">
          <Image
            src={"/assets/form-arrow-left.svg"}
            alt="arrow"
            width={70}
            height={70}
            className="z-50"
            loading="lazy"
          />
          <p className="text-gradient font-semibold text-[10px] sm:text-sm z-50">
            1$RISE <span className="mx-1">=</span> ${renderPrice()}
          </p>
          <Image
            src={"/assets/form-arrow-right.svg"}
            alt="arrow"
            width={70}
            height={70}
            className="z-50"
            loading="lazy"
          />
        </div>
        <div className="w-full flex justify-evenly items-center my-3 z-50">
          {["ETH", "USDT", "CARD"].map((currency) => (
            <PointBox
              key={currency}
              label={currency}
              isActive={
                selectedCurrency === (currency === "CARD" ? "USD" : currency)
              }
              onClick={() =>
                setSelectedCurrency(currency === "CARD" ? "USD" : currency)
              }
            />
          ))}
        </div>
        <form>
          <div className="w-full">
            <CustomInput
              label={getPayWithLabel()}
              value={payWithValue}
              onChange={(e: string) => handleInputChange1(parseFloat(e))}
              onMaxClick={() => handleMaxButton()}
            />
            <CustomInput
              label="$Rise you receive"
              value={receiveValue}
              onChange={setReceiveValue}
              disabled
            />
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <FormButton label="Explore Edition" />
            <FormButton
              label="Buy"
              onClick={() => handleBuy()}
              radialColor1="#4b3d28"
              radialColor2="#211811"
            />
          </div>
        </form>

        <div className="flex lg:flex-row  lg:justify-between justify-center flex-col items-center my-3 text-xs 2xl:text-sm text-gradient font-semibold uppercase z-50">
          <Link href={"#"} className="text-gradient z-50">
            Connect Wallet
          </Link>
          <Link
            href={"#"}
            className="text-gradient border-b-2 border-[#E4D9BD] border-opacity-30 z-50 "
          >
            Don&apos;t Have a Wallet
          </Link>
        </div>
        <div>
          <Link
            href={"https://solidlaunch.io/"}
            target="_blank"
            className="flex justify-center items-center my-5 pb-20 xl:pb-0 text-sm lg:text-md text-gradient font-semibold uppercase"
            style={containerShadowStyle}
          >
            Powered by SolidLauch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;

interface PointBoxProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const PointBox = ({ label, isActive, onClick }: PointBoxProps) => {
  return (
    <div
      className={`z-50 xl:px-4 px-3 py-2 uppercase cursor-pointer border-[#EED199] border-opacity-50 border-[1.5px]`}
      style={{
        background: isActive
          ? `
            radial-gradient(circle, #835e3b, #371708), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `
          : `
            radial-gradient(circle, #230203, #430109), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `,
      }}
      onClick={onClick}
    >
      <p className="text-gradient text-sm lg:text-md font-semibold">{label}</p>
    </div>
  );
};
