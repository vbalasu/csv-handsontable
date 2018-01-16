MyPapa = Papa;
MyPapa.author = "Vijay Balasubramaniam";
MyPapa.hotparse = function(csvfile, callback) {
    var options = {
        download: true, 
        header: true,
        complete: function(results) {
            callback({
                colHeaders:Object.keys(results.data[0]), 
                columns:Object.keys(results.data[0]).map(function (x){
                    return {data:x}
                }),
                data:results.data
            });
        }
    }
    Papa.parse(csvfile, options);
}
