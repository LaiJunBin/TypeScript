# Tree

## 工廠函數
|方法|功能|傳入|回傳|
|---|---|---|---|
|create|建立一棵樹|any|Root|

> Tree.create(any)

## 提供以下方法
> 傳入為空代表不用輸入參數

|方法|功能|傳入|回傳|
|---|---|---|---|
|addNode|加入節點|any|boolean:成功True否則False|
|removeNode|刪除節點(根節點以外)|any|boolean:成功True否則False|
|getChildren|取得子樹|number or empty|Node or Node[]|
|getParent|取得父節點||Root or Node|
|getData|取得資料||any|
|getPreOrder|取得前序走訪結果||any[]|
|searchNode|尋找節點|any|if exists,Root or Node else null|
|isRoot|判斷當前節點是否為根節點||boolean|
|getRoot|取得根節點(僅Node擁有此方法)||Root|

## 使用範例
> main.ts

### 輸出結果：
```
建立一棵樹：
[ { key: 1, data: 10 } ]
插入兩個節點在根節點之後
[ { key: 1, data: 10 }, 10, { key: 2, data: 15, index: 0 } ]
將100插入在key=2,data=15,index=0的物件之下
[ { key: 1, data: 10 }, 10, { key: 2, data: 15, index: 0 }, 100 ]
將50與25插入在10之下
[ { key: 1, data: 10 },
  10,
  50,
  25,
  { key: 2, data: 15, index: 0 },
  100 ]
將key=3,index=100,data=500的物件插入在10之下
[ { key: 1, data: 10 },
  10,
  50,
  25,
  { key: 3, index: 100, data: 500 },
  { key: 2, data: 15, index: 0 },
  100 ]
搜尋資料為10的節點
true
取得10的子節點
[ 50, 25, { key: 3, index: 100, data: 500 } ]
搜尋key=3的節點
{ key: 3, index: 100, data: 500 }
刪除10之後
[ { key: 1, data: 10 }, { key: 2, data: 15, index: 0 }, 100 ]
搜尋資料為10的節點
false
以嚴格模式刪除key=2的節點
[ { key: 1, data: 10 }, { key: 2, data: 15, index: 0 }, 100 ]
以非嚴格模式刪除key=2的節點
[ { key: 1, data: 10 } ]
```