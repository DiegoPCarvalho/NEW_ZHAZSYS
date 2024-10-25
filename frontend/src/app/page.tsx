'use client'
import { AppProvider } from "@/data/context/AppContext";
import HomePage from "./HomePage";

export default function Home() {

    return (
        <AppProvider>
            <HomePage />
        </AppProvider>
    );
}