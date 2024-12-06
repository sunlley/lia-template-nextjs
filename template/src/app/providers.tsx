'use client';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {lightTheme, type Locale, RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import {WagmiProvider} from 'wagmi';
import {config} from '@/wagmi';

import {MantineProvider, useMantineColorScheme} from "@mantine/core";
import {MantineTheme} from "@/styles/mantine";
import {Notifications} from "@mantine/notifications";
import {NavigationProgress} from "@mantine/nprogress";
import {changeTheme, installTheme} from "@/styles/custom";


const queryClient = new QueryClient({});

function TempConnector() {
  const {colorScheme} = useMantineColorScheme();
  useEffect(() => {
    installTheme(colorScheme);
  }, [colorScheme]);
  useEffect(() => {
    changeTheme(colorScheme, null);
  }, [colorScheme]);
  return <></>;
}

function Providers({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <MantineProvider
      // getRootElement={getRootElement}
      forceColorScheme="light"
      theme={MantineTheme}
    >
      <NavigationProgress />
      <Notifications autoClose={800} position="top-center" />
      {/* <DatesProvider settings={{locale: locale}}>*/}

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            locale={locale}
            theme={lightTheme({
              borderRadius: 'small',
              overlayBlur: 'small',
              fontStack: 'system'
            })}
          >
            <TempConnector />
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>

      {/* </DatesProvider>*/}
    </MantineProvider>
  );
}

export default Providers;
