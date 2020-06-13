import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IMagazines } from "./../magazines";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MagazinesService {
  private _url: string = "/assets/magazines/data/data.json";
  constructor(private http: HttpClient) {}

  getData(): Observable<IMagazines[]> {
    return this.http.get<IMagazines[]>(this._url);
  }
}
