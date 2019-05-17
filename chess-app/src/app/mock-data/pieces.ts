import { Piece } from '../types/piece';

export const PIECES: Piece[] = [
    {name: 'King', value: 0, imgSmall: '../../assets/images/king-small.png', imgLarge: '../../assets/images/king-large.png'},
    {name: 'Queen', value: 9, imgSmall: '../../assets/images/queen-small.png', imgLarge: '../../assets/images/queen-large.png'},
    {name: 'Rook', value: 5, imgSmall: '../../assets/images/rook-small.png', imgLarge: '../../assets/images/rook-large.png'},
    {name: 'Bishop', value: 3, imgSmall: '../../assets/images/bishop-small.png', imgLarge: '../../assets/images/bishop-large.png'},
    {name: 'Knight', value: 3, imgSmall: '../../assets/images/knight-small.png', imgLarge: '../../assets/images/knight-large.png'},
    {name: 'Pawn', value: 1, imgSmall: '../../assets/images/pawn-small.png', imgLarge: '../../assets/images/pawn-large.png'},
]