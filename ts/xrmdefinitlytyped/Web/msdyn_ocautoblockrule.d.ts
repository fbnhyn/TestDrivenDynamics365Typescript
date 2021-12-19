interface msdyn_ocautoblockrule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_ocautoblockruleid?: string | null;
  msdyn_rule?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocautoblockrule_statecode | null;
  statuscode?: msdyn_ocautoblockrule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocautoblockrule_Relationships {
  msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid?: msdyn_ocflaggedspam_Result[] | null;
  msdyn_ocautoblockrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocautoblockrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocautoblockrule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocautoblockrule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocautoblockrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocautoblockrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocautoblockrule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocautoblockrule_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocautoblockrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocautoblockrule extends msdyn_ocautoblockrule_Base, msdyn_ocautoblockrule_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocautoblockrule_Create extends msdyn_ocautoblockrule {
}
interface msdyn_ocautoblockrule_Update extends msdyn_ocautoblockrule {
}
interface msdyn_ocautoblockrule_Select {
  createdby_guid: WebAttribute<msdyn_ocautoblockrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocautoblockrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocautoblockrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocautoblockrule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocautoblockrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocautoblockrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocautoblockrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_ocautoblockrule_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocautoblockrule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocautoblockruleid: WebAttribute<msdyn_ocautoblockrule_Select, { msdyn_ocautoblockruleid: string | null }, {  }>;
  msdyn_rule: WebAttribute<msdyn_ocautoblockrule_Select, { msdyn_rule: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocautoblockrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocautoblockrule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocautoblockrule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocautoblockrule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocautoblockrule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocautoblockrule_Select, { statecode: msdyn_ocautoblockrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocautoblockrule_Select, { statuscode: msdyn_ocautoblockrule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocautoblockrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocautoblockrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocautoblockrule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocautoblockrule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_ocautoblockruleid: XQW.Guid;
  msdyn_rule: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocautoblockrule_statecode;
  statuscode: msdyn_ocautoblockrule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocautoblockrule_Expand {
  createdby: WebExpand<msdyn_ocautoblockrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocautoblockrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocautoblockrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocautoblockrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid: WebExpand<msdyn_ocautoblockrule_Expand, msdyn_ocflaggedspam_Select, msdyn_ocflaggedspam_Filter, { msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid: msdyn_ocflaggedspam_Result[] }>;
  msdyn_ocautoblockrule_AsyncOperations: WebExpand<msdyn_ocautoblockrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocautoblockrule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocautoblockrule_BulkDeleteFailures: WebExpand<msdyn_ocautoblockrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocautoblockrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocautoblockrule_DuplicateBaseRecord: WebExpand<msdyn_ocautoblockrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocautoblockrule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocautoblockrule_DuplicateMatchingRecord: WebExpand<msdyn_ocautoblockrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocautoblockrule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocautoblockrule_MailboxTrackingFolders: WebExpand<msdyn_ocautoblockrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocautoblockrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocautoblockrule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocautoblockrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocautoblockrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocautoblockrule_ProcessSession: WebExpand<msdyn_ocautoblockrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocautoblockrule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocautoblockrule_SyncErrors: WebExpand<msdyn_ocautoblockrule_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocautoblockrule_SyncErrors: SyncError_Result[] }>;
  msdyn_ocautoblockrule_UserEntityInstanceDatas: WebExpand<msdyn_ocautoblockrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocautoblockrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocautoblockrule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocautoblockrule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocautoblockrule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocautoblockrule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocautoblockrule_FormattedResult {
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
interface msdyn_ocautoblockrule_Result extends msdyn_ocautoblockrule_Base, msdyn_ocautoblockrule_Relationships {
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
interface msdyn_ocautoblockrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocautoblockrule_RelatedMany {
  msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid: WebMappingRetrieve<msdyn_ocflaggedspam_Select,msdyn_ocflaggedspam_Expand,msdyn_ocflaggedspam_Filter,msdyn_ocflaggedspam_Fixed,msdyn_ocflaggedspam_Result,msdyn_ocflaggedspam_FormattedResult>;
  msdyn_ocautoblockrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocautoblockrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocautoblockrule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocautoblockrule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocautoblockrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocautoblockrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocautoblockrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocautoblockrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocautoblockrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocautoblockrules: WebMappingRetrieve<msdyn_ocautoblockrule_Select,msdyn_ocautoblockrule_Expand,msdyn_ocautoblockrule_Filter,msdyn_ocautoblockrule_Fixed,msdyn_ocautoblockrule_Result,msdyn_ocautoblockrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocautoblockrules: WebMappingRelated<msdyn_ocautoblockrule_RelatedOne,msdyn_ocautoblockrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocautoblockrules: WebMappingCUDA<msdyn_ocautoblockrule_Create,msdyn_ocautoblockrule_Update,msdyn_ocautoblockrule_Select>;
}
