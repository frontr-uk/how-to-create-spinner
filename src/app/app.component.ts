import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spinner-app';
  public isLoading$: Observable<Boolean> = of(false);
  public data$: Observable<any>;
  public error$: Observable<any>;
  
  constructor(private http: HttpClient){}

  fetch(){
    this.isLoading$ = of(true)
    this.http.get('https://api.thecatapi.com/v1/images/search')
      .subscribe( (obj) => {
          this.isLoading$ = of(false)
          this.data$ = of(obj)
        }
      )
  }
}
