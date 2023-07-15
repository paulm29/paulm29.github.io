const NewQuote = () => {
    return (
        <div>
            This form will generate a JSON string that can be used to add new quotes as a pull request.
            It is best to add many quotes at one time.

            Fields:
            - Quote
            - Category: select existing or new
            - Author: select existing or new
            - Reference: book or other source
        </div>
    )
}
export default NewQuote;
