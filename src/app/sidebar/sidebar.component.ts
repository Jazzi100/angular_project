import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls:['sidebar.component.css']
})
export class SidebarComponent {
    @Output() menuClick = new EventEmitter<void>();

    onMenuClick() {
        this.menuClick.emit();
    }
}