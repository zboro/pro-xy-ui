import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: "diff-dialog",
    styles: ["pre{max-height:800px;}"],
    templateUrl: "diff-dialog.component.html"
})
export class DiffDialog {
    constructor(public dialogRef: MdDialogRef<DiffDialog>) { }

    diff: any


}
