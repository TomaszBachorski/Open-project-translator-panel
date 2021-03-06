import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { TranslationPanelComponent } from './components/translation-panel/translation-panel.component';
import { FooterComponent } from './components/common-components/footer/footer.component';
import { NavigationComponent } from './components/common-components/navigation/navigation.component';
import { LanguageOverviewPanelComponent } from './components/translation-panel/language-overview-panel/language-overview-panel.component';

//alerts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { UsersPanelComponent } from './components/users-panel/users-panel.component';
import { AccountComponent } from './components/account/account.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { TranslateLanguageComponent } from './components/translate-language/translate-language.component';
import { StringsListComponent } from './components/translate-language/strings-list/strings-list.component';
import { TranslateFieldComponent } from './components/translate-language/translate-field/translate-field.component';
import { CurrentTranslationsComponent } from './components/translate-language/current-translations/current-translations.component';

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        RegisterComponent,
        TranslationPanelComponent,
        FooterComponent,
        NavigationComponent,
        LanguageOverviewPanelComponent,
        UsersPanelComponent,
        AccountComponent,
        UserViewComponent,
        TranslateLanguageComponent,
        StringsListComponent,
        TranslateFieldComponent,
        CurrentTranslationsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({ positionClass: 'inline' }),
        ToastContainerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
