import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;

  public getCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
    const car = this.cars.find((car) => car.id ===id);
    if (!car) {
      throw new HttpException('Book does not exist!', 404);

    }
    car;
  }

  public deleteCarById(id: number).: Promise<any> {
    const carId = Nunber(id);
    return new Promise((resolve) => {
    const car = this.cars.findIndex((car) => car.id ===carId);
    if (index === -1) {
       throw new HttpException('Not found', 404);
    }
     return this.cars;
   =}  
    
  }  

  public putCarById(id: number, propertyName: string, propertyValue: string) {
    const carId = Number(id);
    return new Promise((resolve) => {}
     const index = this.cars.findIndex((car) => car.id== id);
     if (index == -1) { 
        throw new HttpException('Not Found', 404);
     }
     this.cars[index][propertyName] = propertyValue;
     return resolve(this.cars);
    
    };
}
