interface SystemUserProfiles_Base extends WebEntity {
  fieldsecurityprofileid?: string | null;
  systemuserid?: string | null;
  systemuserprofileid?: string | null;
  versionnumber?: number | null;
}
interface SystemUserProfiles_Relationships {
  systemuserprofiles_association?: FieldSecurityProfile_Result[] | null;
}
interface SystemUserProfiles extends SystemUserProfiles_Base, SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_Create extends SystemUserProfiles {
}
interface SystemUserProfiles_Update extends SystemUserProfiles {
}
interface SystemUserProfiles_Select {
  fieldsecurityprofileid: WebAttribute<SystemUserProfiles_Select, { fieldsecurityprofileid: string | null }, {  }>;
  systemuserid: WebAttribute<SystemUserProfiles_Select, { systemuserid: string | null }, {  }>;
  systemuserprofileid: WebAttribute<SystemUserProfiles_Select, { systemuserprofileid: string | null }, {  }>;
  versionnumber: WebAttribute<SystemUserProfiles_Select, { versionnumber: number | null }, {  }>;
}
interface SystemUserProfiles_Filter {
  fieldsecurityprofileid: XQW.Guid;
  systemuserid: XQW.Guid;
  systemuserprofileid: XQW.Guid;
  versionnumber: number;
}
interface SystemUserProfiles_Expand {
  systemuserprofiles_association: WebExpand<SystemUserProfiles_Expand, FieldSecurityProfile_Select, FieldSecurityProfile_Filter, { systemuserprofiles_association: FieldSecurityProfile_Result[] }>;
}
interface SystemUserProfiles_FormattedResult {
}
interface SystemUserProfiles_Result extends SystemUserProfiles_Base, SystemUserProfiles_Relationships {
  "@odata.etag": string;
}
interface SystemUserProfiles_RelatedOne {
}
interface SystemUserProfiles_RelatedMany {
  systemuserprofiles_association: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  systemuserprofilescollection: WebMappingRetrieve<SystemUserProfiles_Select,SystemUserProfiles_Expand,SystemUserProfiles_Filter,SystemUserProfiles_Fixed,SystemUserProfiles_Result,SystemUserProfiles_FormattedResult>;
}
interface WebEntitiesRelated {
  systemuserprofilescollection: WebMappingRelated<SystemUserProfiles_RelatedOne,SystemUserProfiles_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemuserprofilescollection: WebMappingCUDA<SystemUserProfiles_Create,SystemUserProfiles_Update,SystemUserProfiles_Select>;
}
