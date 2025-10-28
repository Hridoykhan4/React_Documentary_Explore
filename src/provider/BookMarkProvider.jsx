import { useState } from "react";
import BookMarkContext from "../context/BookMarkContext";

const BookMarkProvider = ({ children }) => {
  const [bookMark, setBookMark] = useState([]);
  return (
    <BookMarkContext.Provider value={{ bookMark, setBookMark }}>
      {children}
    </BookMarkContext.Provider>
  );
};

export default BookMarkProvider;
