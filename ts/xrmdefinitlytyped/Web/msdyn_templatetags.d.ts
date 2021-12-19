interface msdyn_templatetags_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_templatetagsid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_templatetags_statecode | null;
  statuscode?: msdyn_templatetags_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_templatetags_Relationships {
  msdyn_msdyn_consoleapplicationnotificationtag?: msdyn_consoleapplicationnotificationtemplate_Result[] | null;
  msdyn_msdyn_consoleapplicationsessiontemp_tag?: msdyn_consoleapplicationsessiontemplate_Result[] | null;
  msdyn_msdyn_consoleapplicationtemplate_tags?: msdyn_consoleapplicationtemplate_Result[] | null;
  msdyn_templatetags_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_templatetags_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_templatetags_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_templatetags_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_templatetags_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_templatetags_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_templatetags_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_templatetags_SyncErrors?: SyncError_Result[] | null;
  msdyn_templatetags_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_templatetags extends msdyn_templatetags_Base, msdyn_templatetags_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_templatetags_Create extends msdyn_templatetags {
}
interface msdyn_templatetags_Update extends msdyn_templatetags {
}
interface msdyn_templatetags_Select {
  createdby_guid: WebAttribute<msdyn_templatetags_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_templatetags_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_templatetags_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_templatetags_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_templatetags_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_templatetags_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_templatetags_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_templatetags_Select, { msdyn_name: string | null }, {  }>;
  msdyn_templatetagsid: WebAttribute<msdyn_templatetags_Select, { msdyn_templatetagsid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_templatetags_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_templatetags_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_templatetags_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_templatetags_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_templatetags_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_templatetags_Select, { statecode: msdyn_templatetags_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_templatetags_Select, { statuscode: msdyn_templatetags_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_templatetags_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_templatetags_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_templatetags_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_templatetags_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_templatetagsid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_templatetags_statecode;
  statuscode: msdyn_templatetags_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_templatetags_Expand {
  createdby: WebExpand<msdyn_templatetags_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_templatetags_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_templatetags_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_templatetags_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_consoleapplicationnotificationtag: WebExpand<msdyn_templatetags_Expand, msdyn_consoleapplicationnotificationtemplate_Select, msdyn_consoleapplicationnotificationtemplate_Filter, { msdyn_msdyn_consoleapplicationnotificationtag: msdyn_consoleapplicationnotificationtemplate_Result[] }>;
  msdyn_msdyn_consoleapplicationsessiontemp_tag: WebExpand<msdyn_templatetags_Expand, msdyn_consoleapplicationsessiontemplate_Select, msdyn_consoleapplicationsessiontemplate_Filter, { msdyn_msdyn_consoleapplicationsessiontemp_tag: msdyn_consoleapplicationsessiontemplate_Result[] }>;
  msdyn_msdyn_consoleapplicationtemplate_tags: WebExpand<msdyn_templatetags_Expand, msdyn_consoleapplicationtemplate_Select, msdyn_consoleapplicationtemplate_Filter, { msdyn_msdyn_consoleapplicationtemplate_tags: msdyn_consoleapplicationtemplate_Result[] }>;
  msdyn_templatetags_AsyncOperations: WebExpand<msdyn_templatetags_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_templatetags_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_templatetags_BulkDeleteFailures: WebExpand<msdyn_templatetags_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_templatetags_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_templatetags_DuplicateBaseRecord: WebExpand<msdyn_templatetags_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_templatetags_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_templatetags_DuplicateMatchingRecord: WebExpand<msdyn_templatetags_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_templatetags_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_templatetags_MailboxTrackingFolders: WebExpand<msdyn_templatetags_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_templatetags_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_templatetags_PrincipalObjectAttributeAccesses: WebExpand<msdyn_templatetags_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_templatetags_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_templatetags_ProcessSession: WebExpand<msdyn_templatetags_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_templatetags_ProcessSession: ProcessSession_Result[] }>;
  msdyn_templatetags_SyncErrors: WebExpand<msdyn_templatetags_Expand, SyncError_Select, SyncError_Filter, { msdyn_templatetags_SyncErrors: SyncError_Result[] }>;
  msdyn_templatetags_UserEntityInstanceDatas: WebExpand<msdyn_templatetags_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_templatetags_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_templatetags_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_templatetags_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_templatetags_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_templatetags_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_templatetags_FormattedResult {
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
interface msdyn_templatetags_Result extends msdyn_templatetags_Base, msdyn_templatetags_Relationships {
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
interface msdyn_templatetags_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_templatetags_RelatedMany {
  msdyn_msdyn_consoleapplicationnotificationtag: WebMappingRetrieve<msdyn_consoleapplicationnotificationtemplate_Select,msdyn_consoleapplicationnotificationtemplate_Expand,msdyn_consoleapplicationnotificationtemplate_Filter,msdyn_consoleapplicationnotificationtemplate_Fixed,msdyn_consoleapplicationnotificationtemplate_Result,msdyn_consoleapplicationnotificationtemplate_FormattedResult>;
  msdyn_msdyn_consoleapplicationsessiontemp_tag: WebMappingRetrieve<msdyn_consoleapplicationsessiontemplate_Select,msdyn_consoleapplicationsessiontemplate_Expand,msdyn_consoleapplicationsessiontemplate_Filter,msdyn_consoleapplicationsessiontemplate_Fixed,msdyn_consoleapplicationsessiontemplate_Result,msdyn_consoleapplicationsessiontemplate_FormattedResult>;
  msdyn_msdyn_consoleapplicationtemplate_tags: WebMappingRetrieve<msdyn_consoleapplicationtemplate_Select,msdyn_consoleapplicationtemplate_Expand,msdyn_consoleapplicationtemplate_Filter,msdyn_consoleapplicationtemplate_Fixed,msdyn_consoleapplicationtemplate_Result,msdyn_consoleapplicationtemplate_FormattedResult>;
  msdyn_templatetags_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_templatetags_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_templatetags_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_templatetags_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_templatetags_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_templatetags_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_templatetags_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_templatetags_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_templatetags_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_templatetagses: WebMappingRetrieve<msdyn_templatetags_Select,msdyn_templatetags_Expand,msdyn_templatetags_Filter,msdyn_templatetags_Fixed,msdyn_templatetags_Result,msdyn_templatetags_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_templatetagses: WebMappingRelated<msdyn_templatetags_RelatedOne,msdyn_templatetags_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_templatetagses: WebMappingCUDA<msdyn_templatetags_Create,msdyn_templatetags_Update,msdyn_templatetags_Select>;
}
