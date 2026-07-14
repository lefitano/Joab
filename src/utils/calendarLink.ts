import { eventConfig } from "../config/eventConfig";

function toGoogleDateFormat(iso: string) {
  return iso.replace(/[-:]/g, "").split(".")[0];
}

export function buildGoogleCalendarUrl() {
  const start = new Date(eventConfig.isoDateTime);
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000); // festa com duração estimada de 3h

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Aniversário do ${eventConfig.name}`,
    dates: `${toGoogleDateFormat(start.toISOString())}/${toGoogleDateFormat(end.toISOString())}`,
    details: eventConfig.tagline,
    location: eventConfig.location.address,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
