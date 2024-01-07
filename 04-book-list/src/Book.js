function Book({ img, title, author, number }) {
    return (
        <article className="Book">
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <span className="number"> # {number}</span>
        </article>
    );
}

export default Book;
