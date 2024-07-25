import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss'
})
export class ColorGameComponent {
 color = '';

 colorList = ['crimson', 'purple', 'plum'];

 onclick() {
  this.colorList.push(this.color);
 }
}
