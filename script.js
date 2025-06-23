let url="https://jsonplaceholder.typicode.com/todos"


const container = document.createElement("section");
document.body.appendChild(container);

async function fetchData(){

   
    try{
        let raspuns = await fetch(url);
        let todos = await raspuns.json(); 
        for(let todo of todos){
            createCard(todo);
        }
    }
    catch(error){
        console.error("Error fetching data:", error);
    }

}

function createCard(todo){

    let card = document.createElement("article");
  let title = document.createElement("p");
  let completed = document.createElement("p");

  title.textContent = `Title: ${todo.title}`;
  completed.textContent = `Status: ${todo.completed ? "Completed" : "Not completed"}`;

  card.appendChild(title);
  card.appendChild(completed);
  container.appendChild(card);
}
fetchData();