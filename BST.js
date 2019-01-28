//node object
function Node (value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function (node) {
  if (node.val < this.val) {
    if (this.left == null){
      this.left = node;
    } else {
      this.left.addNode(node);
    }
  } else if (node.val > this.val) {
    if (this.right == null) {
      this.right == node;
    } else {
      this.right.addNode(node);
    }
  } 
}

Node.prototype.visit = function(parentnode) {
  if (this.left) {
    this.left.visit(this);
  }
  if (this.right) {
    this.right.visit(this);
  }
}

Node.prototype.search = function(val) {
  if (this.val == val) {
    return val;
  } else if (this.val > val) {
    return this.left.search(val);
  } else if (this.val < val) {
    return this.right.search(val);
  } else {
    return null;
  }
}

//tree object
function Tree () {
  this.root = null;
}

Tree.prototype.addValue = function (val) {
  let newnode = new Node(val);
  if (this.root == null) {
    this.root = newnode;
  } else {
    this.root.addNode(newnode);
  }
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.search = function(val) {
  return this.root.search(val);
}