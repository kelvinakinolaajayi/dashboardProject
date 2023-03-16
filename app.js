// Define data for the bar chart
var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: '#3498db',
      data: [12, 19, 3, 5, 2, 3, 7]
    }, {
      label: 'Dataset 2',
      backgroundColor: '#95a5a6',
      data: [8, 4, 2, 9, 10, 8, 11]
    }]
  };
  
  // Define options for the bar chart
  var barChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Bar Chart'
    },
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  
  // Create a new bar chart
  var barChart = new Chart(document.getElementById('bar-chart'), {
    type: 'bar',
    data: barChartData,
    options: barChartOptions
  });
  
  // Define data for the line chart
  var lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      borderColor: '#3498db',
      fill: false,
      data: [12, 19, 3, 5, 2, 3, 7]
    }, {
      label: 'Dataset 2',
      borderColor: '#95a5a6',
      fill: false,
      data: [8, 4, 2, 9, 10, 8, 11]
    }]
  };
  
  // Define options for the line chart
  var lineChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }]
    }
  };
  
  // Create a new line chart
  var lineChart = new Chart(document.getElementById('line-chart'), {
    type: 'line',
    data: lineChartData,
    options: lineChartOptions
  });
  