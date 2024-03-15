interface Node<T> {
    item: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node = { item } as Node<T>
        if (!this.head) {
            this.head = this.tail = node;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;

    }
    insertAt(item: T, idx: number): void {
        const node = { item } as Node<T>
        if (!this.head) {
            this.head = this.tail = node;
        }
        else if (idx === 0)
            return this.prepend(item)
        else if (idx === this.length - 1)
            return this.append(item)
        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++)
            curr = curr.next as Node<T>;
        if (curr) {
            node.next = curr;
            node.prev = curr.prev;
        }
        if (curr.prev) {
            curr.prev.next = node as Node<T>;
            curr.prev = node;
        }
    }
    append(item: T): void {
        this.length++;
        const node = { item } as Node<T>
        if (!this.head) {
            this.head = this.tail = node;
        }
        node.prev = this.tail;
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr && item === curr.item) {
                break;
            }
            curr = curr.next;
        }
        if (curr)
            return this.removeNode(curr);
        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.item;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        return curr;
    }
    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.item;
            this.head = this.tail = undefined;
            return out;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        node.prev = node.next = undefined;
        return node.item;
    }
}
