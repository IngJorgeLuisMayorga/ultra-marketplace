import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { DefaultMarketPlace, IMarketplace } from './marketplace.model';

@State<IMarketplace>({
  name: 'marketplace',
  defaults: DefaultMarketPlace
})
@Injectable()
export class MarketplaceState {

  @Selector()
    static getBalance(state: IMarketplace) {
        return state.userStore.balance;
    }

}
