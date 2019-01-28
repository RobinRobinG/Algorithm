let tree;

function setup() {
  createCanvas(600, 400);
  background(51);



  tree = new Tree();
  tree.addValue(5);
  tree.addValue(3);
  tree.addValue(7);
  tree.addValue(6);

  console.log(tree);
  tree.traverse();
}

function Tree () {
  this.root = null;
}

Tree.prototype.addValue = function(val) {
  let newnode = new Node(val);
  if(this.root == null) {
    this.root = newnode;
    this.root.x = width/2;
    this.root.y = 30;

  } else {
    this.root.addNode(newnode);
  }
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
} 

Tree.prototype.search = function(val) {
  let found = this.root.search(val);
  return found;
}

function Node (val, x, y) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}
Node.prototype.addNode = function(n) {
  if (n.val < this.val) {
    if(this.left == null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 20;
    } else {
      this.left.addNode(n);
    }
  } else if (n.val > this.val ) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 20;
    } else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log(this.val);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.val, this.x, this.y);
  stroke(255);
  noFill();
  ellipse(this.x, this.y, 20, 20);
  line(parent.x, parent.y, this.x, this.y);
  if (this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.search = function(val) {
  if (this.val == val) {
    console.log("found value", val);
    return this;
  } else if (val < this.val && this.left != null){
    return this.left.search(val);
  } else if (val > this.val && this.right != null){
    return this.right.search(val);
  } else {
    console.log("Cannot find value");
    return null;
  }
}