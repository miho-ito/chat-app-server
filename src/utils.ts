import { format } from "path";

/**
 * * ⽇付フォーマット処理
 */
export const formatDate = (
  format: string = "yyyy/MM/dd",
  date: Date = new Date()
): string => {
  format = format.replace(/yyyy/g, date.getFullYear().toString());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getMilliseconds()).slice(-2));
  return format;
};
