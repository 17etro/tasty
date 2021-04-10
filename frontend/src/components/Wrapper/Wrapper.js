import React from "react";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";

const Wrapper = props => {
	return (
		<>
			<Header />
			<Menu />
			{props.children}
		</>
	);
};

export default Wrapper;
