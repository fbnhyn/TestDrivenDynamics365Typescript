interface msdyn_dimension_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_applicabletocost?: boolean | null;
  msdyn_applicabletopurchase?: boolean | null;
  msdyn_applicabletosales?: boolean | null;
  msdyn_costpriority?: number | null;
  msdyn_dimensionid?: string | null;
  msdyn_name?: string | null;
  msdyn_purchasepriority?: number | null;
  msdyn_salespriority?: number | null;
  msdyn_type?: msdyn_pricingdimensiontype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_dimension_statecode | null;
  statuscode?: msdyn_dimension_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_dimension_Relationships {
  msdyn_dimension_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_dimension_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_dimension_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_dimension_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_dimension_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_dimension_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_dimension_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_dimension_SyncErrors?: SyncError_Result[] | null;
  msdyn_dimension_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_dimension_msdyn_dimensionfieldname_Dimension?: msdyn_dimensionfieldname_Result[] | null;
}
interface msdyn_dimension extends msdyn_dimension_Base, msdyn_dimension_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_dimension_Create extends msdyn_dimension {
}
interface msdyn_dimension_Update extends msdyn_dimension {
}
interface msdyn_dimension_Select {
  createdby_guid: WebAttribute<msdyn_dimension_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_dimension_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_dimension_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_dimension_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_dimension_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_dimension_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_dimension_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_applicabletocost: WebAttribute<msdyn_dimension_Select, { msdyn_applicabletocost: boolean | null }, {  }>;
  msdyn_applicabletopurchase: WebAttribute<msdyn_dimension_Select, { msdyn_applicabletopurchase: boolean | null }, {  }>;
  msdyn_applicabletosales: WebAttribute<msdyn_dimension_Select, { msdyn_applicabletosales: boolean | null }, {  }>;
  msdyn_costpriority: WebAttribute<msdyn_dimension_Select, { msdyn_costpriority: number | null }, {  }>;
  msdyn_dimensionid: WebAttribute<msdyn_dimension_Select, { msdyn_dimensionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_dimension_Select, { msdyn_name: string | null }, {  }>;
  msdyn_purchasepriority: WebAttribute<msdyn_dimension_Select, { msdyn_purchasepriority: number | null }, {  }>;
  msdyn_salespriority: WebAttribute<msdyn_dimension_Select, { msdyn_salespriority: number | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_dimension_Select, { msdyn_type: msdyn_pricingdimensiontype | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_dimension_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_dimension_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_dimension_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_dimension_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_dimension_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_dimension_Select, { statecode: msdyn_dimension_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_dimension_Select, { statuscode: msdyn_dimension_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_dimension_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_dimension_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_dimension_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_dimension_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_applicabletocost: boolean;
  msdyn_applicabletopurchase: boolean;
  msdyn_applicabletosales: boolean;
  msdyn_costpriority: number;
  msdyn_dimensionid: XQW.Guid;
  msdyn_name: string;
  msdyn_purchasepriority: number;
  msdyn_salespriority: number;
  msdyn_type: msdyn_pricingdimensiontype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_dimension_statecode;
  statuscode: msdyn_dimension_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_dimension_Expand {
  createdby: WebExpand<msdyn_dimension_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_dimension_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_dimension_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_dimension_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dimension_AsyncOperations: WebExpand<msdyn_dimension_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_dimension_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_dimension_BulkDeleteFailures: WebExpand<msdyn_dimension_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_dimension_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_dimension_DuplicateBaseRecord: WebExpand<msdyn_dimension_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dimension_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_dimension_DuplicateMatchingRecord: WebExpand<msdyn_dimension_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dimension_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_dimension_MailboxTrackingFolders: WebExpand<msdyn_dimension_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_dimension_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_dimension_PrincipalObjectAttributeAccesses: WebExpand<msdyn_dimension_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_dimension_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_dimension_ProcessSession: WebExpand<msdyn_dimension_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_dimension_ProcessSession: ProcessSession_Result[] }>;
  msdyn_dimension_SyncErrors: WebExpand<msdyn_dimension_Expand, SyncError_Select, SyncError_Filter, { msdyn_dimension_SyncErrors: SyncError_Result[] }>;
  msdyn_dimension_UserEntityInstanceDatas: WebExpand<msdyn_dimension_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_dimension_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_dimension_msdyn_dimensionfieldname_Dimension: WebExpand<msdyn_dimension_Expand, msdyn_dimensionfieldname_Select, msdyn_dimensionfieldname_Filter, { msdyn_msdyn_dimension_msdyn_dimensionfieldname_Dimension: msdyn_dimensionfieldname_Result[] }>;
  ownerid: WebExpand<msdyn_dimension_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_dimension_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_dimension_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_dimension_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_dimension_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_dimension_Result extends msdyn_dimension_Base, msdyn_dimension_Relationships {
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
interface msdyn_dimension_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_dimension_RelatedMany {
  msdyn_dimension_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_dimension_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_dimension_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dimension_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dimension_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_dimension_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_dimension_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_dimension_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_dimension_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_dimension_msdyn_dimensionfieldname_Dimension: WebMappingRetrieve<msdyn_dimensionfieldname_Select,msdyn_dimensionfieldname_Expand,msdyn_dimensionfieldname_Filter,msdyn_dimensionfieldname_Fixed,msdyn_dimensionfieldname_Result,msdyn_dimensionfieldname_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_dimensions: WebMappingRetrieve<msdyn_dimension_Select,msdyn_dimension_Expand,msdyn_dimension_Filter,msdyn_dimension_Fixed,msdyn_dimension_Result,msdyn_dimension_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_dimensions: WebMappingRelated<msdyn_dimension_RelatedOne,msdyn_dimension_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_dimensions: WebMappingCUDA<msdyn_dimension_Create,msdyn_dimension_Update,msdyn_dimension_Select>;
}
