import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'club-deportivo-fe';

  loaded: boolean = false

  ngOnInit(): void {
    setTimeout(()=>{
      this.loaded = true
    }, 3000)
  }
}
