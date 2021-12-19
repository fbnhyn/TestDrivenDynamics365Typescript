interface msdyn_personalmessage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_locale_field?: msdyn_personalmessage_localefield | null;
  msdyn_message?: string | null;
  msdyn_personalmessageid?: string | null;
  msdyn_tagscontrolfield?: string | null;
  msdyn_title?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_personalmessage_statecode | null;
  statuscode?: msdyn_personalmessage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_personalmessage_Relationships {
  msdyn_msdyn_personalmessage_msdyn_octag?: msdyn_octag_Result[] | null;
  msdyn_personalmessage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_personalmessage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_personalmessage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_personalmessage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_personalmessage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_personalmessage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_personalmessage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_personalmessage_SyncErrors?: SyncError_Result[] | null;
  msdyn_personalmessage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_personalmessage extends msdyn_personalmessage_Base, msdyn_personalmessage_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_personalmessage_Create extends msdyn_personalmessage {
}
interface msdyn_personalmessage_Update extends msdyn_personalmessage {
}
interface msdyn_personalmessage_Select {
  createdby_guid: WebAttribute<msdyn_personalmessage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_personalmessage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_personalmessage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_personalmessage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_personalmessage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_personalmessage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_personalmessage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_locale_field: WebAttribute<msdyn_personalmessage_Select, { msdyn_locale_field: msdyn_personalmessage_localefield | null }, { msdyn_locale_field_formatted?: string }>;
  msdyn_message: WebAttribute<msdyn_personalmessage_Select, { msdyn_message: string | null }, {  }>;
  msdyn_personalmessageid: WebAttribute<msdyn_personalmessage_Select, { msdyn_personalmessageid: string | null }, {  }>;
  msdyn_tagscontrolfield: WebAttribute<msdyn_personalmessage_Select, { msdyn_tagscontrolfield: string | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_personalmessage_Select, { msdyn_title: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_personalmessage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_personalmessage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_personalmessage_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_personalmessage_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_personalmessage_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_personalmessage_Select, { statecode: msdyn_personalmessage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_personalmessage_Select, { statuscode: msdyn_personalmessage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_personalmessage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_personalmessage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_personalmessage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_personalmessage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_locale_field: msdyn_personalmessage_localefield;
  msdyn_message: string;
  msdyn_personalmessageid: XQW.Guid;
  msdyn_tagscontrolfield: string;
  msdyn_title: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_personalmessage_statecode;
  statuscode: msdyn_personalmessage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_personalmessage_Expand {
  createdby: WebExpand<msdyn_personalmessage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_personalmessage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_personalmessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_personalmessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_personalmessage_msdyn_octag: WebExpand<msdyn_personalmessage_Expand, msdyn_octag_Select, msdyn_octag_Filter, { msdyn_msdyn_personalmessage_msdyn_octag: msdyn_octag_Result[] }>;
  msdyn_personalmessage_AsyncOperations: WebExpand<msdyn_personalmessage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_personalmessage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_personalmessage_BulkDeleteFailures: WebExpand<msdyn_personalmessage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_personalmessage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_personalmessage_DuplicateBaseRecord: WebExpand<msdyn_personalmessage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_personalmessage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_personalmessage_DuplicateMatchingRecord: WebExpand<msdyn_personalmessage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_personalmessage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_personalmessage_MailboxTrackingFolders: WebExpand<msdyn_personalmessage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_personalmessage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_personalmessage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_personalmessage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_personalmessage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_personalmessage_ProcessSession: WebExpand<msdyn_personalmessage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_personalmessage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_personalmessage_SyncErrors: WebExpand<msdyn_personalmessage_Expand, SyncError_Select, SyncError_Filter, { msdyn_personalmessage_SyncErrors: SyncError_Result[] }>;
  msdyn_personalmessage_UserEntityInstanceDatas: WebExpand<msdyn_personalmessage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_personalmessage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_personalmessage_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_personalmessage_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_personalmessage_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_personalmessage_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_personalmessage_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_locale_field_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_personalmessage_Result extends msdyn_personalmessage_Base, msdyn_personalmessage_Relationships {
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
interface msdyn_personalmessage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_personalmessage_RelatedMany {
  msdyn_msdyn_personalmessage_msdyn_octag: WebMappingRetrieve<msdyn_octag_Select,msdyn_octag_Expand,msdyn_octag_Filter,msdyn_octag_Fixed,msdyn_octag_Result,msdyn_octag_FormattedResult>;
  msdyn_personalmessage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_personalmessage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_personalmessage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_personalmessage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_personalmessage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_personalmessage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_personalmessage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_personalmessage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_personalmessage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_personalmessages: WebMappingRetrieve<msdyn_personalmessage_Select,msdyn_personalmessage_Expand,msdyn_personalmessage_Filter,msdyn_personalmessage_Fixed,msdyn_personalmessage_Result,msdyn_personalmessage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_personalmessages: WebMappingRelated<msdyn_personalmessage_RelatedOne,msdyn_personalmessage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_personalmessages: WebMappingCUDA<msdyn_personalmessage_Create,msdyn_personalmessage_Update,msdyn_personalmessage_Select>;
}
