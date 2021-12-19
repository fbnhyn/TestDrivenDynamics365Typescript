interface msdyn_solutionhealthruleset_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_solutionhealthrulesetid?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_solutionhealthruleset_statecode | null;
  statuscode?: msdyn_solutionhealthruleset_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_solutionhealthruleset_Relationships {
  msdyn_msdyn_solutionhealthruleset_msdyn_analysi?: msdyn_analysiscomponent_Result[] | null;
  msdyn_msdyn_solutionhealthruleset_msdyn_solutio?: msdyn_solutionhealthrule_Result[] | null;
  msdyn_solutionhealthruleset_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_solutionhealthruleset_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_solutionhealthruleset_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_solutionhealthruleset_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_solutionhealthruleset_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_solutionhealthruleset_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_solutionhealthruleset_SyncErrors?: SyncError_Result[] | null;
  msdyn_solutionhealthruleset_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_solutionhealthruleset extends msdyn_solutionhealthruleset_Base, msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_Create extends msdyn_solutionhealthruleset {
}
interface msdyn_solutionhealthruleset_Update extends msdyn_solutionhealthruleset {
}
interface msdyn_solutionhealthruleset_Select {
  createdby_guid: WebAttribute<msdyn_solutionhealthruleset_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_solutionhealthruleset_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_solutionhealthruleset_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_solutionhealthruleset_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_solutionhealthruleset_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_solutionhealthruleset_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_solutionhealthruleset_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_solutionhealthruleset_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_solutionhealthruleset_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutionhealthrulesetid: WebAttribute<msdyn_solutionhealthruleset_Select, { msdyn_solutionhealthrulesetid: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_solutionhealthruleset_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_solutionhealthruleset_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_solutionhealthruleset_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_solutionhealthruleset_Select, { statecode: msdyn_solutionhealthruleset_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_solutionhealthruleset_Select, { statuscode: msdyn_solutionhealthruleset_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_solutionhealthruleset_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_solutionhealthruleset_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_solutionhealthruleset_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_solutionhealthruleset_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_solutionhealthrulesetid: XQW.Guid;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_solutionhealthruleset_statecode;
  statuscode: msdyn_solutionhealthruleset_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_solutionhealthruleset_Expand {
  createdby: WebExpand<msdyn_solutionhealthruleset_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_solutionhealthruleset_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_solutionhealthruleset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_solutionhealthruleset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_solutionhealthruleset_msdyn_analysi: WebExpand<msdyn_solutionhealthruleset_Expand, msdyn_analysiscomponent_Select, msdyn_analysiscomponent_Filter, { msdyn_msdyn_solutionhealthruleset_msdyn_analysi: msdyn_analysiscomponent_Result[] }>;
  msdyn_msdyn_solutionhealthruleset_msdyn_solutio: WebExpand<msdyn_solutionhealthruleset_Expand, msdyn_solutionhealthrule_Select, msdyn_solutionhealthrule_Filter, { msdyn_msdyn_solutionhealthruleset_msdyn_solutio: msdyn_solutionhealthrule_Result[] }>;
  msdyn_solutionhealthruleset_AsyncOperations: WebExpand<msdyn_solutionhealthruleset_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_solutionhealthruleset_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_solutionhealthruleset_BulkDeleteFailures: WebExpand<msdyn_solutionhealthruleset_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_solutionhealthruleset_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_solutionhealthruleset_DuplicateBaseRecord: WebExpand<msdyn_solutionhealthruleset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_solutionhealthruleset_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_solutionhealthruleset_DuplicateMatchingRecord: WebExpand<msdyn_solutionhealthruleset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_solutionhealthruleset_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_solutionhealthruleset_MailboxTrackingFolders: WebExpand<msdyn_solutionhealthruleset_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_solutionhealthruleset_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses: WebExpand<msdyn_solutionhealthruleset_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_solutionhealthruleset_ProcessSession: WebExpand<msdyn_solutionhealthruleset_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_solutionhealthruleset_ProcessSession: ProcessSession_Result[] }>;
  msdyn_solutionhealthruleset_SyncErrors: WebExpand<msdyn_solutionhealthruleset_Expand, SyncError_Select, SyncError_Filter, { msdyn_solutionhealthruleset_SyncErrors: SyncError_Result[] }>;
  msdyn_solutionhealthruleset_UserEntityInstanceDatas: WebExpand<msdyn_solutionhealthruleset_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_solutionhealthruleset_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_solutionhealthruleset_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_solutionhealthruleset_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_solutionhealthruleset_Result extends msdyn_solutionhealthruleset_Base, msdyn_solutionhealthruleset_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_solutionhealthruleset_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_solutionhealthruleset_RelatedMany {
  msdyn_msdyn_solutionhealthruleset_msdyn_analysi: WebMappingRetrieve<msdyn_analysiscomponent_Select,msdyn_analysiscomponent_Expand,msdyn_analysiscomponent_Filter,msdyn_analysiscomponent_Fixed,msdyn_analysiscomponent_Result,msdyn_analysiscomponent_FormattedResult>;
  msdyn_msdyn_solutionhealthruleset_msdyn_solutio: WebMappingRetrieve<msdyn_solutionhealthrule_Select,msdyn_solutionhealthrule_Expand,msdyn_solutionhealthrule_Filter,msdyn_solutionhealthrule_Fixed,msdyn_solutionhealthrule_Result,msdyn_solutionhealthrule_FormattedResult>;
  msdyn_solutionhealthruleset_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_solutionhealthruleset_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_solutionhealthruleset_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_solutionhealthruleset_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_solutionhealthruleset_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_solutionhealthruleset_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_solutionhealthruleset_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_solutionhealthruleset_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_solutionhealthrulesets: WebMappingRetrieve<msdyn_solutionhealthruleset_Select,msdyn_solutionhealthruleset_Expand,msdyn_solutionhealthruleset_Filter,msdyn_solutionhealthruleset_Fixed,msdyn_solutionhealthruleset_Result,msdyn_solutionhealthruleset_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutionhealthrulesets: WebMappingRelated<msdyn_solutionhealthruleset_RelatedOne,msdyn_solutionhealthruleset_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutionhealthrulesets: WebMappingCUDA<msdyn_solutionhealthruleset_Create,msdyn_solutionhealthruleset_Update,msdyn_solutionhealthruleset_Select>;
}
