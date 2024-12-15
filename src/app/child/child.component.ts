import { Component, Input } from '@angular/core';
import { TodoItem } from '../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  @Input() tasks: TodoItem[] = [];
  

  
}
