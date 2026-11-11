export type NewsletterResult = { ok: true } | { ok: false; reason: "not-configured" | "error" };

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

/**
 * Point d'intégration futur : remplace le corps par un appel à ton API
 * (Route Handler, Mailchimp, Brevo...). Tant que rien n'est configuré,
 * on ne prétend PAS avoir enregistré l'adresse.
 */
export async function submitNewsletter(email: string): Promise<NewsletterResult> {
  void email;
  return { ok: false, reason: "not-configured" };
}
