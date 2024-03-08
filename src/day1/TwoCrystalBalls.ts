export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpdist = Math.floor(Math.sqrt(breaks.length));
    let i = jumpdist;
    for (; i < breaks.length; i + jumpdist) {

        if (breaks[i]) {
            break;
        }
    }
    i -= jumpdist;

    for (let j = 0; j <= jumpdist && i < breaks.length; ++j,++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
