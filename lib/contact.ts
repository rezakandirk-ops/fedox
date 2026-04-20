// lib/contact.ts
export const contact = {
  email: "kontakt@fedox-facilityservices.de",
  phone: "0231 53035483",
  phoneTel: "+492315303548",
  mobile: "0163 8672944",
  mobileTel: "+491638672944",
  website: "https://fedox-facilityservices.de",
  whatsapp: "https://wa.me/491638672944",
  instagram: "https://instagram.com/fedox.facility",
  address: {
    street: "Güntherstraße 42d",
    zip: "44143",
    city: "Dortmund",
  },
} as const

export type Contact = typeof contact
