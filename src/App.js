import Thumb from "./components/thumb";
import { useThumbs } from "./util/hooks";
import { Container, Row } from "reactstrap";

const Gallery = () => {
	const { thumbs } = useThumbs();
	return (
		<Container>
			<Row>
				{thumbs.data.map((thumb, index) => {
					return (
						<Thumb
							title={thumb.title}
							key={index}
							url={thumb.thumbnailUrl}
						/>
					);
				})}
			</Row>
		</Container>
	);
};

const App = () => {
	const { thumbs, isLoading, isError } = useThumbs();
	return thumbs ? (
		<Container>
			<Container>
				<p>There is a total of {thumbs.data.length} photos loaded</p>
			</Container>
			<Gallery />
		</Container>
	) : isLoading ? (
		<p>Loading</p>
	) : isError ? (
		<p>Error</p>
	) : null;
};

export default App;
