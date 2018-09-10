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

  var sekunnit = 5; //oletuksena minuutti
  /*haetaan asetettu aika*/
  

   
  
  
   /*päivittää datasourcet*/
   
    refreshInterval = setInterval(function() { 
      let dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboard.worksheets.forEach(function (worksheet) {
        worksheet.getDataSourcesAsync().then(function (datasources) {
          datasources.forEach(function (datasource) {

               datasource.refreshAsync();
			   
             
          });
        });
      });
    }, sekunnit*1000);
  
  }

})();

