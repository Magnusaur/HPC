/* eslint-env node, es6 /
/ eslint-parserOptions.ecmaVersion: 6 */

/*
Constructs a new HCPClip
The consturctor takes the raw data in the format
*/
class HPCClip {
    
    constructor(data){ 
        //Info object to store the information extracted
        var info = {};
        
        //We stor the episode title (as it is the first from the chart this comes on its own) 
        info["episodetitle"] = data.title.$1;
        
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
            info[tempPro[0]] = tempPro[1]
            
        }
        console.log(info);
        this._info = info;
    }
    
    get episodeTitle(){
        console.log("no title.... " +this._info["episodetitle"])
        console.log(info);
        return this._info.episodeTitle
    }
    
    get episodeNum(){
        return this._info["episodenumber"];
    }
    
    get transcript(){
        return this._info["transcript"];
    }
}