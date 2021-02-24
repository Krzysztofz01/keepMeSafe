import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordlistCheckerService {

  constructor(private httpClient: HttpClient) { }

  // https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Keyboard-Combinations.txt
  // Keyboard combinations
  public GetCombinations(): Observable<string> {
    const headers = new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
      
    const responseType = 'text';

    return this.httpClient.get("https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Keyboard-Combinations.txt", { headers, responseType });
  }

  // https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/xato-net-10-million-passwords-1000000.txt
  // Popular password
  public GetPopular(): Observable<string> {
    const headers = new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
      
    const responseType = 'text';

    return this.httpClient.get("https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/xato-net-10-million-passwords-1000000.txt", { headers, responseType });
  }
}
