import { Component, OnInit } from '@angular/core';
import { Inventory } from 'models/inventory.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InventoryService } from 'service/inventory.service';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements OnInit {
  inventories: Inventory[] = [];
  private subscription: Subscription;
  isLoading = false;

  constructor(private router: Router, private inventoryService: InventoryService) { }

  ngOnInit(){
    this.isLoading = true;
    this.inventories = this.inventoryService.getInventory();
    this.subscription = this.inventoryService.inventoryChanged.subscribe(
      (inventories: Inventory[]) => {
        this.inventories = inventories;
        this.isLoading = false;
      }
    );
    console.log(this.inventories);


  }

  onDelete(iid: string){
    this.inventoryService.deleteInventory(iid);
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}

