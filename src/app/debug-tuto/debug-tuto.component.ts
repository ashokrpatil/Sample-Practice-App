import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-tuto',
  templateUrl: './debug-tuto.component.html',
  styleUrls: ['./debug-tuto.component.css']
})
export class DebugTutoComponent implements OnInit {


  constructor() {
  console.log('Constructor Loading!' );
  // document.write('Constructor Loading'+ "<br/>" );
  const artists = [
    {
      first: 'René',
      
      last: 'Magritte'
    },
    {
      first: 'Chaim',
      last: 'Soutine'
    },
    {
      first: 'Henri',
      last: 'Matisse'
    }
  ];
  console.table(artists);

   }

  ngOnInit() {
 console.log('Loading!');
//  document.write('loading');

 
//  const h1 = document.querySelector('h1');

//  console.log(h1.textContent);

//  console.assert(document.querySelector('h2'), 'h2 not found!');

 const artists = [
   {
     first: 'René',
     middle:'Alex',
     last: 'Magritte'
   },
   {
     first: 'Chaim',
     last: 'Soutine'
   },
   {
     first: 'Henri',
     last: 'Matisse'
   }
 ];
 console.table(artists);

//  setTimeout(() => {
//    h1.textContent = 'Hello, Console!';
//    console.log(h1.textContent);
//  }, 3000);

  }

}
