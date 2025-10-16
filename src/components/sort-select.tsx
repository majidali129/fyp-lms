import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"



type SortSelectProps = {
    placeholder?: string;
    value: string;
    onchange: (value: string) => void;
    options: ReadonlyArray<{ label: string, value: string }>
    className?: string;
}
export const SortSelect = ({ onchange, options, value, placeholder, className }: SortSelectProps) => {
    return (
        <Select defaultValue={value} onValueChange={onchange}>
            <SelectTrigger className={`border-none bg-sidebar-accent !h-auto py-2.5 ${className}`} >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent className="bg-sidebar-accent">
                {
                    options.map(option => <SelectItem key={option.value} className="hover:!bg-white" value={option.value} >{option.label}</SelectItem>)
                }
            </SelectContent>
        </Select>
    )
}