import { Component } from '@angular/core';
import { HttpClientService, party } from '../service/http-client.service';


@Component({
  selector: 'app-voterpage',
  templateUrl: './voterpage.component.html',
  styleUrls: ['./voterpage.component.scss']
})
export class VoterpageComponent {
  // count = 0;

  // incrementCount() {
  //   if (this.count < 1) {
  //     this.count++;
  //   }
  // }
  images = [
    { url: 'https://upload.wikimedia.org/wikipedia/hi/thumb/e/ec/Bharatiya_Janata_Party_logo.svg.png/800px-Bharatiya_Janata_Party_logo.svg.png', Party: "bjp" },
    { url: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/congress-party-logo-png-images--thumbnail-1665114830.jpg', Party: "knp" },
    { url: 'https://www.pngguru.in/storage/uploads/images/Aam%20aadmi%20party%20logo%20free%20png_1669800331_1480471951.webp', Party: "aap" },
    { url: 'https://allpngfree.com/thumbnail/samajwadi-party-logo-png-images-thumbnail-1647365351.jpg', Party: "spa" }
  ];

  clickedImage: string | null = null;
  clickCount = 0;

  user: party = new party("0", "0", "0", "0");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  handleImageClick(index: number): void {
    if (this.clickedImage === null) {
      this.clickedImage = this.images[index].Party;
      this.clickCount++;

      // Update the user object based on the clicked image
      if (this.clickedImage === 'bjp') {
        this.user.Bjp = "1";
      } else if (this.clickedImage === 'knp') {
        this.user.Knp = "1";
      } else if (this.clickedImage === 'aap') {
        this.user.aap = "1";
      } else if (this.clickedImage === 'spa') {
        this.user.spa = "1";
      }
     }

  }

}
