import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Map } from 'mapbox-gl';
import { Marker } from 'mapbox-gl';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  @ViewChild(Map) map!: Map;
    zoom = 8;
  city:string= "Hyderabad"
  latitude: number = 17.385;
  longitude: number = 78.4867;
  displayDialog:boolean = false
  infoForm !:FormGroup
constructor (private fb:FormBuilder) {
  this.infoForm = this.fb.group({
    city: new FormControl(),
    lat: new FormControl(),
    lng: new FormControl()
    })
}
  ngOnInit(): void {

  }

  public showDialoug():void {
    this.displayDialog = true
  }

  public submitValues(){
    console.log(this.infoForm);
    this.city = this.infoForm.get('city')?.value;
    this.latitude = this.infoForm.get('lat')?.value;
    this.longitude = this.infoForm.get('lng')?.value;
    this.infoForm.reset()
    this.displayDialog = false
    const marker = new Marker()
    .setLngLat([this.longitude, this.latitude])
    // .setPopup(new mapboxgl.Popup().setHTML(`<h1>${this.city}</h1>`))
    .addTo(this.map);

  this.map.setCenter([this.longitude, this.latitude]);
  this.map.setZoom(12);

  }


}
