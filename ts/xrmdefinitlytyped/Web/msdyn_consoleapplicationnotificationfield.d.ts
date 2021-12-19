interface msdyn_consoleapplicationnotificationfield_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_consoleapplicationnotificationfieldid?: string | null;
  msdyn_lineheader?: string | null;
  msdyn_name?: string | null;
  msdyn_priority?: number | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleapplicationnotificationfield_statecode | null;
  statuscode?: msdyn_consoleapplicationnotificationfield_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleapplicationnotificationfield_Relationships {
  msdyn_consoleapplicationnotificationfield_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleapplicationnotificationfield_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleapplicationnotificationfield_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationnotificationfield_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationnotificationfield_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleapplicationnotificationfield_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleapplicationnotificationfield_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleapplicationnotificationfield_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleapplicationnotificationfield_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationnotificationtempl?: msdyn_consoleapplicationnotificationtemplate_Result[] | null;
}
interface msdyn_consoleapplicationnotificationfield extends msdyn_consoleapplicationnotificationfield_Base, msdyn_consoleapplicationnotificationfield_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_consoleapplicationnotificationfield_Create extends msdyn_consoleapplicationnotificationfield {
}
interface msdyn_consoleapplicationnotificationfield_Update extends msdyn_consoleapplicationnotificationfield {
}
interface msdyn_consoleapplicationnotificationfield_Select {
  createdby_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_consoleapplicationnotificationfieldid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { msdyn_consoleapplicationnotificationfieldid: string | null }, {  }>;
  msdyn_lineheader: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { msdyn_lineheader: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { msdyn_name: string | null }, {  }>;
  msdyn_priority: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { msdyn_priority: number | null }, {  }>;
  msdyn_value: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { statecode: msdyn_consoleapplicationnotificationfield_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { statuscode: msdyn_consoleapplicationnotificationfield_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleapplicationnotificationfield_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleapplicationnotificationfield_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_consoleapplicationnotificationfieldid: XQW.Guid;
  msdyn_lineheader: string;
  msdyn_name: string;
  msdyn_priority: number;
  msdyn_value: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_consoleapplicationnotificationfield_statecode;
  statuscode: msdyn_consoleapplicationnotificationfield_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleapplicationnotificationfield_Expand {
  createdby: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_consoleapplicationnotificationfield_AsyncOperations: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleapplicationnotificationfield_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleapplicationnotificationfield_BulkDeleteFailures: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleapplicationnotificationfield_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleapplicationnotificationfield_DuplicateBaseRecord: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationnotificationfield_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationnotificationfield_DuplicateMatchingRecord: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationnotificationfield_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationnotificationfield_MailboxTrackingFolders: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleapplicationnotificationfield_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleapplicationnotificationfield_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleapplicationnotificationfield_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleapplicationnotificationfield_ProcessSession: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleapplicationnotificationfield_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleapplicationnotificationfield_SyncErrors: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleapplicationnotificationfield_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleapplicationnotificationfield_UserEntityInstanceDatas: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleapplicationnotificationfield_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationnotificationtempl: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, msdyn_consoleapplicationnotificationtemplate_Select, msdyn_consoleapplicationnotificationtemplate_Filter, { msdyn_msdyn_consoleapplicationnotificationtempl: msdyn_consoleapplicationnotificationtemplate_Result[] }>;
  ownerid: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_consoleapplicationnotificationfield_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_consoleapplicationnotificationfield_FormattedResult {
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
interface msdyn_consoleapplicationnotificationfield_Result extends msdyn_consoleapplicationnotificationfield_Base, msdyn_consoleapplicationnotificationfield_Relationships {
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
interface msdyn_consoleapplicationnotificationfield_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_consoleapplicationnotificationfield_RelatedMany {
  msdyn_consoleapplicationnotificationfield_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleapplicationnotificationfield_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationnotificationtempl: WebMappingRetrieve<msdyn_consoleapplicationnotificationtemplate_Select,msdyn_consoleapplicationnotificationtemplate_Expand,msdyn_consoleapplicationnotificationtemplate_Filter,msdyn_consoleapplicationnotificationtemplate_Fixed,msdyn_consoleapplicationnotificationtemplate_Result,msdyn_consoleapplicationnotificationtemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleapplicationnotificationfields: WebMappingRetrieve<msdyn_consoleapplicationnotificationfield_Select,msdyn_consoleapplicationnotificationfield_Expand,msdyn_consoleapplicationnotificationfield_Filter,msdyn_consoleapplicationnotificationfield_Fixed,msdyn_consoleapplicationnotificationfield_Result,msdyn_consoleapplicationnotificationfield_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleapplicationnotificationfields: WebMappingRelated<msdyn_consoleapplicationnotificationfield_RelatedOne,msdyn_consoleapplicationnotificationfield_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleapplicationnotificationfields: WebMappingCUDA<msdyn_consoleapplicationnotificationfield_Create,msdyn_consoleapplicationnotificationfield_Update,msdyn_consoleapplicationnotificationfield_Select>;
}
