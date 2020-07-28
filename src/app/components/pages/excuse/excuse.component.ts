import { Component, OnInit } from '@angular/core';
import { bsCustomFileInput } from 'node_modules/admin-lte/plugins/bs-custom-file-input/bs-custom-file-input.min.js';

declare var jQuery: any;

@Component({
  selector: 'app-excuse',
  templateUrl: './excuse.component.html',
  styleUrls: ['./excuse.component.sass']
})
export class ExcuseComponent implements OnInit {

  constructor() { }
  localUrl;

  ngOnInit(): void {
    (function($) {
      $(document).ready(function(){
        $('.textarea').summernote();
        // bsCustomFileInput.init();
      });
    })(jQuery);
  }

  ongetName(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      console.log(event);
      reader.onload = (event: any) => {this.localUrl = event.target.result; };
      reader.readAsDataURL(event.target.files[0]);
      console.log(this.localUrl);
  }

  }

}
