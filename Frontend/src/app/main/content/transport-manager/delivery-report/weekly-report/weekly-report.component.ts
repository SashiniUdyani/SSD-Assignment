import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css']
})
export class WeeklyReportComponent implements OnInit {

  chartOptionsP;
  weekValue = 1;
  datesRange = ''

  deliveryItemDetails = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weeklyDeliveries = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

  constructor(private router: Router, private transportManagerService: TransportManagerService, private datePipe: DatePipe) {
    this.fillChart();
  }

  ngOnInit(): void {
    this.fillChart();
    this.getDatesRange()
  }

  getDeliveriesReportWeekly(weeks) {
    this.weekValue = weeks;
    this.getDatesRange();
    // this.transportManagerService.reportYear = year.value;
    // this.transportManagerService.reportMonth = month.value;
    this.transportManagerService.getDeliveriesReportWeekly(weeks).subscribe((report) => {
      // console.log(this.weeklyDeliveries)
      this.weeklyDeliveries = report.weeklyDeliveries;
      // console.log(this.weeklyDeliveries)
      this.refillChart(this.chartOptionsP);
    })
  }

  goToDailyReport() {
    this.transportManagerService.reportWeek = this.weekValue;
    this.router.navigate(['/main/delivery_report/daily_report'])
  }

  refillChart(chartOptions) {
    chartOptions.series = [
      {
        data: [this.weeklyDeliveries[0][0], this.weeklyDeliveries[1][0], this.weeklyDeliveries[2][0]]
      },
      {
        data: [this.weeklyDeliveries[0][1], this.weeklyDeliveries[1][1], this.weeklyDeliveries[2][1]]
      },
      {
        data: [this.weeklyDeliveries[0][2], this.weeklyDeliveries[1][2], this.weeklyDeliveries[2][2]]
      },
      {
        data: [this.weeklyDeliveries[0][3], this.weeklyDeliveries[1][3], this.weeklyDeliveries[2][3]]
      }
    ]
  }

  fillChart() {
    this.chartOptionsP = this.getChartOptions();
  }

  getChartOptions() {
    return {
      series: [
        {
          name: "Total",
          data: [0, 0, 0, 0],
          color: '#0c8dc0'
        },
        {
          name: "Completed",
          data: [0, 0, 0, 0],
          color: '#018002'
        },
        {
          name: "Cancelled",
          data: [0, 0, 0, 0],
          color: '#ff0a03'
        },
        {
          name: "Pending",
          data: [0, 0, 0, 0],
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
          "Passenger Deliveries",
          "Item Deliveries",
          "Passenger Item Deliveries"
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

  getDatesRange() {
    let curr = new Date; // get current date
    let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6

    let firstD = new Date(curr.setDate(first));
    let lastD = new Date(curr.setDate(last));
    firstD.setDate(firstD.getDate() - (this.weekValue * 7));
    lastD.setDate(lastD.getDate() - (this.weekValue * 7));

    let firstday = this.datePipe.transform(firstD, 'yyyy-MM-dd');
    let lastday = this.datePipe.transform(lastD, 'yyyy-MM-dd');

    this.datesRange = firstday + ' to ' + lastday;
    this.transportManagerService.reportDates = this.datesRange;
    this.transportManagerService.startDate = firstday;
  }

  sendToPdf() {
    let data = document.getElementById('pdf');  //Id of the table
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 320;
      // let pageHeight = 350;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l', 'mm', 'a4'); // A4 size page of PDF
      let position = 10;
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight)
      pdf.save('Weekly Report.pdf'); // Generated PDF
    });
  }
}
