import styled from "styled-components";

type Version = { id: number, entry: string };
const versions: Version[] = [{ id: 1, entry: "Initial version" }];

const Footer = (props: any) => {

    const VersionHistory = styled.button`
      background-color: white;
      font-size: 10px;
      color: black;
    `;

    return (
        <>
            <VersionHistory>
                <ul>
                    {
                        versions.map((data: Version) =>
                            <li key={data.id}>{data.entry}</li>
                        )
                    }
                </ul>
            </VersionHistory>
        </>
    )
}
export default Footer;
