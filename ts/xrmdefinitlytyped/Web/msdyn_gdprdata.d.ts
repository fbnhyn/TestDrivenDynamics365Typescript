interface msdyn_gdprdata_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_data?: string | null;
  msdyn_dataheader?: string | null;
  msdyn_entityid?: string | null;
  msdyn_entitytype?: string | null;
  msdyn_gdprdataid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_gdprdata_statecode | null;
  statuscode?: msdyn_gdprdata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_gdprdata_Relationships {
  msdyn_gdprdata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_gdprdata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_gdprdata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_gdprdata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_gdprdata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_gdprdata_SyncErrors?: SyncError_Result[] | null;
  msdyn_gdprdata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_gdprdata extends msdyn_gdprdata_Base, msdyn_gdprdata_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_gdprdata_Create extends msdyn_gdprdata {
}
interface msdyn_gdprdata_Update extends msdyn_gdprdata {
}
interface msdyn_gdprdata_Select {
  createdby_guid: WebAttribute<msdyn_gdprdata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_gdprdata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_gdprdata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_gdprdata_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_gdprdata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_gdprdata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_gdprdata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_data: WebAttribute<msdyn_gdprdata_Select, { msdyn_data: string | null }, {  }>;
  msdyn_dataheader: WebAttribute<msdyn_gdprdata_Select, { msdyn_dataheader: string | null }, {  }>;
  msdyn_entityid: WebAttribute<msdyn_gdprdata_Select, { msdyn_entityid: string | null }, {  }>;
  msdyn_entitytype: WebAttribute<msdyn_gdprdata_Select, { msdyn_entitytype: string | null }, {  }>;
  msdyn_gdprdataid: WebAttribute<msdyn_gdprdata_Select, { msdyn_gdprdataid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_gdprdata_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_gdprdata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_gdprdata_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_gdprdata_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_gdprdata_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_gdprdata_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_gdprdata_Select, { statecode: msdyn_gdprdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_gdprdata_Select, { statuscode: msdyn_gdprdata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_gdprdata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_gdprdata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_gdprdata_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_gdprdata_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_data: string;
  msdyn_dataheader: string;
  msdyn_entityid: string;
  msdyn_entitytype: string;
  msdyn_gdprdataid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_gdprdata_statecode;
  statuscode: msdyn_gdprdata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_gdprdata_Expand {
  createdby: WebExpand<msdyn_gdprdata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_gdprdata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_gdprdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_gdprdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_gdprdata_AsyncOperations: WebExpand<msdyn_gdprdata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_gdprdata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_gdprdata_BulkDeleteFailures: WebExpand<msdyn_gdprdata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_gdprdata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_gdprdata_MailboxTrackingFolders: WebExpand<msdyn_gdprdata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_gdprdata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_gdprdata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_gdprdata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_gdprdata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_gdprdata_ProcessSession: WebExpand<msdyn_gdprdata_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_gdprdata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_gdprdata_SyncErrors: WebExpand<msdyn_gdprdata_Expand, SyncError_Select, SyncError_Filter, { msdyn_gdprdata_SyncErrors: SyncError_Result[] }>;
  msdyn_gdprdata_UserEntityInstanceDatas: WebExpand<msdyn_gdprdata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_gdprdata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_gdprdata_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_gdprdata_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_gdprdata_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_gdprdata_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_gdprdata_FormattedResult {
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
interface msdyn_gdprdata_Result extends msdyn_gdprdata_Base, msdyn_gdprdata_Relationships {
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
interface msdyn_gdprdata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_gdprdata_RelatedMany {
  msdyn_gdprdata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_gdprdata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_gdprdata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_gdprdata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_gdprdata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_gdprdata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_gdprdata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_gdprdataset: WebMappingRetrieve<msdyn_gdprdata_Select,msdyn_gdprdata_Expand,msdyn_gdprdata_Filter,msdyn_gdprdata_Fixed,msdyn_gdprdata_Result,msdyn_gdprdata_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_gdprdataset: WebMappingRelated<msdyn_gdprdata_RelatedOne,msdyn_gdprdata_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_gdprdataset: WebMappingCUDA<msdyn_gdprdata_Create,msdyn_gdprdata_Update,msdyn_gdprdata_Select>;
}
