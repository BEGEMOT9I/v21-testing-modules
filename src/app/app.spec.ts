import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import type { AlarmType } from "../alarm/alarm.types"; // <- comment out to pass the case

@Component({
  selector: 'test-component',
  template: 'TestComponent',
})
class TestComponent {}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();
  });

  it('should render test component', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('TestComponent');
  });
});
