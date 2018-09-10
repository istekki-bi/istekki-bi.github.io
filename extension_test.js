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
   // alert( 'Sivu päivitetty' );
	
	  /**
   * This function sets up a JavaScript interval based on the time interval selected
   * by the user.  This interval will refresh all selected datasources.
   */
   
   
    refreshInterval = setInterval(function() { 
      let dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboard.worksheets.forEach(function (worksheet) {
        worksheet.getDataSourcesAsync().then(function (datasources) {
          datasources.forEach(function (datasource) {
             if (activeDatasourceIdList.indexOf(datasource.id) >= 0) {
               datasource.refreshAsync();
             }
          });
        });
      });
    }, 5*1000);
  
  }

})();

