/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];
    if (!root) {
        return [];
    } else {
        let stack = [];
        stack.push(root);
        
        while(stack.length > 0){
            let current_node = stack.pop();
            result.push(current_node.val);
            if (current_node.children.length > 0) {
                for (let i = current_node.children.length - 1; i >= 0; i--) {
                    stack.push(current_node.children[i]);
                }
            }
        }
        return result;
    } 
};

var postorder = function(root) {
    
    let result = [];
    if (!root) {
        return [];
    } else {
        let stack1 = [];
        let stack2 = [];
        stack1.push(root);        
        while(stack1.length > 0){
            let current_node = stack1.pop();
            stack2.push(current_node);
            if (current_node.children.length > 0) {
                for (let i = 0; i < current_node.children.length; i++) {
                    stack1.push(current_node.children[i]);
                }
            }
        }
        while(stack2.length > 0) {
            let new_node = stack2.pop();
            result.push(new_node.val);
        }
        return result;
    }
};  
