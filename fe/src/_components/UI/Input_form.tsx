import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../shadcn/ui/form";
import { Input } from "../shadcn/ui/input";
import { UseFormReturn } from "react-hook-form";

interface IDataInputForm {
    form: UseFormReturn
    text?: string,
    name: string,
    type: string,
    textPlaceholder?: string
}
export default function Input_form({ dataInputForm }: { dataInputForm: IDataInputForm }) {
    return (
        <FormField
            control={dataInputForm?.form.control}
            name={dataInputForm?.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-800">{dataInputForm?.text}</FormLabel>
                    <FormControl>
                        <Input type={dataInputForm?.type} placeholder={dataInputForm?.textPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
