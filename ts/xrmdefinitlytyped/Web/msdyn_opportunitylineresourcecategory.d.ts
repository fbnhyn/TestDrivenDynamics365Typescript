interface msdyn_opportunitylineresourcecategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_description?: string | null;
  msdyn_opportunitylineresourcecategoryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_opportunitylineresourcecategory_statecode | null;
  statuscode?: msdyn_opportunitylineresourcecategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_opportunitylineresourcecategory_Relationships {
  msdyn_OpportunityLineTransactionClassification?: msdyn_opportunitylinetransactionclassificatio_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_opportunitylineresourcecategory_Annotations?: Annotation_Result[] | null;
  msdyn_opportunitylineresourcecategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_opportunitylineresourcecategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_opportunitylineresourcecategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitylineresourcecategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitylineresourcecategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_opportunitylineresourcecategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_opportunitylineresourcecategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_opportunitylineresourcecategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_opportunitylineresourcecategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_opportunitylineresourcecategory extends msdyn_opportunitylineresourcecategory_Base, msdyn_opportunitylineresourcecategory_Relationships {
  msdyn_OpportunityLineTransactionClassification_bind$msdyn_opportunitylinetransactionclassificatios?: string | null;
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_opportunitylineresourcecategory_Create extends msdyn_opportunitylineresourcecategory {
}
interface msdyn_opportunitylineresourcecategory_Update extends msdyn_opportunitylineresourcecategory {
}
interface msdyn_opportunitylineresourcecategory_Select {
  createdby_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_opportunitylineresourcecategoryid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { msdyn_opportunitylineresourcecategoryid: string | null }, {  }>;
  msdyn_opportunitylinetransactionclassification_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { msdyn_opportunitylinetransactionclassification_guid: string | null }, { msdyn_opportunitylinetransactionclassification_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { statecode: msdyn_opportunitylineresourcecategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { statuscode: msdyn_opportunitylineresourcecategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_opportunitylineresourcecategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_opportunitylineresourcecategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_description: string;
  msdyn_opportunitylineresourcecategoryid: XQW.Guid;
  msdyn_opportunitylinetransactionclassification_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_opportunitylineresourcecategory_statecode;
  statuscode: msdyn_opportunitylineresourcecategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_opportunitylineresourcecategory_Expand {
  createdby: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_OpportunityLineTransactionClassification: WebExpand<msdyn_opportunitylineresourcecategory_Expand, msdyn_opportunitylinetransactionclassificatio_Select, msdyn_opportunitylinetransactionclassificatio_Filter, { msdyn_OpportunityLineTransactionClassification: msdyn_opportunitylinetransactionclassificatio_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_opportunitylineresourcecategory_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_opportunitylineresourcecategory_Annotations: WebExpand<msdyn_opportunitylineresourcecategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_opportunitylineresourcecategory_Annotations: Annotation_Result[] }>;
  msdyn_opportunitylineresourcecategory_AsyncOperations: WebExpand<msdyn_opportunitylineresourcecategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_opportunitylineresourcecategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_opportunitylineresourcecategory_BulkDeleteFailures: WebExpand<msdyn_opportunitylineresourcecategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_opportunitylineresourcecategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_opportunitylineresourcecategory_DuplicateBaseRecord: WebExpand<msdyn_opportunitylineresourcecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitylineresourcecategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitylineresourcecategory_DuplicateMatchingRecord: WebExpand<msdyn_opportunitylineresourcecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitylineresourcecategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitylineresourcecategory_MailboxTrackingFolders: WebExpand<msdyn_opportunitylineresourcecategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_opportunitylineresourcecategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_opportunitylineresourcecategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_opportunitylineresourcecategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_opportunitylineresourcecategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_opportunitylineresourcecategory_ProcessSession: WebExpand<msdyn_opportunitylineresourcecategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_opportunitylineresourcecategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_opportunitylineresourcecategory_SyncErrors: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_opportunitylineresourcecategory_SyncErrors: SyncError_Result[] }>;
  msdyn_opportunitylineresourcecategory_UserEntityInstanceDatas: WebExpand<msdyn_opportunitylineresourcecategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_opportunitylineresourcecategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_opportunitylineresourcecategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_opportunitylineresourcecategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_opportunitylineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_opportunitylineresourcecategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_opportunitylinetransactionclassification_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_opportunitylineresourcecategory_Result extends msdyn_opportunitylineresourcecategory_Base, msdyn_opportunitylineresourcecategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_opportunitylinetransactionclassification_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_opportunitylineresourcecategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_OpportunityLineTransactionClassification: WebMappingRetrieve<msdyn_opportunitylinetransactionclassificatio_Select,msdyn_opportunitylinetransactionclassificatio_Expand,msdyn_opportunitylinetransactionclassificatio_Filter,msdyn_opportunitylinetransactionclassificatio_Fixed,msdyn_opportunitylinetransactionclassificatio_Result,msdyn_opportunitylinetransactionclassificatio_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_opportunitylineresourcecategory_RelatedMany {
  msdyn_opportunitylineresourcecategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_opportunitylineresourcecategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_opportunitylineresourcecategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_opportunitylineresourcecategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitylineresourcecategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitylineresourcecategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_opportunitylineresourcecategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_opportunitylineresourcecategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_opportunitylineresourcecategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_opportunitylineresourcecategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_opportunitylineresourcecategories: WebMappingRetrieve<msdyn_opportunitylineresourcecategory_Select,msdyn_opportunitylineresourcecategory_Expand,msdyn_opportunitylineresourcecategory_Filter,msdyn_opportunitylineresourcecategory_Fixed,msdyn_opportunitylineresourcecategory_Result,msdyn_opportunitylineresourcecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_opportunitylineresourcecategories: WebMappingRelated<msdyn_opportunitylineresourcecategory_RelatedOne,msdyn_opportunitylineresourcecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_opportunitylineresourcecategories: WebMappingCUDA<msdyn_opportunitylineresourcecategory_Create,msdyn_opportunitylineresourcecategory_Update,msdyn_opportunitylineresourcecategory_Select>;
}
