import { Piece } from '../types/piece';

export const PIECES: Piece[] = [
    {
        name: 'King', 
        value: 0,
        imgSmall: '../../assets/images/king-small.png',
        imgLarge: '../../assets/images/king-large.png',
        description: `In chess, the king (♔,♚) is the most important piece.
         The object of the game is to threaten the opponent's king in such a way
         that escape is not possible (checkmate). If a player's king is threatened
         with capture, it is said to be in check, and the player must remove the
         threat of capture on the next move. If this cannot be done, the king is
         said to be in checkmate, resulting in a loss for that player.`
    },
    {
        name: 'Queen', 
        value: 9, 
        imgSmall: '../../assets/images/queen-small.png', 
        imgLarge: '../../assets/images/queen-large.png',
        description: `The queen (♕, ♛) is the most powerful piece in the game
         of chess, able to move any number of squares vertically, horizontally
          or diagonally. Each player starts the game with one queen, placed in
           the middle of the first rank next to the king. Because the queen is
           the strongest piece, a pawn is promoted to a queen in the vast majority of cases. `
    },
    {
        name: 'Rook',
        value: 5,
        imgSmall: '../../assets/images/rook-small.png', 
        imgLarge: '../../assets/images/rook-large.png',
        description: `The rook moves horizontally or vertically, through any
         number of unoccupied squares. In general, rooks are stronger than bishops
          or knights (which are called minor pieces) and are considered greater
           in value than either of those pieces.`
    },
    {
        name: 'Bishop',
        value: 3,
        imgSmall: '../../assets/images/bishop-small.png', 
        imgLarge: '../../assets/images/bishop-large.png',
        description: `The bishop has no restrictions in distance for each move,
         but is limited to diagonal movement. Bishops, like all other pieces
          except the knight, cannot jump over other pieces. A bishop captures
           by occupying the square on which an enemy piece sits.

        The bishops may be differentiated according to which wing they begin on,
         i.e. the king's bishop and queen's bishop. As a consequence of its diagonal movement,
          each bishop always remains on either the white or black squares, and so it is
           also common to refer to them as light-squared or dark-squared bishops. `
    },
    {
        name: 'Knight',
        value: 3,
        imgSmall: '../../assets/images/knight-small.png', 
        imgLarge: '../../assets/images/knight-large.png',
        description: `The knight move is unusual among chess pieces. It moves to a
         square that is two squares away horizontally and one square vertically,
          or two squares vertically and one square horizontally. The complete move
           therefore looks like the letter "L". Unlike all other standard chess pieces,
            the knight can "jump over" all other pieces (of either color) to its
             destination square.[2] It captures an enemy piece by replacing it on
              its square. The knight's ability to "jump over" other pieces means
               it tends to be at its most powerful in closed positions, in contrast
                to a bishop. The knight moves alternately to light and dark squares.`
    },
    {
        name: 'Pawn',
        value: 1,
        imgSmall: '../../assets/images/pawn-small.png', 
        imgLarge: '../../assets/images/pawn-large.png',
        description: `The pawn (♙,♟) is the most numerous piece in the game of chess,
         and in most circumstances, also the weakest. It historically represents
          infantry, or more particularly, armed peasants or pikemen.[1] Each player
           begins a game with eight pawns, one on each square of the rank immediately
            in front of the other pieces.`
    },
]