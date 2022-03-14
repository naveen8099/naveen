var consoreWords=["sad","bad","nveen"];
var customCensoredWords=[];
function censor(inStr){
    for (idx in censoredWords){
        inStr=inStr.replace(censoredWords[idx],"***");
    }
    for (idx in customCensoredWords){
        inStr=inStr.replace(customCensoredWords[idx],"***");
    }
}
function addConsoreWord(word){
    customCensoredWords.push(word);
}
function getConsoreWord(){
    return consoreWords.contact(customCensoredWords);
}
exports.censor=censor;
exports.addConsoreWord=addConsoreWord;
exports.getConsoreWord=getConsoreWord;