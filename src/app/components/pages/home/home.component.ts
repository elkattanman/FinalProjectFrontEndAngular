import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public s: string;

  constructor() {
  }

  ngOnInit(): void {
    (function($) {
      $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
          alwaysShowClose: true
        });
      });
    })(jQuery);



  }

}
