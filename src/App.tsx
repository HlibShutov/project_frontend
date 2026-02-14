import './App.css'
import MyDrawer from "@/components/drawer.tsx";
import {useState} from "react";
import MyItem from "@/components/item.tsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className="flex items-center flex-wrap gap-5">
            <MyItem isOpen={isOpen} setIsOpen={setIsOpen}></MyItem>
            <div className="border border-black h-50"></div>
            <MyDrawer isOpen={isOpen} setIsOpen={setIsOpen}></MyDrawer>
        </main>
    )
}

export default App
