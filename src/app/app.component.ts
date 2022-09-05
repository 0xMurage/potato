import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result: any;

  constructor(private httpClient: HttpClient) {
    this.demo().subscribe({
      next: (data) => {
        this.result = data;
      },
      error: (err) => {
        this.result = err;
      },
    });
  }
  demo(): Observable<any> {
    return this.httpClient.get('/api/events.json');
  }
}
