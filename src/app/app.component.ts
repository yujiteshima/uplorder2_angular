import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload2';

  constructor(private http: HttpClient) {
  }

  upload(files: Array<any>): void {
    if (files.length <= 0) {
      return;
    }


    const file = files[0];

    const formDate = new FormData();

    formDate.append('file', file, file.name);

    this.http.post('http://localhost:8080/upload', formDate)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
