function calculate(){
    var height=parseFloat(document.getElementById("ht").value);
    var weight=parseFloat(document.getElementById("wt").value);
    var op = weight/(height*0.01*height*0.01);

    if(op<18.5){
        document.getElementById("res").innerHTML="Your BMI Value  :"+op;
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: op,
              title: { text: "BMI" },
              type: "indicator",
              mode: "gauge+number+delta",
              delta: { reference: 18.6 },
              gauge: {
                axis: { range: [null, 50] },
                steps: [
                  { range: [0, 18.5], color: "Yellow" },
                  { range: [18.6, 24.5], color: "Black" },
                  { range: [24.6, 39.9], color: "LightGreen" },
                  { range: [40, 50], color: "Red" }
                ],
                
              }
            }
          ];
          
          var layout = { width: 500, height: 250, margin: { t: 0, b: 0 } };
          Plotly.newPlot('Second_div', data, layout);
          
        
    }

    else if(op>=18.5 && op<=24.5){
        document.getElementById("res").innerHTML="Your BMI Value  :"+op;
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: op,
              title: { text: "BMI" },
              type: "indicator",
              mode: "gauge+number+delta",
              delta: { reference: op },
              gauge: {
                axis: { range: [null, 50] },
                steps: [
                    { range: [0, 18.5], color: "Yellow" },
                  { range: [18.6, 24.5], color: "Black" },
                  { range: [24.6, 39.9], color: "LightGreen" },
                  { range: [40, 50], color: "Red" }
                ],
                
              }
            }
          ];
          
          var layout = { width: 500, height: 250, margin: { t: 0, b: 0 } };
          Plotly.newPlot('Second_div', data, layout);
          
        
        
    }
    else if(op>=24.6 && op<=39.9 ){
        document.getElementById("res").innerHTML="Your BMI Value  :"+op;
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: op,
              title: { text: "BMI" },
              type: "indicator",
              mode: "gauge+number+delta",
              delta: { reference: 24.5 },
              gauge: {
                axis: { range: [null, 50] },
                steps: [
                    { range: [0, 18.5], color: "Yellow" },
                    { range: [18.6, 24.5], color: "Black" },
                    { range: [24.6, 39.9], color: "LightGreen" },
                    { range: [40, 50], color: "Red" }
                ],
                
              }
            }
          ];
          
          var layout = { width: 500, height: 250, margin: { t: 0, b: 0 } };
          Plotly.newPlot('Second_div', data, layout);
          

    }
    else if(op>=40.5 ){
        document.getElementById("res").innerHTML="Your BMI Value  :"+op;
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: op,
              title: { text: "BMI" },
              type: "indicator",
              mode: "gauge+number+delta",
              delta: { reference: 24.5 },
              gauge: {
                axis: { range: [null, 50] },
                steps: [
                    { range: [0, 18.5], color: "Yellow" },
                    { range: [18.6, 24.5], color: "Black" },
                    { range: [24.6, 39.9], color: "LightGreen" },
                    { range: [40, 50], color: "Red" }
                ],
                
              }
            }
          ];
          
          var layout = { width: 500, height: 250, margin: { t: 0, b: 0 } };
          Plotly.newPlot('Second_div', data, layout);
          
    }     
}