import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button className="btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}
export default About;
