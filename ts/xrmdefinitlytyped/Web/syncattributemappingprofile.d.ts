interface SyncAttributeMappingProfile_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  syncattributemappingprofileid?: string | null;
  syncattributemappingprofileidunique?: string | null;
  versionnumber?: number | null;
}
interface SyncAttributeMappingProfile_Relationships {
  lk_syncattributemapping_syncattributemappingprofileid?: SyncAttributeMapping_Result[] | null;
  systemusersyncmappingprofiles_association?: SystemUser_Result[] | null;
  teamsyncattributemappingprofiles_association?: Team_Result[] | null;
}
interface SyncAttributeMappingProfile extends SyncAttributeMappingProfile_Base, SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_Create extends SyncAttributeMappingProfile {
}
interface SyncAttributeMappingProfile_Update extends SyncAttributeMappingProfile {
}
interface SyncAttributeMappingProfile_Select {
  componentstate: WebAttribute<SyncAttributeMappingProfile_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SyncAttributeMappingProfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SyncAttributeMappingProfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SyncAttributeMappingProfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SyncAttributeMappingProfile_Select, { description: string | null }, {  }>;
  ismanaged: WebAttribute<SyncAttributeMappingProfile_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SyncAttributeMappingProfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SyncAttributeMappingProfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SyncAttributeMappingProfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SyncAttributeMappingProfile_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SyncAttributeMappingProfile_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SyncAttributeMappingProfile_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<SyncAttributeMappingProfile_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SyncAttributeMappingProfile_Select, { supportingsolutionid: string | null }, {  }>;
  syncattributemappingprofileid: WebAttribute<SyncAttributeMappingProfile_Select, { syncattributemappingprofileid: string | null }, {  }>;
  syncattributemappingprofileidunique: WebAttribute<SyncAttributeMappingProfile_Select, { syncattributemappingprofileidunique: string | null }, {  }>;
  versionnumber: WebAttribute<SyncAttributeMappingProfile_Select, { versionnumber: number | null }, {  }>;
}
interface SyncAttributeMappingProfile_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  syncattributemappingprofileid: XQW.Guid;
  syncattributemappingprofileidunique: XQW.Guid;
  versionnumber: number;
}
interface SyncAttributeMappingProfile_Expand {
  createdby: WebExpand<SyncAttributeMappingProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SyncAttributeMappingProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  lk_syncattributemapping_syncattributemappingprofileid: WebExpand<SyncAttributeMappingProfile_Expand, SyncAttributeMapping_Select, SyncAttributeMapping_Filter, { lk_syncattributemapping_syncattributemappingprofileid: SyncAttributeMapping_Result[] }>;
  modifiedby: WebExpand<SyncAttributeMappingProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SyncAttributeMappingProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SyncAttributeMappingProfile_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  systemusersyncmappingprofiles_association: WebExpand<SyncAttributeMappingProfile_Expand, SystemUser_Select, SystemUser_Filter, { systemusersyncmappingprofiles_association: SystemUser_Result[] }>;
  teamsyncattributemappingprofiles_association: WebExpand<SyncAttributeMappingProfile_Expand, Team_Select, Team_Filter, { teamsyncattributemappingprofiles_association: Team_Result[] }>;
}
interface SyncAttributeMappingProfile_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface SyncAttributeMappingProfile_Result extends SyncAttributeMappingProfile_Base, SyncAttributeMappingProfile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SyncAttributeMappingProfile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SyncAttributeMappingProfile_RelatedMany {
  lk_syncattributemapping_syncattributemappingprofileid: WebMappingRetrieve<SyncAttributeMapping_Select,SyncAttributeMapping_Expand,SyncAttributeMapping_Filter,SyncAttributeMapping_Fixed,SyncAttributeMapping_Result,SyncAttributeMapping_FormattedResult>;
  systemusersyncmappingprofiles_association: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  teamsyncattributemappingprofiles_association: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WebEntitiesRetrieve {
  syncattributemappingprofiles: WebMappingRetrieve<SyncAttributeMappingProfile_Select,SyncAttributeMappingProfile_Expand,SyncAttributeMappingProfile_Filter,SyncAttributeMappingProfile_Fixed,SyncAttributeMappingProfile_Result,SyncAttributeMappingProfile_FormattedResult>;
}
interface WebEntitiesRelated {
  syncattributemappingprofiles: WebMappingRelated<SyncAttributeMappingProfile_RelatedOne,SyncAttributeMappingProfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  syncattributemappingprofiles: WebMappingCUDA<SyncAttributeMappingProfile_Create,SyncAttributeMappingProfile_Update,SyncAttributeMappingProfile_Select>;
}
