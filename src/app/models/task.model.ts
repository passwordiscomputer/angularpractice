export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }

  priorityColor(){
    if (this.priority === 3){
      return "bg-danger";
    } else if (this.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
