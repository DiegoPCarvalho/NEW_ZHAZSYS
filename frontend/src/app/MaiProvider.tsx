'use client';

import { AppProvider } from "@/data/context/AppContext";

interface MainProvidersProps{
    children?: any
}

export function MainProviders(props: MainProvidersProps) {
  return (
    <AppProvider>
        {props.children}
    </AppProvider>
  );
}