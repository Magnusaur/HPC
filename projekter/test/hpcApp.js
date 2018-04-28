function startHPC(callback) {
    //The function to start the load of the data and create a new HPCCatalog 
    $.getJSON("https://spreadsheets.google.com/feeds/list/1-7bdcNa74Rv_53_b5XdWP7UNYLAwtRZFnVj3lyJIG0g/od6/public/basic?alt=json", function (data) {
        //We create the HPCCatalog and feed it the data
        //We store the HPCCatalog instance in the catalog variable
        callback(new HPCCatalog(data.feed.entry));
    });
}