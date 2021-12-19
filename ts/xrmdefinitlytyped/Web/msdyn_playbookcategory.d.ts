interface msdyn_playbookcategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_playbookcategoryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_playbookcategory_statecode | null;
  statuscode?: msdyn_playbookcategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_playbookcategory_Relationships {
  category_playbooktemplate?: msdyn_playbooktemplate_Result[] | null;
  msdyn_playbookcategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_playbookcategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_playbookcategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookcategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookcategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_playbookcategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_playbookcategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_playbookcategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_playbookcategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_playbookcategory_msdyn_playbookinstance?: msdyn_playbookinstance_Result[] | null;
}
interface msdyn_playbookcategory extends msdyn_playbookcategory_Base, msdyn_playbookcategory_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_playbookcategory_Create extends msdyn_playbookcategory {
}
interface msdyn_playbookcategory_Update extends msdyn_playbookcategory {
}
interface msdyn_playbookcategory_Select {
  createdby_guid: WebAttribute<msdyn_playbookcategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_playbookcategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_playbookcategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_playbookcategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_playbookcategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_playbookcategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_playbookcategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_playbookcategory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_playbookcategory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_playbookcategoryid: WebAttribute<msdyn_playbookcategory_Select, { msdyn_playbookcategoryid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_playbookcategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_playbookcategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_playbookcategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_playbookcategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_playbookcategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_playbookcategory_Select, { statecode: msdyn_playbookcategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_playbookcategory_Select, { statuscode: msdyn_playbookcategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_playbookcategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_playbookcategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_playbookcategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_playbookcategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_playbookcategoryid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_playbookcategory_statecode;
  statuscode: msdyn_playbookcategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_playbookcategory_Expand {
  category_playbooktemplate: WebExpand<msdyn_playbookcategory_Expand, msdyn_playbooktemplate_Select, msdyn_playbooktemplate_Filter, { category_playbooktemplate: msdyn_playbooktemplate_Result[] }>;
  createdby: WebExpand<msdyn_playbookcategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_playbookcategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_playbookcategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_playbookcategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_playbookcategory_AsyncOperations: WebExpand<msdyn_playbookcategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_playbookcategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_playbookcategory_BulkDeleteFailures: WebExpand<msdyn_playbookcategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_playbookcategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_playbookcategory_DuplicateBaseRecord: WebExpand<msdyn_playbookcategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookcategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookcategory_DuplicateMatchingRecord: WebExpand<msdyn_playbookcategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookcategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookcategory_MailboxTrackingFolders: WebExpand<msdyn_playbookcategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_playbookcategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_playbookcategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_playbookcategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_playbookcategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_playbookcategory_ProcessSession: WebExpand<msdyn_playbookcategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_playbookcategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_playbookcategory_SyncErrors: WebExpand<msdyn_playbookcategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_playbookcategory_SyncErrors: SyncError_Result[] }>;
  msdyn_playbookcategory_UserEntityInstanceDatas: WebExpand<msdyn_playbookcategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_playbookcategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_playbookcategory_msdyn_playbookinstance: WebExpand<msdyn_playbookcategory_Expand, msdyn_playbookinstance_Select, msdyn_playbookinstance_Filter, { msdyn_playbookcategory_msdyn_playbookinstance: msdyn_playbookinstance_Result[] }>;
  ownerid: WebExpand<msdyn_playbookcategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_playbookcategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_playbookcategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_playbookcategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_playbookcategory_FormattedResult {
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
interface msdyn_playbookcategory_Result extends msdyn_playbookcategory_Base, msdyn_playbookcategory_Relationships {
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
interface msdyn_playbookcategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_playbookcategory_RelatedMany {
  category_playbooktemplate: WebMappingRetrieve<msdyn_playbooktemplate_Select,msdyn_playbooktemplate_Expand,msdyn_playbooktemplate_Filter,msdyn_playbooktemplate_Fixed,msdyn_playbooktemplate_Result,msdyn_playbooktemplate_FormattedResult>;
  msdyn_playbookcategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_playbookcategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_playbookcategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookcategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookcategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_playbookcategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_playbookcategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_playbookcategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_playbookcategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_playbookcategory_msdyn_playbookinstance: WebMappingRetrieve<msdyn_playbookinstance_Select,msdyn_playbookinstance_Expand,msdyn_playbookinstance_Filter,msdyn_playbookinstance_Fixed,msdyn_playbookinstance_Result,msdyn_playbookinstance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_playbookcategories: WebMappingRetrieve<msdyn_playbookcategory_Select,msdyn_playbookcategory_Expand,msdyn_playbookcategory_Filter,msdyn_playbookcategory_Fixed,msdyn_playbookcategory_Result,msdyn_playbookcategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_playbookcategories: WebMappingRelated<msdyn_playbookcategory_RelatedOne,msdyn_playbookcategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_playbookcategories: WebMappingCUDA<msdyn_playbookcategory_Create,msdyn_playbookcategory_Update,msdyn_playbookcategory_Select>;
}
