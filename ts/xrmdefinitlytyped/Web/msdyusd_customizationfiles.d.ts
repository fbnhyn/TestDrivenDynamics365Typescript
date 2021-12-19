interface msdyusd_customizationfiles_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_customizationfilesid?: string | null;
  msdyusd_customizationversion?: string | null;
  msdyusd_description?: string | null;
  msdyusd_filepicker?: string | null;
  msdyusd_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_customizationfiles_statecode | null;
  statuscode?: msdyusd_customizationfiles_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_customizationfiles_Relationships {
  msdyusd_customizationfiles_Annotations?: Annotation_Result[] | null;
  msdyusd_customizationfiles_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_customizationfiles_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_customizationfiles_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_customizationfiles_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_customizationfiles_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_customizationfiles_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_customizationfiles_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_customizationfiles_SyncErrors?: SyncError_Result[] | null;
  msdyusd_customizationfiles_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_customizationfiles_configuration?: msdyusd_configuration_Result[] | null;
}
interface msdyusd_customizationfiles extends msdyusd_customizationfiles_Base, msdyusd_customizationfiles_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_customizationfiles_Create extends msdyusd_customizationfiles {
}
interface msdyusd_customizationfiles_Update extends msdyusd_customizationfiles {
}
interface msdyusd_customizationfiles_Select {
  createdby_guid: WebAttribute<msdyusd_customizationfiles_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_customizationfiles_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_customizationfiles_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_customizationfiles_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_customizationfiles_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_customizationfiles_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_customizationfiles_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_customizationfilesid: WebAttribute<msdyusd_customizationfiles_Select, { msdyusd_customizationfilesid: string | null }, {  }>;
  msdyusd_customizationversion: WebAttribute<msdyusd_customizationfiles_Select, { msdyusd_customizationversion: string | null }, {  }>;
  msdyusd_description: WebAttribute<msdyusd_customizationfiles_Select, { msdyusd_description: string | null }, {  }>;
  msdyusd_filepicker: WebAttribute<msdyusd_customizationfiles_Select, { msdyusd_filepicker: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_customizationfiles_Select, { msdyusd_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_customizationfiles_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_customizationfiles_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_customizationfiles_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_customizationfiles_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_customizationfiles_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_customizationfiles_Select, { statecode: msdyusd_customizationfiles_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_customizationfiles_Select, { statuscode: msdyusd_customizationfiles_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_customizationfiles_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_customizationfiles_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_customizationfiles_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_customizationfiles_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_customizationfilesid: XQW.Guid;
  msdyusd_customizationversion: string;
  msdyusd_description: string;
  msdyusd_filepicker: string;
  msdyusd_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_customizationfiles_statecode;
  statuscode: msdyusd_customizationfiles_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_customizationfiles_Expand {
  createdby: WebExpand<msdyusd_customizationfiles_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_customizationfiles_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_customizationfiles_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_customizationfiles_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_customizationfiles_Annotations: WebExpand<msdyusd_customizationfiles_Expand, Annotation_Select, Annotation_Filter, { msdyusd_customizationfiles_Annotations: Annotation_Result[] }>;
  msdyusd_customizationfiles_AsyncOperations: WebExpand<msdyusd_customizationfiles_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_customizationfiles_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_customizationfiles_BulkDeleteFailures: WebExpand<msdyusd_customizationfiles_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_customizationfiles_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_customizationfiles_DuplicateBaseRecord: WebExpand<msdyusd_customizationfiles_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_customizationfiles_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_customizationfiles_DuplicateMatchingRecord: WebExpand<msdyusd_customizationfiles_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_customizationfiles_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_customizationfiles_MailboxTrackingFolders: WebExpand<msdyusd_customizationfiles_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_customizationfiles_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_customizationfiles_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_customizationfiles_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_customizationfiles_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_customizationfiles_ProcessSession: WebExpand<msdyusd_customizationfiles_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_customizationfiles_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_customizationfiles_SyncErrors: WebExpand<msdyusd_customizationfiles_Expand, SyncError_Select, SyncError_Filter, { msdyusd_customizationfiles_SyncErrors: SyncError_Result[] }>;
  msdyusd_customizationfiles_UserEntityInstanceDatas: WebExpand<msdyusd_customizationfiles_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_customizationfiles_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_customizationfiles_configuration: WebExpand<msdyusd_customizationfiles_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_customizationfiles_configuration: msdyusd_configuration_Result[] }>;
  ownerid: WebExpand<msdyusd_customizationfiles_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_customizationfiles_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_customizationfiles_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_customizationfiles_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_customizationfiles_FormattedResult {
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
interface msdyusd_customizationfiles_Result extends msdyusd_customizationfiles_Base, msdyusd_customizationfiles_Relationships {
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
interface msdyusd_customizationfiles_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_customizationfiles_RelatedMany {
  msdyusd_customizationfiles_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_customizationfiles_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_customizationfiles_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_customizationfiles_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_customizationfiles_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_customizationfiles_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_customizationfiles_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_customizationfiles_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_customizationfiles_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_customizationfiles_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_customizationfiles_configuration: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_customizationfileses: WebMappingRetrieve<msdyusd_customizationfiles_Select,msdyusd_customizationfiles_Expand,msdyusd_customizationfiles_Filter,msdyusd_customizationfiles_Fixed,msdyusd_customizationfiles_Result,msdyusd_customizationfiles_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_customizationfileses: WebMappingRelated<msdyusd_customizationfiles_RelatedOne,msdyusd_customizationfiles_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_customizationfileses: WebMappingCUDA<msdyusd_customizationfiles_Create,msdyusd_customizationfiles_Update,msdyusd_customizationfiles_Select>;
}
