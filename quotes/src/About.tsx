import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            <p>Wisdomology is a wisdom quote collection.</p>

            <button className="btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </>
    )
}
export default About;
