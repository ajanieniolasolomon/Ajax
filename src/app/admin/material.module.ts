import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule,MatSnackBarModule,MatIconModule,MatButtonModule,MatMenuModule, MatToolbarModule,MatSidenavModule,MatCardModule,MatTabsModule } from '@angular/material';

@NgModule({
  imports:[MatInputModule,MatSnackBarModule,MatIconModule,MatButtonModule, MatToolbarModule,MatSidenavModule,MatTabsModule,MatCardModule,MatMenuModule ],
  exports:[MatInputModule,MatSnackBarModule,MatIconModule,MatButtonModule, MatToolbarModule,MatSidenavModule,MatTabsModule,MatCardModule,MatMenuModule ],
  })
  export class MaterialModule{}
 