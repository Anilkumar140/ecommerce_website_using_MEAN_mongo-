import { Component } from '@angular/core';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Cart } from 'src/app/models/Cart';
import { books } from 'src/app/models/books';
import { AppSelectors } from 'src/app/store/selectors/app.selectors';
import { AppStateModel } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
  @SelectSnapshot(AppSelectors.getAppState) appstate!: AppStateModel;
  @SelectSnapshot(AppSelectors.getCatItems) cartItems!: Cart[];
  @SelectSnapshot(AppSelectors.getAppState) books!: books[];


  deleteCustomer(id:any){

  }
}
