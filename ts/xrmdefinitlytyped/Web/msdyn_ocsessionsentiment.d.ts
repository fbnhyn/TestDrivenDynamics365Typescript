interface msdyn_ocsessionsentiment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocsessionsentimentid?: string | null;
  msdyn_predictedlanguage?: string | null;
  msdyn_sentimentmodelversion?: string | null;
  msdyn_sentimentpulse?: number | null;
  msdyn_sentimenttransition?: number | null;
  msdyn_sentimentzone?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsessionsentiment_statecode | null;
  statuscode?: msdyn_ocsessionsentiment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsessionsentiment_Relationships {
  msdyn_ocsessionsentiment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsessionsentiment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsessionsentiment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsessionsentiment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsessionsentiment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsessionsentiment_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsessionsentiment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsessionsentiment extends msdyn_ocsessionsentiment_Base, msdyn_ocsessionsentiment_Relationships {
  msdyn_omnichannelsession_bind$msdyn_ocsessions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsessionsentiment_Create extends msdyn_ocsessionsentiment {
}
interface msdyn_ocsessionsentiment_Update extends msdyn_ocsessionsentiment {
}
interface msdyn_ocsessionsentiment_Select {
  createdby_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsessionsentiment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsessionsentiment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsessionsentiment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsessionsentimentid: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_ocsessionsentimentid: string | null }, {  }>;
  msdyn_omnichannelsession_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_omnichannelsession_guid: string | null }, { msdyn_omnichannelsession_formatted?: string }>;
  msdyn_predictedlanguage: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_predictedlanguage: string | null }, {  }>;
  msdyn_sentimentmodelversion: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_sentimentmodelversion: string | null }, {  }>;
  msdyn_sentimentpulse: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_sentimentpulse: number | null }, {  }>;
  msdyn_sentimenttransition: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_sentimenttransition: number | null }, {  }>;
  msdyn_sentimentzone: WebAttribute<msdyn_ocsessionsentiment_Select, { msdyn_sentimentzone: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsessionsentiment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsessionsentiment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsessionsentiment_Select, { statecode: msdyn_ocsessionsentiment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsessionsentiment_Select, { statuscode: msdyn_ocsessionsentiment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsessionsentiment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsessionsentiment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsessionsentiment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsessionsentiment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocsessionsentimentid: XQW.Guid;
  msdyn_omnichannelsession_guid: XQW.Guid;
  msdyn_predictedlanguage: string;
  msdyn_sentimentmodelversion: string;
  msdyn_sentimentpulse: number;
  msdyn_sentimenttransition: number;
  msdyn_sentimentzone: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsessionsentiment_statecode;
  statuscode: msdyn_ocsessionsentiment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsessionsentiment_Expand {
  createdby: WebExpand<msdyn_ocsessionsentiment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsessionsentiment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsessionsentiment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsessionsentiment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocsessionsentiment_AsyncOperations: WebExpand<msdyn_ocsessionsentiment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsessionsentiment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsessionsentiment_BulkDeleteFailures: WebExpand<msdyn_ocsessionsentiment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsessionsentiment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsessionsentiment_MailboxTrackingFolders: WebExpand<msdyn_ocsessionsentiment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsessionsentiment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsessionsentiment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsessionsentiment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsessionsentiment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsessionsentiment_ProcessSession: WebExpand<msdyn_ocsessionsentiment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsessionsentiment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsessionsentiment_SyncErrors: WebExpand<msdyn_ocsessionsentiment_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsessionsentiment_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsessionsentiment_UserEntityInstanceDatas: WebExpand<msdyn_ocsessionsentiment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsessionsentiment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_omnichannelsession: WebExpand<msdyn_ocsessionsentiment_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_omnichannelsession: msdyn_ocsession_Result }>;
  ownerid: WebExpand<msdyn_ocsessionsentiment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsessionsentiment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsessionsentiment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsessionsentiment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsessionsentiment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_omnichannelsession_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsessionsentiment_Result extends msdyn_ocsessionsentiment_Base, msdyn_ocsessionsentiment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_omnichannelsession_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsessionsentiment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_omnichannelsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsessionsentiment_RelatedMany {
  msdyn_ocsessionsentiment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsessionsentiment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsessionsentiment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsessionsentiment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsessionsentiment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsessionsentiment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsessionsentiment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsessionsentiments: WebMappingRetrieve<msdyn_ocsessionsentiment_Select,msdyn_ocsessionsentiment_Expand,msdyn_ocsessionsentiment_Filter,msdyn_ocsessionsentiment_Fixed,msdyn_ocsessionsentiment_Result,msdyn_ocsessionsentiment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsessionsentiments: WebMappingRelated<msdyn_ocsessionsentiment_RelatedOne,msdyn_ocsessionsentiment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsessionsentiments: WebMappingCUDA<msdyn_ocsessionsentiment_Create,msdyn_ocsessionsentiment_Update,msdyn_ocsessionsentiment_Select>;
}
