import { Component, OnInit } from '@angular/core';
import { customer } from '../../../../../models/.model';
import { CustomerRegistrationService } from 'service/announcements.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  @ViewChild('ann', {static: false}) addAnnouncementForm: NgForm;
  defaultValue = "choose";
  defaultValue2 = "chooseValidity";
  announcements: Customer = {
    id: '',
    title: '',
    date: '',
    content: '',
    priority: '',
    validity: ''
  };
  submitted=false;
  //private subscription: Subscription;

  constructor(private router: Router,
              private customerRegistrationService: CustomerRegistrationService,
              private route: ActivatedRoute) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.addAnnouncementForm);
    this.submitted = true;
    this.announcements.id = null;
    this.announcements.title = this.addAnnouncementForm.value.title;
    this.announcements.date = this.addAnnouncementForm.value.dateCreated;
    this.announcements.content = this.addAnnouncementForm.value.content;
    this.announcements.priority = this.addAnnouncementForm.value.priority;
    this.announcements.validity = this.addAnnouncementForm.value.validity;

    this.addAnnouncementForm.reset();

    this.announcementService.addAnnouncement(this.announcements);

    this.router.navigate(['../view'], {relativeTo: this.route});

  }

}
