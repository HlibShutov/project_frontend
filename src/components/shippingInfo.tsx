import {Controller, useFormContext} from "react-hook-form";
import type {formSchema} from "@/components/formSchema.ts";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import * as z from "zod"
import ReCAPTCHA from "react-google-recaptcha";


function ShippingInfo() {
    const {
        control,
    } = useFormContext<z.infer<typeof formSchema>>();
    return (
        <div>
            <FieldGroup>
                <Controller
                    name="shippingInfo.address"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                            <Input {...field} id={field.name}/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />
                <Controller
                    name="shippingInfo.postalCode"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Postal code</FieldLabel>
                            <Input {...field} id={field.name}/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />
                <Controller
                    name="shippingInfo.additionalInfo"
                    control={control}
                    render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Additional info</FieldLabel>
                            <Input {...field} id={field.name}/>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                        </Field>
                    )}
                />
                <ReCAPTCHA
                    sitekey="6Ld-cXEsAAAAABhj4btEmdRcxKTPy4X1bOt4aOwf"
                    onChange={(value) => console.log("Captcha value:", value)}
                />
            </FieldGroup>
        </div>
    )
}

export default ShippingInfo