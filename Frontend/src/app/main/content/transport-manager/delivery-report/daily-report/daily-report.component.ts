import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {DatePipe} from "@angular/common";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  chartOptionsP;
  chartOptionsI;
  chartOptionsPI;

  reportWeek;
  startDate;

  deliveryItemDetails = [];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dates = [];
  dailyDeliveries = [
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  ]

  constructor(private transportManagerService: TransportManagerService, private datePipe: DatePipe, private router: Router) {
    this.fillChart();
  }

  ngOnInit(): void {
    this.reportWeek = this.transportManagerService.reportWeek;
    this.setDates(this.transportManagerService.startDate);
    this.transportManagerService.getDeliveriesReportDaily(this.reportWeek).subscribe((report) => {
      // console.log(this.dailyDeliveries)
      this.dailyDeliveries = report.dailyDeliveries;
      this.refillChart(this.chartOptionsP, 0)
      this.refillChart(this.chartOptionsI, 1)
      this.refillChart(this.chartOptionsPI, 2)
      // console.log(this.dailyDeliveries)
    })
    // this.fillChart();
  }

  setDates(firstDate) {
    this.dates.push(firstDate);
    for (let i = 1; i < 7; i++) {
      let cur = new Date(firstDate)
      cur.setDate(cur.getDate() + i)
      this.dates.push(this.datePipe.transform(cur, 'yyyy-MM-dd'))
    }
  }

  goToView(date, type) {
    this.transportManagerService.reportDate = date;
    if (type === 'P') {
      this.router.navigate(['/main/view_passenger_delivery'])
    } else if (type === 'I') {
      this.router.navigate(['/main/view_item_delivery'])
    } else if (type === 'PI') {
      this.router.navigate(['/main/view_passenger_item_delivery'])
    }
  }

  refillChart(chartOptions, i) {
    chartOptions.series = [
      {
        data: [this.dailyDeliveries[0][i][0], this.dailyDeliveries[1][i][0], this.dailyDeliveries[2][i][0], this.dailyDeliveries[3][i][0], this.dailyDeliveries[4][i][0], this.dailyDeliveries[5][i][0], this.dailyDeliveries[6][i][0]]
      },
      {
        data: [this.dailyDeliveries[0][i][1], this.dailyDeliveries[1][i][1], this.dailyDeliveries[2][i][1], this.dailyDeliveries[3][i][1], this.dailyDeliveries[4][i][1], this.dailyDeliveries[5][i][1], this.dailyDeliveries[6][i][1]]
      },
      {
        data: [this.dailyDeliveries[0][i][2], this.dailyDeliveries[1][i][2], this.dailyDeliveries[2][i][2], this.dailyDeliveries[3][i][2], this.dailyDeliveries[4][i][2], this.dailyDeliveries[5][i][2], this.dailyDeliveries[6][i][2]]
      },
      {
        data: [this.dailyDeliveries[0][i][3], this.dailyDeliveries[1][i][3], this.dailyDeliveries[2][i][3], this.dailyDeliveries[3][i][3], this.dailyDeliveries[4][i][3], this.dailyDeliveries[5][i][3], this.dailyDeliveries[6][i][3]]
      }
    ]
  }

  fillChart() {
    this.chartOptionsP = this.getChartOptions();
    this.chartOptionsI = this.getChartOptions();
    this.chartOptionsPI = this.getChartOptions();
  }

  getChartOptions() {
    return {
      series: [
        {
          name: "Total",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#0c8dc0'

        },
        {
          name: "Completed",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#018002'
        },
        {
          name: "Cancelled",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#ff0a03'
        },
        {
          name: "Pending",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#d29302'
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      yaxis: {
        title: {
          text: "Deliveries"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "Deliveries - " + val;
          }
        }
      }
    };
  }

  getReportDates() {
    return this.transportManagerService.reportDates;
  }

  sendToPdf() {
    let data1 = document.getElementById('pdf1');  //Id of the table
    let data2 = document.getElementById('pdf2');  //Id of the table
    let data3 = document.getElementById('pdf3');  //Id of the table
    let data4 = document.getElementById('pdf4');  //Id of the table

    html2canvas(data1).then(canvas1 => {
      // Few necessary setting options
      let imgWidth = 300;
      // let pageHeight = 350;
      let imgHeight = canvas1.height * imgWidth / canvas1.width;

      let contentDataURL = canvas1.toDataURL('image/png')
      let pdf = new jsPDF('l', 'mm', 'a4'); // A4 size page of PDF
      let position = 10;
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight);

      html2canvas(data2).then(canvas2 => {
        contentDataURL = canvas2.toDataURL('image/png')
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, 100);

        html2canvas(data3).then(canvas3 => {
          contentDataURL = canvas3.toDataURL('image/png')
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, 100);

          html2canvas(data4).then(canvas4 => {
            contentDataURL = canvas4.toDataURL('image/png')
            pdf.addPage();
            pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, 100);
            pdf.save('Daily Report.pdf'); // Generated PDF
          })
        })
      })

    });
  }
}
