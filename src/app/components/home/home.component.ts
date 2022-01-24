import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient, public httpClientService:HttpClientService){}

  ngOnInit(): void {
  }

  getData(){
    let api = "http://localhost:8080/hello";
    // this.http.get(api).subscribe((response)=>{
    //   alert(response);
    // })

    this.http.jsonp(api,'cb').subscribe((response)=>{
      console.log(response);
    })
  }

  clickHttpClientQueryJsonp() {
    this.httpClientService.queryJsonpList().subscribe(data => {
      console.log(data);
    });
  }


}
