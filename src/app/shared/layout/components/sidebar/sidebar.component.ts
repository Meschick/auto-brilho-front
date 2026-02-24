import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

expand() {
  this.isExpanded = true;
}

collapse() {
  this.isExpanded = false;
}
}
