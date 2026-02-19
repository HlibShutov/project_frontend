import './App.css'
import MyDrawer from "@/components/drawer.tsx";
import {useState} from "react";
import MyItem from "@/components/item.tsx";
import MyTooltip from "@/components/tooltip.tsx";
import MyChart from "@/components/chart.tsx";
import MyForm from "@/components/form.tsx";
import GenericSelect from "@/components/genericComponent.tsx";
import Tabs from "@/components/tabs.tsx";
import MyButton from "@/components/functionOverloading.tsx";

type Book = {
    id: string;
    title: string;
    author: string;
}

const books: Book[] = [
    {id: "1", title: "book1", author: "authpr1"},
    {id: "2", title: "book2", author: "author2"},
    {id: "3", title: "book3", author: "author3"},
]

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className="flex flex-col items-center justify-center h-full gap-5">
            <div className="flex items-center flex-wrap gap-5">
                <Tabs>
                    <MyItem label="Item" isOpen={isOpen} setIsOpen={setIsOpen}></MyItem>
                    <MyDrawer label="drawer" isOpen={isOpen} setIsOpen={setIsOpen}></MyDrawer>
                    <MyTooltip label="tooltip"></MyTooltip>
                    <MyChart label="curve"></MyChart>
                </Tabs>
            </div>
            <div className="border border-black w-150 opacity-50"></div>
            <div className="flex items-center flex-wrap gap-5">
                <MyForm></MyForm>
                <div className="border border-black h-50 opacity-50"></div>
                <GenericSelect<Book> onChange={(value) => alert(value.author)} values={books} />
                <div className="border border-black h-50 opacity-50"></div>
                <div className="flex flex-col gap-5 items-center">
                    <MyButton href="https://ww.google.com"></MyButton>
                    <MyButton onClick={() => alert("click")}></MyButton>
                </div>
            </div>
        </main>
    )
}

export default App
