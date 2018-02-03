import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule,MatButtonModule,MatMenuModule, MatToolbarModule,MatSidenavModule,MatCardModule,MatTabsModule } from '@angular/material';

@NgModule({
  imports:[MatIconModule,MatButtonModule, MatToolbarModule,MatSidenavModule,MatTabsModule,MatCardModule,MatMenuModule ],
  exports:[MatIconModule,MatButtonModule, MatToolbarModule,MatSidenavModule,MatTabsModule,MatCardModule,MatMenuModule ],
  })
  export class MaterialModule{}