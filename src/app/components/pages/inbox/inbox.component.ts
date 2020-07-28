import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.sass']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function($) {
      $(document).ready(function() {
        $('.checkbox-toggle').click(function() {
          const clicks = $(this).data('clicks');
          if (clicks) {
            // Uncheck all checkboxes
            $('.mailbox-messages input[type=\'checkbox\']').prop('checked', false);
            $('.checkbox-toggle .far.fa-check-square').removeClass('fa-check-square').addClass('fa-square');
          } else {
            // Check all checkboxes
            $('.mailbox-messages input[type=\'checkbox\']').prop('checked', true);
            $('.checkbox-toggle .far.fa-square').removeClass('fa-square').addClass('fa-check-square');
          }
          $(this).data('clicks', !clicks);
        });
        $('#example1').DataTable({
          paging: true,
          lengthChange: false,
          searching: true,
          ordering: true,
          info: true,
          autoWidth: true,
          responsive: true,
        });
        console.log('Test');

      });
    })(jQuery);


  }

}
