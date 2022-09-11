import { keyCodeKeyBoard, keyCodeWheel } from 'nodes-navigation-focus/dist/src/index.ts'

export const menu = [
    { position: 1 },
    { position: 2 },
    { position: 3 },
    { position: 4 },
    { position: 5 },
    { position: 6 },
    { position: 7 }
]

export const slider = [
    { position: 1, text: 'item 1' },
    { position: 2, text: 'item 2' },
    { position: 3, text: 'item 3' },
    { position: 4, text: 'item 4' },
    { position: 5, text: 'item 5' },
    { position: 6, text: 'item 6' },
    { position: 7, text: 'item 7' }
]

export const list = [
    {
        title: 'TV programs',
        list: [{ row: 1, position: 1}, { row: 1, position: 2 }, { row: 1, position: 3 }, { row: 1, position: 4 }, { row: 1, position: 5 }, { row: 1, position: 6 }],

    },
    {
        title: 'Series',
        list: [{ row: 2, position: 1}, { row: 2, position: 2 }, { row: 2, position: 3 }, { row: 2, position: 4 }, { row: 2, position: 5 }, { row: 2, position: 6 }]
    },
    {
        title: 'Films',
        list: [{ row: 3, position: 1}, { row: 3, position: 2 }, { row: 3, position: 3 }, { row: 3, position: 4 }, { row: 3, position: 5 }, { row: 3, position: 6 }]
    },
    {
        title: 'Streaming',
        list: [{ row: 4, position: 1}, { row: 4, position: 2 }, { row: 4, position: 3 }, { row: 4, position: 4 }, { row: 4, position: 5 }, { row: 4, position: 6 }]
    }
]

export const arrayVertical = [
    { position: 1, text: 'item 1' },
    { position: 2, text: 'item 2' },
    { position: 3, text: 'item 3' },
    { position: 4, text: 'item 4' },
    { position: 5, text: 'item 5' },
    { position: 6, text: 'item 6' },
    { position: 7, text: 'item 7' }
]

export const arrayHorizontal = [
    { position: 1, text: 'item 1' },
    { position: 2, text: 'item 2' },
    { position: 3, text: 'item 3' },
    { position: 4, text: 'item 4' },
    { position: 5, text: 'item 5' },
    { position: 6, text: 'item 6' },
    { position: 7, text: 'item 7' }
]

export const matrix = [
    [{ row: 1, column: 1}, { row: 1, column: 2 }, { row: 1, column: 3 }],
    [{ row: 2, column: 1}, { row: 2, column: 2 }, { row: 2, column: 3 }],
    [{ row: 3, column: 1}, { row: 3, column: 2 }, { row: 3, column: 3 }]
]

export const object = [
    {
        order: 1 ,
        onMove: {
            [keyCodeKeyBoard.RIGHT_ARROW]: 2,
            [keyCodeWheel.DOWN]: 2,
        }
    },
    {
        order: 2,
        onMove: {
            [keyCodeKeyBoard.LEFT_ARROW]: 1,
            [keyCodeKeyBoard.RIGHT_ARROW]: 3,
            [keyCodeWheel.UP]: 1,
            [keyCodeWheel.DOWN]: 3,
        }

    },
    {
        order: 3,
        onMove: {
            [keyCodeWheel.UP]: 2,
            [keyCodeKeyBoard.LEFT_ARROW]: 2,
        }
    }
]