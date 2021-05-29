import { ExperienceRule } from "../components/ui/Lists/RulesList";
export interface ExperiencesPageProps {
  items: Experience[];
}
export interface ExperiencePageProps {
  auth: string;
  experience: Experience;
  expId: string;
}

interface Experience {
  fields: ExperienceFields;
  sys: SysField;
}

interface SysField {
  id: string;
}
export interface ExperienceFields {
  amenities?: string[];
  body?: string;
  cabins?: number;
  description?: string;
  heads?: number;
  location?: { lon: number; lat: number };
  media?: unknown;
  name: string;
  passengers?: number;
  place?: string;
  rate: number;
  rules?: ExperienceRule[];
  smoking?: boolean;
  type?: string;
  spaces?: string[];
}

// type Experience = {
//   ["fields.amenities"]: string[];
//   ["fields.body"]: string;
//   ["fields.cabins"]: number;
//   ["fields.description"]: string;
//   ["fields.heads"]: number;
//   ["fields.location"]: { long: number; lat: number };
//   ["fields.media"]: unknown;
//   ["fields.name"]: string;
//   ["fields.passengers"]: number;
//   ["fields.place"]: string;
//   ["fields.rate"]: number;
//   ["fields.rules"]: unknown;
//   ["fields.smoking"]: boolean;
//   ["fields.type"]: string;
// };
