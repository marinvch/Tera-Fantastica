import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IBooks } from "./../books";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  private _url: string = "/assets/books/data/data.json";
  constructor(private http: HttpClient) {}

  getData(): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(this._url);
  }
}
