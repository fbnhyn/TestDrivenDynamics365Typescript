interface msdyn_solutionhealthruleargument_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_key?: string | null;
  msdyn_name?: string | null;
  msdyn_solutionhealthruleargumentid?: string | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_solutionhealthruleargument_statecode | null;
  statuscode?: msdyn_solutionhealthruleargument_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_solutionhealthruleargument_Relationships {
  msdyn_SolutionHealthRule?: msdyn_solutionhealthrule_Result | null;
  msdyn_solutionhealthruleargument_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_solutionhealthruleargument_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_solutionhealthruleargument_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_solutionhealthruleargument_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_solutionhealthruleargument_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_solutionhealthruleargument_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_solutionhealthruleargument_SyncErrors?: SyncError_Result[] | null;
  msdyn_solutionhealthruleargument_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_solutionhealthruleargument extends msdyn_solutionhealthruleargument_Base, msdyn_solutionhealthruleargument_Relationships {
  msdyn_SolutionHealthRule_bind$msdyn_solutionhealthrules?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_solutionhealthruleargument_Create extends msdyn_solutionhealthruleargument {
}
interface msdyn_solutionhealthruleargument_Update extends msdyn_solutionhealthruleargument {
}
interface msdyn_solutionhealthruleargument_Select {
  createdby_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_solutionhealthruleargument_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_solutionhealthruleargument_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_solutionhealthruleargument_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_key: WebAttribute<msdyn_solutionhealthruleargument_Select, { msdyn_key: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_solutionhealthruleargument_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutionhealthrule_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { msdyn_solutionhealthrule_guid: string | null }, { msdyn_solutionhealthrule_formatted?: string }>;
  msdyn_solutionhealthruleargumentid: WebAttribute<msdyn_solutionhealthruleargument_Select, { msdyn_solutionhealthruleargumentid: string | null }, {  }>;
  msdyn_value: WebAttribute<msdyn_solutionhealthruleargument_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_solutionhealthruleargument_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_solutionhealthruleargument_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_solutionhealthruleargument_Select, { statecode: msdyn_solutionhealthruleargument_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_solutionhealthruleargument_Select, { statuscode: msdyn_solutionhealthruleargument_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_solutionhealthruleargument_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_solutionhealthruleargument_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_solutionhealthruleargument_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_solutionhealthruleargument_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_key: string;
  msdyn_name: string;
  msdyn_solutionhealthrule_guid: XQW.Guid;
  msdyn_solutionhealthruleargumentid: XQW.Guid;
  msdyn_value: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_solutionhealthruleargument_statecode;
  statuscode: msdyn_solutionhealthruleargument_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_solutionhealthruleargument_Expand {
  createdby: WebExpand<msdyn_solutionhealthruleargument_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_solutionhealthruleargument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_solutionhealthruleargument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_solutionhealthruleargument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_SolutionHealthRule: WebExpand<msdyn_solutionhealthruleargument_Expand, msdyn_solutionhealthrule_Select, msdyn_solutionhealthrule_Filter, { msdyn_SolutionHealthRule: msdyn_solutionhealthrule_Result }>;
  msdyn_solutionhealthruleargument_AsyncOperations: WebExpand<msdyn_solutionhealthruleargument_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_solutionhealthruleargument_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_solutionhealthruleargument_BulkDeleteFailures: WebExpand<msdyn_solutionhealthruleargument_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_solutionhealthruleargument_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_solutionhealthruleargument_DuplicateBaseRecord: WebExpand<msdyn_solutionhealthruleargument_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_solutionhealthruleargument_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_solutionhealthruleargument_DuplicateMatchingRecord: WebExpand<msdyn_solutionhealthruleargument_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_solutionhealthruleargument_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_solutionhealthruleargument_MailboxTrackingFolders: WebExpand<msdyn_solutionhealthruleargument_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_solutionhealthruleargument_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses: WebExpand<msdyn_solutionhealthruleargument_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_solutionhealthruleargument_ProcessSession: WebExpand<msdyn_solutionhealthruleargument_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_solutionhealthruleargument_ProcessSession: ProcessSession_Result[] }>;
  msdyn_solutionhealthruleargument_SyncErrors: WebExpand<msdyn_solutionhealthruleargument_Expand, SyncError_Select, SyncError_Filter, { msdyn_solutionhealthruleargument_SyncErrors: SyncError_Result[] }>;
  msdyn_solutionhealthruleargument_UserEntityInstanceDatas: WebExpand<msdyn_solutionhealthruleargument_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_solutionhealthruleargument_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_solutionhealthruleargument_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_solutionhealthruleargument_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_solutionhealthruleargument_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_solutionhealthruleargument_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_solutionhealthruleargument_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_solutionhealthrule_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_solutionhealthruleargument_Result extends msdyn_solutionhealthruleargument_Base, msdyn_solutionhealthruleargument_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_solutionhealthrule_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_solutionhealthruleargument_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_SolutionHealthRule: WebMappingRetrieve<msdyn_solutionhealthrule_Select,msdyn_solutionhealthrule_Expand,msdyn_solutionhealthrule_Filter,msdyn_solutionhealthrule_Fixed,msdyn_solutionhealthrule_Result,msdyn_solutionhealthrule_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_solutionhealthruleargument_RelatedMany {
  msdyn_solutionhealthruleargument_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_solutionhealthruleargument_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_solutionhealthruleargument_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_solutionhealthruleargument_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_solutionhealthruleargument_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_solutionhealthruleargument_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_solutionhealthruleargument_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_solutionhealthruleargument_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_solutionhealthrulearguments: WebMappingRetrieve<msdyn_solutionhealthruleargument_Select,msdyn_solutionhealthruleargument_Expand,msdyn_solutionhealthruleargument_Filter,msdyn_solutionhealthruleargument_Fixed,msdyn_solutionhealthruleargument_Result,msdyn_solutionhealthruleargument_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutionhealthrulearguments: WebMappingRelated<msdyn_solutionhealthruleargument_RelatedOne,msdyn_solutionhealthruleargument_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutionhealthrulearguments: WebMappingCUDA<msdyn_solutionhealthruleargument_Create,msdyn_solutionhealthruleargument_Update,msdyn_solutionhealthruleargument_Select>;
}
