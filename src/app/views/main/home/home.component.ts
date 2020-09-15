import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from "@angular/core";
import { keyboard } from "src/app/models/enum/keyboard";
import { Terminal } from "xterm";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppHomeComponent implements OnInit {
  @ViewChild("terminal") terminalDiv: ElementRef;
  public term: Terminal;
  container: HTMLElement;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.term = new Terminal({ cursorBlink: true });
    this.container = document.getElementById("terminal");
    this.term.open(this.container);
    this.term.writeln("Hello Welcome to Online Chess");
    this.term.writeln("Hello Welcome to Online Chess");
    this.prompt();
    let currentLine = "";
    this.term.onKey((e: { key: string; domEvent: KeyboardEvent }) => {
      if (e.domEvent.key === "Enter") {
        this.prompt();
        if (currentLine === "cls" || currentLine === "clear") {
          this.clearTerminal();
          this.prompt();
        }
        currentLine = "";
      } else if (e.domEvent.key === "Backspace") {
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1);
          this.term.write("\b \b");
        }
      } else if (
        e.domEvent.key === keyboard.ArrowUp ||
        e.domEvent.key === keyboard.ArrowDown ||
        e.domEvent.key === keyboard.ArrowRight
      ) {
        e.domEvent.stopPropagation();
        e.domEvent.preventDefault();
      } else if (e.domEvent.key === keyboard.ArrowLeft) {
        if (currentLine.length <= 0) {
          e.domEvent.stopPropagation();
        }
      } else {
        currentLine += e.key;
        console.log(currentLine, e.key);
        this.term.write(e.key);
      }
    });
  }
  prompt() {
    this.term.write("\r\n/mnt/c/Users/user$ ");
  }
  clearTerminal() {
    this.term.clear();
    this.term.writeln("\n");
    const gamePrint = this.gameService.printBoard();
    console.log("gameprint : ",gamePrint);
    this.term.write(gamePrint);
    this.prompt();
  }
}
