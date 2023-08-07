import { Link, useParams } from 'react-router-dom';

const QuoteView = () => {

    const params = useParams();

    const quoteId = params.quoteId;

    return (
        <>
            <Link to=".." relative="path">Back</Link>
        </>
    );
};
export default QuoteView;
