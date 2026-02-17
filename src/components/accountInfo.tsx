import {Controller, useFormContext} from "react-hook-form";
import * as z from "zod"
import type {formSchema} from "@/components/formSchema.ts";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";

function AccountInfo() {
    const {
        control,
    } = useFormContext<z.infer<typeof formSchema>>();
    return (
        <div>
            <FieldGroup>
                <Controller
                    name="accountInfo.name"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                            <Input {...field} id={field.name}/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />

                <Controller
                    name="accountInfo.lastname"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Lastname</FieldLabel>
                            <Input {...field} id={field.name}/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />

                <Controller
                    name="accountInfo.email"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                            <Input {...field} id={field.name} type="email"/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />

                <Controller
                    name="accountInfo.password"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                            <Input {...field} id={field.name} type="password"/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />
            </FieldGroup>
        </div>
    )
}

export default AccountInfo