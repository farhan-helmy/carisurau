export type SurauTableColumn = {
  id: string;
  name: string;
  unique_name: string;
  is_approved: boolean;
  is_approved_at: Date | null;
  created_at: Date;
  state: string;
  district: string;
};
