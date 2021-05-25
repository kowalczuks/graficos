var positiveData = [], negativeData = [], deathsData = [], deathData = []

async function covidData () { 
    await getCovidData()

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March' ],
        datasets: [{
            label: 'Data Positive',
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1,
            data: positiveData    
        },
        {
            label: 'Data Negative',
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: 1,
            data: negativeData     
        },
        {
            label: 'Data Deaths',
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 1,
            data: deathsData     
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

covidData()



async function getCovidData() {
    const apiUrl = "api.json";

    const response = await fetch(apiUrl);
    const datas = await response.json();

    const date = datas.map( (x) => x.date)
    const positive = datas.map( (x) => x.positive);
    const negative = datas.map( (x) => x.negative);
    const deaths = datas.map( (x) => x.death);

    console.log(date, positive, negative, deaths);

    deatData = date;
    positiveData = positive;
    negativeData = negative;
    deathsData = deaths;

 }

