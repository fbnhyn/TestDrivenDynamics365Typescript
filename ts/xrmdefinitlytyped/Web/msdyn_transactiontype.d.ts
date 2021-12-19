interface msdyn_transactiontype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  msdyn_transactiontypecode?: msdyn_transactiontypecode | null;
  msdyn_transactiontypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transactiontype_statecode | null;
  statuscode?: msdyn_transactiontype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transactiontype_Relationships {
  msdyn_DefaultUnit?: UoM_Result | null;
  msdyn_UnitGroup?: UoMSchedule_Result | null;
  msdyn_transactiontype_Annotations?: Annotation_Result[] | null;
  msdyn_transactiontype_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transactiontype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transactiontype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactiontype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactiontype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transactiontype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transactiontype_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transactiontype_SyncErrors?: SyncError_Result[] | null;
  msdyn_transactiontype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_transactiontype extends msdyn_transactiontype_Base, msdyn_transactiontype_Relationships {
  msdyn_DefaultUnit_bind$uoms?: string | null;
  msdyn_UnitGroup_bind$uomschedules?: string | null;
}
interface msdyn_transactiontype_Create extends msdyn_transactiontype {
}
interface msdyn_transactiontype_Update extends msdyn_transactiontype {
}
interface msdyn_transactiontype_Select {
  createdby_guid: WebAttribute<msdyn_transactiontype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transactiontype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transactiontype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_transactiontype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transactiontype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transactiontype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transactiontype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultunit_guid: WebAttribute<msdyn_transactiontype_Select, { msdyn_defaultunit_guid: string | null }, { msdyn_defaultunit_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_transactiontype_Select, { msdyn_name: string | null }, {  }>;
  msdyn_transactionclassification: WebAttribute<msdyn_transactiontype_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  msdyn_transactiontypecode: WebAttribute<msdyn_transactiontype_Select, { msdyn_transactiontypecode: msdyn_transactiontypecode | null }, { msdyn_transactiontypecode_formatted?: string }>;
  msdyn_transactiontypeid: WebAttribute<msdyn_transactiontype_Select, { msdyn_transactiontypeid: string | null }, {  }>;
  msdyn_unitgroup_guid: WebAttribute<msdyn_transactiontype_Select, { msdyn_unitgroup_guid: string | null }, { msdyn_unitgroup_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_transactiontype_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_transactiontype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_transactiontype_Select, { statecode: msdyn_transactiontype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transactiontype_Select, { statuscode: msdyn_transactiontype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transactiontype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transactiontype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transactiontype_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transactiontype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_defaultunit_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_transactionclassification: msdyn_transactionclassification;
  msdyn_transactiontypecode: msdyn_transactiontypecode;
  msdyn_transactiontypeid: XQW.Guid;
  msdyn_unitgroup_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_transactiontype_statecode;
  statuscode: msdyn_transactiontype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transactiontype_Expand {
  createdby: WebExpand<msdyn_transactiontype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transactiontype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transactiontype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transactiontype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_DefaultUnit: WebExpand<msdyn_transactiontype_Expand, UoM_Select, UoM_Filter, { msdyn_DefaultUnit: UoM_Result }>;
  msdyn_UnitGroup: WebExpand<msdyn_transactiontype_Expand, UoMSchedule_Select, UoMSchedule_Filter, { msdyn_UnitGroup: UoMSchedule_Result }>;
  msdyn_transactiontype_Annotations: WebExpand<msdyn_transactiontype_Expand, Annotation_Select, Annotation_Filter, { msdyn_transactiontype_Annotations: Annotation_Result[] }>;
  msdyn_transactiontype_AsyncOperations: WebExpand<msdyn_transactiontype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transactiontype_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transactiontype_BulkDeleteFailures: WebExpand<msdyn_transactiontype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transactiontype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transactiontype_DuplicateBaseRecord: WebExpand<msdyn_transactiontype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactiontype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_transactiontype_DuplicateMatchingRecord: WebExpand<msdyn_transactiontype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactiontype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_transactiontype_MailboxTrackingFolders: WebExpand<msdyn_transactiontype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transactiontype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transactiontype_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transactiontype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transactiontype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transactiontype_ProcessSession: WebExpand<msdyn_transactiontype_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transactiontype_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transactiontype_SyncErrors: WebExpand<msdyn_transactiontype_Expand, SyncError_Select, SyncError_Filter, { msdyn_transactiontype_SyncErrors: SyncError_Result[] }>;
  msdyn_transactiontype_UserEntityInstanceDatas: WebExpand<msdyn_transactiontype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transactiontype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_transactiontype_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_transactiontype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_defaultunit_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  msdyn_transactiontypecode_formatted?: string;
  msdyn_unitgroup_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_transactiontype_Result extends msdyn_transactiontype_Base, msdyn_transactiontype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_defaultunit_guid: string | null;
  msdyn_unitgroup_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_transactiontype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_DefaultUnit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_UnitGroup: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_transactiontype_RelatedMany {
  msdyn_transactiontype_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transactiontype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transactiontype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transactiontype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactiontype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactiontype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transactiontype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transactiontype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transactiontype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transactiontype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transactiontypes: WebMappingRetrieve<msdyn_transactiontype_Select,msdyn_transactiontype_Expand,msdyn_transactiontype_Filter,msdyn_transactiontype_Fixed,msdyn_transactiontype_Result,msdyn_transactiontype_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transactiontypes: WebMappingRelated<msdyn_transactiontype_RelatedOne,msdyn_transactiontype_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transactiontypes: WebMappingCUDA<msdyn_transactiontype_Create,msdyn_transactiontype_Update,msdyn_transactiontype_Select>;
}
