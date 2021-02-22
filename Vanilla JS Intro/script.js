todos = []

function addTodo() {
  todoText = prompt("What would you like to add?")
  todos.push(todoText)

  // Add the Todo to the page so you see it
  let node = document.createElement("li");    // Create a <li> (list) node
  let textnode = document.createTextNode(todoText); // Create a text node
  node.appendChild(textnode);      // Append the text to <li>
  // node.id = todoText

  // Finally, let's add this to our document. Uncomment the next line
  // document.getElementById("myList").appendChild(node);   // Append <li> to <ul> with id="myList"
}

function removeTodo() {
  todoText = prompt("Which todo would you like to remove?")
  // How do we do this?

  // 1. We could  give each node an ID that is the todo text (uncomment this on line 11)
  // 2. We could then find the element with that ID and remove it from the document using this approach: https://stackoverflow.com/questions/3387427/remove-element-by-id

  
}

// Does this seem like a good approach?
// Where does it start breaking?