import { Injectable } from "@angular/core";

@Injectable()
export class GameService {
  public gameBoard: string[][] = new Array(8)
    .fill("x")
    .map(() => new Array(8).fill("x"));
  playerFirst = "R N B Q K B N R";
  startGame(): string[][] {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        switch (i) {
          case 0:
            this.gameBoard[i][j] = this.playerFirst.split(" ")[j];
            break;
          case 1:
            this.gameBoard[i][j] = "P";
            break;
          case 6:
            this.gameBoard[i][j] = "p";
            break;
          case 7:
            this.gameBoard[i][j] = this.playerFirst.split(" ")[j].toLowerCase();
            break;
          default:
            break;
        }
      }
    }
    return this.gameBoard;
  }
  printBoard(): string {
    let boardPosition = "";
    const gameState = this.startGame();
    for (let column = 0; column < 8; column++) {
      for (let row = 0; row < 8; row++) {
        boardPosition += gameState[column][row] + "\t";
      }
      boardPosition += "\r\n";
    }
    console.log(boardPosition);
    return boardPosition;
  }
}
