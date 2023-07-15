import './QuoteNew.css';
import React, { useState } from "react";

const QuoteNew = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            This form will generate a JSON string that can be used to add new quotes as a pull request.
            It is best to add many quotes at one time.

            Fields:
            - Quote
            - Category: select existing or new
            - Author: select existing or new
            - Reference: book or other source

                <input
                    className="new-quote-input"
                    type="text"
                    placeholder="Type your new todo here"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)} />
                <button className="new-todo-button">Create Todo</button>
        </div>
    )
}
export default QuoteNew;
