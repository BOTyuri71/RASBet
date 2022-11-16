const CronJob = require("node-cron");



function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

exports.initScheduledJobs = () => {
    const scheduledJobFunction = CronJob.schedule("*/* * * * *", () => {
        console.log("REFILLING ");

        getJSONP('http://ucras.di.uminho.pt/v1/games/', function(data){
            console.log(data);
        }); 
    });
    scheduledJobFunction.start();
}
