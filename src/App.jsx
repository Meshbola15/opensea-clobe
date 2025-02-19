import React from "react";
import logo from "./assets/opensea-logo.png";
import video from "./assets/opensea-video.mp4";
import { FaCoins } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

const App = () => {
  return (
    <div className="py-[60px] max-w-[80svw] mx-auto flex flex-col items-center justify-between h-full min-h-svh gap-12">
      <header className="w-full">
        <nav className="flex items-center justify-between w-full">
          <Logo />

          <Button icon={<IoWallet />} text={"Connect Wallet"} />
        </nav>
      </header>

      <div className="flex items-center justify-center rounded-full mb-[1.6rem]">
        <video
          src={video}
          autoPlay
          loop
          muted
          controls={false}
          playsInline
          controlsList="nodownload"
          className="max-[80svw] md:max-w-[500px] lg:max-w-[400px] lg:min-w-[500px] mx-auto rounded-full"
        ></video>
      </div>



      <div className="w-full md:max-w-[70svw] lg:max-w-[35svw] lg:min-w-[500px] mx-auto text-center flex flex-col items-center justify-center">
        <p className="text-mid mb-[1.6rem]">
          <a
            href="https://x.com/search?q=%24SEA&src=cashtag_click"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold underline"
          >
            $SEA
          </a>{" "}
          is coming. But before that here is a chance for you to claim your
          airdrop which is available for only our whitelisted users.
        </p>

        <Button icon={<FaCoins />} text={"$Claim Airdrop"} />

        <p className="mt-[60px]">
          Copyright © 2025 Novamods | Powered by Novamods
        </p>
      </div>
    </div>
  );
};

export default App;

const Logo = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      <img src={logo} alt="openai-logo" className="w-[40px]  lg:max-w-[60px]" />
      <p className="text-nowrap big-text hidden min-[400px]:block">Open Sea</p>
    </div>
  );
};

const Button = ({ icon, text }) => {
  return (
    <button className="bg-secondary py-2 px-4 lg:py-3 lg:px-6 flex items-center justify-start gap-2 hover:text-secondary hover:bg-white rounded-[30px] duration-200 transition-all ease-linear">
      {icon && icon}
      <p className="text-mid">{text}</p>
    </button>
  );
};
