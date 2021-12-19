interface msdyn_contactsuggestionrule_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_contactsuggestionruleid?: string | null;
  msdyn_customactioninputs?: string | null;
  msdyn_customactionname?: string | null;
  msdyn_descriptiontemplate?: string | null;
  msdyn_descriptiontemplateplaceholders?: string | null;
  msdyn_fetchxml?: string | null;
  msdyn_name?: string | null;
  msdyn_pathtotarget?: string | null;
  msdyn_rank?: number | null;
  msdyn_ruletype?: msdyn_contactsuggestionrule_msdyn_ruletype | null;
  msdyn_top?: number | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_contactsuggestionrule_statecode | null;
  statuscode?: msdyn_contactsuggestionrule_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_contactsuggestionrule_Relationships {
  msdyn_contactsuggestionrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_contactsuggestionrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_contactsuggestionrule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_contactsuggestionrule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_contactsuggestionrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_contactsuggestionrule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_contactsuggestionrule_SyncErrors?: SyncError_Result[] | null;
  msdyn_contactsuggestionrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_contactsuggestionrule extends msdyn_contactsuggestionrule_Base, msdyn_contactsuggestionrule_Relationships {
  msdyn_contactsuggestionrulesetid_bind$msdyn_contactsuggestionrulesets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_contactsuggestionrule_Create extends msdyn_contactsuggestionrule {
}
interface msdyn_contactsuggestionrule_Update extends msdyn_contactsuggestionrule {
}
interface msdyn_contactsuggestionrule_Select {
  componentidunique: WebAttribute<msdyn_contactsuggestionrule_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_contactsuggestionrule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_contactsuggestionrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_contactsuggestionrule_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_contactsuggestionrule_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_contactsuggestionrule_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_contactsuggestionrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_contactsuggestionruleid: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_contactsuggestionruleid: string | null }, {  }>;
  msdyn_contactsuggestionrulesetid_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_contactsuggestionrulesetid_guid: string | null }, { msdyn_contactsuggestionrulesetid_formatted?: string }>;
  msdyn_customactioninputs: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_customactioninputs: string | null }, {  }>;
  msdyn_customactionname: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_customactionname: string | null }, {  }>;
  msdyn_descriptiontemplate: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_descriptiontemplate: string | null }, {  }>;
  msdyn_descriptiontemplateplaceholders: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_descriptiontemplateplaceholders: string | null }, {  }>;
  msdyn_fetchxml: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_fetchxml: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pathtotarget: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_pathtotarget: string | null }, {  }>;
  msdyn_rank: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_rank: number | null }, {  }>;
  msdyn_ruletype: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_ruletype: msdyn_contactsuggestionrule_msdyn_ruletype | null }, { msdyn_ruletype_formatted?: string }>;
  msdyn_top: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_top: number | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_contactsuggestionrule_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_contactsuggestionrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_contactsuggestionrule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_contactsuggestionrule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_contactsuggestionrule_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_contactsuggestionrule_Select, { statecode: msdyn_contactsuggestionrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_contactsuggestionrule_Select, { statuscode: msdyn_contactsuggestionrule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_contactsuggestionrule_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_contactsuggestionrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_contactsuggestionrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_contactsuggestionrule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_contactsuggestionrule_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_contactsuggestionruleid: XQW.Guid;
  msdyn_contactsuggestionrulesetid_guid: XQW.Guid;
  msdyn_customactioninputs: string;
  msdyn_customactionname: string;
  msdyn_descriptiontemplate: string;
  msdyn_descriptiontemplateplaceholders: string;
  msdyn_fetchxml: string;
  msdyn_name: string;
  msdyn_pathtotarget: string;
  msdyn_rank: number;
  msdyn_ruletype: msdyn_contactsuggestionrule_msdyn_ruletype;
  msdyn_top: number;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_contactsuggestionrule_statecode;
  statuscode: msdyn_contactsuggestionrule_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_contactsuggestionrule_Expand {
  createdby: WebExpand<msdyn_contactsuggestionrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_contactsuggestionrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_contactsuggestionrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_contactsuggestionrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_contactsuggestionrule_AsyncOperations: WebExpand<msdyn_contactsuggestionrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_contactsuggestionrule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_contactsuggestionrule_BulkDeleteFailures: WebExpand<msdyn_contactsuggestionrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_contactsuggestionrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_contactsuggestionrule_DuplicateBaseRecord: WebExpand<msdyn_contactsuggestionrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contactsuggestionrule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_contactsuggestionrule_DuplicateMatchingRecord: WebExpand<msdyn_contactsuggestionrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contactsuggestionrule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_contactsuggestionrule_MailboxTrackingFolders: WebExpand<msdyn_contactsuggestionrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_contactsuggestionrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_contactsuggestionrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_contactsuggestionrule_ProcessSession: WebExpand<msdyn_contactsuggestionrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_contactsuggestionrule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_contactsuggestionrule_SyncErrors: WebExpand<msdyn_contactsuggestionrule_Expand, SyncError_Select, SyncError_Filter, { msdyn_contactsuggestionrule_SyncErrors: SyncError_Result[] }>;
  msdyn_contactsuggestionrule_UserEntityInstanceDatas: WebExpand<msdyn_contactsuggestionrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_contactsuggestionrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_contactsuggestionrulesetid: WebExpand<msdyn_contactsuggestionrule_Expand, msdyn_contactsuggestionruleset_Select, msdyn_contactsuggestionruleset_Filter, { msdyn_contactsuggestionrulesetid: msdyn_contactsuggestionruleset_Result }>;
  ownerid: WebExpand<msdyn_contactsuggestionrule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_contactsuggestionrule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_contactsuggestionrule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_contactsuggestionrule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_contactsuggestionrule_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_contactsuggestionrulesetid_formatted?: string;
  msdyn_ruletype_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_contactsuggestionrule_Result extends msdyn_contactsuggestionrule_Base, msdyn_contactsuggestionrule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contactsuggestionrulesetid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_contactsuggestionrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_contactsuggestionrulesetid: WebMappingRetrieve<msdyn_contactsuggestionruleset_Select,msdyn_contactsuggestionruleset_Expand,msdyn_contactsuggestionruleset_Filter,msdyn_contactsuggestionruleset_Fixed,msdyn_contactsuggestionruleset_Result,msdyn_contactsuggestionruleset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_contactsuggestionrule_RelatedMany {
  msdyn_contactsuggestionrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_contactsuggestionrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_contactsuggestionrule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contactsuggestionrule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contactsuggestionrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_contactsuggestionrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_contactsuggestionrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_contactsuggestionrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_contactsuggestionrules: WebMappingRetrieve<msdyn_contactsuggestionrule_Select,msdyn_contactsuggestionrule_Expand,msdyn_contactsuggestionrule_Filter,msdyn_contactsuggestionrule_Fixed,msdyn_contactsuggestionrule_Result,msdyn_contactsuggestionrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contactsuggestionrules: WebMappingRelated<msdyn_contactsuggestionrule_RelatedOne,msdyn_contactsuggestionrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contactsuggestionrules: WebMappingCUDA<msdyn_contactsuggestionrule_Create,msdyn_contactsuggestionrule_Update,msdyn_contactsuggestionrule_Select>;
}
