import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

export interface TodoItem {
  task: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, ChildComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  todoList: TodoItem[] = [];
    newTask: string = '';

    
  addTask(text: string): void {
    if (text.trim() !== '') {
        const newTodoItem: TodoItem = {
  
            task: text.trim(),
            
        };
        this.todoList.push(newTodoItem);
        this.newTask = '';
    }
}
}