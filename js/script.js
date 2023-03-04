const canvas = document.querySelector("#myGraph").getContext("2d");
let chart = new Chart(canvas, {
   type: "line",
   data: {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
         {
            label: "Valor bruto",
            data: [1, 2, 4, 8, 16, 32, 64],
            backgroundColor: "#00CBFF",
            borderColor: "#00CBFF",
            // borderWidth: 2
         },
         {
            label: "Valor líquido",
            data: [64, 32, 16, 8, 4, 2, 1],
            backgroundColor: "#FF7A00",
            borderColor: "#FF7A00",
            // borderWidth: 
         }
      ]
   },
   options: {
      maintainAspectRatio: false,
      plugins: {
         legend: {
               labels: {
                  color: 'rgba(255, 255, 255, .7)',
                  // font: {
                  //    size: 13,
                  //    weight: 700
                  // }
             }
         }
     },
      scales: {
         x: {
            grid: {
               display: false
            },
            border: {
               display: false
            },
            ticks: {
               color: "rgba(255, 255, 255, .7)",
               // font: {
               //    size: 13,
               //    weight: 700
               // }
            }
         },
         y: {
            grid: {
               display: false
            },
            border: {
               display: false
            },
            ticks: {
               display: false
            }
         }
      }
   }
})