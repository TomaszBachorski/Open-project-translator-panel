import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { RegisterUser, LoginUser } from "../user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    userExists(username: string) {
        return this.http.get(`http://localhost:7200/userExists/${username}`);
    }

    emailTaken(email: string) {
        return this.http.get(`http://localhost:7200/emailTaken/${email}`);
    }

    register(user: RegisterUser) {
        return this.http.post(`http://localhost:7200/register`, user);
    }

    login(user: LoginUser) {
        return this.http.post(`http://localhost:7200/login`, user);
    }

    getSupportedLanguages() {
        return this.http.get("http://localhost:7200/supportedLanguages")
    }
}
