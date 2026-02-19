import * as z from "zod"
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "@/components/ui/button.tsx";
import AccountInfo from "@/components/accountInfo.tsx";
import ShippingInfo from "@/components/shippingInfo.tsx";
import {formSchema} from "@/components/formSchema.ts";


type StepNamesType = keyof Omit<z.infer<typeof formSchema>, 'step'>;

// Define the steps, each step is a component
const steps: { [key in StepNamesType]: React.ReactNode } = {
    accountInfo: <AccountInfo />,
    shippingInfo: <ShippingInfo />,
};

// Define a mapping from step number to step name
const STEPS_TO_STEP_NAMES: { [key: number]: StepNamesType } = {
    1: 'accountInfo',
    2: 'shippingInfo',
};

function MyForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            step: 1,
            accountInfo: {
                name: "",
                lastname: "",
                email: "",
                password: "",
            },
            shippingInfo: {
                address: "",
                postalCode: "",
                additionalInfo: "",
                nonStandartControll: 0,
            },
        },
    });


    function onSubmit(data: z.infer<typeof formSchema>) {
        alert(JSON.stringify(data, null, 2));
    }
    const currentStep = form.watch('step');
    const currentStepName = STEPS_TO_STEP_NAMES[currentStep];

    return (
        <FormProvider {...form}>
            <form id="my-form" onSubmit={form.handleSubmit(onSubmit)} className="w-56">
                <FormControls></FormControls>
                {steps[currentStepName]}
            </form>
        </FormProvider>
    )
}


function FormControls() {
    const { setValue, trigger, getFieldState, getValues } = useFormContext();

    // Get the current step from the form values
    const step = getValues('step');

    // Get the current step name
    const currentStepName = STEPS_TO_STEP_NAMES[step];

    const isFirstStep = Object.keys(steps)[0] === currentStepName;
    const isLastStep = step === Object.keys(steps).length;

    return (
        <div className='flex w-full justify-between'>
            <Button
                variant='outline'
                type='button'
                disabled={isFirstStep}
                onClick={() => setValue('step', step - 1)}
            >
                Previous
            </Button>

            {/* if it's not the last step
      else submit the form (this will also trigger validation) */}
            {isLastStep ? (
                <Button variant='default' type='submit'>
                    Save
                </Button>
            ) : (
                <Button
                    // Change the button type to submit when it's the last step
                    type='button'
                    onClick={async (e) => {
                        //prevents form submission from bubbling up to the submit button
                        // and triggering the form submission one step ahead
                        e.stopPropagation();
                        e.preventDefault();

                        //Trigger validation for the current step
                        // and if there are no errors, move to the next step
                        await trigger(currentStepName);
                        const currentStepHasErrors = getFieldState(currentStepName).error;
                        if (currentStepHasErrors) return;
                        setValue('step', step + 1);
                    }}
                >
                    Next
                </Button>
            )}
        </div>
    );
}

export default MyForm