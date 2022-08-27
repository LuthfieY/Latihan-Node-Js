const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// Convert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)

// Convert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title) // Print: Ego is the enemy