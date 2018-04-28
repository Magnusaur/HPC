/* eslint-env node, es6 /
/ eslint-parserOptions.ecmaVersion: 6 */

/*
Constructs a new HCPClip
The consturctor takes the raw data in the format
*/
class HPCClip {
    
    constructor(data){ 
        //Info object to store the information extracted
        this.info = {};
        //We stor the episode title (as it is the first from the chart this comes on its own) 
        this.info["episodetitle"] = data.title.$t;
        
        //All the data of the clip is received as one long Comme separated file
        //We start by splitting it out
        var value = String(data.content.$t).split(", ");
        // We go over each of the value-pairs
        for(var i=0; i < value.length; i++){
            //Each of the new sub-strings we have is the column name and the row value
            //like "episodeNumber: 43"
            //So we run over each of them and split them based on the ":"
            // - we do it with a RegExp, so we can still have time in a 12:12:12 format
            // NOTE: Regex has been deprecated for split.. :-)
            var tempPro = value[i].split(": ");
            this.info[tempPro[0]] = tempPro[1]
            
        }
        console.log(this.info);
    }
    
    get episodeTitle(){
        return this.info["episodetitle"];
    }
    
    get episodeNum(){
        return this.info["episodenumber"];
    }
    
    get transcript(){
        return this.info["transcript"];
    }
    
    get description(){
        return this.info["description"];
    }
    
    get clipTitle(){
        return this.info["cliptitle"];
    }
    
    get urlLocation(){
        return "http://vlogvlog.dk/"+this.episodeNum+".mp4";
    }
}