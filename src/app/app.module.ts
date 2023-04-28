import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BodyComponent } from './body/body/body.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionsComponent } from './header/sections/sections.component';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './body/register/register.component';
import { ListUsersComponent } from './body/list-users/list-users.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { FormNewMemberComponent } from './body/register/form-new-member/form-new-member.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { RegisterService } from './services/registerServices.service';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShowProductsComponent } from './body/register/show-product/show-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SectionsComponent,
    RegisterComponent,
    ListUsersComponent,
    FormNewMemberComponent,
    ShowProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ RegisterService,],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
