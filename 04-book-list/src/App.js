import Book from './Book';
import { books } from './book.data';
import './index.css';

function App() {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={index} number={index + 1} />;
                })}
            </section>
        </>
    );
}

export default App;
