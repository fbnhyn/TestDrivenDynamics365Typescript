interface msdyn_requirementrelationship_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_minconditioncount?: number | null;
  msdyn_name?: string | null;
  msdyn_operator?: msdyn_requirementrelationship_msdyn_operator | null;
  msdyn_requirementgroupcontrolviewid?: string | null;
  msdyn_requirementrelationshipid?: string | null;
  msdyn_resourcegroupings?: msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementrelationship_statecode | null;
  statuscode?: msdyn_requirementrelationship_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementrelationship_Relationships {
  msdyn_requirementrelationship_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementrelationship_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementrelationship_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementrelationship_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementrelationship_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementrelationship_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementrelationship_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementrelationship_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementrelationship_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_requirementrelationship_parentrequirementrelationshipid?: msdyn_requirementrelationship_Result[] | null;
  msdyn_requirementrelationship_resourcerequirement_requirementrelationshipid?: msdyn_resourcerequirement_Result[] | null;
}
interface msdyn_requirementrelationship extends msdyn_requirementrelationship_Base, msdyn_requirementrelationship_Relationships {
  msdyn_parentrequirementrelationshipid_bind$msdyn_requirementrelationships?: string | null;
  msdyn_requirementgroupid_bind$msdyn_requirementgroups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementrelationship_Create extends msdyn_requirementrelationship {
}
interface msdyn_requirementrelationship_Update extends msdyn_requirementrelationship {
}
interface msdyn_requirementrelationship_Select {
  createdby_guid: WebAttribute<msdyn_requirementrelationship_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementrelationship_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementrelationship_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementrelationship_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementrelationship_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementrelationship_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementrelationship_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_minconditioncount: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_minconditioncount: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_name: string | null }, {  }>;
  msdyn_operator: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_operator: msdyn_requirementrelationship_msdyn_operator | null }, { msdyn_operator_formatted?: string }>;
  msdyn_parentrequirementrelationshipid_guid: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_parentrequirementrelationshipid_guid: string | null }, { msdyn_parentrequirementrelationshipid_formatted?: string }>;
  msdyn_requirementgroupcontrolviewid: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_requirementgroupcontrolviewid: string | null }, {  }>;
  msdyn_requirementgroupid_guid: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_requirementgroupid_guid: string | null }, { msdyn_requirementgroupid_formatted?: string }>;
  msdyn_requirementrelationshipid: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_requirementrelationshipid: string | null }, {  }>;
  msdyn_resourcegroupings: WebAttribute<msdyn_requirementrelationship_Select, { msdyn_resourcegroupings: msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings | null }, { msdyn_resourcegroupings_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_requirementrelationship_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementrelationship_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementrelationship_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementrelationship_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementrelationship_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementrelationship_Select, { statecode: msdyn_requirementrelationship_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementrelationship_Select, { statuscode: msdyn_requirementrelationship_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementrelationship_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementrelationship_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementrelationship_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementrelationship_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_minconditioncount: number;
  msdyn_name: string;
  msdyn_operator: msdyn_requirementrelationship_msdyn_operator;
  msdyn_parentrequirementrelationshipid_guid: XQW.Guid;
  msdyn_requirementgroupcontrolviewid: string;
  msdyn_requirementgroupid_guid: XQW.Guid;
  msdyn_requirementrelationshipid: XQW.Guid;
  msdyn_resourcegroupings: msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementrelationship_statecode;
  statuscode: msdyn_requirementrelationship_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementrelationship_Expand {
  createdby: WebExpand<msdyn_requirementrelationship_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementrelationship_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementrelationship_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementrelationship_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_parentrequirementrelationshipid: WebExpand<msdyn_requirementrelationship_Expand, msdyn_requirementrelationship_Select, msdyn_requirementrelationship_Filter, { msdyn_parentrequirementrelationshipid: msdyn_requirementrelationship_Result }>;
  msdyn_requirementgroupid: WebExpand<msdyn_requirementrelationship_Expand, msdyn_requirementgroup_Select, msdyn_requirementgroup_Filter, { msdyn_requirementgroupid: msdyn_requirementgroup_Result }>;
  msdyn_requirementrelationship_AsyncOperations: WebExpand<msdyn_requirementrelationship_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementrelationship_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementrelationship_BulkDeleteFailures: WebExpand<msdyn_requirementrelationship_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementrelationship_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementrelationship_DuplicateBaseRecord: WebExpand<msdyn_requirementrelationship_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementrelationship_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementrelationship_DuplicateMatchingRecord: WebExpand<msdyn_requirementrelationship_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementrelationship_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementrelationship_MailboxTrackingFolders: WebExpand<msdyn_requirementrelationship_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementrelationship_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementrelationship_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementrelationship_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementrelationship_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementrelationship_ProcessSession: WebExpand<msdyn_requirementrelationship_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementrelationship_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementrelationship_SyncErrors: WebExpand<msdyn_requirementrelationship_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementrelationship_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementrelationship_UserEntityInstanceDatas: WebExpand<msdyn_requirementrelationship_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementrelationship_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_requirementrelationship_parentrequirementrelationshipid: WebExpand<msdyn_requirementrelationship_Expand, msdyn_requirementrelationship_Select, msdyn_requirementrelationship_Filter, { msdyn_requirementrelationship_parentrequirementrelationshipid: msdyn_requirementrelationship_Result[] }>;
  msdyn_requirementrelationship_resourcerequirement_requirementrelationshipid: WebExpand<msdyn_requirementrelationship_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_requirementrelationship_resourcerequirement_requirementrelationshipid: msdyn_resourcerequirement_Result[] }>;
  ownerid: WebExpand<msdyn_requirementrelationship_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementrelationship_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementrelationship_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementrelationship_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementrelationship_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_operator_formatted?: string;
  msdyn_parentrequirementrelationshipid_formatted?: string;
  msdyn_requirementgroupid_formatted?: string;
  msdyn_resourcegroupings_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementrelationship_Result extends msdyn_requirementrelationship_Base, msdyn_requirementrelationship_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parentrequirementrelationshipid_guid: string | null;
  msdyn_requirementgroupid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_requirementrelationship_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_parentrequirementrelationshipid: WebMappingRetrieve<msdyn_requirementrelationship_Select,msdyn_requirementrelationship_Expand,msdyn_requirementrelationship_Filter,msdyn_requirementrelationship_Fixed,msdyn_requirementrelationship_Result,msdyn_requirementrelationship_FormattedResult>;
  msdyn_requirementgroupid: WebMappingRetrieve<msdyn_requirementgroup_Select,msdyn_requirementgroup_Expand,msdyn_requirementgroup_Filter,msdyn_requirementgroup_Fixed,msdyn_requirementgroup_Result,msdyn_requirementgroup_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementrelationship_RelatedMany {
  msdyn_requirementrelationship_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementrelationship_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementrelationship_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementrelationship_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementrelationship_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementrelationship_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementrelationship_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementrelationship_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementrelationship_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_requirementrelationship_parentrequirementrelationshipid: WebMappingRetrieve<msdyn_requirementrelationship_Select,msdyn_requirementrelationship_Expand,msdyn_requirementrelationship_Filter,msdyn_requirementrelationship_Fixed,msdyn_requirementrelationship_Result,msdyn_requirementrelationship_FormattedResult>;
  msdyn_requirementrelationship_resourcerequirement_requirementrelationshipid: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementrelationships: WebMappingRetrieve<msdyn_requirementrelationship_Select,msdyn_requirementrelationship_Expand,msdyn_requirementrelationship_Filter,msdyn_requirementrelationship_Fixed,msdyn_requirementrelationship_Result,msdyn_requirementrelationship_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementrelationships: WebMappingRelated<msdyn_requirementrelationship_RelatedOne,msdyn_requirementrelationship_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementrelationships: WebMappingCUDA<msdyn_requirementrelationship_Create,msdyn_requirementrelationship_Update,msdyn_requirementrelationship_Select>;
}
