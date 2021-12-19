interface PDFSetting_Base extends WebEntity {
  createdon?: Date | null;
  entityname?: string | null;
  importsequencenumber?: number | null;
  ispdfsettingenabled?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  pdfsettingid?: string | null;
  pdfsettingsjson?: string | null;
  statecode?: pdfsetting_statecode | null;
  statuscode?: pdfsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface PDFSetting_Relationships {
  pdfsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  pdfsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pdfsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pdfsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pdfsetting_ProcessSession?: ProcessSession_Result[] | null;
  pdfsetting_SyncErrors?: SyncError_Result[] | null;
  pdfsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface PDFSetting extends PDFSetting_Base, PDFSetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface PDFSetting_Create extends PDFSetting {
}
interface PDFSetting_Update extends PDFSetting {
}
interface PDFSetting_Select {
  createdby_guid: WebAttribute<PDFSetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PDFSetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PDFSetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityname: WebAttribute<PDFSetting_Select, { entityname: string | null }, {  }>;
  importsequencenumber: WebAttribute<PDFSetting_Select, { importsequencenumber: number | null }, {  }>;
  ispdfsettingenabled: WebAttribute<PDFSetting_Select, { ispdfsettingenabled: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<PDFSetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PDFSetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PDFSetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<PDFSetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<PDFSetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<PDFSetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<PDFSetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<PDFSetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  pdfsettingid: WebAttribute<PDFSetting_Select, { pdfsettingid: string | null }, {  }>;
  pdfsettingsjson: WebAttribute<PDFSetting_Select, { pdfsettingsjson: string | null }, {  }>;
  statecode: WebAttribute<PDFSetting_Select, { statecode: pdfsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<PDFSetting_Select, { statuscode: pdfsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<PDFSetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PDFSetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<PDFSetting_Select, { versionnumber: number | null }, {  }>;
}
interface PDFSetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityname: string;
  importsequencenumber: number;
  ispdfsettingenabled: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  pdfsettingid: XQW.Guid;
  pdfsettingsjson: string;
  statecode: pdfsetting_statecode;
  statuscode: pdfsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface PDFSetting_Expand {
  createdby: WebExpand<PDFSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PDFSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PDFSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PDFSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<PDFSetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<PDFSetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<PDFSetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<PDFSetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  pdfsetting_AsyncOperations: WebExpand<PDFSetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pdfsetting_AsyncOperations: AsyncOperation_Result[] }>;
  pdfsetting_BulkDeleteFailures: WebExpand<PDFSetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pdfsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pdfsetting_MailboxTrackingFolders: WebExpand<PDFSetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pdfsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pdfsetting_PrincipalObjectAttributeAccesses: WebExpand<PDFSetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pdfsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pdfsetting_ProcessSession: WebExpand<PDFSetting_Expand, ProcessSession_Select, ProcessSession_Filter, { pdfsetting_ProcessSession: ProcessSession_Result[] }>;
  pdfsetting_SyncErrors: WebExpand<PDFSetting_Expand, SyncError_Select, SyncError_Filter, { pdfsetting_SyncErrors: SyncError_Result[] }>;
  pdfsetting_UserEntityInstanceDatas: WebExpand<PDFSetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pdfsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface PDFSetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface PDFSetting_Result extends PDFSetting_Base, PDFSetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface PDFSetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface PDFSetting_RelatedMany {
  pdfsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pdfsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pdfsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pdfsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pdfsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  pdfsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pdfsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pdfsettings: WebMappingRetrieve<PDFSetting_Select,PDFSetting_Expand,PDFSetting_Filter,PDFSetting_Fixed,PDFSetting_Result,PDFSetting_FormattedResult>;
}
interface WebEntitiesRelated {
  pdfsettings: WebMappingRelated<PDFSetting_RelatedOne,PDFSetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  pdfsettings: WebMappingCUDA<PDFSetting_Create,PDFSetting_Update,PDFSetting_Select>;
}
