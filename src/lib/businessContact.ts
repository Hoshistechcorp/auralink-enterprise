/* ── Business Contact Info (shared between dashboard & microsite) ── */

const STORAGE_KEY = "auralink_business_contact";

export interface BusinessContact {
  phone: string;
  smsNumber: string;
  address: string;
  mapsUrl: string;
  website: string;
  email: string;
}

const defaults: BusinessContact = {
  phone: "(212) 555-0198",
  smsNumber: "(212) 555-0198",
  address: "123 Grand Ave, New York, NY 10001",
  mapsUrl: "",
  website: "www.bellavistanyc.com",
  email: "info@bellavista.com",
};

export const getBusinessContact = (): BusinessContact => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaults };
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return { ...defaults };
  }
};

export const saveBusinessContact = (contact: BusinessContact) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contact));
};
