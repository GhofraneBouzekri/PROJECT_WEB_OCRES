import React from "react";
import ReactApexChart from 'react-apexcharts';
import './chart.css';

export default class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          //Abscisse
            series: [{
              data: [81, 90, 22, 58, 72, 13, 63, 57, 7, 3, 10, 54],
              name: "Pourcentage de concentration"
            }
        ],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                },
              },
              dataLabels: {
                enabled: false
              },
              //Ordonnée
              xaxis: {
                categories: ['00h-22h', '22h-20h', '20h-18h', '18h-16h', '16h-14h', '14h-12h', '12h-10h',
                  '10h-8h', '8h-6h', '6h-4h', '4h-2h', '2h-00h'
                ],
                title:{
                  text: "HEURES DE CONCENTRATION",
                  align:"center",
                  style: {color:"#000000", fontSize :15, fontFamily:"Gill Sans"}
                }
              },
              fill:{
                colors:['#826F6F']
              },
            },
          };
        }

        render() {
          return (

          <div className="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
            </div>)}
}