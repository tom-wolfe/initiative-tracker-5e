import { Action } from '@ngrx/store';

export class ToggleSidebar implements Action {
    public static readonly TYPE = '[UI] Toggle Sidebar';
    readonly type = ToggleSidebar.TYPE;
    constructor() { }
}

export type UIAction = ToggleSidebar;
