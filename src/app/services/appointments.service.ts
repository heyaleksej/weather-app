import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAppointment } from 'src/types/appointment.interface';
@Injectable({providedIn: 'root'})

export class AppointmentService {
  appointments$ = new BehaviorSubject<IAppointment[]>([
    { id: 0, date: new Date(Date.now()), title: 'F2F Alexey' },
    { id: 1, date: new Date(Date.now()), title: 'offer Alexey' },
  ]);

  addAppointment(appointment: IAppointment): void {
    this.appointments$.next([...this.appointments$.getValue(), appointment]);
  }

  deleteAppointment(id: number): void {
    this.appointments$.next(
      this.appointments$
        .getValue()
        .filter((appointment) => appointment.id !== id)
    );
  }

  updateAppointment(appointment: IAppointment): void {
    const newAppoinments = this.appointments$.getValue().map((item) => {
      if (item.id === appointment.id) return appointment;
      return item;
    });

    this.appointments$.next(newAppoinments);
  }

  getAppointments() {
    return this.appointments$.getValue();
  }
}
