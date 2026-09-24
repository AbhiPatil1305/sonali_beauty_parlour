import { contactConfig } from '../config/contact';

export const createWhatsAppLink = (message: string) => {
  if (!contactConfig.whatsapp) return '#';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contactConfig.whatsapp}?text=${encodedMessage}`;
};
