
//async-await

async function kuchkam() {

           console.log("wait for 2 sec");
           let data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
           console.log(data.json());
           console.log(b);
}
console.log(kuchkam());