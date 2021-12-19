interface SystemUserLicenses_Base extends WebEntity {
  licenseid?: string | null;
  systemuserid?: string | null;
  systemuserlicenseid?: string | null;
  versionnumber?: number | null;
}
interface SystemUserLicenses_Relationships {
}
interface SystemUserLicenses extends SystemUserLicenses_Base, SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_Create extends SystemUserLicenses {
}
interface SystemUserLicenses_Update extends SystemUserLicenses {
}
interface SystemUserLicenses_Select {
  licenseid: WebAttribute<SystemUserLicenses_Select, { licenseid: string | null }, {  }>;
  systemuserid: WebAttribute<SystemUserLicenses_Select, { systemuserid: string | null }, {  }>;
  systemuserlicenseid: WebAttribute<SystemUserLicenses_Select, { systemuserlicenseid: string | null }, {  }>;
  versionnumber: WebAttribute<SystemUserLicenses_Select, { versionnumber: number | null }, {  }>;
}
interface SystemUserLicenses_Filter {
  licenseid: XQW.Guid;
  systemuserid: XQW.Guid;
  systemuserlicenseid: XQW.Guid;
  versionnumber: number;
}
interface SystemUserLicenses_Expand {
}
interface SystemUserLicenses_FormattedResult {
}
interface SystemUserLicenses_Result extends SystemUserLicenses_Base, SystemUserLicenses_Relationships {
  "@odata.etag": string;
}
interface SystemUserLicenses_RelatedOne {
}
interface SystemUserLicenses_RelatedMany {
}
interface WebEntitiesRetrieve {
  systemuserlicensescollection: WebMappingRetrieve<SystemUserLicenses_Select,SystemUserLicenses_Expand,SystemUserLicenses_Filter,SystemUserLicenses_Fixed,SystemUserLicenses_Result,SystemUserLicenses_FormattedResult>;
}
interface WebEntitiesRelated {
  systemuserlicensescollection: WebMappingRelated<SystemUserLicenses_RelatedOne,SystemUserLicenses_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemuserlicensescollection: WebMappingCUDA<SystemUserLicenses_Create,SystemUserLicenses_Update,SystemUserLicenses_Select>;
}
