// Heap Sort Practise

function MinHeap () {
    this.heap = [];  // this.heap is an array.
}

MinHeap.prototype = {

    buildHeap: function(arr) {
        let this.heap = arr;
        for (let i = this.heap.length - 1; i >= 0; i--) {
            let parent = Math.floor((i-1)/2);
            if (this.heap[i] < this.heap[parent]) {
                this.swap(i, parent);  //swap i and its parent
            }
        }
    },
    insert: function(num) {
        this.heap.push(num); //push num to the end of the array.
        this.bubbleUp(this.heap.length - 1); 
    },
    bubbleUp: function(idx) {
        while (idx > 0) {
            let parent = Math.floor((idx-1)/2);
            if (this.heap[idx] < this.heap[parent]) {
                this.swap(idx, parent);  //swap idx and its parent
            }
            idx = parent;
        }
    },
    extractMin: function() {
        let min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown(0);
        return min;
    },
    bubbleDown: function(idx) {
        let child = 0;
        for(let i = idx; i > this.heap.length; i=child){
            let leftChild = (2*i + 1);
            let rightChild = (2*i + 2);
            if ((this.heap[i] < this.heap[leftChild] && this.heap[i] < this.heap[rightChild])||(this.heap[leftChild] == null && this.heap[rightChild] == null)){
                return this.heap;
            } else if ((this.heap[rightChild] == null && this.heap[leftChild] < this.heap[i])||(this.heap[leftChild] < this.heap[rightChild])){
                this.swap(i, leftChild);
              child = leftchild;
            } else {
                this.swap(i, rightChild);
                child = rightchild;
            }
        }
    },
    swap: function(Idx1, Idx2) {
        let temp = this.heap[Idx1];
        this.heap[Idx1] = this.heap[Idx2];
        this.heap[Idx2] = temp;
    }
}
