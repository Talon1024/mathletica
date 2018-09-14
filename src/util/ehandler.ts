import * as React from 'react';

export type ReactEvent = React.SyntheticEvent<HTMLElement>;
export type EventHandler = (e:ReactEvent) => void;
