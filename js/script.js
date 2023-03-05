const canvas = document.querySelector("#myGraph").getContext("2d");
let chart = new Chart(canvas, {
   type: "line",
   data: {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
         {
            label: "Valor bruto",
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: "#725AC1",
            borderColor: "#725AC1",
            borderWidth: 2
         },
         {
            label: "Valor líquido",
            data: [1, 3, 5, 7, 9, 11, 13],
            backgroundColor: "#FF7A00",
            borderColor: "#FF7A00",
            borderWidth: 2 
         },
         {
            label: "Ganho real",
            data: [1, 4, 7, 10, 13, 16, 19],
            backgroundColor: "#fff",
            borderColor: "#fff",
            borderWidth: 2 
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