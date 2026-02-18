import {
    Tooltip,
    TooltipContent, TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function MyTooltip({ label }: { label: string }) {
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>{label} (hover)</TooltipTrigger>
            <TooltipContent>
                <p>Example tooltip</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>

    )
}

export default MyTooltip;