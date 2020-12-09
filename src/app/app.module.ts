import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './header/header.component';
import { AllListSidenavComponent } from './all-list-sidenav/all-list-sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogexampleComponent } from './dialogexample/dialogexample.component';
import { ManagetodoService } from './shared/managetodo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllListSidenavComponent,
    MainContentComponent,
    DialogexampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue:{appearance: 'fill'}
    }, 
    ManagetodoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogexampleComponent]
})
export class AppModule { }
