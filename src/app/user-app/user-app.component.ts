import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.scss'
})
export class UserAppComponent {
  @Input() name="Teja";
  @Input() poster="https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"
}
