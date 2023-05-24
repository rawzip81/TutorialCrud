import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class Tutorial {
  id?: number;
  title?: string;
  description?: string;
  published?: boolean;


}
