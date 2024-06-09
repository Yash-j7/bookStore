import Book from '../model/book.model.js'

export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Wait for the promise to resolve
        res.status(200).json(books); // Send the resolved data
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
