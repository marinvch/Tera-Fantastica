import { Component } from '@angular/core';
import * as OpenSeadragon from 'OpenSeadragon';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})


export class NewspaperComponent {

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

    const element = document.querySelectorAll('mat-toolbar')[1] as unknown as HTMLElement;
    element.style.display = 'none';

    const searchBtn = document.getElementById('search');
    searchBtn.style.display = 'none';

    const removeImg = document.getElementById('imgContainer');
    removeImg.style.display = 'none';

    const sourceFiles = [
      'assets/newspaper/tfnpp1/dzc_output.xml',
      'assets/newspaper/tfnpp2/dzc_output.xml',
      'assets/newspaper/tfnpp3/dzc_output.xml',
      'assets/newspaper/tfnpp4/dzc_output.xml',
      'assets/newspaper/tfnpp5/dzc_output.xml',

      'assets/newspaper/tfnpp7/dzc_output.xml',
      'assets/newspaper/tfnpp8/dzc_output.xml',
    ];


    const viewer = OpenSeadragon({
      id: 'seadragon-viewer',
      prefixUrl: 'assets/images/',
      tileSources: sourceFiles,
      sequenceMode: true,
      visibilityRatio: 1.0,
      constrainDuringPan: true,
    });
  }
}
