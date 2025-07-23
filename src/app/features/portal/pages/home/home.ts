import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../../shared/components/header/header'; // Correct path to your HeaderComponent

@Component({
  selector: 'app-home',
  standalone: true, // Make sure this is true for standalone components
  imports: [
    CommonModule,
    Header // Import the Header component here
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  // Your existing Home component logic goes here
}