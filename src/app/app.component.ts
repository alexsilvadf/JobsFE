import { Component } from '@angular/core';
import { JobsService } from './services/jobs.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jobs';


  constructor(private _jobsService: JobsService){

  }

  ngOnInit(){
   
  }
}
