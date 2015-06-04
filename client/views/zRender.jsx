/**
* Called zRender because this has to be the last file in sequential order otherwise references won't work
**/

var collection = new PSICollection();

var router = new Router();


React.render(
  <InterfaceComponent router={router} />,
  document.getElementById('navigation')
);


React.render(
  <PSITable router={router} collection={collection} />,
  document.getElementById('table')
  );

$('#sandbox-container .input-daterange').datepicker({
  });

Backbone.history.start();


