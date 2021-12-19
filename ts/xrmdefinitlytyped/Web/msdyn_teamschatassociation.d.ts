interface msdyn_teamschatassociation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entityrecordstate?: msdyn_teamschatassociation_msdyn_entityrecordstate | null;
  msdyn_regardingobjectid?: string | null;
  msdyn_regardingobjectname?: string | null;
  msdyn_teamschatassociationid?: string | null;
  msdyn_teamschatassociationname?: string | null;
  msdyn_teamschatid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_teamschatassociation_statecode | null;
  statuscode?: msdyn_teamschatassociation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_teamschatassociation_Relationships {
  msdyn_teamschatassociation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_teamschatassociation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_teamschatassociation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_teamschatassociation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_teamschatassociation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_teamschatassociation_SyncErrors?: SyncError_Result[] | null;
  msdyn_teamschatassociation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_teamschatassociation extends msdyn_teamschatassociation_Base, msdyn_teamschatassociation_Relationships {
}
interface msdyn_teamschatassociation_Create extends msdyn_teamschatassociation {
}
interface msdyn_teamschatassociation_Update extends msdyn_teamschatassociation {
}
interface msdyn_teamschatassociation_Select {
  createdby_guid: WebAttribute<msdyn_teamschatassociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_teamschatassociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_teamschatassociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_teamschatassociation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_teamschatassociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_teamschatassociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_teamschatassociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entityrecordstate: WebAttribute<msdyn_teamschatassociation_Select, { msdyn_entityrecordstate: msdyn_teamschatassociation_msdyn_entityrecordstate | null }, { msdyn_entityrecordstate_formatted?: string }>;
  msdyn_regardingobjectid: WebAttribute<msdyn_teamschatassociation_Select, { msdyn_regardingobjectid: string | null }, {  }>;
  msdyn_regardingobjectname: WebAttribute<msdyn_teamschatassociation_Select, { msdyn_regardingobjectname: string | null }, {  }>;
  msdyn_teamschatassociationid: WebAttribute<msdyn_teamschatassociation_Select, { msdyn_teamschatassociationid: string | null }, {  }>;
  msdyn_teamschatassociationname: WebAttribute<msdyn_teamschatassociation_Select, { msdyn_teamschatassociationname: string | null }, {  }>;
  msdyn_teamschatid: WebAttribute<msdyn_teamschatassociation_Select, { msdyn_teamschatid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_teamschatassociation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_teamschatassociation_Select, { statecode: msdyn_teamschatassociation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_teamschatassociation_Select, { statuscode: msdyn_teamschatassociation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_teamschatassociation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_teamschatassociation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_teamschatassociation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_teamschatassociation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_entityrecordstate: msdyn_teamschatassociation_msdyn_entityrecordstate;
  msdyn_regardingobjectid: string;
  msdyn_regardingobjectname: string;
  msdyn_teamschatassociationid: XQW.Guid;
  msdyn_teamschatassociationname: string;
  msdyn_teamschatid: string;
  overriddencreatedon: Date;
  statecode: msdyn_teamschatassociation_statecode;
  statuscode: msdyn_teamschatassociation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_teamschatassociation_Expand {
  createdby: WebExpand<msdyn_teamschatassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_teamschatassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_teamschatassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_teamschatassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_teamschatassociation_AsyncOperations: WebExpand<msdyn_teamschatassociation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_teamschatassociation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_teamschatassociation_BulkDeleteFailures: WebExpand<msdyn_teamschatassociation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_teamschatassociation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_teamschatassociation_MailboxTrackingFolders: WebExpand<msdyn_teamschatassociation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_teamschatassociation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_teamschatassociation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_teamschatassociation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_teamschatassociation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_teamschatassociation_ProcessSession: WebExpand<msdyn_teamschatassociation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_teamschatassociation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_teamschatassociation_SyncErrors: WebExpand<msdyn_teamschatassociation_Expand, SyncError_Select, SyncError_Filter, { msdyn_teamschatassociation_SyncErrors: SyncError_Result[] }>;
  msdyn_teamschatassociation_UserEntityInstanceDatas: WebExpand<msdyn_teamschatassociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_teamschatassociation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface msdyn_teamschatassociation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_entityrecordstate_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_teamschatassociation_Result extends msdyn_teamschatassociation_Base, msdyn_teamschatassociation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface msdyn_teamschatassociation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_teamschatassociation_RelatedMany {
  msdyn_teamschatassociation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_teamschatassociation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_teamschatassociation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_teamschatassociation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_teamschatassociation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_teamschatassociation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_teamschatassociation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_teamschatassociations: WebMappingRetrieve<msdyn_teamschatassociation_Select,msdyn_teamschatassociation_Expand,msdyn_teamschatassociation_Filter,msdyn_teamschatassociation_Fixed,msdyn_teamschatassociation_Result,msdyn_teamschatassociation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_teamschatassociations: WebMappingRelated<msdyn_teamschatassociation_RelatedOne,msdyn_teamschatassociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_teamschatassociations: WebMappingCUDA<msdyn_teamschatassociation_Create,msdyn_teamschatassociation_Update,msdyn_teamschatassociation_Select>;
}
