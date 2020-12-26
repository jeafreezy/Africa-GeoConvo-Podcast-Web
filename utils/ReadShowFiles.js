var path = require('path');

const { promisify } = require('util');

const {readFile,readdir} = require('fs');

const readAFolder = promisify(readdir); 

const readAFile = promisify(readFile)

const marked = require('meta-marked');


let shows;

const loadShows = async()=>{


   const showsDirectory = path.join(process.cwd(),'/shows');

   const files = (await readAFolder(showsDirectory)).filter(file => file.endsWith('.md'))

   const markdownPromises = files.map(file => readAFile(path.join(showsDirectory,file),'utf-8'))

   const showMarkDown = await Promise.all(markdownPromises)

   shows=showMarkDown.map(show => marked(show) ).map( (show,i) => {

     return {

         ...show.meta,
         readableDate:show.meta.date,
         html:show.html
     }
     
   }).reverse()   
   
   return shows  
}

async function getShows(){

   var shows= await loadShows();

   return shows
}


async function getSomeShows(number){

   var showsToFilter= await loadShows()

   const shows = [] 

   for(let i = 0 ; i < showsToFilter.length; i++){
      
      if(i < number){

         shows.push(showsToFilter[i])
      }
   }
   return shows

}

module.exports={
   getShows,
   getSomeShows
}