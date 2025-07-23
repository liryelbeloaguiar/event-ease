import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { HomeComponent } from "./features/portal/pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'event-ease';
}
