interface msdyn_maskingrule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_enter_test_data?: string | null;
  msdyn_masked_character?: string | null;
  msdyn_masked_test_data?: string | null;
  msdyn_maskingruleid?: string | null;
  msdyn_name?: string | null;
  msdyn_regular_expression?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_maskingrule_statecode | null;
  statuscode?: msdyn_maskingrule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_maskingrule_Relationships {
  msdyn_maskingrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_maskingrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_maskingrule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_maskingrule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_maskingrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_maskingrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_maskingrule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_maskingrule_SyncErrors?: SyncError_Result[] | null;
  msdyn_maskingrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_maskingrule extends msdyn_maskingrule_Base, msdyn_maskingrule_Relationships {
}
interface msdyn_maskingrule_Create extends msdyn_maskingrule {
}
interface msdyn_maskingrule_Update extends msdyn_maskingrule {
}
interface msdyn_maskingrule_Select {
  createdby_guid: WebAttribute<msdyn_maskingrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_maskingrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_maskingrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_maskingrule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_maskingrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_maskingrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_maskingrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_maskingrule_Select, { msdyn_description: string | null }, {  }>;
  msdyn_enter_test_data: WebAttribute<msdyn_maskingrule_Select, { msdyn_enter_test_data: string | null }, {  }>;
  msdyn_masked_character: WebAttribute<msdyn_maskingrule_Select, { msdyn_masked_character: string | null }, {  }>;
  msdyn_masked_test_data: WebAttribute<msdyn_maskingrule_Select, { msdyn_masked_test_data: string | null }, {  }>;
  msdyn_maskingruleid: WebAttribute<msdyn_maskingrule_Select, { msdyn_maskingruleid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_maskingrule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_regular_expression: WebAttribute<msdyn_maskingrule_Select, { msdyn_regular_expression: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_maskingrule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_maskingrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_maskingrule_Select, { statecode: msdyn_maskingrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_maskingrule_Select, { statuscode: msdyn_maskingrule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_maskingrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_maskingrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_maskingrule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_maskingrule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_enter_test_data: string;
  msdyn_masked_character: string;
  msdyn_masked_test_data: string;
  msdyn_maskingruleid: XQW.Guid;
  msdyn_name: string;
  msdyn_regular_expression: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_maskingrule_statecode;
  statuscode: msdyn_maskingrule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_maskingrule_Expand {
  createdby: WebExpand<msdyn_maskingrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_maskingrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_maskingrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_maskingrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_maskingrule_AsyncOperations: WebExpand<msdyn_maskingrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_maskingrule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_maskingrule_BulkDeleteFailures: WebExpand<msdyn_maskingrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_maskingrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_maskingrule_DuplicateBaseRecord: WebExpand<msdyn_maskingrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_maskingrule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_maskingrule_DuplicateMatchingRecord: WebExpand<msdyn_maskingrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_maskingrule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_maskingrule_MailboxTrackingFolders: WebExpand<msdyn_maskingrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_maskingrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_maskingrule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_maskingrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_maskingrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_maskingrule_ProcessSession: WebExpand<msdyn_maskingrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_maskingrule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_maskingrule_SyncErrors: WebExpand<msdyn_maskingrule_Expand, SyncError_Select, SyncError_Filter, { msdyn_maskingrule_SyncErrors: SyncError_Result[] }>;
  msdyn_maskingrule_UserEntityInstanceDatas: WebExpand<msdyn_maskingrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_maskingrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_maskingrule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_maskingrule_FormattedResult {
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
interface msdyn_maskingrule_Result extends msdyn_maskingrule_Base, msdyn_maskingrule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_maskingrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_maskingrule_RelatedMany {
  msdyn_maskingrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_maskingrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_maskingrule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_maskingrule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_maskingrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_maskingrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_maskingrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_maskingrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_maskingrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_maskingrules: WebMappingRetrieve<msdyn_maskingrule_Select,msdyn_maskingrule_Expand,msdyn_maskingrule_Filter,msdyn_maskingrule_Fixed,msdyn_maskingrule_Result,msdyn_maskingrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_maskingrules: WebMappingRelated<msdyn_maskingrule_RelatedOne,msdyn_maskingrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_maskingrules: WebMappingCUDA<msdyn_maskingrule_Create,msdyn_maskingrule_Update,msdyn_maskingrule_Select>;
}
