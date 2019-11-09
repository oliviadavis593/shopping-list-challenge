$(function(){

    $('#js-shopping-list-form').submit(function(event) {
  
      event.preventDefault();

      const listItem = $('.js-shopping-list-entry').val();
  
      $('.js-shopping-list-entry').val('');
  
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });
  
  });


/*
Overall Things we did:
- Removed default form 
- got the text value for new items 
- clear text inout so user can submit there own text
- added a new shopping list items listed as 'li'
- removed and added check upon user click 
- deleted button requested by user upon clicking the delete button 
*/