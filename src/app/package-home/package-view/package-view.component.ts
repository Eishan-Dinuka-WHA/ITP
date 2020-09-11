import { Component, OnInit, OnDestroy } from '@angular/core';
import { Packages } from 'models/package.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PackageService } from 'service/package-management.service';

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

  onDelete(cid: string){
    this.packageService.deletePackage(cid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}

