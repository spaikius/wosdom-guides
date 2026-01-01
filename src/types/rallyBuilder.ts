export type RallyRow = {
  id: string;
  offsetSec: number;
  adjustSec: number;
  players: string[];
};

export type RallyBuilderState = {
  title: string;
  launchOffsetSeconds: 0 | 10 | 20 | 30 | 40 | 50;
  rows: RallyRow[];
};
