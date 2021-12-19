interface msdyn_solutionhealthrule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_componenttype?: string | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_owningsolutionid?: string | null;
  msdyn_resolutionmessage?: string | null;
  msdyn_resolutiontype?: msdyn_solutionhealthrule_msdyn_resolutiontype | null;
  msdyn_solutionhealthruleid?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_solutionhealthrule_statecode | null;
  statuscode?: msdyn_solutionhealthrule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_solutionhealthrule_Relationships {
  msdyn_Workflow?: Workflow_Result | null;
  msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule?: msdyn_solutionhealthruleargument_Result[] | null;
  msdyn_solutionhealthrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_solutionhealthrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_solutionhealthrule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_solutionhealthrule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_solutionhealthrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_solutionhealthrule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_solutionhealthrule_SyncErrors?: SyncError_Result[] | null;
  msdyn_solutionhealthrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_solutionhealthrulesetId?: msdyn_solutionhealthruleset_Result | null;
}
interface msdyn_solutionhealthrule extends msdyn_solutionhealthrule_Base, msdyn_solutionhealthrule_Relationships {
  msdyn_Workflow_bind$workflows?: string | null;
  msdyn_resolutionaction_bind$workflows?: string | null;
  msdyn_solutionhealthrulesetId_bind$msdyn_solutionhealthrulesets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_solutionhealthrule_Create extends msdyn_solutionhealthrule {
}
interface msdyn_solutionhealthrule_Update extends msdyn_solutionhealthrule {
}
interface msdyn_solutionhealthrule_Select {
  createdby_guid: WebAttribute<msdyn_solutionhealthrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_solutionhealthrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_solutionhealthrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_solutionhealthrule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_solutionhealthrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_solutionhealthrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_solutionhealthrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_componenttype: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_componenttype: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_owningsolutionid: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_owningsolutionid: string | null }, {  }>;
  msdyn_resolutionaction_guid: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_resolutionaction_guid: string | null }, { msdyn_resolutionaction_formatted?: string }>;
  msdyn_resolutionmessage: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_resolutionmessage: string | null }, {  }>;
  msdyn_resolutiontype: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_resolutiontype: msdyn_solutionhealthrule_msdyn_resolutiontype | null }, { msdyn_resolutiontype_formatted?: string }>;
  msdyn_solutionhealthruleid: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_solutionhealthruleid: string | null }, {  }>;
  msdyn_solutionhealthrulesetid_guid: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_solutionhealthrulesetid_guid: string | null }, { msdyn_solutionhealthrulesetid_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_workflow_guid: WebAttribute<msdyn_solutionhealthrule_Select, { msdyn_workflow_guid: string | null }, { msdyn_workflow_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_solutionhealthrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_solutionhealthrule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_solutionhealthrule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_solutionhealthrule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_solutionhealthrule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_solutionhealthrule_Select, { statecode: msdyn_solutionhealthrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_solutionhealthrule_Select, { statuscode: msdyn_solutionhealthrule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_solutionhealthrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_solutionhealthrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_solutionhealthrule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_solutionhealthrule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_componenttype: string;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_owningsolutionid: string;
  msdyn_resolutionaction_guid: XQW.Guid;
  msdyn_resolutionmessage: string;
  msdyn_resolutiontype: msdyn_solutionhealthrule_msdyn_resolutiontype;
  msdyn_solutionhealthruleid: XQW.Guid;
  msdyn_solutionhealthrulesetid_guid: XQW.Guid;
  msdyn_uniquename: string;
  msdyn_workflow_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_solutionhealthrule_statecode;
  statuscode: msdyn_solutionhealthrule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_solutionhealthrule_Expand {
  createdby: WebExpand<msdyn_solutionhealthrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_solutionhealthrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_solutionhealthrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_solutionhealthrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Workflow: WebExpand<msdyn_solutionhealthrule_Expand, Workflow_Select, Workflow_Filter, { msdyn_Workflow: Workflow_Result }>;
  msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule: WebExpand<msdyn_solutionhealthrule_Expand, msdyn_solutionhealthruleargument_Select, msdyn_solutionhealthruleargument_Filter, { msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule: msdyn_solutionhealthruleargument_Result[] }>;
  msdyn_resolutionaction: WebExpand<msdyn_solutionhealthrule_Expand, Workflow_Select, Workflow_Filter, { msdyn_resolutionaction: Workflow_Result }>;
  msdyn_solutionhealthrule_AsyncOperations: WebExpand<msdyn_solutionhealthrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_solutionhealthrule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_solutionhealthrule_BulkDeleteFailures: WebExpand<msdyn_solutionhealthrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_solutionhealthrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_solutionhealthrule_DuplicateBaseRecord: WebExpand<msdyn_solutionhealthrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_solutionhealthrule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_solutionhealthrule_DuplicateMatchingRecord: WebExpand<msdyn_solutionhealthrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_solutionhealthrule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_solutionhealthrule_MailboxTrackingFolders: WebExpand<msdyn_solutionhealthrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_solutionhealthrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_solutionhealthrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_solutionhealthrule_ProcessSession: WebExpand<msdyn_solutionhealthrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_solutionhealthrule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_solutionhealthrule_SyncErrors: WebExpand<msdyn_solutionhealthrule_Expand, SyncError_Select, SyncError_Filter, { msdyn_solutionhealthrule_SyncErrors: SyncError_Result[] }>;
  msdyn_solutionhealthrule_UserEntityInstanceDatas: WebExpand<msdyn_solutionhealthrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_solutionhealthrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_solutionhealthrulesetId: WebExpand<msdyn_solutionhealthrule_Expand, msdyn_solutionhealthruleset_Select, msdyn_solutionhealthruleset_Filter, { msdyn_solutionhealthrulesetId: msdyn_solutionhealthruleset_Result }>;
  ownerid: WebExpand<msdyn_solutionhealthrule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_solutionhealthrule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_solutionhealthrule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_solutionhealthrule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_solutionhealthrule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_resolutionaction_formatted?: string;
  msdyn_resolutiontype_formatted?: string;
  msdyn_solutionhealthrulesetid_formatted?: string;
  msdyn_workflow_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_solutionhealthrule_Result extends msdyn_solutionhealthrule_Base, msdyn_solutionhealthrule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_resolutionaction_guid: string | null;
  msdyn_solutionhealthrulesetid_guid: string | null;
  msdyn_workflow_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_solutionhealthrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  msdyn_resolutionaction: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  msdyn_solutionhealthrulesetId: WebMappingRetrieve<msdyn_solutionhealthruleset_Select,msdyn_solutionhealthruleset_Expand,msdyn_solutionhealthruleset_Filter,msdyn_solutionhealthruleset_Fixed,msdyn_solutionhealthruleset_Result,msdyn_solutionhealthruleset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_solutionhealthrule_RelatedMany {
  msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule: WebMappingRetrieve<msdyn_solutionhealthruleargument_Select,msdyn_solutionhealthruleargument_Expand,msdyn_solutionhealthruleargument_Filter,msdyn_solutionhealthruleargument_Fixed,msdyn_solutionhealthruleargument_Result,msdyn_solutionhealthruleargument_FormattedResult>;
  msdyn_solutionhealthrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_solutionhealthrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_solutionhealthrule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_solutionhealthrule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_solutionhealthrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_solutionhealthrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_solutionhealthrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_solutionhealthrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_solutionhealthrules: WebMappingRetrieve<msdyn_solutionhealthrule_Select,msdyn_solutionhealthrule_Expand,msdyn_solutionhealthrule_Filter,msdyn_solutionhealthrule_Fixed,msdyn_solutionhealthrule_Result,msdyn_solutionhealthrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutionhealthrules: WebMappingRelated<msdyn_solutionhealthrule_RelatedOne,msdyn_solutionhealthrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutionhealthrules: WebMappingCUDA<msdyn_solutionhealthrule_Create,msdyn_solutionhealthrule_Update,msdyn_solutionhealthrule_Select>;
}
