// Edite os dados do aniversário aqui. Tudo no site puxa destas constantes.

export const eventConfig = {
  name: "Joab",
  tagline: "Vem comemorar esse dia especial comigo!",

  // Formato ISO usado pelo countdown e pelo link de calendário.
  // Ajuste o ano se necessário.
  isoDateTime: "2026-08-08T19:00:00",

  dateDisplay: "08 de Agosto",
  weekdayDisplay: "Sábado",
  timeDisplay: "19:00",

  location: {
    name: "Local a definir",
    address: "Rua Exemplo, 123 - Bairro, Cidade - UF",
    mapsUrl: "https://maps.google.com/?q=Rua+Exemplo+123",
  },

  // Usado futuramente pela seção de confirmação de presença (RSVP).
  whatsappNumber: "", // ex: "5511999999999"
};

export type EventConfig = typeof eventConfig;
