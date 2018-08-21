import { BinarySearchTree } from "./binarySearchTree";
console.log("以4建立一棵二元搜尋樹");
var tree = BinarySearchTree.create(4);
tree.traversal();
var nodes = [2, 6, 1, 3, 5, 7];
console.log(`加入${nodes}後`);
tree.addNodes(nodes);
tree.traversal();
console.log("刪除6後：");
tree.removeNode(6);
tree.traversal();
console.log("插入100後：");
tree.addNode(100);
tree.traversal();
var height = tree.getHeight();
var rootData = tree.getData();
var leftMinData = tree.getLeftNode().getMinNode().getData();
var rightMinData = tree.getRightNode().getMinNode().getData();
var searchData = [4, 5, 6];
var searchResult = searchData.map(data => `${data} => ${tree.searchNode(data) != null}`);
var _4isRoot = tree.searchNode(4).isRoot();
var _100isRoot = tree.searchNode(100).isRoot();
console.log(`
    樹高　　　　　　　　=>  ${height}
    根節點資料　　　　　=>  ${rootData}
    左子樹最小資料　　　=>  ${leftMinData}
    右子樹最小資料　　　=>  ${rightMinData}
    搜尋資料結果　　　　=>  ${searchResult}
    ４是否為根節點　　　=>  ${_4isRoot}
    １００是否為根節點　=>  ${_100isRoot}
`);
console.log("刪除Root後：");
tree = tree.removeRoot();
tree.traversal();