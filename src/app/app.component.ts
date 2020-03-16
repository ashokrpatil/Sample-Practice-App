import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practice Code';
  // moreContents: string = 'This tab will load some more contents after 5 seconds.';

  // tabSelectionChanged(event){
  //   this.moreContents = 'This tab will load some more contents after 5 seconds.';

  //   // Get the selected tab
  //   let selectedTab = event.tab;
  //   console.log(selectedTab);

  //   // Call some method that you want 
  //   this.someMethod();
  // }

  // someMethod(){

  //   setTimeout(()=>{
  //     this.moreContents = 'These are some more contents loaded after 5 seconds';
  //   },5000)
  // }
}
