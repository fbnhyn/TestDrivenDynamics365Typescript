interface TeamTemplate_Base extends WebEntity {
  createdon?: Date | null;
  defaultaccessrightsmask?: number | null;
  description?: string | null;
  issystem?: boolean | null;
  modifiedon?: Date | null;
  objecttypecode?: number | null;
  teamtemplateid?: string | null;
  teamtemplatename?: string | null;
  versionnumber?: number | null;
}
interface TeamTemplate_Relationships {
  TeamTemplate_SyncErrors?: SyncError_Result[] | null;
  teamtemplate_Teams?: Team_Result[] | null;
}
interface TeamTemplate extends TeamTemplate_Base, TeamTemplate_Relationships {
}
interface TeamTemplate_Create extends TeamTemplate {
}
interface TeamTemplate_Update extends TeamTemplate {
}
interface TeamTemplate_Select {
  createdby_guid: WebAttribute<TeamTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TeamTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TeamTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  defaultaccessrightsmask: WebAttribute<TeamTemplate_Select, { defaultaccessrightsmask: number | null }, {  }>;
  description: WebAttribute<TeamTemplate_Select, { description: string | null }, {  }>;
  issystem: WebAttribute<TeamTemplate_Select, { issystem: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<TeamTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TeamTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TeamTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objecttypecode: WebAttribute<TeamTemplate_Select, { objecttypecode: number | null }, {  }>;
  teamtemplateid: WebAttribute<TeamTemplate_Select, { teamtemplateid: string | null }, {  }>;
  teamtemplatename: WebAttribute<TeamTemplate_Select, { teamtemplatename: string | null }, {  }>;
  versionnumber: WebAttribute<TeamTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface TeamTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  defaultaccessrightsmask: number;
  description: string;
  issystem: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objecttypecode: number;
  teamtemplateid: XQW.Guid;
  teamtemplatename: string;
  versionnumber: number;
}
interface TeamTemplate_Expand {
  TeamTemplate_SyncErrors: WebExpand<TeamTemplate_Expand, SyncError_Select, SyncError_Filter, { TeamTemplate_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<TeamTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TeamTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TeamTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TeamTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  teamtemplate_Teams: WebExpand<TeamTemplate_Expand, Team_Select, Team_Filter, { teamtemplate_Teams: Team_Result[] }>;
}
interface TeamTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
}
interface TeamTemplate_Result extends TeamTemplate_Base, TeamTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface TeamTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface TeamTemplate_RelatedMany {
  TeamTemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  teamtemplate_Teams: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teamtemplates: WebMappingRetrieve<TeamTemplate_Select,TeamTemplate_Expand,TeamTemplate_Filter,TeamTemplate_Fixed,TeamTemplate_Result,TeamTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  teamtemplates: WebMappingRelated<TeamTemplate_RelatedOne,TeamTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  teamtemplates: WebMappingCUDA<TeamTemplate_Create,TeamTemplate_Update,TeamTemplate_Select>;
}
