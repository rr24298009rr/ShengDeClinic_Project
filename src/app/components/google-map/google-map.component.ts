import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() address: string = '20349基隆市中山區西定路411號';
  @Input() zoom: number = 16;
  @Input() height: string = '400px';

  mapUrl: SafeResourceUrl = '';
  
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.generateMapUrl();
  }

  private generateMapUrl(): void {
    // 使用 Google Maps Embed API (不需要 API key 的公開版本)
    const encodedAddress = encodeURIComponent(this.address);
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDummy&q=${encodedAddress}&zoom=${this.zoom}`;
    
    // 替代方案：使用 Google Maps 的嵌入式連結
    const alternativeUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=${this.zoom}`;
    
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(alternativeUrl);
  }

  // 公開方法：在 Google Maps 中開啟
  openInGoogleMaps(): void {
    window.open('https://maps.app.goo.gl/E8h7muDkzDdL1Dkk6', '_blank');
  }

  // 公開方法：取得路線規劃
  getDirections(): void {
    const destination = encodeURIComponent(this.address);
    window.open(`https://maps.google.com/maps?daddr=${destination}`, '_blank');
  }
}
