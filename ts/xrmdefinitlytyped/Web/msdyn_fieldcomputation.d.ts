interface msdyn_fieldcomputation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_computedfield?: msdyn_computablefields | null;
  msdyn_fieldcomputationid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_fieldcomputation_statecode | null;
  statuscode?: msdyn_fieldcomputation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_fieldcomputation_Relationships {
  msdyn_ProductId?: Product_Result | null;
  msdyn_PropertyId?: DynamicProperty_Result | null;
  msdyn_fieldcomputation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_fieldcomputation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_fieldcomputation_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_fieldcomputation_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_fieldcomputation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_fieldcomputation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_fieldcomputation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_fieldcomputation_SyncErrors?: SyncError_Result[] | null;
  msdyn_fieldcomputation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_fieldcomputation extends msdyn_fieldcomputation_Base, msdyn_fieldcomputation_Relationships {
  msdyn_ProductId_bind$products?: string | null;
  msdyn_PropertyId_bind$dynamicproperties?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_fieldcomputation_Create extends msdyn_fieldcomputation {
}
interface msdyn_fieldcomputation_Update extends msdyn_fieldcomputation {
}
interface msdyn_fieldcomputation_Select {
  createdby_guid: WebAttribute<msdyn_fieldcomputation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_fieldcomputation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_fieldcomputation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_fieldcomputation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_fieldcomputation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_fieldcomputation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_fieldcomputation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_computedfield: WebAttribute<msdyn_fieldcomputation_Select, { msdyn_computedfield: msdyn_computablefields | null }, { msdyn_computedfield_formatted?: string }>;
  msdyn_fieldcomputationid: WebAttribute<msdyn_fieldcomputation_Select, { msdyn_fieldcomputationid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_fieldcomputation_Select, { msdyn_name: string | null }, {  }>;
  msdyn_productid_guid: WebAttribute<msdyn_fieldcomputation_Select, { msdyn_productid_guid: string | null }, { msdyn_productid_formatted?: string }>;
  msdyn_propertyid_guid: WebAttribute<msdyn_fieldcomputation_Select, { msdyn_propertyid_guid: string | null }, { msdyn_propertyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_fieldcomputation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_fieldcomputation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_fieldcomputation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_fieldcomputation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_fieldcomputation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_fieldcomputation_Select, { statecode: msdyn_fieldcomputation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_fieldcomputation_Select, { statuscode: msdyn_fieldcomputation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_fieldcomputation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_fieldcomputation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_fieldcomputation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_fieldcomputation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_computedfield: msdyn_computablefields;
  msdyn_fieldcomputationid: XQW.Guid;
  msdyn_name: string;
  msdyn_productid_guid: XQW.Guid;
  msdyn_propertyid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_fieldcomputation_statecode;
  statuscode: msdyn_fieldcomputation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_fieldcomputation_Expand {
  createdby: WebExpand<msdyn_fieldcomputation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_fieldcomputation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_fieldcomputation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_fieldcomputation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ProductId: WebExpand<msdyn_fieldcomputation_Expand, Product_Select, Product_Filter, { msdyn_ProductId: Product_Result }>;
  msdyn_PropertyId: WebExpand<msdyn_fieldcomputation_Expand, DynamicProperty_Select, DynamicProperty_Filter, { msdyn_PropertyId: DynamicProperty_Result }>;
  msdyn_fieldcomputation_AsyncOperations: WebExpand<msdyn_fieldcomputation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_fieldcomputation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_fieldcomputation_BulkDeleteFailures: WebExpand<msdyn_fieldcomputation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_fieldcomputation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_fieldcomputation_DuplicateBaseRecord: WebExpand<msdyn_fieldcomputation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_fieldcomputation_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_fieldcomputation_DuplicateMatchingRecord: WebExpand<msdyn_fieldcomputation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_fieldcomputation_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_fieldcomputation_MailboxTrackingFolders: WebExpand<msdyn_fieldcomputation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_fieldcomputation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_fieldcomputation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_fieldcomputation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_fieldcomputation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_fieldcomputation_ProcessSession: WebExpand<msdyn_fieldcomputation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_fieldcomputation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_fieldcomputation_SyncErrors: WebExpand<msdyn_fieldcomputation_Expand, SyncError_Select, SyncError_Filter, { msdyn_fieldcomputation_SyncErrors: SyncError_Result[] }>;
  msdyn_fieldcomputation_UserEntityInstanceDatas: WebExpand<msdyn_fieldcomputation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_fieldcomputation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_fieldcomputation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_fieldcomputation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_fieldcomputation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_fieldcomputation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_fieldcomputation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_computedfield_formatted?: string;
  msdyn_productid_formatted?: string;
  msdyn_propertyid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_fieldcomputation_Result extends msdyn_fieldcomputation_Base, msdyn_fieldcomputation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_productid_guid: string | null;
  msdyn_propertyid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_fieldcomputation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ProductId: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_PropertyId: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_fieldcomputation_RelatedMany {
  msdyn_fieldcomputation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_fieldcomputation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_fieldcomputation_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_fieldcomputation_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_fieldcomputation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_fieldcomputation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_fieldcomputation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_fieldcomputation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_fieldcomputation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_fieldcomputations: WebMappingRetrieve<msdyn_fieldcomputation_Select,msdyn_fieldcomputation_Expand,msdyn_fieldcomputation_Filter,msdyn_fieldcomputation_Fixed,msdyn_fieldcomputation_Result,msdyn_fieldcomputation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_fieldcomputations: WebMappingRelated<msdyn_fieldcomputation_RelatedOne,msdyn_fieldcomputation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_fieldcomputations: WebMappingCUDA<msdyn_fieldcomputation_Create,msdyn_fieldcomputation_Update,msdyn_fieldcomputation_Select>;
}
