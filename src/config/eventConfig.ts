// Edite os dados do aniversário aqui. Tudo no site puxa destas constantes.

export const eventConfig = {
  name: "Joab",
  tagline: "Vem comemorar esse dia especial comigo!",

  // Formato ISO usado pelo countdown e pelo link de calendário.
  // Ajuste o ano se necessário.
  isoDateTime: "2026-08-08T19:30:00",

  dateDisplay: "08 de Agosto",
  weekdayDisplay: "Sábado",
  timeDisplay: "19:30",

  location: {
    address: "Rua Gerôncio Brigido Neto, 355 - Imaculada Conceição, Canindé - CE"
  },

  // Número que recebe as confirmações de presença via WhatsApp.
  // Formato: DDD + número, sem o "55" do Brasil (adicionado automaticamente).
  whatsappNumber: "85996258615",
};

// Gera o link do Google Maps automaticamente a partir do endereço acima —
// não precisa editar isso separadamente, só o campo "address".
export function getMapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

// Versão curta do endereço (rua + número), usada onde o espaço é apertado
// (ex: tela única do mobile). Pega o trecho antes do primeiro " - ".
export function getShortLocation(address: string) {
  return address.split(" - ")[0].trim();
}

// Monta o link do WhatsApp com a mensagem de confirmação já preenchida.
export function getWhatsAppRsvpUrl(message: string) {
  const digits = eventConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/55${digits}?text=${encodeURIComponent(message)}`;
}

export type EventConfig = typeof eventConfig;
