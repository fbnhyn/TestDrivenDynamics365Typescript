interface msdyn_salesinsightssettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_islicensepurchased?: boolean | null;
  msdyn_isoctpreviewenabled?: boolean | null;
  msdyn_ispreviewenabled?: boolean | null;
  msdyn_name?: string | null;
  msdyn_salesinsightssettingsid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_salesinsightssettings_statecode | null;
  statuscode?: msdyn_salesinsightssettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_salesinsightssettings_Relationships {
  msdyn_salesinsightssettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_salesinsightssettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_salesinsightssettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_salesinsightssettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_salesinsightssettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_salesinsightssettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_salesinsightssettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_salesinsightssettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_salesinsightssettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_salesinsightssettings extends msdyn_salesinsightssettings_Base, msdyn_salesinsightssettings_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_salesinsightssettings_Create extends msdyn_salesinsightssettings {
}
interface msdyn_salesinsightssettings_Update extends msdyn_salesinsightssettings {
}
interface msdyn_salesinsightssettings_Select {
  createdby_guid: WebAttribute<msdyn_salesinsightssettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_salesinsightssettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_salesinsightssettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_salesinsightssettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_salesinsightssettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_salesinsightssettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_salesinsightssettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_islicensepurchased: WebAttribute<msdyn_salesinsightssettings_Select, { msdyn_islicensepurchased: boolean | null }, {  }>;
  msdyn_isoctpreviewenabled: WebAttribute<msdyn_salesinsightssettings_Select, { msdyn_isoctpreviewenabled: boolean | null }, {  }>;
  msdyn_ispreviewenabled: WebAttribute<msdyn_salesinsightssettings_Select, { msdyn_ispreviewenabled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_salesinsightssettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_salesinsightssettingsid: WebAttribute<msdyn_salesinsightssettings_Select, { msdyn_salesinsightssettingsid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_salesinsightssettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_salesinsightssettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_salesinsightssettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_salesinsightssettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_salesinsightssettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_salesinsightssettings_Select, { statecode: msdyn_salesinsightssettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_salesinsightssettings_Select, { statuscode: msdyn_salesinsightssettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_salesinsightssettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_salesinsightssettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_salesinsightssettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_salesinsightssettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_islicensepurchased: boolean;
  msdyn_isoctpreviewenabled: boolean;
  msdyn_ispreviewenabled: boolean;
  msdyn_name: string;
  msdyn_salesinsightssettingsid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_salesinsightssettings_statecode;
  statuscode: msdyn_salesinsightssettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_salesinsightssettings_Expand {
  createdby: WebExpand<msdyn_salesinsightssettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_salesinsightssettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_salesinsightssettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_salesinsightssettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_salesinsightssettings_AsyncOperations: WebExpand<msdyn_salesinsightssettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_salesinsightssettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_salesinsightssettings_BulkDeleteFailures: WebExpand<msdyn_salesinsightssettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_salesinsightssettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_salesinsightssettings_DuplicateBaseRecord: WebExpand<msdyn_salesinsightssettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_salesinsightssettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_salesinsightssettings_DuplicateMatchingRecord: WebExpand<msdyn_salesinsightssettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_salesinsightssettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_salesinsightssettings_MailboxTrackingFolders: WebExpand<msdyn_salesinsightssettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_salesinsightssettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_salesinsightssettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_salesinsightssettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_salesinsightssettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_salesinsightssettings_ProcessSession: WebExpand<msdyn_salesinsightssettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_salesinsightssettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_salesinsightssettings_SyncErrors: WebExpand<msdyn_salesinsightssettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_salesinsightssettings_SyncErrors: SyncError_Result[] }>;
  msdyn_salesinsightssettings_UserEntityInstanceDatas: WebExpand<msdyn_salesinsightssettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_salesinsightssettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_salesinsightssettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_salesinsightssettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_salesinsightssettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_salesinsightssettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_salesinsightssettings_FormattedResult {
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
interface msdyn_salesinsightssettings_Result extends msdyn_salesinsightssettings_Base, msdyn_salesinsightssettings_Relationships {
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
interface msdyn_salesinsightssettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_salesinsightssettings_RelatedMany {
  msdyn_salesinsightssettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_salesinsightssettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_salesinsightssettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_salesinsightssettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_salesinsightssettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_salesinsightssettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_salesinsightssettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_salesinsightssettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_salesinsightssettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_salesinsightssettings: WebMappingRetrieve<msdyn_salesinsightssettings_Select,msdyn_salesinsightssettings_Expand,msdyn_salesinsightssettings_Filter,msdyn_salesinsightssettings_Fixed,msdyn_salesinsightssettings_Result,msdyn_salesinsightssettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_salesinsightssettings: WebMappingRelated<msdyn_salesinsightssettings_RelatedOne,msdyn_salesinsightssettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_salesinsightssettings: WebMappingCUDA<msdyn_salesinsightssettings_Create,msdyn_salesinsightssettings_Update,msdyn_salesinsightssettings_Select>;
}
