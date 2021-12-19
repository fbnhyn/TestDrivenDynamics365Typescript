interface msdyn_conversationactionlocale_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationactionlocaleid?: string | null;
  msdyn_label?: string | null;
  msdyn_locale_picklist?: msdyn_conversationaction_language_locale | null;
  msdyn_name?: string | null;
  msdyn_slashcommands?: string | null;
  msdyn_tooltip?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationactionlocale_statecode | null;
  statuscode?: msdyn_conversationactionlocale_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationactionlocale_Relationships {
  msdyn_conversationactionlocale_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationactionlocale_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationactionlocale_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationactionlocale_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationactionlocale_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationactionlocale_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationactionlocale_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationactionlocale_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationactionlocale_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_conversationactionlocale extends msdyn_conversationactionlocale_Base, msdyn_conversationactionlocale_Relationships {
  msdyn_conversationactionkey_bind$msdyn_conversationactions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_conversationactionlocale_Create extends msdyn_conversationactionlocale {
}
interface msdyn_conversationactionlocale_Update extends msdyn_conversationactionlocale {
}
interface msdyn_conversationactionlocale_Select {
  createdby_guid: WebAttribute<msdyn_conversationactionlocale_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationactionlocale_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationactionlocale_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationactionlocale_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationactionlocale_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationactionlocale_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationactionlocale_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationactionkey_guid: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_conversationactionkey_guid: string | null }, { msdyn_conversationactionkey_formatted?: string }>;
  msdyn_conversationactionlocaleid: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_conversationactionlocaleid: string | null }, {  }>;
  msdyn_label: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_label: string | null }, {  }>;
  msdyn_locale_picklist: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_locale_picklist: msdyn_conversationaction_language_locale | null }, { msdyn_locale_picklist_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_name: string | null }, {  }>;
  msdyn_slashcommands: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_slashcommands: string | null }, {  }>;
  msdyn_tooltip: WebAttribute<msdyn_conversationactionlocale_Select, { msdyn_tooltip: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_conversationactionlocale_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_conversationactionlocale_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_conversationactionlocale_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_conversationactionlocale_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_conversationactionlocale_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationactionlocale_Select, { statecode: msdyn_conversationactionlocale_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationactionlocale_Select, { statuscode: msdyn_conversationactionlocale_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationactionlocale_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationactionlocale_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationactionlocale_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationactionlocale_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationactionkey_guid: XQW.Guid;
  msdyn_conversationactionlocaleid: XQW.Guid;
  msdyn_label: string;
  msdyn_locale_picklist: msdyn_conversationaction_language_locale;
  msdyn_name: string;
  msdyn_slashcommands: string;
  msdyn_tooltip: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_conversationactionlocale_statecode;
  statuscode: msdyn_conversationactionlocale_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationactionlocale_Expand {
  createdby: WebExpand<msdyn_conversationactionlocale_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationactionlocale_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationactionlocale_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationactionlocale_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationactionkey: WebExpand<msdyn_conversationactionlocale_Expand, msdyn_conversationaction_Select, msdyn_conversationaction_Filter, { msdyn_conversationactionkey: msdyn_conversationaction_Result }>;
  msdyn_conversationactionlocale_AsyncOperations: WebExpand<msdyn_conversationactionlocale_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationactionlocale_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationactionlocale_BulkDeleteFailures: WebExpand<msdyn_conversationactionlocale_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationactionlocale_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationactionlocale_DuplicateBaseRecord: WebExpand<msdyn_conversationactionlocale_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationactionlocale_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationactionlocale_DuplicateMatchingRecord: WebExpand<msdyn_conversationactionlocale_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationactionlocale_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationactionlocale_MailboxTrackingFolders: WebExpand<msdyn_conversationactionlocale_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationactionlocale_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationactionlocale_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationactionlocale_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationactionlocale_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationactionlocale_ProcessSession: WebExpand<msdyn_conversationactionlocale_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationactionlocale_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationactionlocale_SyncErrors: WebExpand<msdyn_conversationactionlocale_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationactionlocale_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationactionlocale_UserEntityInstanceDatas: WebExpand<msdyn_conversationactionlocale_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationactionlocale_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_conversationactionlocale_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_conversationactionlocale_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_conversationactionlocale_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_conversationactionlocale_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_conversationactionlocale_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_conversationactionkey_formatted?: string;
  msdyn_locale_picklist_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_conversationactionlocale_Result extends msdyn_conversationactionlocale_Base, msdyn_conversationactionlocale_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_conversationactionkey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_conversationactionlocale_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_conversationactionkey: WebMappingRetrieve<msdyn_conversationaction_Select,msdyn_conversationaction_Expand,msdyn_conversationaction_Filter,msdyn_conversationaction_Fixed,msdyn_conversationaction_Result,msdyn_conversationaction_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_conversationactionlocale_RelatedMany {
  msdyn_conversationactionlocale_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationactionlocale_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationactionlocale_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationactionlocale_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationactionlocale_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationactionlocale_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationactionlocale_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationactionlocale_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationactionlocale_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationactionlocales: WebMappingRetrieve<msdyn_conversationactionlocale_Select,msdyn_conversationactionlocale_Expand,msdyn_conversationactionlocale_Filter,msdyn_conversationactionlocale_Fixed,msdyn_conversationactionlocale_Result,msdyn_conversationactionlocale_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationactionlocales: WebMappingRelated<msdyn_conversationactionlocale_RelatedOne,msdyn_conversationactionlocale_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationactionlocales: WebMappingCUDA<msdyn_conversationactionlocale_Create,msdyn_conversationactionlocale_Update,msdyn_conversationactionlocale_Select>;
}
