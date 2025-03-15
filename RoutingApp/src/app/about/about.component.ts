import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnDestroy{
  //after the Aboutcomponant destroy ngOnDestroy() will invoke
  ngOnDestroy(): void {
    console.log("ngOnDestroy method invoke")
  }

}
