interface msdyn_chatwidgetlanguage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_chatwidgetlanguageid?: string | null;
  msdyn_languagename?: string | null;
  msdyn_localeid?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_chatwidgetlanguage_statecode | null;
  statuscode?: msdyn_chatwidgetlanguage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_chatwidgetlanguage_Relationships {
  msdyn_chatwidgetlanguage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_chatwidgetlanguage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_chatwidgetlanguage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_chatwidgetlanguage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_chatwidgetlanguage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_chatwidgetlanguage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_chatwidgetlanguage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_chatwidgetlanguage_SyncErrors?: SyncError_Result[] | null;
  msdyn_chatwidgetlanguage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_chatwidgetlanguage_msdyn_livechatconfig_WidgetLocale?: msdyn_livechatconfig_Result[] | null;
}
interface msdyn_chatwidgetlanguage extends msdyn_chatwidgetlanguage_Base, msdyn_chatwidgetlanguage_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_chatwidgetlanguage_Create extends msdyn_chatwidgetlanguage {
}
interface msdyn_chatwidgetlanguage_Update extends msdyn_chatwidgetlanguage {
}
interface msdyn_chatwidgetlanguage_Select {
  createdby_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_chatwidgetlanguage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_chatwidgetlanguage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_chatwidgetlanguage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_chatwidgetlanguageid: WebAttribute<msdyn_chatwidgetlanguage_Select, { msdyn_chatwidgetlanguageid: string | null }, {  }>;
  msdyn_languagename: WebAttribute<msdyn_chatwidgetlanguage_Select, { msdyn_languagename: string | null }, {  }>;
  msdyn_localeid: WebAttribute<msdyn_chatwidgetlanguage_Select, { msdyn_localeid: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_chatwidgetlanguage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_chatwidgetlanguage_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_chatwidgetlanguage_Select, { statecode: msdyn_chatwidgetlanguage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_chatwidgetlanguage_Select, { statuscode: msdyn_chatwidgetlanguage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_chatwidgetlanguage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_chatwidgetlanguage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_chatwidgetlanguage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_chatwidgetlanguage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_chatwidgetlanguageid: XQW.Guid;
  msdyn_languagename: string;
  msdyn_localeid: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_chatwidgetlanguage_statecode;
  statuscode: msdyn_chatwidgetlanguage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_chatwidgetlanguage_Expand {
  createdby: WebExpand<msdyn_chatwidgetlanguage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_chatwidgetlanguage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_chatwidgetlanguage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_chatwidgetlanguage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_chatwidgetlanguage_AsyncOperations: WebExpand<msdyn_chatwidgetlanguage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_chatwidgetlanguage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_chatwidgetlanguage_BulkDeleteFailures: WebExpand<msdyn_chatwidgetlanguage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_chatwidgetlanguage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_chatwidgetlanguage_DuplicateBaseRecord: WebExpand<msdyn_chatwidgetlanguage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_chatwidgetlanguage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_chatwidgetlanguage_DuplicateMatchingRecord: WebExpand<msdyn_chatwidgetlanguage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_chatwidgetlanguage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_chatwidgetlanguage_MailboxTrackingFolders: WebExpand<msdyn_chatwidgetlanguage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_chatwidgetlanguage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_chatwidgetlanguage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_chatwidgetlanguage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_chatwidgetlanguage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_chatwidgetlanguage_ProcessSession: WebExpand<msdyn_chatwidgetlanguage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_chatwidgetlanguage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_chatwidgetlanguage_SyncErrors: WebExpand<msdyn_chatwidgetlanguage_Expand, SyncError_Select, SyncError_Filter, { msdyn_chatwidgetlanguage_SyncErrors: SyncError_Result[] }>;
  msdyn_chatwidgetlanguage_UserEntityInstanceDatas: WebExpand<msdyn_chatwidgetlanguage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_chatwidgetlanguage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_chatwidgetlanguage_msdyn_livechatconfig_WidgetLocale: WebExpand<msdyn_chatwidgetlanguage_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_msdyn_chatwidgetlanguage_msdyn_livechatconfig_WidgetLocale: msdyn_livechatconfig_Result[] }>;
  ownerid: WebExpand<msdyn_chatwidgetlanguage_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_chatwidgetlanguage_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_chatwidgetlanguage_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_chatwidgetlanguage_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_chatwidgetlanguage_FormattedResult {
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
interface msdyn_chatwidgetlanguage_Result extends msdyn_chatwidgetlanguage_Base, msdyn_chatwidgetlanguage_Relationships {
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
interface msdyn_chatwidgetlanguage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_chatwidgetlanguage_RelatedMany {
  msdyn_chatwidgetlanguage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_chatwidgetlanguage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_chatwidgetlanguage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_chatwidgetlanguage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_chatwidgetlanguage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_chatwidgetlanguage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_chatwidgetlanguage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_chatwidgetlanguage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_chatwidgetlanguage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_chatwidgetlanguage_msdyn_livechatconfig_WidgetLocale: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_chatwidgetlanguages: WebMappingRetrieve<msdyn_chatwidgetlanguage_Select,msdyn_chatwidgetlanguage_Expand,msdyn_chatwidgetlanguage_Filter,msdyn_chatwidgetlanguage_Fixed,msdyn_chatwidgetlanguage_Result,msdyn_chatwidgetlanguage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_chatwidgetlanguages: WebMappingRelated<msdyn_chatwidgetlanguage_RelatedOne,msdyn_chatwidgetlanguage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_chatwidgetlanguages: WebMappingCUDA<msdyn_chatwidgetlanguage_Create,msdyn_chatwidgetlanguage_Update,msdyn_chatwidgetlanguage_Select>;
}
