class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;

    return current;
  }

  BFS() {
    let data = [],
      queue = [],
      node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      data.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  remove(val) {
    let delNode;
    const del = (root, val) => {
      if (root === null) return root;
      else if (val > root.value) root.right = del(root.right, val);
      else if (val < root.value) root.left = del(root.left, val);
      else {
        // if node is found
        if (delNode === undefined) delNode = root.value;
        // case 1: no children (leaf)
        if (root.left === null && root.right === null) {
          root = null;
        }

        // case 2: 1 child
        else if (root.left === null) {
          // right child
          root = root.right;
        } else if (root.right === null) {
          // left child
          root = root.left;
        }

        // case 3: 2 children
        else {
          let temp = findMin(root.right); // assign a root to min in a right subtree
          root.value = temp.value;
          root.right = del(root.right, root.value);
        }
      }
      return root;
    };
    const findMin = (root) => {
      if (root === null) return root;
      if (root.left) return findMin(root.left);
      return root;
    };

    this.root = del(this.root, val);
    return delNode;
  }

  find2ndLargest() {
    let fL, sL; // first, second largest values
    const findMax = (root) => {
      if (root === null) return root;
      if (root.right) {
        sL = root;
        return findMax(root.right);
      }
      return root;
    };
    fL = findMax(this.root); // find first largest
    const helper = (root) => {
      if (root === null) return root;
      // if fL has a left subtree,
      // find the largest in this subtree
      if (root.left) {
        sL = findMax(root.left);
      }
      return sL;
    };
    sL = helper(fL);
    if (sL === null) return undefined;
    return sL.value;
  }

  isBalanced() {
    function maxDepth(node) {
      if (!node) return 0;
      return Math.max(maxDepth(node.left) + 1, maxDepth(node.right) + 1);
    }

    function minDepth(node) {
      if (!node) return 0;
      return Math.min(minDepth(node.left) + 1, minDepth(node.right) + 1);
    }

    let maximum = Math.max(maxDepth(this.root.left), maxDepth(this.root.right));
    let minimum = Math.min(minDepth(this.root.left), minDepth(this.root.right));
    return maximum - minimum <= 1;
  }
}
