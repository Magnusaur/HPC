/**
* The Catalog takes a data set and creates the clips (HPCClip) and adds them
* to the catalog.
*/
class HPCCatalog{
    
    //Constructs the catalog
    constructor(data){
        //We create a new "internal" property for storing the catalog in as an array
        this.clips = [];
        
        //Run over the data set in a loop
        for(var i=0; i < data.length; i++){
            //Create new clip for each entry in the data set
            let clip = new HPCClip(data[i])
            {
                //Add the clip to the catalog
                this.clips.push(clip);
            }
        }    
        //Trace to console that the catalog has been created
        //console.log("Catalog created with "+this.clips.length);
    }
}