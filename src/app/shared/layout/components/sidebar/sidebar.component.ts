import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ANGULAR_MATERIAL } from '../../../../core/angular-material/angular-material';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, ANGULAR_MATERIAL],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isExpanded = false;

  userName = 'João Silva';
  userEmail = 'joao@example.com';
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
