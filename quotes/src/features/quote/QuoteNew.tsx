import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./quote-new/FormInputText";
import { FormInputMultiCheckbox } from "./quote-new/FormInputMultiCheckbox";
import { FormInputDropdown } from "./quote-new/FormInputDropdown";
import { FormInputDate } from "./quote-new/FormInputDate";
import { FormInputSlider } from "./quote-new/FormInputSlider";
import { FormInputRadio } from "./quote-new/FormInputRadio";

interface IFormInput {
    textValue: string;
    dropdownValue: string;
}

const defaultValues = {
    textValue: "",
    radioValue: "",
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue: "",
    sliderValue: 0,
};
const QuoteNew = () => {
    const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
        defaultValues: defaultValues,
    });

    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <Paper
            style={{
                display: "grid",
                gridRowGap: "20px",
                padding: "20px",
                margin: "10px 300px",
            }}
        >
            <Typography variant="h4"> Form Demo</Typography>

            <FormInputText name="textValue" control={control} label="Text Input" />
            <FormInputRadio
                name={"radioValue"}
                control={control}
                label={"Radio Input"}
            />
            <FormInputDropdown
                name="dropdownValue"
                control={control}
                label="Dropdown Input"
            />
            <FormInputDate name="dateValue" control={control} label="Date Input" />
            <FormInputMultiCheckbox
                control={control}
                setValue={setValue}
                name={"checkboxValue"}
                label={"Checkbox Input"}
            />
            <FormInputSlider
                name={"sliderValue"}
                control={control}
                setValue={setValue}
                label={"Slider Input"}
            />

            <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Submit
            </Button>
            <Button onClick={() => reset()} variant={"outlined"}>
                Reset
            </Button>
        </Paper>
    );
};

export default QuoteNew;
