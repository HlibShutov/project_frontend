import {Button} from "@/components/ui/button.tsx";
import {
    Drawer,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
function MyDrawer({label, isOpen, setIsOpen}: {label: string, isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction={'right'}>
            <DrawerTrigger>Open drawer</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{label}</DrawerTitle>
                    <DrawerDescription>Some description</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default MyDrawer;