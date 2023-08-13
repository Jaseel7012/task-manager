import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  taskviewflagparent: boolean = false
  myTask() {
    this.taskviewflagparent = true

  }

}
