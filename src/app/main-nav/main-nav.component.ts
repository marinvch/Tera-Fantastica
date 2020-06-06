import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  public toggle(): void {
    const toolbar = (document.querySelectorAll(
      "mat-toolbar"
    )[1] as unknown) as HTMLElement;

    if (toolbar.style.display === "none") {
      toolbar.style.display = "block";
    } else {
      toolbar.style.display = "none";
    }
  }

  public search() {
    const input = document.querySelector("input");
    input.addEventListener("input", searchData);

    function searchData() {
      let data = input.value;
      if (data.length >= 2) {
        setTimeout(function () {
          return console.log(data);
        }, 2000);
      }
    }
  }
}
