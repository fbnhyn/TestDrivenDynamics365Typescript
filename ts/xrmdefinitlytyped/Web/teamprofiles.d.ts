interface TeamProfiles_Base extends WebEntity {
  fieldsecurityprofileid?: string | null;
  teamid?: string | null;
  teamprofileid?: string | null;
  versionnumber?: number | null;
}
interface TeamProfiles_Relationships {
  teamprofiles_association?: FieldSecurityProfile_Result[] | null;
}
interface TeamProfiles extends TeamProfiles_Base, TeamProfiles_Relationships {
}
interface TeamProfiles_Create extends TeamProfiles {
}
interface TeamProfiles_Update extends TeamProfiles {
}
interface TeamProfiles_Select {
  fieldsecurityprofileid: WebAttribute<TeamProfiles_Select, { fieldsecurityprofileid: string | null }, {  }>;
  teamid: WebAttribute<TeamProfiles_Select, { teamid: string | null }, {  }>;
  teamprofileid: WebAttribute<TeamProfiles_Select, { teamprofileid: string | null }, {  }>;
  versionnumber: WebAttribute<TeamProfiles_Select, { versionnumber: number | null }, {  }>;
}
interface TeamProfiles_Filter {
  fieldsecurityprofileid: XQW.Guid;
  teamid: XQW.Guid;
  teamprofileid: XQW.Guid;
  versionnumber: number;
}
interface TeamProfiles_Expand {
  teamprofiles_association: WebExpand<TeamProfiles_Expand, FieldSecurityProfile_Select, FieldSecurityProfile_Filter, { teamprofiles_association: FieldSecurityProfile_Result[] }>;
}
interface TeamProfiles_FormattedResult {
}
interface TeamProfiles_Result extends TeamProfiles_Base, TeamProfiles_Relationships {
  "@odata.etag": string;
}
interface TeamProfiles_RelatedOne {
}
interface TeamProfiles_RelatedMany {
  teamprofiles_association: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teamprofilescollection: WebMappingRetrieve<TeamProfiles_Select,TeamProfiles_Expand,TeamProfiles_Filter,TeamProfiles_Fixed,TeamProfiles_Result,TeamProfiles_FormattedResult>;
}
interface WebEntitiesRelated {
  teamprofilescollection: WebMappingRelated<TeamProfiles_RelatedOne,TeamProfiles_RelatedMany>;
}
interface WebEntitiesCUDA {
  teamprofilescollection: WebMappingCUDA<TeamProfiles_Create,TeamProfiles_Update,TeamProfiles_Select>;
}
