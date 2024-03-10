const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]): boolean {

    // Base Case
    // Off the map
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length)
        return false;
    // It's a wall
    if (maze[curr.y][curr.x] === wall)
        return false
    // Been visited
    if (seen[curr.y][curr.x])
        return false
    // It's the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true
    }

    // Recursive Case
    // Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    //Recurse
    for (let i = 0; i < direction.length; i++) {
        const point = direction[i];
        if (walk(maze, wall, { x: curr.x + point[0], y: curr.y + point[1] }, end, path, seen)) {
            return true;
        }
    }
    //Post
    path.pop()
    return false

}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = []

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, path, seen);

    return path;
}
