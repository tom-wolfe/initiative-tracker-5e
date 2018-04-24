import { UIState } from './ui.state';
import { Action } from '@ngrx/store';
import { UIAction, ToggleSidebar } from './ui.actions';

export const initialState: UIState = {
  sidebarOpen: false
};

export function uiReducer(state: UIState = initialState, action: UIAction): UIState {
  switch (action.type) {
    case (ToggleSidebar.TYPE): {
      return Object.assign({}, state, { sidebarOpen: !state.sidebarOpen });
    }
    default: {
      return state;
    }
  }
}
