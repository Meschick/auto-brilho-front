import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

export const ANGULAR_MATERIAL = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule
]