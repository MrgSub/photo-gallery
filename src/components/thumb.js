import { Col, Card, CardBody, CardTitle } from "reactstrap";
import S from "styled-components";

const CustomTitle = S(CardTitle)`
	height: 2.5rem;
	line-height: 1.25rem;
	overflow:hidden;
	text-overflow: ellipsis;
`;

const Main = ({ url, title }) => {
	return (
		<Col sm={"12"} md={"3"} lg={"3"}>
			<Card style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}>
				<CardBody>
					<CustomTitle tag="h5">{title}</CustomTitle>
				</CardBody>
				<img src={url} alt={"thumb"} />
			</Card>
		</Col>
	);
};

export default Main;
