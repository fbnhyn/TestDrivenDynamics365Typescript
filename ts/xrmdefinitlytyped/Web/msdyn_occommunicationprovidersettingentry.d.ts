interface msdyn_occommunicationprovidersettingentry_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_key?: string | null;
  msdyn_name?: string | null;
  msdyn_occommunicationprovidersettingentryid?: string | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_occommunicationprovidersettingentry_statecode | null;
  statuscode?: msdyn_occommunicationprovidersettingentry_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_occommunicationprovidersettingentry_Relationships {
  msdyn_CommunicationProviderSettingEntId?: msdyn_occommunicationprovidersetting_Result | null;
  msdyn_occommunicationprovidersettingentry_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_occommunicationprovidersettingentry_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_occommunicationprovidersettingentry_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_occommunicationprovidersettingentry_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_occommunicationprovidersettingentry_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_occommunicationprovidersettingentry_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_occommunicationprovidersettingentry_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_occommunicationprovidersettingentry_SyncErrors?: SyncError_Result[] | null;
  msdyn_occommunicationprovidersettingentry_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_occommunicationprovidersettingentry extends msdyn_occommunicationprovidersettingentry_Base, msdyn_occommunicationprovidersettingentry_Relationships {
  msdyn_CommunicationProviderSettingEntId_bind$msdyn_occommunicationprovidersettings?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_occommunicationprovidersettingentry_Create extends msdyn_occommunicationprovidersettingentry {
}
interface msdyn_occommunicationprovidersettingentry_Update extends msdyn_occommunicationprovidersettingentry {
}
interface msdyn_occommunicationprovidersettingentry_Select {
  createdby_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_communicationprovidersettingentid_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { msdyn_communicationprovidersettingentid_guid: string | null }, { msdyn_communicationprovidersettingentid_formatted?: string }>;
  msdyn_key: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { msdyn_key: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occommunicationprovidersettingentryid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { msdyn_occommunicationprovidersettingentryid: string | null }, {  }>;
  msdyn_value: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { statecode: msdyn_occommunicationprovidersettingentry_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { statuscode: msdyn_occommunicationprovidersettingentry_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_occommunicationprovidersettingentry_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_occommunicationprovidersettingentry_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_communicationprovidersettingentid_guid: XQW.Guid;
  msdyn_key: string;
  msdyn_name: string;
  msdyn_occommunicationprovidersettingentryid: XQW.Guid;
  msdyn_value: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_occommunicationprovidersettingentry_statecode;
  statuscode: msdyn_occommunicationprovidersettingentry_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_occommunicationprovidersettingentry_Expand {
  createdby: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_CommunicationProviderSettingEntId: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, msdyn_occommunicationprovidersetting_Select, msdyn_occommunicationprovidersetting_Filter, { msdyn_CommunicationProviderSettingEntId: msdyn_occommunicationprovidersetting_Result }>;
  msdyn_occommunicationprovidersettingentry_AsyncOperations: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_occommunicationprovidersettingentry_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_occommunicationprovidersettingentry_BulkDeleteFailures: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_occommunicationprovidersettingentry_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_occommunicationprovidersettingentry_DuplicateBaseRecord: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occommunicationprovidersettingentry_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_occommunicationprovidersettingentry_DuplicateMatchingRecord: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occommunicationprovidersettingentry_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_occommunicationprovidersettingentry_MailboxTrackingFolders: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_occommunicationprovidersettingentry_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_occommunicationprovidersettingentry_PrincipalObjectAttributeAccesses: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_occommunicationprovidersettingentry_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_occommunicationprovidersettingentry_ProcessSession: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_occommunicationprovidersettingentry_ProcessSession: ProcessSession_Result[] }>;
  msdyn_occommunicationprovidersettingentry_SyncErrors: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SyncError_Select, SyncError_Filter, { msdyn_occommunicationprovidersettingentry_SyncErrors: SyncError_Result[] }>;
  msdyn_occommunicationprovidersettingentry_UserEntityInstanceDatas: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_occommunicationprovidersettingentry_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_occommunicationprovidersettingentry_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_occommunicationprovidersettingentry_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_communicationprovidersettingentid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_occommunicationprovidersettingentry_Result extends msdyn_occommunicationprovidersettingentry_Base, msdyn_occommunicationprovidersettingentry_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_communicationprovidersettingentid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_occommunicationprovidersettingentry_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_CommunicationProviderSettingEntId: WebMappingRetrieve<msdyn_occommunicationprovidersetting_Select,msdyn_occommunicationprovidersetting_Expand,msdyn_occommunicationprovidersetting_Filter,msdyn_occommunicationprovidersetting_Fixed,msdyn_occommunicationprovidersetting_Result,msdyn_occommunicationprovidersetting_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_occommunicationprovidersettingentry_RelatedMany {
  msdyn_occommunicationprovidersettingentry_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_occommunicationprovidersettingentry_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_occommunicationprovidersettingentries: WebMappingRetrieve<msdyn_occommunicationprovidersettingentry_Select,msdyn_occommunicationprovidersettingentry_Expand,msdyn_occommunicationprovidersettingentry_Filter,msdyn_occommunicationprovidersettingentry_Fixed,msdyn_occommunicationprovidersettingentry_Result,msdyn_occommunicationprovidersettingentry_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_occommunicationprovidersettingentries: WebMappingRelated<msdyn_occommunicationprovidersettingentry_RelatedOne,msdyn_occommunicationprovidersettingentry_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_occommunicationprovidersettingentries: WebMappingCUDA<msdyn_occommunicationprovidersettingentry_Create,msdyn_occommunicationprovidersettingentry_Update,msdyn_occommunicationprovidersettingentry_Select>;
}
