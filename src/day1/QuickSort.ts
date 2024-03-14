function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi)
        return
    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr: number[], lo: number, hi: number) {
    const pivot = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    const temp = arr[idx];
    arr[idx] = arr[hi];
    arr[hi] = temp;

    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
