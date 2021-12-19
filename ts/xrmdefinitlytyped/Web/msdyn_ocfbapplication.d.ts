interface msdyn_ocfbapplication_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_fbapplicationid?: string | null;
  msdyn_fbapplicationsecret?: string | null;
  msdyn_fbcallbackuri?: string | null;
  msdyn_fbverifytoken?: string | null;
  msdyn_name?: string | null;
  msdyn_ocfbapplicationid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocfbapplication_statecode | null;
  statuscode?: msdyn_ocfbapplication_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocfbapplication_Relationships {
  msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration?: msdyn_ocbotchannelregistration_Result[] | null;
  msdyn_msdyn_ocfbapplication_msdyn_ocfbpage?: msdyn_ocfbpage_Result[] | null;
  msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate?: msdyn_ocprovisioningstate_Result[] | null;
  msdyn_ocfbapplication_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocfbapplication_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocfbapplication_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocfbapplication_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocfbapplication_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocfbapplication_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocfbapplication_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocfbapplication_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocfbapplication_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocfbapplication extends msdyn_ocfbapplication_Base, msdyn_ocfbapplication_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocfbapplication_Create extends msdyn_ocfbapplication {
}
interface msdyn_ocfbapplication_Update extends msdyn_ocfbapplication {
}
interface msdyn_ocfbapplication_Select {
  createdby_guid: WebAttribute<msdyn_ocfbapplication_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocfbapplication_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocfbapplication_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocfbapplication_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocfbapplication_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocfbapplication_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocfbapplication_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_fbapplicationid: WebAttribute<msdyn_ocfbapplication_Select, { msdyn_fbapplicationid: string | null }, {  }>;
  msdyn_fbapplicationsecret: WebAttribute<msdyn_ocfbapplication_Select, { msdyn_fbapplicationsecret: string | null }, {  }>;
  msdyn_fbcallbackuri: WebAttribute<msdyn_ocfbapplication_Select, { msdyn_fbcallbackuri: string | null }, {  }>;
  msdyn_fbverifytoken: WebAttribute<msdyn_ocfbapplication_Select, { msdyn_fbverifytoken: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocfbapplication_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocfbapplicationid: WebAttribute<msdyn_ocfbapplication_Select, { msdyn_ocfbapplicationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocfbapplication_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocfbapplication_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocfbapplication_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocfbapplication_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocfbapplication_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocfbapplication_Select, { statecode: msdyn_ocfbapplication_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocfbapplication_Select, { statuscode: msdyn_ocfbapplication_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocfbapplication_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocfbapplication_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocfbapplication_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocfbapplication_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_fbapplicationid: string;
  msdyn_fbapplicationsecret: string;
  msdyn_fbcallbackuri: string;
  msdyn_fbverifytoken: string;
  msdyn_name: string;
  msdyn_ocfbapplicationid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocfbapplication_statecode;
  statuscode: msdyn_ocfbapplication_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocfbapplication_Expand {
  createdby: WebExpand<msdyn_ocfbapplication_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocfbapplication_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocfbapplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocfbapplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration: WebExpand<msdyn_ocfbapplication_Expand, msdyn_ocbotchannelregistration_Select, msdyn_ocbotchannelregistration_Filter, { msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration: msdyn_ocbotchannelregistration_Result[] }>;
  msdyn_msdyn_ocfbapplication_msdyn_ocfbpage: WebExpand<msdyn_ocfbapplication_Expand, msdyn_ocfbpage_Select, msdyn_ocfbpage_Filter, { msdyn_msdyn_ocfbapplication_msdyn_ocfbpage: msdyn_ocfbpage_Result[] }>;
  msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate: WebExpand<msdyn_ocfbapplication_Expand, msdyn_ocprovisioningstate_Select, msdyn_ocprovisioningstate_Filter, { msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate: msdyn_ocprovisioningstate_Result[] }>;
  msdyn_ocfbapplication_AsyncOperations: WebExpand<msdyn_ocfbapplication_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocfbapplication_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocfbapplication_BulkDeleteFailures: WebExpand<msdyn_ocfbapplication_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocfbapplication_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocfbapplication_DuplicateBaseRecord: WebExpand<msdyn_ocfbapplication_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocfbapplication_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocfbapplication_DuplicateMatchingRecord: WebExpand<msdyn_ocfbapplication_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocfbapplication_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocfbapplication_MailboxTrackingFolders: WebExpand<msdyn_ocfbapplication_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocfbapplication_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocfbapplication_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocfbapplication_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocfbapplication_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocfbapplication_ProcessSession: WebExpand<msdyn_ocfbapplication_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocfbapplication_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocfbapplication_SyncErrors: WebExpand<msdyn_ocfbapplication_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocfbapplication_SyncErrors: SyncError_Result[] }>;
  msdyn_ocfbapplication_UserEntityInstanceDatas: WebExpand<msdyn_ocfbapplication_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocfbapplication_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocfbapplication_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocfbapplication_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocfbapplication_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocfbapplication_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocfbapplication_FormattedResult {
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
interface msdyn_ocfbapplication_Result extends msdyn_ocfbapplication_Base, msdyn_ocfbapplication_Relationships {
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
interface msdyn_ocfbapplication_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocfbapplication_RelatedMany {
  msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration: WebMappingRetrieve<msdyn_ocbotchannelregistration_Select,msdyn_ocbotchannelregistration_Expand,msdyn_ocbotchannelregistration_Filter,msdyn_ocbotchannelregistration_Fixed,msdyn_ocbotchannelregistration_Result,msdyn_ocbotchannelregistration_FormattedResult>;
  msdyn_msdyn_ocfbapplication_msdyn_ocfbpage: WebMappingRetrieve<msdyn_ocfbpage_Select,msdyn_ocfbpage_Expand,msdyn_ocfbpage_Filter,msdyn_ocfbpage_Fixed,msdyn_ocfbpage_Result,msdyn_ocfbpage_FormattedResult>;
  msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate: WebMappingRetrieve<msdyn_ocprovisioningstate_Select,msdyn_ocprovisioningstate_Expand,msdyn_ocprovisioningstate_Filter,msdyn_ocprovisioningstate_Fixed,msdyn_ocprovisioningstate_Result,msdyn_ocprovisioningstate_FormattedResult>;
  msdyn_ocfbapplication_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocfbapplication_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocfbapplication_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocfbapplication_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocfbapplication_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocfbapplication_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocfbapplication_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocfbapplication_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocfbapplication_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocfbapplications: WebMappingRetrieve<msdyn_ocfbapplication_Select,msdyn_ocfbapplication_Expand,msdyn_ocfbapplication_Filter,msdyn_ocfbapplication_Fixed,msdyn_ocfbapplication_Result,msdyn_ocfbapplication_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocfbapplications: WebMappingRelated<msdyn_ocfbapplication_RelatedOne,msdyn_ocfbapplication_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocfbapplications: WebMappingCUDA<msdyn_ocfbapplication_Create,msdyn_ocfbapplication_Update,msdyn_ocfbapplication_Select>;
}
