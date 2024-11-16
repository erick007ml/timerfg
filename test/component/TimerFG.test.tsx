import React from 'react';
import renderer from 'react-test-renderer';
import { TimerFG } from '../../src/components';

describe('TimerFG', () => {
  test('should display the message before the event starts', () => {
    const wrapper = renderer.create(
      <TimerFG
        className=""
        startDate={new Date('2024-12-12T00:00:00.000Z')}
        endDate={new Date('2025-12-20T00:00:00.000Z')}
        onComplete={() => alert('The event is over!')}
        messages={{
          beforeStart: 'The event is coming soon!',
          duringEvent: 'Enjoy the live event!',
          afterEnd: 'Unfortunately, the event has ended.',
        }}
      />
    );

    const tree = wrapper.toJSON();
    const children = Array.isArray(tree) ? tree : [tree];
    expect(
      children.some(node =>
        node?.children?.includes('The event is coming soon!')
      )
    ).toBe(true);
  });

  test('should display the message during the event', () => {
    const wrapper = renderer.create(
      <TimerFG
        className=""
        startDate={new Date('2024-11-15T00:00:00.000Z')}
        endDate={new Date('2025-12-20T00:00:00.000Z')}
        onComplete={() => alert('The event is over!')}
        messages={{
          beforeStart: 'The event is coming soon!',
          duringEvent: 'Enjoy the live event!',
          afterEnd: 'Unfortunately, the event has ended.',
        }}
      />
    );

    const tree = wrapper.toJSON();
    const children = Array.isArray(tree) ? tree : [tree];
    expect(
      children.some(node => node?.children?.includes('Enjoy the live event!'))
    ).toBe(true);
  });

  test('should display the message after the event has ended', () => {
    const wrapper = renderer.create(
      <TimerFG
        className=""
        startDate={new Date('2023-11-12T00:00:00.000Z')}
        endDate={new Date('2023-11-15T00:00:00.000Z')}
        onComplete={() => alert('The event is over!')}
        messages={{
          beforeStart: 'The event is coming soon!',
          duringEvent: 'Enjoy the live event!',
          afterEnd: 'Unfortunately, the event has ended.',
        }}
      />
    );

    const tree = wrapper.toJSON();
    const children = Array.isArray(tree) ? tree : [tree];
    expect(
      children.some(node =>
        node?.children?.includes('Unfortunately, the event has ended.')
      )
    ).toBe(true);
  });
});
