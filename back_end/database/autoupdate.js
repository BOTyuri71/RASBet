const CronJob = require("node-cron");
const http = require('http');
const Jogos = require("../controllers/jogo.js");

function resolveOdds(bookmakers,completed,scores){
    var r1State = 0,r2State = 0,r3State = 0
    if(completed){
        arr = scores.split("x")
        if(parseInt(arr[0]) > parseInt(arr[1])){
            r1State = 2
            r2State = 1
            r3State = 1
        }
        else{
            if(parseInt(arr[0]) < parseInt(arr[1])){
                r1State = 1
                r2State = 2
                r3State = 1
            }
            else{
                r1State = 1
                r2State = 1
                r3State = 2
            }
        }
    }
    bookmakers.sort((a,b) => (a.lastUpdated > b.lastUpdated) ? 1 : ((b.lastUpdated > a.lastUpdated) ? -1 : 0))

    const r1 = {
        descricao : bookmakers[0].markets[0].outcomes[0].name,
        odd : bookmakers[0].markets[0].outcomes[0].price,
        estado : r1State
    }
    const r2 = {
        descricao : bookmakers[0].markets[0].outcomes[1].name,
        odd : bookmakers[0].markets[0].outcomes[1].price,
        estado : r2State
    }
    const r3 = {
        descricao : bookmakers[0].markets[0].outcomes[2].name,
        odd : bookmakers[0].markets[0].outcomes[2].price,
        estado : r3State
    }
    return [r1,r2,r3]
}

function updDatabase(){
    console.log("UPDATING DATABASE...");
    console.time("DATABASE UPDATED")
    let req = http.get("http://ucras.di.uminho.pt/v1/games/", function(res) {
        let data = '',
            json_data;
    
        res.on('data', function(stream) {
            data += stream;
        });
        res.on('end', function() {
            json_data = JSON.parse(data);
            Object.entries(json_data).forEach((entry) => {
                const [key, value] = entry;
                const equipaCasa = {
                    nome : value.homeTeam,
                    desporto : 'Futebol',
                    pais : 'Portugal',
                    liga : 'Primeira Liga'
                }
                const equipaFora = {
                    nome : value.awayTeam,
                    desporto : 'Futebol',
                    pais : 'Portugal',
                    liga : 'Primeira Liga'
                }
                const equipasArr = [equipaCasa,equipaFora]
                const oddsArr = resolveOdds(value.bookmakers,value.completed,value.scores)
                Jogos.createUpdate(value,equipasArr,oddsArr)


                
            });
            console.timeEnd("DATABASE UPDATED")
        });
    }); 
    req.on('error', function(e) {
        console.log(e.message);
    });
}

exports.updateDatabase = () => {
    //const scheduledJobFunction = CronJob.schedule("*/* * * * *", () => {
    updDatabase()
    //});
    //scheduledJobFunction.start();
}
