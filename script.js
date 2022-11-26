
function calc(){
  
    int age = 21;

      if (!isNaN(age)){
        var string = document.createElement("div");
        string.setAttribute('class', 'stringCSS');
        string.innerHTML ="You've been alive for : ";   
        document.body.appendChild(string);

        var daysOutput = document.createElement("div");
        days=365*age;
        daysOutput.setAttribute('class', 'outputCSS');
        daysOutput.innerHTML = days+" days";   
        document.body.appendChild(daysOutput);

        var hoursOutput = document.createElement("div");
        hours=8766*age;
        hoursOutput.setAttribute('class', 'outputCSS');
        hoursOutput.innerHTML = hours+" hours";   
        document.body.appendChild(hoursOutput);
        

        var secondsOutput = document.createElement("div");
        seconds=31536000*age;
        secondsOutput.setAttribute('class', 'outputCSS');
        secondsOutput.innerHTML = seconds+"+ seconds";
        document.body.appendChild(secondsOutput);
      }
      else
         alert("Please enter a number ONLY");
        
}
function reload (){
  window.location.reload();
}
