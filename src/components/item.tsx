import {
    Item,
    ItemActions,
    ItemContent, ItemDescription,
    ItemTitle,
} from "@/components/ui/item"
import {Button} from "@/components/ui/button.tsx";

function MyItem({label, isOpen, setIsOpen}: {label: string, isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    return (
    <Item>
        <ItemContent>
            <ItemTitle>{label}</ItemTitle>
            <ItemDescription className="text-black">Action opens drawer</ItemDescription>
        </ItemContent>
        <ItemActions className="animate-bounce">
            <Button onClick={() => {setIsOpen(!isOpen)}}>Action</Button>
        </ItemActions>
    </Item>
    );
}

export default MyItem;