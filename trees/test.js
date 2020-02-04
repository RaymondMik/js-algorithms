const T = require('./index');
const Node = T.Node;
const Tree = T.Tree;
const levelWidth = T.levelWidth;

describe('Node', () => {
  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Node has a data and children properties', () => {
    const n = new Node('a');
    expect(n.data).toEqual('a');
    expect(n.children.length).toEqual(0);
  });

  test('Node can add children', () => {
    const n = new Node('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });

  test('Node can remove children', () => {
    const n = new Node('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    n.remove('b');
    expect(n.children.length).toEqual(0);
  });
});

describe('Tree', () => {
  test('starts empty', () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test('Can traverse bf', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.breadthFirstTraversal(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Can traverse DF', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('d');
    t.root.children[0].add('c');

    t.depthFirstTraversal(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe('Level Width', () => {
  test('levelWidth is a function', () => {
    expect(typeof levelWidth).toEqual('function');
  });
  
  test('levelWidth returns number of nodes at widest point', () => {
    const root = new Node(0);
    root.add(1);
    root.add(2);
    root.add(3);
    root.children[0].add(4);
    root.children[2].add(5);
  
    expect(levelWidth(root)).toEqual([1, 3, 2]);
  });
  
  test('levelWidth returns number of nodes at widest point', () => {
    const root = new Node(0);
    root.add(1);
    root.children[0].add(2);
    root.children[0].add(3);
    root.children[0].children[0].add(4);
  
    expect(levelWidth(root)).toEqual([1, 1, 2, 1]);
  });
});
