let data;
let graph;
let dropdown;

function preload() {
  data = loadJSON('bacon.json');
}

function setup() {
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(bfs);
  dropdown1 = createSelect();
  dropdown1.changed(bfs);
  noCanvas();
  
  const movies = data.movies;
  
  //iterate through the movies dataset
  for (let i = 0; i < movies.length; i++ ) {
    const movie = movies[i].title;
    const cast = movies[i].cast;

    //create a new node
    let movieNode = new Node(movie);
    //add node to graph object
    graph.addNode(movieNode);

    for (let j = 0; j < cast.length; j++ ) {
      let actor = cast[j];
      let actorNode = graph.getNode(actor);

      if ( actorNode == undefined ){
        actorNode = new Node(actor);
        dropdown.option(actor);
        dropdown1.option(actor);
      }

      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }
  console.log(graph);

}

function bfs() {
  graph.reset();
  let start = graph.setStart(dropdown.value());
  let end = graph.setEnd(dropdown1.value());

  // create a queue to store all nodes waiting to search
  const queue = []; 
  const path = [];

  //mark the start node to be searched
  start.searched = true;
  //add start to queue
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift(); // remove the first value from the queue array
    //console.log(current);
    if (current == end) {
      path.push(current);
      let next = current.parent;
      while(next) {
        path.push(next);
        next = next.parent;
      }
      break;
    } else {
      let next = current.edges;
      for (let i of next) {
        let neighbor = i;
        if (!neighbor.searched) {
          queue.push(neighbor);
          neighbor.parent = current;
        }
      }
      //mark current node as searched
      current.searched = true;
    }
  }

  //use p5 function to print path to DOM
  let txt = "";
  for (var i = path.length - 1; i >= 0; i--) {
    var n = path[i];
    txt += n.value;
    if ( i != 0 ) {
      txt += ' => ';
    };
  }
  createP(txt);

}
