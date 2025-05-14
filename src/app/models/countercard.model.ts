export type CardVariant = 'default' | 'yellow' | 'red' | 'purple' | 'blue' | 'turquoise';

export interface CounterCard {
  icon: string;
  count: number;
  label: string;
  badge?: number;
  variant: CardVariant;
  wide: boolean;
  small: boolean;
}
