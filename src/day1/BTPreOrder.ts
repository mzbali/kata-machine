function walk(curr: BinaryNode<number> | null, path: number[]) {
    // Base Case
    if (!curr) {
        return path;
    }
    
    // Pre
    path.push(curr.value);
    // Recursion
    walk(curr.left, path);
    walk(curr.right, path);

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
