//create a graph class
class Graph {
  //define vertex array and adjscent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjacentList = new Map();
    this.parentList = new Map();
  }
  addVertex(v) {
    this.AdjacentList.set(v, []);
    this.parentList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjacentList.get(v).push(w);
    this.AdjacentList.get(w).push(v);
  }
  addParent(v, w) {
    this.parentList.get(v).push(w);
  }
  printGraph() {
    var get_keys = this.AdjacentList.keys();
    for (var i of get_keys) {
      var get_values = this.AdjacentList.get(i);
      var conc = "";
      for (var j of get_values) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }
}

class Queue {
  constructor() {
    this.data = [];
  }
  isEmpty() {
    return this.data.length == 0;
  }
  size() {
    return this.data.length;
  }
  //add new record to the end of the queue
  enqueue(record) {
    this.data.push(record);
  }
  //remove the olddest record from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.data.shift();
  }
  //check the front record of the queue without removing it
  first() {
    if (this.isEmpty()) {
      return "No record in Queue"
    }
    return this.data[0];
  }
  //check the last record of the queue
  last() {
    if (this.isEmpty()) {
      return "No record in Queue";
    }
    return this.data[this.data.length - 1];
  }
}


function BFS (graph, start, target) {
  var visited_s = new Set();
  var open_q = new Queue();


  // add start node to open_q
  open_q.enqueue(start);
  visited_s.add(start);
  //run while loop until the open_q is empty
  while ( open_q.size() > 0 ) {
    let current = open_q.dequeue();
    
    if (current == target) {
      //path.push(current);
      let next = graph.parentList.get(current);
      while(next) {
        //path.push(next);
        next = graph.parentList.get(next);
        console.log(next);
      }
      break;
    } else {
      for (let i of graph.AdjacentList.get(current)){
        if( !(i in open_q) ) {
          open_q.enqueue(i);
          graph.addParent(i, current);
        }
      }
      visited_s.add(current);
    }
  }
  return graph.parentList;
}


const graph1 = new Graph(5);
const vertices = ['A', 'B', 'C', 'D', 'E'];

for (var i = 0; i < vertices.length; i++) {
  graph1.addVertex(vertices[i]);
}

graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('C', 'D');
graph1.addEdge('D', 'E');
graph1.addEdge('A', 'E');
graph1.addEdge('B', 'E');


graph1.printGraph();
//console.log(graph1.AdjacentList.get('A'));

const result = BFS(graph1, "A", "C");
console.log(result);

