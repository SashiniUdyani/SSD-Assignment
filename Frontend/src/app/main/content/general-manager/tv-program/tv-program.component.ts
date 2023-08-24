import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-tv-program',
  templateUrl: './tv-program.component.html',
  styleUrls: ['./tv-program.component.css']
})
export class TvProgramComponent implements OnInit {

  @ViewChild('tvProgramForm', {static: true}) public tvProgramForm: NgForm;
  tvProgram = {
    programID: '',
    programName: '',
    startingDate: '',
    endingDate: '',
    transportCost: 0,
    producer: '',

  };

  tvPrograms;
  program;
  btnText = 'Add';

  tblIndex;

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  constructor(private generalManagerService: GeneralManagerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService
  ) {
    this.program = this.getNewProgram();
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSubmit() {
    this.alertBox.alert = true;
    if (this.btnText === 'Add') {
      this.alertBox.msg = 'Do you want to add tv program?';
    } else if (this.btnText === 'Update') {
      this.alertBox.msg = 'Do you want to update tv program?';
    }
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        if (this.btnText === 'Add') {
          this.generalManagerService.addTVProgram(this.tvProgram).subscribe((tvProgram) => {
            this.notifierService.notify("success", "TV program added successfully");
            this.tvPrograms.push(tvProgram)
            this.setNewForm();
          }, (err) => {
            this.notifierService.notify("error", "Adding failed");
          })
          // this.tvProgram.push(this.tvProgram);
        } else if (this.btnText === 'Update') {
          this.generalManagerService.updateTVProgram(this.tvProgram).subscribe((tvProgram) => {
            this.notifierService.notify("success", "TV program is updated successfully");
            this.tvPrograms[this.tblIndex] = tvProgram
            // this.getAll();
            this.setNewForm();
          })
        }
        this.setNewProgram();
      }
      this.alertBox.alert = false;
    })

  }

  getAll() {
    this.generalManagerService.getTvProgram().subscribe((tvProgram) => {
      this.tvPrograms = tvProgram;
     // console.log(this.tvPrograms);
    })

  }

  removeProgram(tvProgram, i) {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove tv program?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        // this.y = tvProgram.programID;
        this.generalManagerService.deleteTVProgram(tvProgram.programID).subscribe((reply) => {
          if (reply) {
            this.notifierService.notify("success", "TV program is removed successfully");
            this.router.navigate(['/main/tv_program'])
            // console.log(this.y);
            this.getAll();
          }
        })
      }
      this.alertBox.alert = false;
    })
  }


  // onSubmitItem() {
  //   if (this.btnText === 'Add') {
  //     this.deliveryDetail.deliveryItemDetails.push(this.item);
  //   } else if (this.btnText === 'Update') {
  //     this.deliveryDetail.deliveryItemDetails[this.tblIndex] = this.item
  //   }
  //   this.setNewItem();
  // }

  setProgram(program, i) {
    this.tblIndex = i;
    this.tvProgram.programID = program.programID;
    this.tvProgram.programName = program.programName;
    this.tvProgram.producer = program.producer;
    this.tvProgram.endingDate = program.endingDate;
    this.tvProgram.startingDate = program.startingDate;
    this.tvProgram.transportCost = program.transportCost;
    this.btnText = 'Update';
  }

  setNewProgram() {
    this.program = this.getNewProgram();
    this.tvProgramForm.resetForm(this.program);
    this.btnText = 'Add';
  }

  getNewProgram() {
    return {
      programID: '',
      programName: '',
      startingDate: '',
      endingDate: '',
      transportCost: 0,
      producer: ''
    };
  }

  setNewForm() {
    this.tvProgramForm.resetForm();
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }

  demoForm() {
    this.tvProgram.programName = 'Program 9';
    this.tvProgram.startingDate = '2021-03-04';
    this.tvProgram.endingDate = '2021-09-08';
    this.tvProgram.transportCost = 1200;
    this.tvProgram.producer = 'Thulya';

  }
}
