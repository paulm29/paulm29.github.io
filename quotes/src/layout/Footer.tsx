import styled from "styled-components";
import './Footer.css';

// type Version = { id: number, entry: string };
// const versions: Version[] = [{ id: 1, entry: "Initial version" }];

const Footer = () => {
    // const theme = useContext(ThemeContext);

    const Footer = styled.div`
      background-color: white;
      font-size: 10px;
      color: black;
    `;

    return (
        <>
            <Footer>
                {/*<ul>*/}
                {/*    {*/}
                {/*        versions.map((data: Version) =>*/}
                {/*            <li key={data.id}>{data.entry}</li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</ul>*/}
            </Footer>
        </>
    )
}
export default Footer;
