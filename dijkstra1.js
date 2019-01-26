//create a graph class
class Graph {
  //define vertex array and adjscent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjacentList = new Map();
    //this.parentList = new Map();
  }
  addVertex(v) {
    this.AdjacentList.set(v, []);
    //this.parentList.set(v, []);
  }
  addEdge(v, w, x) {
    this.AdjacentList.get(v).push([w, x]);
    this.AdjacentList.get(w).push([v, x]);
  }
  // addParent(v, w) {
  //   this.parentList.get(v).push(w);
  // }
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


function Dijkstra (graph, initial) {

  var open_q = new Set();
  var dist = {};
  var prev = {};

  for (let v of graph.AdjacentList.keys()) {
    dist[v] = Infinity;
    prev[v] = undefined;
    open_q.add(v);
  }
  dist[initial] = 0;

  while (open_q.size > 0) {
    var min = Infinity;
    var u;
    for (let v of graph.AdjacentList.keys()) {
      if ( dist[v] < min) {
        min = dist[v];
        u = v;
      }
    }
    open_q.delete(u);
    for (let j of graph.AdjacentList.get(u)) {
      if (open_q.has(j[0])) {
        let alt = dist[u] + j[1];
        if (alt < dist[j[0]]) {
          dist[j[0]] = alt;
          prev[j[0]] = u;
        }
      }
    }
  }
  console.log(dist);
  console.log(prev);
  return dist, prev;
}


const graph1 = new Graph(5);
const vertices = ['A', 'B', 'C'];

for (var i = 0; i < vertices.length; i++) {
  graph1.addVertex(vertices[i]);
}

graph1.addEdge('A', 'B', 5);
graph1.addEdge('B', 'C', 3);



graph1.printGraph();
console.log(graph1.AdjacentList.keys());

Dijkstra(graph1, "A");
//const result = BFS(graph1, "A", "C");
//console.log(result);

