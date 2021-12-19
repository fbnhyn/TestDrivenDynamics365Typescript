interface msdyn_opportunitylinetransactionclassificatio_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_description?: string | null;
  msdyn_include?: boolean | null;
  msdyn_opportunityline?: string | null;
  msdyn_opportunitylinetransactionclassificatioid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_opportunitylinetransactionclassificatio_statecode | null;
  statuscode?: msdyn_opportunitylinetransactionclassificatio_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_opportunitylinetransactionclassificatio_Relationships {
  msdyn_opportunitylinetransactionclassificatio_Annotations?: Annotation_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_SyncErrors?: SyncError_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_opportunitylineresourcecategory_OppLineTransClass?: msdyn_opportunitylineresourcecategory_Result[] | null;
  msdyn_opportunitylinetransactionclassificatio_opportunitylinetransactioncategory_OppLineTransClass?: msdyn_opportunitylinetransactioncategory_Result[] | null;
}
interface msdyn_opportunitylinetransactionclassificatio extends msdyn_opportunitylinetransactionclassificatio_Base, msdyn_opportunitylinetransactionclassificatio_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_opportunitylinetransactionclassificatio_Create extends msdyn_opportunitylinetransactionclassificatio {
}
interface msdyn_opportunitylinetransactionclassificatio_Update extends msdyn_opportunitylinetransactionclassificatio {
}
interface msdyn_opportunitylinetransactionclassificatio_Select {
  createdby_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { msdyn_description: string | null }, {  }>;
  msdyn_include: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { msdyn_include: boolean | null }, {  }>;
  msdyn_opportunityline: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { msdyn_opportunityline: string | null }, {  }>;
  msdyn_opportunitylinetransactionclassificatioid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { msdyn_opportunitylinetransactionclassificatioid: string | null }, {  }>;
  msdyn_transactionclassification: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { statecode: msdyn_opportunitylinetransactionclassificatio_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { statuscode: msdyn_opportunitylinetransactionclassificatio_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_opportunitylinetransactionclassificatio_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_opportunitylinetransactionclassificatio_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_description: string;
  msdyn_include: boolean;
  msdyn_opportunityline: string;
  msdyn_opportunitylinetransactionclassificatioid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_opportunitylinetransactionclassificatio_statecode;
  statuscode: msdyn_opportunitylinetransactionclassificatio_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_opportunitylinetransactionclassificatio_Expand {
  createdby: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_opportunitylinetransactionclassificatio_Annotations: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, Annotation_Select, Annotation_Filter, { msdyn_opportunitylinetransactionclassificatio_Annotations: Annotation_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_AsyncOperations: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_opportunitylinetransactionclassificatio_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_BulkDeleteFailures: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_opportunitylinetransactionclassificatio_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_DuplicateBaseRecord: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitylinetransactionclassificatio_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_DuplicateMatchingRecord: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitylinetransactionclassificatio_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_MailboxTrackingFolders: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_opportunitylinetransactionclassificatio_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_PrincipalObjectAttributeAccesses: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_opportunitylinetransactionclassificatio_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_ProcessSession: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_opportunitylinetransactionclassificatio_ProcessSession: ProcessSession_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_SyncErrors: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SyncError_Select, SyncError_Filter, { msdyn_opportunitylinetransactionclassificatio_SyncErrors: SyncError_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_UserEntityInstanceDatas: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_opportunitylinetransactionclassificatio_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_opportunitylineresourcecategory_OppLineTransClass: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, msdyn_opportunitylineresourcecategory_Select, msdyn_opportunitylineresourcecategory_Filter, { msdyn_opportunitylinetransactionclassificatio_opportunitylineresourcecategory_OppLineTransClass: msdyn_opportunitylineresourcecategory_Result[] }>;
  msdyn_opportunitylinetransactionclassificatio_opportunitylinetransactioncategory_OppLineTransClass: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, msdyn_opportunitylinetransactioncategory_Select, msdyn_opportunitylinetransactioncategory_Filter, { msdyn_opportunitylinetransactionclassificatio_opportunitylinetransactioncategory_OppLineTransClass: msdyn_opportunitylinetransactioncategory_Result[] }>;
  ownerid: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_opportunitylinetransactionclassificatio_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_opportunitylinetransactionclassificatio_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_opportunitylinetransactionclassificatio_Result extends msdyn_opportunitylinetransactionclassificatio_Base, msdyn_opportunitylinetransactionclassificatio_Relationships {
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
interface msdyn_opportunitylinetransactionclassificatio_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_opportunitylinetransactionclassificatio_RelatedMany {
  msdyn_opportunitylinetransactionclassificatio_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_opportunitylineresourcecategory_OppLineTransClass: WebMappingRetrieve<msdyn_opportunitylineresourcecategory_Select,msdyn_opportunitylineresourcecategory_Expand,msdyn_opportunitylineresourcecategory_Filter,msdyn_opportunitylineresourcecategory_Fixed,msdyn_opportunitylineresourcecategory_Result,msdyn_opportunitylineresourcecategory_FormattedResult>;
  msdyn_opportunitylinetransactionclassificatio_opportunitylinetransactioncategory_OppLineTransClass: WebMappingRetrieve<msdyn_opportunitylinetransactioncategory_Select,msdyn_opportunitylinetransactioncategory_Expand,msdyn_opportunitylinetransactioncategory_Filter,msdyn_opportunitylinetransactioncategory_Fixed,msdyn_opportunitylinetransactioncategory_Result,msdyn_opportunitylinetransactioncategory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_opportunitylinetransactionclassificatios: WebMappingRetrieve<msdyn_opportunitylinetransactionclassificatio_Select,msdyn_opportunitylinetransactionclassificatio_Expand,msdyn_opportunitylinetransactionclassificatio_Filter,msdyn_opportunitylinetransactionclassificatio_Fixed,msdyn_opportunitylinetransactionclassificatio_Result,msdyn_opportunitylinetransactionclassificatio_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_opportunitylinetransactionclassificatios: WebMappingRelated<msdyn_opportunitylinetransactionclassificatio_RelatedOne,msdyn_opportunitylinetransactionclassificatio_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_opportunitylinetransactionclassificatios: WebMappingCUDA<msdyn_opportunitylinetransactionclassificatio_Create,msdyn_opportunitylinetransactionclassificatio_Update,msdyn_opportunitylinetransactionclassificatio_Select>;
}
