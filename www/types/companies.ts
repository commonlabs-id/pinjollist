export interface PlatformsData {
  company_name: string;
  platform_name: string;
  registered_at: FirebaseDateTime;
  registration: string;
  registration_type: string;
  website: string[];
  alamat?: string;
  badan_hukum?: string;
  is_syariah?: boolean;
}

export interface FirebaseDateTime {
  seconds: number;
  nanoseconds: number;
}
