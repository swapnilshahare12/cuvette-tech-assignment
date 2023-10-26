import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsAccessibility from "highcharts/modules/accessibility";

// Initialize the required modules
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);

const ComparisonGraph = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      title: {
        text: "",
        align: "left",
      },

      yAxis: {
        title: {
          text: "",
        },

        labels: {
          enabled: false, // Hide the labels on the y-axis
        },
        gridLineWidth: 0,
      },

      xAxis: {
        accessibility: {
          rangeDescription: "Range: 0% to 100%",
        },
        min: 0,
        max: 10, // Adjust this value based on your data
        categories: [
          "0%",
          "10%",
          "20%",
          "30%",
          "40%",
          "50%",
          "60%",
          "70%",
          "80%",
          "90%",
          "100%",
        ],
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 0,
          showInLegend: false,
          enableMouseTracking: true,
          type: "spline", // Set the series type to "spline" for curved lines
          lineWidth: 2, // Adjust the line width as needed
          marker: {
            enabled: false, // Optionally, you can disable markers on data points
          },
        },

        point: {
          events: {
            load: function () {
              if (this.x === 20) {
                this.onMouseOver(); // Trigger hover effect for the specific point
              }
            },
          },
        },
      },

      exporting: {
        buttons: {
          contextButton: {
            enabled: false, // Disable the context menu
          },
        },
      },

      tooltip: {
        formatter: function () {
          // Customize the tooltip text here
          // return '<b>' + this.x + ' Percentile</b> <br> Your score: <b>' + this.y + '</b>';
          return "<b>" + this.x + " Percentile</b> <br> Your score<b>";
        },
        backgroundColor: "#1E272E",
        style: {
          color: "white", // Set the font color here
        },
      },

      series: [
        {
          name: "",
          data: [
            43934, 48656, 70165, 120827, 80143, 142383, 171533, 165174, 155157,
            161454, 123100,
          ],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  }, []);

  return (
    <div>
      <figure className="highcharts-figure">
        <div id="container"></div>
      </figure>
    </div>
  );
};

export default ComparisonGraph;
