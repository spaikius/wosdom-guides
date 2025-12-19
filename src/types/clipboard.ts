export type Clip = {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
  color?: string | null;
};

export type ClipFormValues = {
  title: string;
  content: string;
  color?: string | null;
};
