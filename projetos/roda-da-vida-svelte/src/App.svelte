<script>
  import Chart from "chart.js"
  import Swal from 'sweetalert2'
  
   
  var total, name
  window.onload = async function() {
    const { value: nameInput } = await Swal.fire({
      title: 'Digite o seu nome',
      input: 'text',
      inputValue: 'João',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Você precisa digitar algo!'
        }
      }
    })
    name = nameInput
    var ctx = document.getElementById("myRadarChart");
    var myRadarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Amor",
          "Lazer",
          "Intelecto",
          "Saúde",
          "Vida Financeira",
          "Amigos e Família",
          "Trabalho e Carreira",
          "Espiritualidade"
        ],
        datasets: [
          {
            label: "Sua Roda da Vida",
            data: Array.from({length: 8}, () => Math.floor(Math.random() * 10)),
            backgroundColor: "rgb(255,62,0, 0.5)",
            fill: true
          }
        ]
      },
      options: {
        scale: {
          angleLines: {
            display: true
          },
          ticks: {
            suggestedMin: 5,
            suggestedMax: 10
          }
        }
      }
    });
    total = myRadarChart.config.data.datasets[0].data.reduce(function(
      total,
      numero
    ) {
      return total + numero;
    },
    0);
  };

</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  h3 {
    color: #ff3e00;
    text-transform: uppercase;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name ? name : ''}!</h1>
  <h3>Your points: {total}</h3>

  <canvas id="myRadarChart" width="50" height="50" />

</main>
