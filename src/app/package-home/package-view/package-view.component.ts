import { Component, OnInit, OnDestroy } from '@angular/core';
import { Packages } from 'models/package.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PackageService } from 'service/package-management.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.css']
})
export class PackageViewComponent implements OnInit, OnDestroy {
  packages: Packages[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private packageService: PackageService) { }

  ngOnInit(){
    this.isLoading = true;
    this.packages = this.packageService.getPackage();
    this.subscription = this.packageService.packageChanged.subscribe(
      (packages: Packages[]) => {
        this.packages = packages;
        this.isLoading = false;
      }
    );
    console.log(this.packages);
  }

  onDelete(pid: string){
    this.packageService.deletePackage(pid);
    window.location.reload();
  }

  downloadPDF(){
    var element = document.getElementById('table2');

    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jspdf.jsPDF;
      var imgHeight = canvas.height * 210 / canvas.width;
      doc.text('Package Registry Report', 15, 15);
      doc.addImage(imgData, 0, 20, 210, imgHeight);
      doc.save("report.pdf");
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}

