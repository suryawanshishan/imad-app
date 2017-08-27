//console.log('Loaded!');

var button = document.getElementById('counter');


button.onclick = function () {
    
    //create a request object
    var request = new XMLHttprequest();
    
    //capture the responce & stire it into a variable
    request.onreadystatechage = function () {
    if(request.readystate == XMLHtmlRequest.DONE) {
        //take some actions
        if (request.status==200) {
            var counter = request.responceText;
            var span = document.getElementById('count');
            span.InnerHTML = counter.toString(); 
        
        }
    }    
    
    
    };
    //make request
    request.open('GET', 'http://suryawanshishantanu9.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
