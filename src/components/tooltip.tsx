import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function MyTooltip() {
    return (
        <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
                <p>Example tooltip</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default MyTooltip;