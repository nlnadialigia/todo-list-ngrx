import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item!: Todo;
  @Output() markAsDone = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
