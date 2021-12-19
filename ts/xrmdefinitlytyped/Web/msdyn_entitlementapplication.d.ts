interface msdyn_entitlementapplication_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entitlementapplicationid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_entitlementapplication_statecode | null;
  statuscode?: msdyn_entitlementapplication_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_entitlementapplication_Relationships {
  msdyn_entitlementapplication_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_entitlementapplication_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_entitlementapplication_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_entitlementapplication_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_entitlementapplication_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_entitlementapplication_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_entitlementapplication_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_entitlementapplication_SyncErrors?: SyncError_Result[] | null;
  msdyn_entitlementapplication_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_entitlementapplication extends msdyn_entitlementapplication_Base, msdyn_entitlementapplication_Relationships {
  msdyn_assetcategory_bind$msdyn_customerassetcategories?: string | null;
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_entitlement_bind$entitlements?: string | null;
  msdyn_incidenttype_bind$msdyn_incidenttypes?: string | null;
  msdyn_serviceaccount_bind$accounts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_entitlementapplication_Create extends msdyn_entitlementapplication {
}
interface msdyn_entitlementapplication_Update extends msdyn_entitlementapplication {
}
interface msdyn_entitlementapplication_Select {
  createdby_guid: WebAttribute<msdyn_entitlementapplication_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_entitlementapplication_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_entitlementapplication_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_entitlementapplication_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_entitlementapplication_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_entitlementapplication_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_entitlementapplication_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assetcategory_guid: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_assetcategory_guid: string | null }, { msdyn_assetcategory_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_entitlement_guid: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_entitlement_guid: string | null }, { msdyn_entitlement_formatted?: string }>;
  msdyn_entitlementapplicationid: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_entitlementapplicationid: string | null }, {  }>;
  msdyn_incidenttype_guid: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_incidenttype_guid: string | null }, { msdyn_incidenttype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_name: string | null }, {  }>;
  msdyn_serviceaccount_guid: WebAttribute<msdyn_entitlementapplication_Select, { msdyn_serviceaccount_guid: string | null }, { msdyn_serviceaccount_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_entitlementapplication_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_entitlementapplication_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_entitlementapplication_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_entitlementapplication_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_entitlementapplication_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_entitlementapplication_Select, { statecode: msdyn_entitlementapplication_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_entitlementapplication_Select, { statuscode: msdyn_entitlementapplication_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_entitlementapplication_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_entitlementapplication_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_entitlementapplication_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_entitlementapplication_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_assetcategory_guid: XQW.Guid;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_entitlement_guid: XQW.Guid;
  msdyn_entitlementapplicationid: XQW.Guid;
  msdyn_incidenttype_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_serviceaccount_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_entitlementapplication_statecode;
  statuscode: msdyn_entitlementapplication_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_entitlementapplication_Expand {
  createdby: WebExpand<msdyn_entitlementapplication_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_entitlementapplication_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_entitlementapplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_entitlementapplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assetcategory: WebExpand<msdyn_entitlementapplication_Expand, msdyn_customerassetcategory_Select, msdyn_customerassetcategory_Filter, { msdyn_assetcategory: msdyn_customerassetcategory_Result }>;
  msdyn_customerasset: WebExpand<msdyn_entitlementapplication_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_customerasset: msdyn_customerasset_Result }>;
  msdyn_entitlement: WebExpand<msdyn_entitlementapplication_Expand, Entitlement_Select, Entitlement_Filter, { msdyn_entitlement: Entitlement_Result }>;
  msdyn_entitlementapplication_AsyncOperations: WebExpand<msdyn_entitlementapplication_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_entitlementapplication_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_entitlementapplication_BulkDeleteFailures: WebExpand<msdyn_entitlementapplication_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_entitlementapplication_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_entitlementapplication_DuplicateBaseRecord: WebExpand<msdyn_entitlementapplication_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_entitlementapplication_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_entitlementapplication_DuplicateMatchingRecord: WebExpand<msdyn_entitlementapplication_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_entitlementapplication_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_entitlementapplication_MailboxTrackingFolders: WebExpand<msdyn_entitlementapplication_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_entitlementapplication_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_entitlementapplication_PrincipalObjectAttributeAccesses: WebExpand<msdyn_entitlementapplication_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_entitlementapplication_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_entitlementapplication_ProcessSession: WebExpand<msdyn_entitlementapplication_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_entitlementapplication_ProcessSession: ProcessSession_Result[] }>;
  msdyn_entitlementapplication_SyncErrors: WebExpand<msdyn_entitlementapplication_Expand, SyncError_Select, SyncError_Filter, { msdyn_entitlementapplication_SyncErrors: SyncError_Result[] }>;
  msdyn_entitlementapplication_UserEntityInstanceDatas: WebExpand<msdyn_entitlementapplication_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_entitlementapplication_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_incidenttype: WebExpand<msdyn_entitlementapplication_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_incidenttype: msdyn_incidenttype_Result }>;
  msdyn_serviceaccount: WebExpand<msdyn_entitlementapplication_Expand, Account_Select, Account_Filter, { msdyn_serviceaccount: Account_Result }>;
  ownerid: WebExpand<msdyn_entitlementapplication_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_entitlementapplication_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_entitlementapplication_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_entitlementapplication_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_entitlementapplication_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_assetcategory_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_entitlement_formatted?: string;
  msdyn_incidenttype_formatted?: string;
  msdyn_serviceaccount_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_entitlementapplication_Result extends msdyn_entitlementapplication_Base, msdyn_entitlementapplication_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_assetcategory_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_entitlement_guid: string | null;
  msdyn_incidenttype_guid: string | null;
  msdyn_serviceaccount_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_entitlementapplication_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_assetcategory: WebMappingRetrieve<msdyn_customerassetcategory_Select,msdyn_customerassetcategory_Expand,msdyn_customerassetcategory_Filter,msdyn_customerassetcategory_Fixed,msdyn_customerassetcategory_Result,msdyn_customerassetcategory_FormattedResult>;
  msdyn_customerasset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_entitlement: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  msdyn_incidenttype: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_serviceaccount: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_entitlementapplication_RelatedMany {
  msdyn_entitlementapplication_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_entitlementapplication_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_entitlementapplication_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_entitlementapplication_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_entitlementapplication_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_entitlementapplication_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_entitlementapplication_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_entitlementapplication_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_entitlementapplication_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_entitlementapplications: WebMappingRetrieve<msdyn_entitlementapplication_Select,msdyn_entitlementapplication_Expand,msdyn_entitlementapplication_Filter,msdyn_entitlementapplication_Fixed,msdyn_entitlementapplication_Result,msdyn_entitlementapplication_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_entitlementapplications: WebMappingRelated<msdyn_entitlementapplication_RelatedOne,msdyn_entitlementapplication_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_entitlementapplications: WebMappingCUDA<msdyn_entitlementapplication_Create,msdyn_entitlementapplication_Update,msdyn_entitlementapplication_Select>;
}
