export interface ServiceModel {
  id: number;
  service: string;
  status: "up" | "down" | "error";
}
