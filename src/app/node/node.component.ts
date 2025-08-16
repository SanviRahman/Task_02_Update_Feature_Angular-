import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  @Input() node: any;          // node data
  @Input() level: number = 0;  // nested level

  editMode: boolean = false;   // edit popup
  showMode: boolean = false;   // show popup
  editedNode: any = {};        // temporary store for editing

  // indentation for display
  getIndent(): string {
    return '  '.repeat(this.level);
  }

  // Show popup
  showNode() {
    this.showMode = true;
  }

  closeShow() {
    this.showMode = false;
  }

  // Edit popup
  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editedNode = { ...this.node };  // copy current data
    }
  }

  saveEdit() {
    this.node.id = Number(this.editedNode.id);
    this.node.name = this.editedNode.name;
    this.node.parent = Number(this.editedNode.parent);
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }
}
