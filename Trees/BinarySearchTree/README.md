# BinarySearchTree

## 工廠函數
|方法|功能|傳入|回傳|
|---|---|---|---|
|create|建立一棵二元搜尋樹|any|Root|

> BinarySearchTree.create(any)

## 提供以下方法
> 傳入為空代表不用輸入參數

|方法|功能|傳入|回傳|
|---|---|---|---|
|addNode|加入節點|any|void|
|addNodes|加入節點|any[]|void|
|getData|取得資料||any|
|getLeftNode|取得左子樹||Node|
|getRightNode|取得右子樹||Node|
|getPreOrder|取得前序走訪結果||any[]|
|getInOrder|取得中序走訪結果||any[]|
|getPostOrder|取得後序走訪結果||any[]|
|getBFS|取得廣度優先搜尋結果||any[]|
|traversal|輸出前/中/後序與廣度優先搜尋結果||void|
|getMinNode|取得資料最小的節點||any|
|getMaxNode|取得資料最大的節點||any|
|removeNode|刪除節點(根節點以外)||void|
|removeRoot|刪除根節點||Root|
|searchNode|尋找節點||if exists,Root or Node else null|
|getHeight|取得樹高||number|
|isRoot|判斷當前節點是否為根節點||boolean|
|getRoot|取得根節點(僅Node擁有此方法)||Root|

## 使用範例
> main.ts

### 輸出結果：
```
以4建立一棵二元搜尋樹

    preorder   =>  4
    inorder    =>  4
    postorder  =>  4
    bfs        =>  4

加入2,6,1,3,5,7後

    preorder   =>  4,2,1,3,6,5,7
    inorder    =>  1,2,3,4,5,6,7
    postorder  =>  1,3,2,5,7,6,4
    bfs        =>  4,2,6,1,3,5,7

刪除6後：

    preorder   =>  4,2,1,3,7,5
    inorder    =>  1,2,3,4,5,7
    postorder  =>  1,3,2,5,7,4
    bfs        =>  4,2,7,1,3,5

插入100後：

    preorder   =>  4,2,1,3,7,5,100
    inorder    =>  1,2,3,4,5,7,100
    postorder  =>  1,3,2,5,100,7,4
    bfs        =>  4,2,7,1,3,5,100


    樹高　　　　　　　　=>  3
    根節點資料　　　　　=>  4
    左子樹最小資料　　　=>  1
    右子樹最小資料　　　=>  5
    搜尋資料結果　　　　=>  4 => true,5 => true,6 => false
    ４是否為根節點　　　=>  true
    １００是否為根節點　=>  false

刪除Root後：

    preorder   =>  5,2,1,3,7,100
    inorder    =>  1,2,3,5,7,100
    postorder  =>  1,3,2,100,7,5
    bfs        =>  5,2,7,1,3,100
```