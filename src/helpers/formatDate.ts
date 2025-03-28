export function formatDate(date: string) {
  return new Date(Date.parse(date)).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
