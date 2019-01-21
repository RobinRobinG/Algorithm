//construct graph
function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}

Graph.prototype.setStart = function(actor) {
  this.start = this.graph[actor];
  return this.start;
}
Graph.prototype.setEnd = function(actor) {
  this.end = this.graph[actor];
  return this.end;
}

Graph.prototype.addNode = function(n) {
  //add node to nodes array
  this.nodes.push(n);
  var title = n.value;
  //add node to graph object, with key = 'node.value'
  this.graph[title] = n;
  return n;
}

Graph.prototype.getNode = function(actor) {
  const n = this.graph[actor];
  return n;
}

Graph.prototype.reset = function() {
  for (let i of this.nodes) {
    i.searched = false;
    i.parent = null;
  }
}