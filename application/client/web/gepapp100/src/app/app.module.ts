import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslatorModule } from './translator/translator.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { SharedService } from '../shared/shared.service';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeModule } from './home/home.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { ManagerolesModule } from './manageroles/manageroles.module';
import { ManageusersModule } from './manageusers/manageusers.module';
import { ManagecontrolModule } from './managecontrol/managecontrol.module';
import { UserModule } from './user/user.module';
import { VaultadminModule } from './vaultadmin/vaultadmin.module';
import { SefscreenModule } from './sefscreen/sefscreen.module';

@NgModule({
  declarations: [
],
  imports: [
FormsModule,
HttpClientModule,
ManagecontrolModule,
ManagerolesModule,
TemplateModule,
FooterModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserAnimationsModule,
      BrowserModule,
LoginModule,
SignupModule,
HomeModule,
AuthorizationModule,
ManagerolesModule,
ManageusersModule,
ManagecontrolModule,
UserModule,
VaultadminModule,
SefscreenModule
],
  providers: [
    	SharedService
],
  bootstrap: [
  AppComponent
]
})
export class AppModule { }