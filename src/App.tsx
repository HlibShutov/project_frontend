import './App.css'
import MyDrawer from "@/components/drawer.tsx";
import {useState} from "react";
import MyItem from "@/components/item.tsx";
import { TooltipProvider } from "@/components/ui/tooltip"
import MyTooltip from "@/components/tooltip.tsx";
import MyChart from "@/components/chart.tsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className="flex items-center flex-wrap gap-5">
            <MyItem isOpen={isOpen} setIsOpen={setIsOpen}></MyItem>
            <div className="border border-black h-50"></div>
            <MyDrawer isOpen={isOpen} setIsOpen={setIsOpen}></MyDrawer>
            <div className="border border-black h-50"></div>
            <TooltipProvider><MyTooltip></MyTooltip></TooltipProvider>
            <div className="border border-black h-50"></div>
            <MyChart></MyChart>
        </main>
    )
}

export default App
