import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuC } from "./shared/components/side-menu-c/side-menu-c";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenuC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactive-forms-app');
}
