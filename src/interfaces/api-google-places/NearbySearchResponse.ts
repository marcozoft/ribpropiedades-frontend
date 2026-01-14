export interface NearbySearchResponse {
    places: Place[];
}

export interface Place {
    name:                   string;
    types:                  string[];
    formattedAddress:       string;
    location:               Location;
    googleMapsUri:          string;
    websiteUri?:            string;
    businessStatus:         BusinessStatus;
    displayName:            DisplayName;
    primaryTypeDisplayName: DisplayName;
}

export enum BusinessStatus {
    Operational = "OPERATIONAL",
}

export interface DisplayName {
    text:         string;
    languageCode: LanguageCode;
}

export enum LanguageCode {
    En = "en",
    Es = "es",
}

export interface Location {
    latitude:  number;
    longitude: number;
}
