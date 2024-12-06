"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import LineLink from "@/components/widgets/LineLink";
import {
  Button,
  Menu,
  Space,
  Drawer,
  Divider,
  CopyButton,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import {
  ConnectButton,
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import { useLocale } from "use-intl";
import { MenuToggle } from "@/components/widgets/MenuToggle";
import { motion, useCycle } from "framer-motion";
import { useAccount, useChainId, useChains, useDisconnect } from "wagmi";
import { CHAIN_LOGO, fixStringWithMiddle } from "@/utils";
import styled from "styled-components";
import media from "styled-media-query";
import LocaleSwitcher from "@/components/widgets/LocaleSwitcher";

type HeaderProps = {
  reffer?: string;
  items:{
    label:string,
    url:string
  }[]
};

const ConnectWrapper = styled.div`
  display: block;
  ${media.lessThan("medium")`
        display:none;
    `}
`;
const MenuWrapper = styled.div`
  display: none;
  ${media.lessThan("medium")`
        display:block;
    `}
`;

const Header = (props: HeaderProps) => {
  const t = useTranslations("Metadata");
  const pathname = usePathname();
  let locale = useLocale();
  const account = useAccount();
  const chainId = useChainId();
  const chains = useChains();
  const [address, setAddress] = useState<string>();
  const [currentPath, setCurrentPath] = useState<string>("home");
  const [isOpen, toggleOpen] = useCycle(true, false);
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { disconnect } = useDisconnect();

  const [chain, setChain] = useState<any>();

  useEffect(() => {
    if (locale && pathname) {
      setCurrentPath(pathname.replace("/" + locale + "/", ""));
    }
  }, [pathname, locale]);
  useEffect(() => {
    setAddress(account.address);
    if (!account.address) {
      setChain(undefined);
    } else {
      setChain(chains?.find((chain: any) => chain.id == chainId));
    }
  }, [account]);
  useEffect(() => {
    if (chains && chainId) {
      setChain(chains.find((chain: any) => chain.id == chainId));
    } else {
      setChain(undefined);
    }
  }, [chains, chainId]);

  const create_user = () => {
    // return <></>
    return (
      <ConnectWrapper>
        <ConnectButton
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </ConnectWrapper>
    );
  };
  const match_url = (url: string) => {
    // let local_ = locale;
    // if (!local_){
    //     local_='en-US'
    // }
    if (props.reffer) {
      return `/${props.reffer}${url}`;
    }
    return url;
  };
  const check_active = (key: string) => {
    return currentPath.indexOf(key) >= 0;
  };

  return (
      <div className={styles.header}>
        <img src={"/icon-light.png"} className={styles.logo} alt={""}/>
        <div className={styles.navs}>
          {props.items.map((item: any, index: number) => {
            return  <LineLink
                label={t(item.label)??item.label}
                url={match_url(item.url)}
                active={check_active(item.url)}
            />
          })}

        </div>
        <Space flex={1}/>
        {create_user()}
        <MenuWrapper>
          <motion.nav initial={true} animate={isOpen ? "open" : "closed"}>
            <MenuToggle
                toggle={() => {
                  toggleOpen();
                }}
            />
          </motion.nav>

        </MenuWrapper>
        <LocaleSwitcher/>
        <Drawer
            opened={!isOpen}
            size={"75%"}
            position={"right"}
            onClose={() => {
              toggleOpen();
            }}
            title={t("Menu")}
        >
          <div>
            <Divider/>
            <div className={"flex flex-col items-start"}>
              <LineLink
                  label={"Home"}
                  url={"/home"}
                  active={currentPath == "home"}
                  style={{color: "var(--gray-6)"}}
              />
              <LineLink
                  label={"NodeSale"}
                  url={"/sale"}
                  active={currentPath == "sale"}
                  style={{color: "var(--gray-6)"}}
              />
              <LineLink
                  label={"MyNodes"}
                  url={"/mynodes"}
                  active={currentPath == "mynodes"}
                  style={{color: "var(--gray-6)"}}
              />
            </div>
            <Divider/>
            <div className={"pt-5 pb-2"}>{t("Wallet")}</div>
            <Divider/>
            <div className={"relative"}>
              {!address ? (
                  <div className={"w-full text-center pt-6"}>
                    <Button
                        onClick={(event) => {
                          event.stopPropagation();
                          if (openConnectModal) {
                            console.log("openConnectModal");
                            openConnectModal();
                          }
                        }}
                    >
                      {t("Connect")}
                    </Button>
                  </div>
              ) : (
                  <div className={"pt-3  pb-2"}>
                    <div className={"pb-2"}>
                      {fixStringWithMiddle(address, 8, "....")}
                    </div>
                    <div className={"flex items-center gap-3"}>
                      <CopyButton value={address}>
                        {({copied, copy}) => (
                            <Button
                                color={copied ? "teal" : "blue"}
                                className={"flex-1"}
                                onClick={copy}
                            >
                              {copied ? "Copied" : "Copy"}
                            </Button>
                        )}
                      </CopyButton>
                      <Button
                          className={"flex-1"}
                          color={"yellow"}
                          onClick={() => {
                            if (disconnect) {
                              console.log("disconnect");
                              disconnect();
                            }
                          }}
                      >
                        {t("Disconnect")}
                      </Button>
                    </div>
                  </div>
              )}
            </div>
            {chain && address ? (
                <div>
                  <Divider/>
                  <div className={"pt-5 pb-2"}>{t("Chain")}</div>
                  <Divider/>
                  <div className={"w-full flex items-center pt-3 gap-3 pb-2"}>
                    <img
                        className={"w-[20px] h-[20px]"}
                        src={CHAIN_LOGO[chain.id]}
                    />
                    <div>{chain.name}</div>
                  </div>
                  <Button
                      className={"flex-1"}
                      color={"blue"}
                      onClick={() => {
                        if (openChainModal) {
                          console.log("openChainModal");
                          openChainModal();
                        }
                      }}
                  >
                    {t("Switch Chain")}
                  </Button>
                </div>
            ) : null}
          </div>
        </Drawer>
      </div>
  );
};
export default Header;
