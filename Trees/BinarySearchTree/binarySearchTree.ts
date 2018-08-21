export module BinarySearchTree {
    class Root {
        private data: any;
        private leftNode: Node;
        private rightNode: Node;

        constructor(data: any) {
            this.data = data;
            this.leftNode = null;
            this.rightNode = null;
        }
        /**
         * @description 插入一個節點
         * @param data 要新增的資料
         */
        public addNode(data: any): void {
            this.data > data ?
                this.leftNode = (this.leftNode == null) ?
                    new Node(data, this) : this._addNode(this.leftNode, data, this) :
                this.rightNode = (this.rightNode == null) ?
                    new Node(data, this) : this._addNode(this.rightNode, data, this)
        }

        private _addNode(Tree: Node, data: any, root: Root): Node {
            Tree.data > data ?
                Tree.leftNode = (Tree.leftNode == null) ?
                    new Node(data, root) : Tree._addNode(Tree.leftNode, data, root) :
                Tree.rightNode = (Tree.rightNode == null) ?
                    new Node(data, root) : Tree._addNode(Tree.rightNode, data, root)
            return Tree;
        }

        /**
         * @description 插入多個節點
         * @param data 要新增的資料(集合)
         */
        public addNodes(data: any[]): void {
            data.forEach(node => {
                this.addNode(node);
            });
        }

        /**
        * @description 取得當前節點的資料
        * @returnType {any}
        */
        public getData(): any {
            return this.data;
        }

        /**
        * @description 取得左邊的節點
        * @returnType {Node}
        */
        public getLeftNode(): Node {
            return this.leftNode;
        }

        /**
        * @description 取得右邊的節點
        * @returnType {Node}
        */
        public getRightNode(): Node {
            return this.rightNode;
        }

        /**
        * @description 取得前序走訪結果
        * @returnType any[]
        */
        public getPreOrder(): any[] {
            return this._preorder(this, []);
        }

        private _preorder(Tree: any, records: any[]): any[] {
            if (Tree == null) return records;
            records.push(Tree.data);
            this._preorder(Tree.leftNode, records);
            this._preorder(Tree.rightNode, records);
            return records;
        }

        /**
        * @description 取得中序走訪結果
        * @returnType any[]
        */
        public getInOrder(): any[] {
            return this._inorder(this, []);
        }

        private _inorder(Tree: any, records: any[]): any[] {
            if (Tree == null) return records;
            this._inorder(Tree.leftNode, records);
            records.push(Tree.data);
            this._inorder(Tree.rightNode, records);
            return records;
        }

        /**
        * @description 取得後序走訪結果
        * @returnType any[]
        */
        public getPostOrder(): any[] {
            return this._postorder(this, []);
        }

        private _postorder(Tree: any, records: any[]): any[] {
            if (Tree == null) return records;
            this._postorder(Tree.leftNode, records);
            this._postorder(Tree.rightNode, records);
            records.push(Tree.data);
            return records;
        }

        /**
        * @description 取得廣度優先搜尋結果
        * @returnType any[]
        */
        public getBFS(): any[] {
            return this._bfs(this, [], []);
        }

        private _bfs(Tree: any, nodes: any[], records: any[]): any[] {
            if (Tree == null) return records;
            nodes.push(...[Tree.leftNode, Tree.rightNode].filter(tree => tree != null));
            records.push(Tree.data);
            while (nodes.length > 0)
                Tree._bfs(nodes.shift(), nodes, records);
            return records;
        }

        /**
        * @description 輸出前中後序+廣度優先搜尋走訪結果
        */
        public traversal(): void {
            var preorder = this.getPreOrder();
            var inorder = this.getInOrder();
            var postorder = this.getPostOrder();
            var bfs = this.getBFS();
            console.log(`
    preorder   =>  ${preorder}
    inorder    =>  ${inorder}
    postorder  =>  ${postorder}
    bfs        =>  ${bfs}
            `);
        }

        /**
        * @description 取得最小的節點
        * @returnType Root Or Node
        * @param Tree 預設為根節點
        */
        public getMinNode(Tree = this) {
            return this._getMinNode(Tree);
        }

        private _getMinNode(Tree) {
            let trees = [Tree, Tree.leftNode, Tree.rightNode].filter(tree => tree != null);
            let minData = Math.min.apply(null, trees.map(tree => tree.data));
            let minNode = trees.filter(tree => tree.data == minData).pop();
            return minNode == Tree || minNode == null ? Tree : this._getMinNode(minNode);
        }

        /**
        * @description 取得最大的節點
        * @returnType Root Or Node
        * @param Tree 預設為根節點
        */
        public getMaxNode(Tree = this) {
            return this._getMaxNode(Tree);
        }

        private _getMaxNode(Tree) {
            let trees = [Tree, Tree.leftNode, Tree.rightNode].filter(tree => tree != null);
            let maxData = Math.max.apply(null, trees.map(tree => tree.data));
            let maxNode = trees.filter(tree => tree.data == maxData).pop();
            return maxNode == Tree || maxNode == null ? Tree : this._getMaxNode(maxNode);
        }

        /**
         * @description 刪除一個節點(非根節點)
         * @param data 要刪除的節點
         */
        public removeNode(data): void {
            if (this.data == data) throw new Error('無法刪除根節點，如果要刪除根節點，請使用removeRoot()方法');
            this._removeNode(this, data);
        }

        private _removeNode(Tree, data) {
            if (Tree == null) return null;
            if (Tree.data > data) {
                Tree.leftNode = Tree._removeNode(Tree.leftNode, data);
                return Tree;
            } else if (Tree.data < data) {
                Tree.rightNode = Tree._removeNode(Tree.rightNode, data);
                return Tree;
            } else {
                if (Tree.leftNode != null && Tree.rightNode != null) {
                    let minNode = Tree.rightNode.getMinNode();
                    minNode.leftNode = Tree.leftNode;
                    return minNode;
                }
                Tree = Tree.leftNode == null && Tree.rightNode == null ?
                    null : Tree.leftNode == null ? Tree.rightNode : Tree.leftNode;
                return Tree;
            }
        }

        /**
         * @description 刪除根節點，回傳一棵刪除後的樹
         * @returnType Root
         */
        public removeRoot(): Root {
            return this._removeRoot(this);
        }

        private _removeRoot(Tree) {
            if (Tree.leftNode != null && Tree.rightNode != null) {
                let minNode = Tree.rightNode.getMinNode();
                Tree.removeNode(minNode.data);
                Tree.data = minNode.data;
            }
            if (Tree.leftNode == null && Tree.rightNode == null) {
                Tree = null;
            }

            if (Tree.leftNode == null) {
                var tree = new Root(Tree.rightNode.data);
                tree.leftNode = Tree.rightNode.leftNode;
                tree.rightNode = Tree.rightNode.rightNode;
                Tree = tree;
            }

            if (Tree.rightNode == null) {
                var tree = new Root(Tree.leftNode.data);
                tree.leftNode = Tree.leftNode.leftNode;
                tree.rightNode = Tree.leftNode.rightNode;
                Tree = tree;
            }
            return Tree;
        }

        /**
         * @description 搜尋節點
         * @param data 要搜尋的資料
         * @returnType (Root Or Node) Or null
         */
        public searchNode(data) {
            return this._searchNode(this, data);
        }

        private _searchNode(Tree, data) {
            return Tree == null ? null : Tree.data == data ? Tree :
                Tree.data > data ? Tree._searchNode(Tree.leftNode, data) :
                    Tree._searchNode(Tree.rightNode, data);
        }

        /**
         * @description 取得樹高
         * @returnType {Number}
         */
        public getHeight(): number {
            return this._getHeight(this);
        }

        private _getHeight(Tree: Root, height = 0) {
            return Tree == null ? height :
                Math.max(Tree._getHeight(Tree.leftNode, height + 1),
                    Tree._getHeight(Tree.rightNode, height + 1));
        }

        /**
         * @description 判斷這個節點是不是根節點
         * @returnType {Boolean}
         */
        public isRoot(): boolean {
            return !(this instanceof Node);
        }
    }

    class Node extends Root {
        private root: Root;
        constructor(data: any, root: Root) {
            super(data);
            this.root = root;
        }

        /**
         * @description 取得根節點
         * @returnType {Root}
         */
        public getRoot(): Root {
            return this.root;
        }
    }

    /**
     * @description 建立一棵二元搜尋樹
     * @param data 根節點的資料
     */
    export function create(data: any): Root {
        return new Root(data);
    }
}