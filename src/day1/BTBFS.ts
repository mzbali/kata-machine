export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length != 0) {
        const node = q.shift();
        if (node && node.value === needle)
            return true;
        if (node && node.left)
                q.push(node.left)
        if (node && node.right)
            q.push(node.right)
    }
    return false;
}
