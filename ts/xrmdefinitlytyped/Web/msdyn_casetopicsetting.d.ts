interface msdyn_casetopicsetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_attributeinuse?: string | null;
  msdyn_casetopicsettingid?: string | null;
  msdyn_delimiters?: string | null;
  msdyn_enabled?: boolean | null;
  msdyn_ignorelist?: string | null;
  msdyn_name?: string | null;
  msdyn_selectionlocation?: msdyn_casetopicsetting_msdyn_selectionlocation | null;
  msdyn_topicautomationenabled?: boolean | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_casetopicsetting_statecode | null;
  statuscode?: msdyn_casetopicsetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_casetopicsetting_Relationships {
  msdyn_casetopicsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_casetopicsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_casetopicsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_casetopicsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_casetopicsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_casetopicsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_casetopicsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_casetopicsetting extends msdyn_casetopicsetting_Base, msdyn_casetopicsetting_Relationships {
}
interface msdyn_casetopicsetting_Create extends msdyn_casetopicsetting {
}
interface msdyn_casetopicsetting_Update extends msdyn_casetopicsetting {
}
interface msdyn_casetopicsetting_Select {
  componentidunique: WebAttribute<msdyn_casetopicsetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_casetopicsetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_casetopicsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_casetopicsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_casetopicsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_casetopicsetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_casetopicsetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_casetopicsetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_casetopicsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_casetopicsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_casetopicsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attributeinuse: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_attributeinuse: string | null }, {  }>;
  msdyn_casetopicsettingid: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_casetopicsettingid: string | null }, {  }>;
  msdyn_delimiters: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_delimiters: string | null }, {  }>;
  msdyn_enabled: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_enabled: boolean | null }, {  }>;
  msdyn_ignorelist: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_ignorelist: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_selectionlocation: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_selectionlocation: msdyn_casetopicsetting_msdyn_selectionlocation | null }, { msdyn_selectionlocation_formatted?: string }>;
  msdyn_topicautomationenabled: WebAttribute<msdyn_casetopicsetting_Select, { msdyn_topicautomationenabled: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_casetopicsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_casetopicsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_casetopicsetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_casetopicsetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_casetopicsetting_Select, { statecode: msdyn_casetopicsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_casetopicsetting_Select, { statuscode: msdyn_casetopicsetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_casetopicsetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_casetopicsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_casetopicsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_casetopicsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_casetopicsetting_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attributeinuse: string;
  msdyn_casetopicsettingid: XQW.Guid;
  msdyn_delimiters: string;
  msdyn_enabled: boolean;
  msdyn_ignorelist: string;
  msdyn_name: string;
  msdyn_selectionlocation: msdyn_casetopicsetting_msdyn_selectionlocation;
  msdyn_topicautomationenabled: boolean;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_casetopicsetting_statecode;
  statuscode: msdyn_casetopicsetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_casetopicsetting_Expand {
  createdby: WebExpand<msdyn_casetopicsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_casetopicsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_casetopicsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_casetopicsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_casetopicsetting_AsyncOperations: WebExpand<msdyn_casetopicsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_casetopicsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_casetopicsetting_BulkDeleteFailures: WebExpand<msdyn_casetopicsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_casetopicsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_casetopicsetting_MailboxTrackingFolders: WebExpand<msdyn_casetopicsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_casetopicsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_casetopicsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_casetopicsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_casetopicsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_casetopicsetting_ProcessSession: WebExpand<msdyn_casetopicsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_casetopicsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_casetopicsetting_SyncErrors: WebExpand<msdyn_casetopicsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_casetopicsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_casetopicsetting_UserEntityInstanceDatas: WebExpand<msdyn_casetopicsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_casetopicsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_casetopicsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_casetopicsetting_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_selectionlocation_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_casetopicsetting_Result extends msdyn_casetopicsetting_Base, msdyn_casetopicsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_casetopicsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_casetopicsetting_RelatedMany {
  msdyn_casetopicsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_casetopicsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_casetopicsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_casetopicsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_casetopicsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_casetopicsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_casetopicsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_casetopicsettings: WebMappingRetrieve<msdyn_casetopicsetting_Select,msdyn_casetopicsetting_Expand,msdyn_casetopicsetting_Filter,msdyn_casetopicsetting_Fixed,msdyn_casetopicsetting_Result,msdyn_casetopicsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casetopicsettings: WebMappingRelated<msdyn_casetopicsetting_RelatedOne,msdyn_casetopicsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casetopicsettings: WebMappingCUDA<msdyn_casetopicsetting_Create,msdyn_casetopicsetting_Update,msdyn_casetopicsetting_Select>;
}
