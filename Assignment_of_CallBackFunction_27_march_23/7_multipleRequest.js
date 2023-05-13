async function fetchData() {
    const [todoResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1")
    ]);
  
    const [todo, post] = await Promise.all([todoResponse.json(), postResponse.json()]);
  
    const result = { todo, post };
  
    console.log(result);
  }
  
  fetchData();
  