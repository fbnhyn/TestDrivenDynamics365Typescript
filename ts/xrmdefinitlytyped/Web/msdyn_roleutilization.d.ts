interface msdyn_roleutilization_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_roleutilizationid?: string | null;
  msdyn_targetutilpercent?: number | null;
  msdyn_utilpercent?: number | null;
  msdyn_utilpercentdiff?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_roleutilization_statecode | null;
  statuscode?: msdyn_roleutilization_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_roleutilization_Relationships {
  msdyn_roleutilization_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_roleutilization_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_roleutilization_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_roleutilization_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_roleutilization_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_roleutilization_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_roleutilization_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_roleutilization_SyncErrors?: SyncError_Result[] | null;
  msdyn_roleutilization_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_roleutilization extends msdyn_roleutilization_Base, msdyn_roleutilization_Relationships {
  msdyn_role_bind$bookableresourcecategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_roleutilization_Create extends msdyn_roleutilization {
}
interface msdyn_roleutilization_Update extends msdyn_roleutilization {
}
interface msdyn_roleutilization_Select {
  createdby_guid: WebAttribute<msdyn_roleutilization_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_roleutilization_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_roleutilization_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_roleutilization_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_roleutilization_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_roleutilization_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_roleutilization_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_roleutilization_Select, { msdyn_name: string | null }, {  }>;
  msdyn_role_guid: WebAttribute<msdyn_roleutilization_Select, { msdyn_role_guid: string | null }, { msdyn_role_formatted?: string }>;
  msdyn_roleutilizationid: WebAttribute<msdyn_roleutilization_Select, { msdyn_roleutilizationid: string | null }, {  }>;
  msdyn_targetutilpercent: WebAttribute<msdyn_roleutilization_Select, { msdyn_targetutilpercent: number | null }, {  }>;
  msdyn_utilpercent: WebAttribute<msdyn_roleutilization_Select, { msdyn_utilpercent: number | null }, {  }>;
  msdyn_utilpercentdiff: WebAttribute<msdyn_roleutilization_Select, { msdyn_utilpercentdiff: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_roleutilization_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_roleutilization_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_roleutilization_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_roleutilization_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_roleutilization_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_roleutilization_Select, { statecode: msdyn_roleutilization_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_roleutilization_Select, { statuscode: msdyn_roleutilization_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_roleutilization_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_roleutilization_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_roleutilization_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_roleutilization_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_role_guid: XQW.Guid;
  msdyn_roleutilizationid: XQW.Guid;
  msdyn_targetutilpercent: number;
  msdyn_utilpercent: number;
  msdyn_utilpercentdiff: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_roleutilization_statecode;
  statuscode: msdyn_roleutilization_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_roleutilization_Expand {
  createdby: WebExpand<msdyn_roleutilization_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_roleutilization_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_roleutilization_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_roleutilization_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_role: WebExpand<msdyn_roleutilization_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_role: BookableResourceCategory_Result }>;
  msdyn_roleutilization_AsyncOperations: WebExpand<msdyn_roleutilization_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_roleutilization_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_roleutilization_BulkDeleteFailures: WebExpand<msdyn_roleutilization_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_roleutilization_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_roleutilization_DuplicateBaseRecord: WebExpand<msdyn_roleutilization_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_roleutilization_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_roleutilization_DuplicateMatchingRecord: WebExpand<msdyn_roleutilization_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_roleutilization_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_roleutilization_MailboxTrackingFolders: WebExpand<msdyn_roleutilization_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_roleutilization_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_roleutilization_PrincipalObjectAttributeAccesses: WebExpand<msdyn_roleutilization_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_roleutilization_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_roleutilization_ProcessSession: WebExpand<msdyn_roleutilization_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_roleutilization_ProcessSession: ProcessSession_Result[] }>;
  msdyn_roleutilization_SyncErrors: WebExpand<msdyn_roleutilization_Expand, SyncError_Select, SyncError_Filter, { msdyn_roleutilization_SyncErrors: SyncError_Result[] }>;
  msdyn_roleutilization_UserEntityInstanceDatas: WebExpand<msdyn_roleutilization_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_roleutilization_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_roleutilization_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_roleutilization_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_roleutilization_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_roleutilization_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_roleutilization_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_role_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_roleutilization_Result extends msdyn_roleutilization_Base, msdyn_roleutilization_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_role_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_roleutilization_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_role: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_roleutilization_RelatedMany {
  msdyn_roleutilization_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_roleutilization_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_roleutilization_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_roleutilization_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_roleutilization_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_roleutilization_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_roleutilization_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_roleutilization_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_roleutilization_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_roleutilizations: WebMappingRetrieve<msdyn_roleutilization_Select,msdyn_roleutilization_Expand,msdyn_roleutilization_Filter,msdyn_roleutilization_Fixed,msdyn_roleutilization_Result,msdyn_roleutilization_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_roleutilizations: WebMappingRelated<msdyn_roleutilization_RelatedOne,msdyn_roleutilization_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_roleutilizations: WebMappingCUDA<msdyn_roleutilization_Create,msdyn_roleutilization_Update,msdyn_roleutilization_Select>;
}
