
// Technical Skill
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Javascript", "jQuery", "React", "HTML", "CSS"],
        datasets: [{
            label: 'Level of skill',
            data: [65, 75, 55, 85, 70],
            backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {

                    autoSkip: false,
                    beginAtZero:true
                }
            }]
        }
    }
});

//Marketing skill
var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Planning", "Executing", "Presentation", "Multitasking", "Report"],
        datasets: [{
            label: 'Level of skill',
            data: [70, 85, 65, 90, 80],
            backgroundColor: [
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
            ],
            
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    beginAtZero:true
                }
            }]
        }
    }
});