# TimerFG

The `TimerFG` is a simple and customizable countdown timer for showing messages before, during, and after an event. It's designed for React and can be easily integrated into any project to display dynamic event statuses.

## Installation

To install the `TimerFG` component, you can use npm or yarn.

### npm:

```bash
npm install timerfg
```

### yarn:

```bash
yarn add timerfg
```

## Usage

### Import the Component

To use the `TimerFG` component in your React application, import it as follows:

```tsx
import { TimerFG } from 'timerfg';
```

### Example Usage

Here's an example of how to use the `TimerFG` component in your JSX:

```tsx
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
```

### Props

The `TimerFG` component accepts the following props:

| Prop Name    | Type       | Description                                                                    | Default Value                                                                                                                         |
| ------------ | ---------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `className`  | `string`   | Additional CSS classes for custom styling.                                     | `''` (Empty string)                                                                                                                   |
| `startDate`  | `Date`     | The date and time when the event starts.                                       | Required                                                                                                                              |
| `endDate`    | `Date`     | The date and time when the event ends.                                         | Required                                                                                                                              |
| `onComplete` | `function` | Callback function that will be triggered when the event has ended.             | `undefined`                                                                                                                           |
| `messages`   | `object`   | An object containing the messages to display at different stages of the event. | `{ beforeStart: 'The event is coming soon!', duringEvent: 'Enjoy the live event!', afterEnd: 'Unfortunately, the event has ended.' }` |

### Message Properties

The `messages` prop is an object with the following keys:

| Key           | Type     | Description                                | Default Value                           |
| ------------- | -------- | ------------------------------------------ | --------------------------------------- |
| `beforeStart` | `string` | Message displayed before the event starts. | `'The event is coming soon!'`           |
| `duringEvent` | `string` | Message displayed while the event is live. | `'Enjoy the live event!'`               |
| `afterEnd`    | `string` | Message displayed after the event ends.    | `'Unfortunately, the event has ended.'` |

### Example with Custom Messages

```tsx
<TimerFG
  className="custom-class"
  startDate={new Date('2024-12-12T00:00:00.000Z')}
  endDate={new Date('2025-12-20T00:00:00.000Z')}
  onComplete={() => alert('The event has ended!')}
  messages={{
    beforeStart: 'Hurry up, the event is about to start!',
    duringEvent: 'The event is happening right now, join us!',
    afterEnd: 'Sorry, the event has already finished.',
  }}
/>
```

### Styling

You can customize the appearance of the `TimerFG` component by adding your own CSS. The component has default classes for different elements, which you can override with your styles.

```css
.custom-class .timerText {
  color: red;
}

.custom-class .timerContainer {
  background-color: lightblue;
}
```

### Behavior

- **Before the event starts**: The component will show the `beforeStart` message.
- **During the event**: The component will display the `duringEvent` message.
- **After the event ends**: Once the current date is beyond the `endDate`, the `afterEnd` message is shown, and the `onComplete` callback is triggered.

### Example with Dynamic Date Logic

You can adjust the `startDate` and `endDate` to reflect the real-time status of your event. This way, the component will automatically update the message depending on whether the event is upcoming, ongoing, or finished.

```tsx
<TimerFG
  className="event-timer"
  startDate={new Date('2024-12-12T00:00:00.000Z')}
  endDate={new Date('2025-12-20T00:00:00.000Z')}
  onComplete={() => alert('The event is finished!')}
  messages={{
    beforeStart: 'The event will start soon.',
    duringEvent: 'It’s happening now, don’t miss out!',
    afterEnd: 'Sorry, the event has already concluded.',
  }}
/>
```

## License

This package is open source and available under the [MIT License](LICENSE).
