export default {
  options: {
    floating: true,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    },
    chart: {
      toolbar: {
        show: false,
        menu: {
          download: false,
        }
      },
      selection: {
        enabled: false
      },
      sparkline: {
        enabled: false,
      }
    },
    xaxis:{
      show: false
    },
    plotOptions: {
      bar:{
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff', '#fff', '#fff', '#fff']
      }
    },
    tooltip: {
      show: false
    },
    legend: {
      show: false
    },

    grid: {
      show: false,
    },
    colors: ['#4da1ff', '#4da1ff', '#00d8ff', '#ce6ee8'],
    stroke: {
      width: 0,
      curve: 'smooth'
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 1,
        gradientToColors: ['#4da1ff', '#4da1ff', '#fff', '#ce6ee8'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      }
    },
  },
  series: [
    {
      name: 'blue1',
      data: [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 20, y: 10 },
        { x: 30, y: 30 },
      ]
    },
    {
      name: 'blue2',
      data: [
        { x: 0, y: 0 },
        { x: 10, y: -10 },
        { x: 20, y: -10 },
        { x: 30, y: -25 },
      ]
    },
    {
      name: 'cyan',
      data: [
        { x: 0, y: 0 },
        { x: 10, y: 20 },
        { x: 20, y: 20 },
        { x: 30, y: 60 },
      ]
    },
    {
      name: 'move',
      data: [
        { x: 0, y: 0 },
        { x: 10, y: -20 },
        { x: 20, y: -20 },
        { x: 30, y: -30 },
      ]
    }
  ]
};