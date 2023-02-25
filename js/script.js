const canvas = document.querySelector("#myGraph").getContext("2d");
let chart = new Chart(canvas, {
   type: "line",
   data: {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
         {
            label: "just a test",
            data: [1, 2, 4, 8, 16, 32, 64],
            backgroundColor: "#00CBFF",
            borderColor: "#00CBFF"
         },
         {
            label: "another test",
            data: [1, 3, 9, 27, 81, 243, 729],
            backgroundColor: "#FF7A00",
            borderColor: "#FF7A00",
         }
      ]
   },
   options: {
      plugins: {
         legend: {
             labels: {
                 color: 'rgba(255, 255, 255, .7)'
             }
         }
     },
      scales: {
         x: {
            grid: {
               color: "rgba(255, 255, 255, .3)"
            },
            border: {
               color: "rgba(255, 255, 255, 0)"
            },
            ticks: {
               color: "rgba(255, 255, 255, .7)"
            }
         },
         y: {
            grid: {
               color: "rgba(255, 255, 255, .3)"
            },
            border: {
               color: "rgba(255, 255, 255, 0)"
            },
            ticks: {
               color: "rgba(255, 255, 255, .7)"
            }
         }
      }
   }
})