/**
 * One photo per service, shared by its card on the services page and the
 * intro of its detail page: the "Usluge Extended" design pairs them, so a
 * service shows the same photo in both places.
 */
import type { ImageMetadata } from "astro";
import type { ServiceDetailSlug } from "../i18n/types";
import implantologija from "../assets/services/implantologija.jpg";
import ortodoncija from "../assets/services/ortodoncija.jpg";
import protetika from "../assets/services/protetika.jpg";
import estetskaDentalnaMedicina from "../assets/services/estetska-dentalna-medicina.jpg";
import endodoncija from "../assets/services/endodoncija.jpg";
import parodontologija from "../assets/services/parodontologija.jpg";
import oralnaKirurgija from "../assets/services/oralna-kirurgija.jpg";
import rtgDijagnostika from "../assets/services/rtg-dijagnostika.jpg";
import djecjaDentalnaMedicina from "../assets/services/djecja-dentalna-medicina.jpg";

export const serviceImages: Record<ServiceDetailSlug, ImageMetadata> = {
  implantologija,
  ortodoncija,
  protetika,
  "estetska-dentalna-medicina": estetskaDentalnaMedicina,
  endodoncija,
  parodontologija,
  "oralna-kirurgija": oralnaKirurgija,
  "rtg-dijagnostika": rtgDijagnostika,
  "djecja-dentalna-medicina": djecjaDentalnaMedicina,
};
