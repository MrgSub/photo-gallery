import React from "react";
import { Container, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import store from "./util/store";
import { Provider } from "react-redux";
import { set } from "./util/reducer";
import A from "axios";

const Thumb = React.lazy(() => import("./components/thumb"));

const Gallery = () => {
	const thumbs = useSelector((state) => state.gallery.thumbs);

	return (
		<Container>
			<Row>
				{thumbs.map((thumb, index) => {
					return (
						<React.Suspense fallback={<div>Loading...</div>}>
							<Thumb
								title={thumb.title}
								key={index}
								url={thumb.thumbnailUrl}
							/>
						</React.Suspense>
					);
				})}
			</Row>
		</Container>
	);
};

const InnerGallery = () => {
	const thumbs = useSelector((state) => state.gallery.thumbs);
	const dispatch = useDispatch();

	React.useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		return new Promise((resolve, reject) => {
			A.get("https://jsonplaceholder.typicode.com/photos")
				.then((response) => {
					dispatch(set(response.data));
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	return (
		<div>
			{thumbs ? (
				<Container>
					<Container>
						<p>There is a total of {thumbs.length} photos loaded</p>
					</Container>
					<Gallery />
				</Container>
			) : (
				<p>no thumbs</p>
			)}
		</div>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<InnerGallery />
		</Provider>
	);
};

export default App;
