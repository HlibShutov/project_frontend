import {
    Item,
    ItemActions,
    ItemContent, ItemDescription,
    ItemTitle,
} from "@/components/ui/item"
import {Button} from "@/components/ui/button.tsx";

function MyItem({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    return (
    <Item className="bg-gray-500">
        <ItemContent>
            <ItemTitle>Crazy item</ItemTitle>
            <ItemDescription className="text-black">Action opens drawer</ItemDescription>
        </ItemContent>
        <ItemActions>
            <Button onClick={() => {setIsOpen(!isOpen)}}>Action</Button>
        </ItemActions>
    </Item>
    );
}

export default MyItem;