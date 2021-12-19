interface msdyn_helppage_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_content?: string | null;
  msdyn_contenttype?: string | null;
  msdyn_displayname?: string | null;
  msdyn_helppageid?: string | null;
  msdyn_locale?: number | null;
  msdyn_path?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_helppage_statecode | null;
  statuscode?: msdyn_helppage_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_helppage_Relationships {
  msdyn_helppage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_helppage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_helppage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_helppage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_helppage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_helppage_SyncErrors?: SyncError_Result[] | null;
  msdyn_helppage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_helppage extends msdyn_helppage_Base, msdyn_helppage_Relationships {
}
interface msdyn_helppage_Create extends msdyn_helppage {
}
interface msdyn_helppage_Update extends msdyn_helppage {
}
interface msdyn_helppage_Select {
  componentidunique: WebAttribute<msdyn_helppage_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_helppage_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_helppage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_helppage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_helppage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_helppage_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_helppage_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_helppage_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_helppage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_helppage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_helppage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_content: WebAttribute<msdyn_helppage_Select, { msdyn_content: string | null }, {  }>;
  msdyn_contenttype: WebAttribute<msdyn_helppage_Select, { msdyn_contenttype: string | null }, {  }>;
  msdyn_displayname: WebAttribute<msdyn_helppage_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_helppageid: WebAttribute<msdyn_helppage_Select, { msdyn_helppageid: string | null }, {  }>;
  msdyn_locale: WebAttribute<msdyn_helppage_Select, { msdyn_locale: number | null }, {  }>;
  msdyn_path: WebAttribute<msdyn_helppage_Select, { msdyn_path: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_helppage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_helppage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_helppage_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_helppage_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_helppage_Select, { statecode: msdyn_helppage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_helppage_Select, { statuscode: msdyn_helppage_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_helppage_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_helppage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_helppage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_helppage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_helppage_Filter {
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
  msdyn_content: string;
  msdyn_contenttype: string;
  msdyn_displayname: string;
  msdyn_helppageid: XQW.Guid;
  msdyn_locale: number;
  msdyn_path: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_helppage_statecode;
  statuscode: msdyn_helppage_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_helppage_Expand {
  createdby: WebExpand<msdyn_helppage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_helppage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_helppage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_helppage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_helppage_AsyncOperations: WebExpand<msdyn_helppage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_helppage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_helppage_BulkDeleteFailures: WebExpand<msdyn_helppage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_helppage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_helppage_MailboxTrackingFolders: WebExpand<msdyn_helppage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_helppage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_helppage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_helppage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_helppage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_helppage_ProcessSession: WebExpand<msdyn_helppage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_helppage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_helppage_SyncErrors: WebExpand<msdyn_helppage_Expand, SyncError_Select, SyncError_Filter, { msdyn_helppage_SyncErrors: SyncError_Result[] }>;
  msdyn_helppage_UserEntityInstanceDatas: WebExpand<msdyn_helppage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_helppage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_helppage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_helppage_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_helppage_Result extends msdyn_helppage_Base, msdyn_helppage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_helppage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_helppage_RelatedMany {
  msdyn_helppage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_helppage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_helppage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_helppage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_helppage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_helppage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_helppage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_helppages: WebMappingRetrieve<msdyn_helppage_Select,msdyn_helppage_Expand,msdyn_helppage_Filter,msdyn_helppage_Fixed,msdyn_helppage_Result,msdyn_helppage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_helppages: WebMappingRelated<msdyn_helppage_RelatedOne,msdyn_helppage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_helppages: WebMappingCUDA<msdyn_helppage_Create,msdyn_helppage_Update,msdyn_helppage_Select>;
}
