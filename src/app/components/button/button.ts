import { Component, input, output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  clickOutput = output();

  emitterFn(){
    this.clickOutput.emit()
  }

  buttonText = input()
}
