import React from 'react';
import styles from '../styles/styles.module.css';
import { useCountdown } from '../hooks/useCountdown';

interface TimerFGProps {
  className?: string;
  startDate: Date;
  endDate: Date;
  style?: React.CSSProperties;
  onComplete?: () => void;
  messages?: {
    beforeStart?: string;
    afterEnd?: string;
    duringEvent?: string;
  };
}

export const TimerFG = ({
  className = '',
  startDate,
  endDate,
  onComplete,
  messages = {
    beforeStart: '¡Falta poco para el evento!',
    afterEnd: 'El evento ya terminó',
    duringEvent: 'El evento está en curso',
  },
  style,
}: TimerFGProps) => {
  const timeLeft = useCountdown(startDate, endDate);
  const now = new Date();

  if (now.getTime() > endDate.getTime()) {
    if (onComplete) onComplete();
  }

  return (
    <div className={className} style={style}>
      {now.getTime() < startDate.getTime() ? (
        <>
          <p className={styles.timerText}>{messages.beforeStart}</p>
          <div
            className={`${styles.timerContainer} ${styles.timerContainerSm}`}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className={styles.timerCard}>
                <span className={styles.timerValue}>{value}</span>
                <p
                  className={styles.timerLabel}
                  data-tooltip={`Tiempo restante en ${unit}`}
                >
                  {unit}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : now.getTime() > endDate.getTime() ? (
        <p className={styles.timerText}>{messages.afterEnd}</p>
      ) : (
        <p className={styles.timerText}>{messages.duringEvent}</p>
      )}
    </div>
  );
};
