import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimerFG } from '../.';

const App = () => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <TimerFG
          className=""
          startDate={new Date('2024-12-12T00:00:00.000Z')}
          endDate={new Date('2025-12-20T00:00:00.000Z')}
          onComplete={() => alert('The event is over!')}
          messages={{
            beforeStart: '',
            duringEvent: 'Enjoy the live event!',
            afterEnd: 'Unfortunately, the event has ended.',
          }}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
