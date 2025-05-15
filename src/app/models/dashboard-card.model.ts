import { DashboardCardBadge } from "./dashboard-card-badge.model";

export interface DashboardCardData {
  icon: string;
  count: number;
  label: string;
  badges?: DashboardCardBadge[];
  variant?: string;
  wide?: boolean;
  small?: boolean;
}