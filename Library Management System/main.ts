import inquirer from "inquirer";
import chalk from "chalk";

let condition = true;


// while(condition) {
console.log(chalk.bgGreen("<<<<<<Welcome to the House of Book>>>>>>"));

console.log();


  
//type literals with unions for Book status
type BookStatus = "available" | "checkedOut" | "reserved";

//creating interface for book properties
interface Book {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
}

//extending book interface with intersection type

type DetailedBook = Book & {
  description: string;
  pages: number;
  // content: string,
};

//creating a function that contain all book properties as parameters and returning it all

function createBook(
  id: number,
  title: string,
  author: string,
  description: string,
  pages: number
): DetailedBook {
  return {
    id,
    title,
    author,
    description,
    pages,
    status: "available",
  };
}

let cont = await inquirer.prompt({
      name: "continue",
      type: "confirm",
      message: "Do you want to continue?",
      
    })


    
    //union type for book actions
    type BookActions = "checkout" | "return" | "reserve";
    
    //function to update the status of a book based on action
    function updateStatus(book: Book, action: BookActions): Book {
  switch (action) {
    case "checkout":
      if (book.status === "available") {
        book.status = "checkedOut";
      }
      break;
      case "return":
        if (book.status === "checkedOut") {
        book.status = "available";
      }
      break;
      case "reserve":
        if (book.status === "available") {
          book.status = "reserved";
        }
        break;
      default:
        throw new Error("Invalid action!");
      }
  return book;
}

//display book details

function displayBook(book: Book): void {
  console.log(chalk.bold.white(`Title: ${book.title}`));
  console.log(chalk.bold.white(`Author: ${book.author}`));
  console.log(chalk.bold.white(`Status: ${book.status}`));
  if ("description" in book) {
    console.log(chalk.bgBlue(`Description: ${(book as DetailedBook).description}`));
  }
  if ("pages" in book) {
    console.log(`Pages: ${(book as DetailedBook).pages}`);
  }
}
//Main program

const library: DetailedBook[] = [
  createBook(
    1,
    " The Great Gatsby",
    "F. Scott Fitzgerald",
    "The novel follows the life of a young and mysterious millionaire, his extravagant lifestyle in Long Island, and his obsessive love for a beautiful former debutante.",
    180
  ),
  createBook(
    2,
    "Ulysses",
    "James Joyce",
    "The novel follows a day in the life of Leopold Bloom, an advertising salesman, as he navigates the city.",
    783
  ),
  createBook(
    3,
    "Crime and Punishment",
    "Fyodor Dostoevsky",
    "A young, impoverished former student in Saint Petersburg, Russia, formulates a plan to kill an unscrupulous pawnbroker to redistribute her wealth among the needy. However, after carrying out the act, he is consumed by guilt and paranoia, leading to a psychological battle within himself.",
    600
  ),
  createBook(
    4,
    "To Kill a Mockingbird",
    "Harper Lee",
    "The novel follows a young girl and her older brother as they navigate their small town's societal norms and prejudices. Their father, a lawyer, is appointed to defend a black man falsely accused of raping a white woman, forcing the children to confront the harsh realities of racism and injustice.",
    281
  ),
];

// Function to prompt the user to select a book and action

async function promptUser() {
  const bookChoices = library.map((book) => ({
    name: `${book.title} by ${book.author} (${book.status})`,
    value: book.id,
  }));
  const { selectedBookId } = await inquirer.prompt({
    name: "selectedBookId",
    type: "list",
    message: "Select a Book:",
    choices: bookChoices,
  });
  const { action } = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      { name: "Checkout", value: "checkout" },
      { name: "Return", value: "return" },
      { name: "Reserve", value: "reserve" },
    ],
  });

  const selectedBook = library.find((book) => book.id === selectedBookId);
  if (selectedBook) {
    updateStatus(selectedBook, action as BookActions);
    console.log("\nUpdated Book Status:");
    displayBook(selectedBook);
  } else {
    console.log(chalk.red("Book not found!"));
  }
  const { continuePrompt } = await inquirer.prompt({
    name: "continuePrompt",
    type: "list",
    choices: ["Yes","No"],
    message: "Do you want to continue?",
  });

  if (continuePrompt.continuePrompt === "No") {
    // condition = false;
    console.log(chalk.bgGreen("Thank you for visiting the House of Books!"));
  }

}
promptUser()
// }

