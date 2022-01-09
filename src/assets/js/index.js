window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Piechart title"
        },
        data: [{
            type: "pie",
            startAngle: 240,

            indexLabel: "{label}",
            dataPoints: [
                {y: 30, label: "Java"},
                {y: 20, label: "C#"},
                {y: 20, label: "TypeScript"},
                {y: 15, label: "JavaScript"},
                {y: 10, label: "Html"},
                {y: 10, label: "CSS"}
            ]
        }]
    });
    chart.render();
}
