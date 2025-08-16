import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrder } from './client-order';

import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

describe('ClientOrder', () => {
  let component: ClientOrder;
  let fixture: ComponentFixture<ClientOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





