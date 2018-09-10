'use strict';


// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  const defaultIntervalInMin = '5';
  let refreshInterval;
  let activeDatasourceIdList = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function() {     
		paivitasivua();
    }, function (err) {
      // Something went wrong in initialization
      console.log('Error while Initializing: ' + err.toString());
    }

	);
  });

  /**
   * This function sets up a JavaScript interval based on the time interval selected
   * by the user.  This interval will refresh all selected datasources.
   */
  function paivitasivua() {
    alert( 'Sivu päivitetty' );
	
	setTimeout(function() {
	location.reload();
						}, 10000);
  }

})();
