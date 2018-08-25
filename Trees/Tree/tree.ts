export module Tree {
    class Root {

        private data: any;
        private parent: any;
        private children: any[];

        constructor(data, parent = null) {
            this.data = data;
            this.parent = parent;
            this.children = [];
        }

        /**
         * @param data 插入的資料
         * @param parent 插入在哪個節點(資料)之下
         * @returns 如果成功，回傳True否則False
         * @description 插入一個節點
         */
        public addNode(data: any, parent: any): boolean {
            if (this.searchNode(parent) == null) {
                return false;
            }
            return this._addNode(this, data, parent);
        }

        private _addNode(tree, data, parent, success = false): boolean {
            if (this._dataIsEqual(tree.data, parent, true)) {
                tree.children.push(new Node(data, tree, this));
                return true;
            }
            tree.children.forEach(child => {
                success = this._addNode(child, data, parent, success);
                if (success == true) return false;
            })
            return success;
        }

        /**
         *
         * @param data 要刪除的資料
         * @param strict 嚴格模式，預設False，當True時物件資料必須完全匹配，也就是不能缺欄位
         * @description 刪除節點，刪除後子節點也會跟著被刪除
         * @returns 成功則True否則False
         */
        public removeNode(data, strict = false): boolean {
            if (this._dataIsEqual(this.data, data, strict)) {
                return false;
            }
            return this._removeNode(this, data, strict);
        }

        private _removeNode(tree, data, strict, success = false): boolean {
            tree.children.forEach((child, i) => {
                if (success) return false;
                if (child._dataIsEqual(child.data, data, strict)) {
                    tree.children.splice(i, 1);
                    success = true;
                    return false;
                }
                success = child._removeNode(child, data, strict, success);
            });
            return success;
        }

        /**
         * @param data 搜尋的資料
         * @param strict 嚴格模式，預設False，當True時物件資料必須完全匹配，也就是不能缺欄位
         * @description 搜尋節點
         */
        public searchNode(data: any, strict = false): any {
            return this._searchNode(this, data, strict);
        }

        private _searchNode(tree, data, strict, findTree = null): any {
            if (findTree != null) return findTree;
            if (tree._dataIsEqual(tree.data, data, strict)) {
                return tree;
            }
            tree.children.forEach(child => {
                findTree = tree._searchNode(child, data, strict, findTree);
                if (findTree !== null) {
                    return false;
                }
            });
            return findTree;
        }

        /**
         * @param index 取得第index個子節點，省略將傳回所有子節點
         * @description 取得子節點
         */
        public getChildren(index = null): any {
            if (index == null) {
                return this.children;
            } else {
                return this.children[index];
            }
        }

        /**
         * @description 取得父節點
         */
        public getParent(): any {
            return this.parent;
        }

        /**
         * @description 取得當前節點的資料
         */
        public getData(): any {
            return this.data;
        }

        /**
         * @description 判斷是否為根節點
         */
        public isRoot(): boolean {
            return this.parent === null;
        }

        /**
         * @description 取得前序走訪結果
         */
        public getPreOrder(): any[] {
            return this._preOrder(this, []);
        }

        private _preOrder(tree, records): any[] {
            records.push(tree.data);
            tree.children.forEach(child => tree._preOrder(child, records));
            return records;
        }

        private _dataIsEqual(data1, data2, strict, isSame = true) {
            if (typeof data1 != typeof data2) return false;
            if (typeof data1 !== 'object') return data1 == data2;
            if ((strict == true && (Object.keys(data1).length != Object.keys(data2).length)) ||
                (strict == false && (Object.keys(data1).length < Object.keys(data2).length))) return false;
            if (Object.keys(data2).some(key => Object.keys(data1).indexOf(key) === -1)) return false;
            Object.keys(data2).forEach(key => {
                isSame = this._dataIsEqual(data1[key], data2[key], strict, isSame);
                if (isSame == false) return false;
            });
            return isSame;
        }
    }
    class Node extends Root {
        private root: any;
        constructor(data, parent, root) {
            super(data, parent);
            this.root = root;
        }

        /**
         * @description 取得根節點
         */
        public getRoot() {
            return this.root;
        }
    }

    /**
     * @param data 根節點的資料
     * @description 建立一棵樹
     */
    export function create(data) {
        return new Root(data);
    }
}