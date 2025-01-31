
type Position = 'left' | 'right';
export const decidePosition = (): Position => {
    return Math.random() < 0.5 ? 'left' : 'right';
}
export const generateWall = (position: Position): { x: number, y: number} => {
    switch (position) {
        case 'left':
            return {
                x: 320,
                y: 62
            };
        case 'right':
            return {
                x: 957,
                y: 62
            }
    }
}