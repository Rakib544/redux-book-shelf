import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleBook from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    const readingBooks = useSelector(state => state.readingList)
    const [showMinusButton, setShowMinusButton] = useState(true)
    return (
        <PageLayout>
             {
                 readingBooks.length 
                 ? readingBooks.map(book => <SingleBook key ={book.id} book={book} showMinusButton={showMinusButton} />)
                 : <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
             }
        </PageLayout>
    );
};

export default ReadingList;