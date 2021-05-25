import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleBook from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const finishBookList = useSelector(state => state.finishedList)
  return (
    <PageLayout>
      {
        finishBookList.length
          ? finishBookList.map(book => <SingleBook id={book.id} book={book} />)
        : <p>
            Hey there! This is where books will go when you've finished reading
            them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
            page to add books to your list.
      </p>
      }
    </PageLayout>
  );
};

export default FinishedBooks;
