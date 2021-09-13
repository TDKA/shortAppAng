import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-short',
  templateUrl: './new-short.component.html',
  styleUrls: ['./new-short.component.css']
})
export class NewShortComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  createShort(name: string, size: string, color: string) {
    this.http.post('http://127.0.0.1:8000/api/create', {
      name: name,
      size: size,
      color: color

    }).subscribe(data => {
      console.log(data);
      this.router.navigate(['home'])
    })

  }
}
