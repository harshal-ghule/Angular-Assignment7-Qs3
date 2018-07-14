import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-car-details-form',
  templateUrl: './car-details-form.component.html',
  styleUrls: ['./car-details-form.component.css']
})
export class CarDetailsFormComponent implements OnInit {

  constructor() { }
 
  
public CarType;
public CarPrice;
public CarName;
public CarColour;
public CarNumber;


public Car = [

  {
    "Type" : "Hatchback" ,
    
    "Name" : ['Maruti Swift','Renault KWID','Maruti Baleno','Tata Tiago','Maruti Wagon R'],
    
    "Colour" : ['Silver/aluminium','Black','Blue','Yellow',
    'Red','Green','Orange','Beige/buff','Grey',
    'White'],

    "Price" :['7.6 Lakhs','10.7 Lakhs','13.7 Lakhs','17.7 Lakhs','11.7 Lakhs','60.7 Lakhs']
  },

  {
    "Type" : "Sedan", 
    
    "Name" : ['Maruti Dzire','Honda Amaze','Hyundai Verna','Honda City'],
    
    "Colour" : ['Silver/aluminium','Black','Blue','Yellow',
    'Red','Green','Orange','Beige/buff','Grey',
    'White'],

    "Price" :['4.6 Lakhs','60.7 Lakhs','73.7 Lakhs','57.7 Lakhs','21.7 Lakhs','50.7 Lakhs']
  },

  {
    "Type" : "SUV",
    
    "Name" : ['Hyundai Creta','Brezza','Scorpio','Tata Nexon'],
    
    "Colour" : ['Silver/aluminium','Black','Blue','Yellow',
    'Red','Green','Orange','Beige/buff','Grey',
    'White'],

    "Price" :['19.6 Lakhs','70.7 Lakhs','95.7 Lakhs','37.7 Lakhs','28.7 Lakhs','52.7 Lakhs']
  },

  {
    "Type" : "Crossover",
    
    "Name" : ['Maruti Suzuki Swift','Maruti Suzuki Ciaz',
    'Datsun GO+','Land Rover Discovery Sport',
      'Volvo S60 Cross Country','Mercedes-Benz GLE Coupe'],
     
    "Colour" : ['Silver/aluminium','Black','Blue','Yellow',
    'Red','Green','Orange','Beige/buff','Grey',
    'White'],

    "Price" :['1.6 Lakhs','3.7 Lakhs','73.7 Lakhs','57.7 Lakhs','26.7 Lakhs','50.7 Lakhs']
  },

  {
    "Type" : "Luxury", 
    
    "Name" : ['Maruti Swift','Brezza','Scorpio','Hyundai Verna'],
    
    "Colour" : ['Silver/aluminium','Black','Blue','Yellow',
    'Red','Green','Orange','Beige/buff','Grey',
    'White'],

    "Price" :['4.28 Lakhs','67.7 Lakhs','93.7 Lakhs','58.7 Lakhs','51.7 Lakhs','30.7 Lakhs']
  }
];

public fun(name,index)
{
  for(let i of this.Car)
  {
    for(let j of i.Name)

    if(j == name )
    {
      this.CarType = i.Type;
      this.CarName = name;
      this.CarPrice = i.Price[index];
      this.CarColour = i.Colour;
    }
   
  }

}

emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);



  ngOnInit() {
  }

}
