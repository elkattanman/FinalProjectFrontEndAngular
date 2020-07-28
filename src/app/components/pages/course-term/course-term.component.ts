import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-course-term',
  templateUrl: './course-term.component.html',
  styleUrls: ['./course-term.component.sass']
})
export class CourseTermComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function($) {
      $(document).ready(function(){
        $('.duallistbox').bootstrapDualListbox();
        $('input[data-bootstrap-switch]').each(function() {
          $(this).bootstrapSwitch('state', $(this).prop('checked'));
        });
      });
    })(jQuery);

  }

}
