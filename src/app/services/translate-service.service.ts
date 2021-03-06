import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { extendedLanguageResponse, languageInfoResponse, supportedLanguages } from '../customTypes';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    constructor(
        private http: HttpClient
    ) { }

    getLanguageInformation (language: string) {
        return this.http.post<languageInfoResponse>("http://localhost:7200/languageInformation", {language: language});
    }
    
    getSupportedLanguages() {
        return this.http.get<supportedLanguages>("http://localhost:7200/supportedLanguages");
    }

    getLanguageExtended(str: string) {
        return this.http.post<extendedLanguageResponse>("http://localhost:7200/getLanguageExtended", {language: str});
    }
}
