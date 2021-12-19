interface msdyn_taxcode_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actastaxgroup?: boolean | null;
  msdyn_agreementtaxable?: boolean | null;
  msdyn_name?: string | null;
  msdyn_productstaxable?: boolean | null;
  msdyn_servicestaxable?: boolean | null;
  msdyn_taxcodeid?: string | null;
  msdyn_taxrate?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_taxcode_statecode | null;
  statuscode?: msdyn_taxcode_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_taxcode_Relationships {
  msdyn_msdyn_taxcode_account_SalesTaxCode?: Account_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_actual_TaxCode?: msdyn_actual_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode?: msdyn_agreement_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode?: msdyn_purchaseorderbill_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_rma_TaxCode?: msdyn_rma_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_rtv_TaxCode?: msdyn_rtv_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode?: msdyn_taxcodedetail_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode?: msdyn_taxcodedetail_Result[] | null;
  msdyn_msdyn_taxcode_msdyn_workorder_TaxCode?: msdyn_workorder_Result[] | null;
  msdyn_msdyn_taxcode_quotedetail_SalesTaxCode?: QuoteDetail_Result[] | null;
  msdyn_taxcode_Annotations?: Annotation_Result[] | null;
  msdyn_taxcode_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_taxcode_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_taxcode_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_taxcode_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_taxcode_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_taxcode_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_taxcode_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_taxcode_SyncErrors?: SyncError_Result[] | null;
  msdyn_taxcode_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_taxcode_connections1?: Connection_Result[] | null;
  msdyn_taxcode_connections2?: Connection_Result[] | null;
}
interface msdyn_taxcode extends msdyn_taxcode_Base, msdyn_taxcode_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_taxcode_Create extends msdyn_taxcode {
}
interface msdyn_taxcode_Update extends msdyn_taxcode {
}
interface msdyn_taxcode_Select {
  createdby_guid: WebAttribute<msdyn_taxcode_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_taxcode_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_taxcode_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_taxcode_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_taxcode_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_taxcode_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_taxcode_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actastaxgroup: WebAttribute<msdyn_taxcode_Select, { msdyn_actastaxgroup: boolean | null }, {  }>;
  msdyn_agreementtaxable: WebAttribute<msdyn_taxcode_Select, { msdyn_agreementtaxable: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_taxcode_Select, { msdyn_name: string | null }, {  }>;
  msdyn_productstaxable: WebAttribute<msdyn_taxcode_Select, { msdyn_productstaxable: boolean | null }, {  }>;
  msdyn_servicestaxable: WebAttribute<msdyn_taxcode_Select, { msdyn_servicestaxable: boolean | null }, {  }>;
  msdyn_taxcodeid: WebAttribute<msdyn_taxcode_Select, { msdyn_taxcodeid: string | null }, {  }>;
  msdyn_taxrate: WebAttribute<msdyn_taxcode_Select, { msdyn_taxrate: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_taxcode_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_taxcode_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_taxcode_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_taxcode_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_taxcode_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_taxcode_Select, { statecode: msdyn_taxcode_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_taxcode_Select, { statuscode: msdyn_taxcode_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_taxcode_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_taxcode_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_taxcode_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_taxcode_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actastaxgroup: boolean;
  msdyn_agreementtaxable: boolean;
  msdyn_name: string;
  msdyn_productstaxable: boolean;
  msdyn_servicestaxable: boolean;
  msdyn_taxcodeid: XQW.Guid;
  msdyn_taxrate: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_taxcode_statecode;
  statuscode: msdyn_taxcode_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_taxcode_Expand {
  createdby: WebExpand<msdyn_taxcode_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_taxcode_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_taxcode_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_taxcode_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_taxcode_account_SalesTaxCode: WebExpand<msdyn_taxcode_Expand, Account_Select, Account_Filter, { msdyn_msdyn_taxcode_account_SalesTaxCode: Account_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_actual_TaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_msdyn_taxcode_msdyn_actual_TaxCode: msdyn_actual_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: msdyn_agreement_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_purchaseorderbill_Select, msdyn_purchaseorderbill_Filter, { msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: msdyn_purchaseorderbill_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_rma_TaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_rma_Select, msdyn_rma_Filter, { msdyn_msdyn_taxcode_msdyn_rma_TaxCode: msdyn_rma_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_rtv_Select, msdyn_rtv_Filter, { msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: msdyn_rtv_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_taxcodedetail_Select, msdyn_taxcodedetail_Filter, { msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: msdyn_taxcodedetail_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_taxcodedetail_Select, msdyn_taxcodedetail_Filter, { msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: msdyn_taxcodedetail_Result[] }>;
  msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: WebExpand<msdyn_taxcode_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: msdyn_workorder_Result[] }>;
  msdyn_msdyn_taxcode_quotedetail_SalesTaxCode: WebExpand<msdyn_taxcode_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_msdyn_taxcode_quotedetail_SalesTaxCode: QuoteDetail_Result[] }>;
  msdyn_taxcode_Annotations: WebExpand<msdyn_taxcode_Expand, Annotation_Select, Annotation_Filter, { msdyn_taxcode_Annotations: Annotation_Result[] }>;
  msdyn_taxcode_AsyncOperations: WebExpand<msdyn_taxcode_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_taxcode_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_taxcode_BulkDeleteFailures: WebExpand<msdyn_taxcode_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_taxcode_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_taxcode_DuplicateBaseRecord: WebExpand<msdyn_taxcode_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_taxcode_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_taxcode_DuplicateMatchingRecord: WebExpand<msdyn_taxcode_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_taxcode_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_taxcode_MailboxTrackingFolders: WebExpand<msdyn_taxcode_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_taxcode_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_taxcode_PrincipalObjectAttributeAccesses: WebExpand<msdyn_taxcode_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_taxcode_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_taxcode_ProcessSession: WebExpand<msdyn_taxcode_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_taxcode_ProcessSession: ProcessSession_Result[] }>;
  msdyn_taxcode_SyncErrors: WebExpand<msdyn_taxcode_Expand, SyncError_Select, SyncError_Filter, { msdyn_taxcode_SyncErrors: SyncError_Result[] }>;
  msdyn_taxcode_UserEntityInstanceDatas: WebExpand<msdyn_taxcode_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_taxcode_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_taxcode_connections1: WebExpand<msdyn_taxcode_Expand, Connection_Select, Connection_Filter, { msdyn_taxcode_connections1: Connection_Result[] }>;
  msdyn_taxcode_connections2: WebExpand<msdyn_taxcode_Expand, Connection_Select, Connection_Filter, { msdyn_taxcode_connections2: Connection_Result[] }>;
  ownerid: WebExpand<msdyn_taxcode_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_taxcode_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_taxcode_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_taxcode_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_taxcode_FormattedResult {
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
interface msdyn_taxcode_Result extends msdyn_taxcode_Base, msdyn_taxcode_Relationships {
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
interface msdyn_taxcode_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_taxcode_RelatedMany {
  msdyn_msdyn_taxcode_account_SalesTaxCode: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_actual_TaxCode: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: WebMappingRetrieve<msdyn_purchaseorderbill_Select,msdyn_purchaseorderbill_Expand,msdyn_purchaseorderbill_Filter,msdyn_purchaseorderbill_Fixed,msdyn_purchaseorderbill_Result,msdyn_purchaseorderbill_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_rma_TaxCode: WebMappingRetrieve<msdyn_rma_Select,msdyn_rma_Expand,msdyn_rma_Filter,msdyn_rma_Fixed,msdyn_rma_Result,msdyn_rma_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: WebMappingRetrieve<msdyn_rtv_Select,msdyn_rtv_Expand,msdyn_rtv_Filter,msdyn_rtv_Fixed,msdyn_rtv_Result,msdyn_rtv_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: WebMappingRetrieve<msdyn_taxcodedetail_Select,msdyn_taxcodedetail_Expand,msdyn_taxcodedetail_Filter,msdyn_taxcodedetail_Fixed,msdyn_taxcodedetail_Result,msdyn_taxcodedetail_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: WebMappingRetrieve<msdyn_taxcodedetail_Select,msdyn_taxcodedetail_Expand,msdyn_taxcodedetail_Filter,msdyn_taxcodedetail_Fixed,msdyn_taxcodedetail_Result,msdyn_taxcodedetail_FormattedResult>;
  msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_msdyn_taxcode_quotedetail_SalesTaxCode: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  msdyn_taxcode_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_taxcode_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_taxcode_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_taxcode_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_taxcode_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_taxcode_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_taxcode_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_taxcode_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_taxcode_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_taxcode_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_taxcode_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_taxcode_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_taxcodes: WebMappingRetrieve<msdyn_taxcode_Select,msdyn_taxcode_Expand,msdyn_taxcode_Filter,msdyn_taxcode_Fixed,msdyn_taxcode_Result,msdyn_taxcode_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_taxcodes: WebMappingRelated<msdyn_taxcode_RelatedOne,msdyn_taxcode_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_taxcodes: WebMappingCUDA<msdyn_taxcode_Create,msdyn_taxcode_Update,msdyn_taxcode_Select>;
}
