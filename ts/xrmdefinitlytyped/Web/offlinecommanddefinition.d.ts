interface OfflineCommandDefinition_Base extends WebEntity {
  commanddefinition?: string | null;
  commanddefinitionid?: string | null;
  commandname?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  primaryentitylogicalname?: string | null;
  solutionname?: string | null;
  versionnumber?: number | null;
}
interface OfflineCommandDefinition_Relationships {
  OfflineCommandDefinition_SyncErrors?: SyncError_Result[] | null;
}
interface OfflineCommandDefinition extends OfflineCommandDefinition_Base, OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_Create extends OfflineCommandDefinition {
}
interface OfflineCommandDefinition_Update extends OfflineCommandDefinition {
}
interface OfflineCommandDefinition_Select {
  commanddefinition: WebAttribute<OfflineCommandDefinition_Select, { commanddefinition: string | null }, {  }>;
  commanddefinitionid: WebAttribute<OfflineCommandDefinition_Select, { commanddefinitionid: string | null }, {  }>;
  commandname: WebAttribute<OfflineCommandDefinition_Select, { commandname: string | null }, {  }>;
  createdby_guid: WebAttribute<OfflineCommandDefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<OfflineCommandDefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OfflineCommandDefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<OfflineCommandDefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<OfflineCommandDefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<OfflineCommandDefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OfflineCommandDefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<OfflineCommandDefinition_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<OfflineCommandDefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  primaryentitylogicalname: WebAttribute<OfflineCommandDefinition_Select, { primaryentitylogicalname: string | null }, {  }>;
  solutionname: WebAttribute<OfflineCommandDefinition_Select, { solutionname: string | null }, {  }>;
  versionnumber: WebAttribute<OfflineCommandDefinition_Select, { versionnumber: number | null }, {  }>;
}
interface OfflineCommandDefinition_Filter {
  commanddefinition: string;
  commanddefinitionid: XQW.Guid;
  commandname: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  primaryentitylogicalname: string;
  solutionname: string;
  versionnumber: number;
}
interface OfflineCommandDefinition_Expand {
  OfflineCommandDefinition_SyncErrors: WebExpand<OfflineCommandDefinition_Expand, SyncError_Select, SyncError_Filter, { OfflineCommandDefinition_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<OfflineCommandDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<OfflineCommandDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<OfflineCommandDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<OfflineCommandDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<OfflineCommandDefinition_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface OfflineCommandDefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface OfflineCommandDefinition_Result extends OfflineCommandDefinition_Base, OfflineCommandDefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface OfflineCommandDefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface OfflineCommandDefinition_RelatedMany {
  OfflineCommandDefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
}
interface WebEntitiesRetrieve {
  offlinecommanddefinitions: WebMappingRetrieve<OfflineCommandDefinition_Select,OfflineCommandDefinition_Expand,OfflineCommandDefinition_Filter,OfflineCommandDefinition_Fixed,OfflineCommandDefinition_Result,OfflineCommandDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  offlinecommanddefinitions: WebMappingRelated<OfflineCommandDefinition_RelatedOne,OfflineCommandDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  offlinecommanddefinitions: WebMappingCUDA<OfflineCommandDefinition_Create,OfflineCommandDefinition_Update,OfflineCommandDefinition_Select>;
}
