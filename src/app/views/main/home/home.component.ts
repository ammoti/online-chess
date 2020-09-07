import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from "@angular/core";
import { Terminal } from "xterm";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppHomeComponent implements OnInit {
  @ViewChild("terminal") terminalDiv: ElementRef;
  public term: Terminal;
  container: HTMLElement;

  ngOnInit(): void {
    this.term = new Terminal({ cursorBlink: true });
    this.container = document.getElementById("terminal");
    this.term.open(this.container);
    this.term.writeln("Hello Welcome to Online Chess");
    this.prompt();
    let curr_line = "";
    this.term.onKey((e: { key: string; domEvent: KeyboardEvent }) => {
      console.log(e.domEvent);
      if (e.domEvent.key === "Enter") {
        this.prompt();
        curr_line = "";
      } else if (e.domEvent.key === "Backspace") {
        curr_line = curr_line.slice(0, -1);
        this.term.write("\b \b");
      } else {
        curr_line += e.key;
        console.log(curr_line, e.key);
        this.term.write(e.key);
      }
    });
  }
  prompt() {
    this.term.write("\r\n$");
  }
}
