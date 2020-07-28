import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.sass']
})
export class WritepostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function($) {
      $(document).ready(function(){
        $('.textarea').summernote();
        // bsCustomFileInput.init();
      });
    })(jQuery);
  }

}
