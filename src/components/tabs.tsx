import React, {type ComponentProps, type ReactElement, useState} from "react";
import MyChart from "@/components/chart.tsx";
import MyDrawer from "@/components/drawer.tsx";
import MyItem from "@/components/item.tsx";
import MyTooltip from "@/components/tooltip.tsx";

type ChartElement = ReactElement<ComponentProps<typeof MyChart>, typeof MyChart>;
type DrawerElement = ReactElement<ComponentProps<typeof MyDrawer>, typeof MyDrawer>;
type ItemElement = ReactElement<ComponentProps<typeof MyItem>, typeof MyItem>;
type TooltipElement = ReactElement<ComponentProps<typeof MyTooltip>, typeof MyTooltip>;
type TabsChild = ChartElement | DrawerElement | ItemElement | TooltipElement;
type TabsProps = {
    children: TabsChild | TabsChild[];
};

function isTabsChildWithLabel(
    child: React.ReactNode
): child is React.ReactElement<{ label: string }> {
    if (!React.isValidElement(child)) return false;

    if (typeof child.type === 'string') return false;

    const types = [MyChart, MyDrawer, MyItem, MyTooltip] as const;

    if (!types.includes(child.type as typeof MyChart | typeof MyDrawer | typeof MyItem | typeof MyTooltip)) {
        return false;
    }

    const props = child.props as Record<string, unknown>;
    return typeof props.label === 'string';
}

function Tabs({ children }: TabsProps) {
    const [activeTab, setActiveTab] = useState(0);
    const childs = React.Children.toArray(children);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="@container/labels w-full">
            <div className="flex justify-center gap-5 flex-col @md/labels:flex-row">
            {childs
                .filter((child) => isTabsChildWithLabel(child))
                .map((child, index) =>
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className="group-hover:opacity-50"
                        style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
                    >
                        {child.props.label}
                        </button>
                )}
            </div>
            <div className="flex justify-center content-center">
                {childs.map((child, index) => (
                    <div style={{ display: activeTab === index ? 'block' : 'none' }}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs;