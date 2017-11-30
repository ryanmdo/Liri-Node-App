//read the keys from the keys.js file
// var consumerKey='';
// var consumerSecret='';
// var accessTokenKey='';
// var accessTokenSecret='';


//I could not get fs to work properly, but I wanted to continue on to the twitter portion, so I hardcoded the keys
//
//var fs = require('fs');
// fs.readFile('./keys.js','utf8',function(err,data){
//     if (err){
//         console.log(err);
//     }
//     else{
//         var consumerKeyIndex = data.search('consumer_key: ')+15;
//         var consumerSecretIndex = data.search('consumer_secret: ')+18;
//         var accessTokenKeyIndex =data.search('access_token_key: ')+19;
//         var accessTokenSecretIndex = data.search('access_token_secret: ')+22;

//         consumerKey = data.substr(consumerKeyIndex,25);
//         consumerSecret = data.substr(consumerSecretIndex,50);
//         accessTokenKey = data.substr(accessTokenKeyIndex,50)
//         accessTokenSecret = data.substr(accessTokenSecretIndex,45);

//         console.log(consumerKey);
//         console.log(consumerSecret);
//         console.log(accessTokenKey);
//         console.log(accessTokenSecret);
//         // console.log('consumerSecret: '+consumerSecret);
//         // console.log('accessTokenKey: '+accessTokenKey);
//         // console.log('accessTokenSecret: '+accessTokenSecret);      
//     }
// })
//console.log(consumerSecret+'')




var twitter = require('twitter');
var client = new twitter({
    consumer_key: 'BXUGrcZ9upiaLQHCHb0uLhlEK',
    consumer_secret: 'kPLxDnRJCgJT175Uf7gs47E4HrGDWEh7UBoJyijaLhR4hm1cSQ',
    access_token_key: '936314018444091393-hU7uRBXFpWtX4bQANpD0Rhnl20ATkW4',
    access_token_secret: 'L9aAURZ7DBejPqEAJfVoiy5u1GpgNTjmTwpbHpSYJrYBc',
})




console.log(client.access_token_key)


var argument1 = process.argv[2];
var argument2 = process.argv[3];
var randomTxt = 'random.txt'



var chooseCommand = function(){
    if (argument1 === 'my-tweets'){
        myTweets()
    }

    if (argument1 === 'spotify-this-song'){
        spotifyThisSong(argument2);
    }

    if(argument1 === 'movie-this'){
        movieThis(argument2);
    }
    
}

var myTweets = function(arg2){
    
}

var spotifyThisSong = function(arg2){

}

var movieThis = function(arg2){

}


// 8. Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// This will show your last 20 tweets and when they were created at in your terminal/bash window.
// * `spotify-this-song`
// * This will show the following information about the song in your terminal/bash window
// * Artist(s)
// * The song's name
// * A preview link of the song from Spotify
// * The album that the song is from
// * If no song is provided then your program will default to "The Sign" by Ace of Base.
// * `movie-this`
// * `do-what-it-says`