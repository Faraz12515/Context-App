import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: 'name of the wind', id: 1 },
		{ title: 'The way of kings', id: 2 },
		{ title: 'The final empire', id: 3 },
		{ title: 'The way of kings', id: 4 },
	]);
	return (
		<BookContext.Provider value={{ books }}>
			{props.childern}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
