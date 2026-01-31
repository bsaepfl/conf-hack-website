export type DayProps = {
  label: string;
  date: string;
  description: string;
};

export type ToggleButtonProps = {
  onClick_: React.MouseEventHandler<HTMLButtonElement>;
  index: number;
  item: DayProps;
  daySelected: DayProps;
};

export type ScheduleEventType = {
  name: string;
  icon: string;
  description: string;
  time: string;
  duration: number;
  value: string;
  date: Date;
};

export type SetDate = { (date: string, hours: number, minutes: number): Date };

export type CurrentEvent = {
  date: string;
  hour: number;
  minutes: number;
};

export type EventCardProps = {
  title: string;
  date?: React.JSX.Element;
  description?: string;
  footer?: React.JSX.Element;
  color?: string;
};

export type DiscoverButtonProps = {
  ping: boolean;
  href?: string;
  link?: string;
  title: string;
};

export type FaqType = {
  question: string;
  answer: string;
};

export type StartupType = {
  img: HTMLImageElement;
  title: string;
  description: string;
  link: string;
};
