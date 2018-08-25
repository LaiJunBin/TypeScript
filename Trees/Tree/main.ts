import { Tree } from "./tree";

var rootData = {
    key: 1,
    data: 10
};

var tree = Tree.create(rootData);

console.log("建立一棵樹：");
console.log(tree.getPreOrder());

tree.addNode(10, rootData);
tree.addNode({
    key: 2,
    data: 15,
    index: 0,
}, rootData);

console.log("插入兩個節點在根節點之後");
console.log(tree.getPreOrder());

tree.addNode(100, {
    key: 2,
    data: 15,
    index: 0
});

console.log("將100插入在key=2,data=15,index=0的物件之下");
console.log(tree.getPreOrder());

tree.addNode(50, 10);
tree.addNode(25, 10);

console.log("將50與25插入在10之下");
console.log(tree.getPreOrder());

tree.addNode({
    key: 3,
    index: 100,
    data: 500
}, 10);
console.log("將key=3,index=100,data=500的物件插入在10之下");
console.log(tree.getPreOrder());

var search10Node = tree.searchNode(10) !== null;

console.log("搜尋資料為10的節點");
console.log(search10Node);

console.log("取得10的子節點");
console.log(tree.searchNode(10).getChildren().map(child => child.getData()));

console.log("搜尋key=3的節點");
console.log(tree.searchNode({ key: 3 }, false).getData());

tree.removeNode(10);

console.log("刪除10之後");
console.log(tree.getPreOrder());

search10Node = tree.searchNode(10) !== null;

console.log("搜尋資料為10的節點");
console.log(search10Node);

tree.removeNode({ key: 2 }, true);

console.log("以嚴格模式刪除key=2的節點");
console.log(tree.getPreOrder());

tree.removeNode({ key: 2 });

console.log("以非嚴格模式刪除key=2的節點");
console.log(tree.getPreOrder());