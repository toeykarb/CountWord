// use npm install osmosis 

const checkImg = () =>{

    var osmosis = require('osmosis');
    osmosis
  .get('https://www.nba.com/')
//   .find('jpg')
  .set({
    'images':['img@src'],
    })
  .data(function(res) {
      var count = res.images.filter((item,index)=>{
          var isJpG = item.search('.jpg') 
        if(isJpG !== -1){
            return item
        }
      })
      console.log(count)
    //console.log(res)
  })
    }
const countword = () =>{

        var osmosis = require('osmosis');
        osmosis
      .get('https://www.scrapmaker.com/data/wordlists/language/Nouns(5,449).txt')
      
      .set({'word' :'body'})
      .data(function(data) {
        var word = data.word.replace(/\/r\//g,"");
        var storeData = []
        
        for(i=97;i<123;i++){
            var charSym = String.fromCharCode(i)
            storeData.push({
                charSym,
                word_length:word.match(new RegExp(charSym,'g')).length
            })
        }
        function compare(a,b){
            //console.log(a,b)
            if(a.word_length < b.word_length){
                return 1;
            }
            if(a.word_length > b.word_length){
                return -1;
            }
            
            return 0;
        }
        
        storeData.sort((compare))
        storeData.map((item,index)=>{
            console.log(`${item.charSym}:${item.word_length}`)
        })
      })
}   
checkImg();
countword();


