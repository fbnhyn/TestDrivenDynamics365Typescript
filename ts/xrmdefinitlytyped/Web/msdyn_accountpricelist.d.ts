interface msdyn_accountpricelist_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_accountpricelistid?: string | null;
  msdyn_description?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_accountpricelist_statecode | null;
  statuscode?: msdyn_accountpricelist_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_accountpricelist_Relationships {
  msdyn_Account?: Account_Result | null;
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_accountpricelist_Annotations?: Annotation_Result[] | null;
  msdyn_accountpricelist_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_accountpricelist_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_accountpricelist_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_accountpricelist_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_accountpricelist_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_accountpricelist_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_accountpricelist_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_accountpricelist_SyncErrors?: SyncError_Result[] | null;
  msdyn_accountpricelist_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_accountpricelist extends msdyn_accountpricelist_Base, msdyn_accountpricelist_Relationships {
  msdyn_Account_bind$accounts?: string | null;
  msdyn_PriceList_bind$pricelevels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_accountpricelist_Create extends msdyn_accountpricelist {
}
interface msdyn_accountpricelist_Update extends msdyn_accountpricelist {
}
interface msdyn_accountpricelist_Select {
  createdby_guid: WebAttribute<msdyn_accountpricelist_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_accountpricelist_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_accountpricelist_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_accountpricelist_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_accountpricelist_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_accountpricelist_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_accountpricelist_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_account_guid: WebAttribute<msdyn_accountpricelist_Select, { msdyn_account_guid: string | null }, { msdyn_account_formatted?: string }>;
  msdyn_accountpricelistid: WebAttribute<msdyn_accountpricelist_Select, { msdyn_accountpricelistid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_accountpricelist_Select, { msdyn_description: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_accountpricelist_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_accountpricelist_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_accountpricelist_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_accountpricelist_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_accountpricelist_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_accountpricelist_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_accountpricelist_Select, { statecode: msdyn_accountpricelist_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_accountpricelist_Select, { statuscode: msdyn_accountpricelist_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_accountpricelist_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_accountpricelist_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_accountpricelist_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_accountpricelist_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_account_guid: XQW.Guid;
  msdyn_accountpricelistid: XQW.Guid;
  msdyn_description: string;
  msdyn_pricelist_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_accountpricelist_statecode;
  statuscode: msdyn_accountpricelist_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_accountpricelist_Expand {
  createdby: WebExpand<msdyn_accountpricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_accountpricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_accountpricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_accountpricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Account: WebExpand<msdyn_accountpricelist_Expand, Account_Select, Account_Filter, { msdyn_Account: Account_Result }>;
  msdyn_PriceList: WebExpand<msdyn_accountpricelist_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_accountpricelist_Annotations: WebExpand<msdyn_accountpricelist_Expand, Annotation_Select, Annotation_Filter, { msdyn_accountpricelist_Annotations: Annotation_Result[] }>;
  msdyn_accountpricelist_AsyncOperations: WebExpand<msdyn_accountpricelist_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_accountpricelist_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_accountpricelist_BulkDeleteFailures: WebExpand<msdyn_accountpricelist_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_accountpricelist_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_accountpricelist_DuplicateBaseRecord: WebExpand<msdyn_accountpricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_accountpricelist_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_accountpricelist_DuplicateMatchingRecord: WebExpand<msdyn_accountpricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_accountpricelist_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_accountpricelist_MailboxTrackingFolders: WebExpand<msdyn_accountpricelist_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_accountpricelist_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_accountpricelist_PrincipalObjectAttributeAccesses: WebExpand<msdyn_accountpricelist_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_accountpricelist_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_accountpricelist_ProcessSession: WebExpand<msdyn_accountpricelist_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_accountpricelist_ProcessSession: ProcessSession_Result[] }>;
  msdyn_accountpricelist_SyncErrors: WebExpand<msdyn_accountpricelist_Expand, SyncError_Select, SyncError_Filter, { msdyn_accountpricelist_SyncErrors: SyncError_Result[] }>;
  msdyn_accountpricelist_UserEntityInstanceDatas: WebExpand<msdyn_accountpricelist_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_accountpricelist_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_accountpricelist_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_accountpricelist_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_accountpricelist_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_accountpricelist_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_accountpricelist_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_account_formatted?: string;
  msdyn_pricelist_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_accountpricelist_Result extends msdyn_accountpricelist_Base, msdyn_accountpricelist_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_account_guid: string | null;
  msdyn_pricelist_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_accountpricelist_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_accountpricelist_RelatedMany {
  msdyn_accountpricelist_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_accountpricelist_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_accountpricelist_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_accountpricelist_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_accountpricelist_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_accountpricelist_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_accountpricelist_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_accountpricelist_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_accountpricelist_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_accountpricelist_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_accountpricelists: WebMappingRetrieve<msdyn_accountpricelist_Select,msdyn_accountpricelist_Expand,msdyn_accountpricelist_Filter,msdyn_accountpricelist_Fixed,msdyn_accountpricelist_Result,msdyn_accountpricelist_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_accountpricelists: WebMappingRelated<msdyn_accountpricelist_RelatedOne,msdyn_accountpricelist_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_accountpricelists: WebMappingCUDA<msdyn_accountpricelist_Create,msdyn_accountpricelist_Update,msdyn_accountpricelist_Select>;
}
