interface msdyn_integrationjob_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_integrationjobid?: string | null;
  msdyn_name?: string | null;
  msdyn_numberofpackets?: number | null;
  msdyn_regardingentity?: string | null;
  msdyn_regardingentityid?: string | null;
  msdyn_responsejson?: string | null;
  msdyn_status?: msdyn_integrationjobstatus | null;
  msdyn_type?: msdyn_integrationtype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_integrationjob_statecode | null;
  statuscode?: msdyn_integrationjob_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_integrationjob_Relationships {
  msdyn_integrationjob_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_integrationjob_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_integrationjob_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_integrationjob_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_integrationjob_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_integrationjob_SyncErrors?: SyncError_Result[] | null;
  msdyn_integrationjob_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_integrationjob_msdyn_integrationjob?: msdyn_integrationjobdetail_Result[] | null;
}
interface msdyn_integrationjob extends msdyn_integrationjob_Base, msdyn_integrationjob_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_integrationjob_Create extends msdyn_integrationjob {
}
interface msdyn_integrationjob_Update extends msdyn_integrationjob {
}
interface msdyn_integrationjob_Select {
  createdby_guid: WebAttribute<msdyn_integrationjob_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_integrationjob_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_integrationjob_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_integrationjob_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_integrationjob_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_integrationjob_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_integrationjob_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_integrationjobid: WebAttribute<msdyn_integrationjob_Select, { msdyn_integrationjobid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_integrationjob_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numberofpackets: WebAttribute<msdyn_integrationjob_Select, { msdyn_numberofpackets: number | null }, {  }>;
  msdyn_regardingentity: WebAttribute<msdyn_integrationjob_Select, { msdyn_regardingentity: string | null }, {  }>;
  msdyn_regardingentityid: WebAttribute<msdyn_integrationjob_Select, { msdyn_regardingentityid: string | null }, {  }>;
  msdyn_responsejson: WebAttribute<msdyn_integrationjob_Select, { msdyn_responsejson: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_integrationjob_Select, { msdyn_status: msdyn_integrationjobstatus | null }, { msdyn_status_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_integrationjob_Select, { msdyn_type: msdyn_integrationtype | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_integrationjob_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_integrationjob_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_integrationjob_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_integrationjob_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_integrationjob_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_integrationjob_Select, { statecode: msdyn_integrationjob_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_integrationjob_Select, { statuscode: msdyn_integrationjob_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_integrationjob_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_integrationjob_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_integrationjob_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_integrationjob_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_integrationjobid: XQW.Guid;
  msdyn_name: string;
  msdyn_numberofpackets: number;
  msdyn_regardingentity: string;
  msdyn_regardingentityid: string;
  msdyn_responsejson: string;
  msdyn_status: msdyn_integrationjobstatus;
  msdyn_type: msdyn_integrationtype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_integrationjob_statecode;
  statuscode: msdyn_integrationjob_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_integrationjob_Expand {
  createdby: WebExpand<msdyn_integrationjob_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_integrationjob_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_integrationjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_integrationjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_integrationjob_AsyncOperations: WebExpand<msdyn_integrationjob_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_integrationjob_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_integrationjob_BulkDeleteFailures: WebExpand<msdyn_integrationjob_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_integrationjob_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_integrationjob_MailboxTrackingFolders: WebExpand<msdyn_integrationjob_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_integrationjob_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_integrationjob_PrincipalObjectAttributeAccesses: WebExpand<msdyn_integrationjob_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_integrationjob_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_integrationjob_ProcessSession: WebExpand<msdyn_integrationjob_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_integrationjob_ProcessSession: ProcessSession_Result[] }>;
  msdyn_integrationjob_SyncErrors: WebExpand<msdyn_integrationjob_Expand, SyncError_Select, SyncError_Filter, { msdyn_integrationjob_SyncErrors: SyncError_Result[] }>;
  msdyn_integrationjob_UserEntityInstanceDatas: WebExpand<msdyn_integrationjob_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_integrationjob_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_integrationjob_msdyn_integrationjob: WebExpand<msdyn_integrationjob_Expand, msdyn_integrationjobdetail_Select, msdyn_integrationjobdetail_Filter, { msdyn_msdyn_integrationjob_msdyn_integrationjob: msdyn_integrationjobdetail_Result[] }>;
  ownerid: WebExpand<msdyn_integrationjob_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_integrationjob_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_integrationjob_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_integrationjob_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_integrationjob_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_status_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_integrationjob_Result extends msdyn_integrationjob_Base, msdyn_integrationjob_Relationships {
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
interface msdyn_integrationjob_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_integrationjob_RelatedMany {
  msdyn_integrationjob_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_integrationjob_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_integrationjob_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_integrationjob_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_integrationjob_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_integrationjob_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_integrationjob_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_integrationjob_msdyn_integrationjob: WebMappingRetrieve<msdyn_integrationjobdetail_Select,msdyn_integrationjobdetail_Expand,msdyn_integrationjobdetail_Filter,msdyn_integrationjobdetail_Fixed,msdyn_integrationjobdetail_Result,msdyn_integrationjobdetail_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_integrationjobs: WebMappingRetrieve<msdyn_integrationjob_Select,msdyn_integrationjob_Expand,msdyn_integrationjob_Filter,msdyn_integrationjob_Fixed,msdyn_integrationjob_Result,msdyn_integrationjob_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_integrationjobs: WebMappingRelated<msdyn_integrationjob_RelatedOne,msdyn_integrationjob_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_integrationjobs: WebMappingCUDA<msdyn_integrationjob_Create,msdyn_integrationjob_Update,msdyn_integrationjob_Select>;
}
