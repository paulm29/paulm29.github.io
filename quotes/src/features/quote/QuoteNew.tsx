import { Button, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormInputText } from './quote-new/FormInputText';
import { FormInputDropdown } from './quote-new/FormInputDropdown';
import { FormInputTextArea } from './quote-new/FormInputTextArea';

interface IFormInput {
    quote: string;
    category: string;
    author: string;
    reference: string;
}

const defaultValues = {
    quote: '',
    category: '',
    author: '',
    reference: ''
};

const QuoteNew = () => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {handleSubmit, reset, control, setValue} = useForm<IFormInput>({
        defaultValues: defaultValues
    });

    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };

    return (
        <Paper
            style={{
                display: 'grid',
                gridRowGap: '20px',
                padding: '20px',
                margin: '10px 300px',
            }}
        >
            <Typography variant="h4">Add Quote</Typography>

            <FormInputTextArea name="quote" control={control} label="Quote"/>

            <FormInputDropdown
                name="category"
                control={control}
                label="Category"
            />

            <FormInputText name="author" control={control} label="Author: use 'unknown' if unattributed"/>

            <FormInputText name="reference" control={control} label="Reference: book, etc."/>

            <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
                Submit
            </Button>
            <Button onClick={() => reset()} variant={'outlined'}>
                Reset
            </Button>
        </Paper>
    );
};

export default QuoteNew;
