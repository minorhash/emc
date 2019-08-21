$( function() {
        $( "#rag" ).draggable();
        $( "#rop" ).droppable({
          drop: function( event, ui ) {
          $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "dropped" );
          }
        });
      } );
