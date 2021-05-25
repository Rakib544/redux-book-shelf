import books from '../../fakeData/books.json';
const initialValue = {
    books: books,
    readingList: [],
    finishedList: []
}

export const bookReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'ADD_TO_READING_LIST': {
            return {
                ...state,
                readingList: [...state.readingList, action.payload]
            }
        }
        case 'REMOVE_FROM_READING_LIST': {
            return {
                ...state,
                readingList: state.readingList.filter(b => b.id !== action.payload)
            }
        }
        case 'ADD_TO_FINISH_LIST': {
            return {
                ...state, 
                finishedList: [...state.finishedList, action.payload]
            }
        }
        default: {
            return state
        }
    }
}