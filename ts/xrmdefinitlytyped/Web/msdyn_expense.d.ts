interface msdyn_expense_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_expenseid?: string | null;
  msdyn_expensestatus?: msdyn_expensestatus | null;
  msdyn_externaldescription?: string | null;
  msdyn_name?: string | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_quantity?: number | null;
  msdyn_salestaxamount?: number | null;
  msdyn_salestaxamount_base?: number | null;
  msdyn_targetexpensestatus?: msdyn_expensestatus | null;
  msdyn_totalamount?: number | null;
  msdyn_totalamount_base?: number | null;
  msdyn_transactiondate?: Date | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_expense_statecode | null;
  statuscode?: msdyn_expense_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_expense_Relationships {
  msdyn_ExpenseCategory?: msdyn_expensecategory_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_ResourceOrganizationalUnitId?: msdyn_organizationalunit_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_UnitGroup?: UoMSchedule_Result | null;
  msdyn_expense_Annotations?: Annotation_Result[] | null;
  msdyn_expense_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_expense_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_expense_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_expense_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_expense_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_expense_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_expense_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_expense_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_expense_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_expense_SyncErrors?: SyncError_Result[] | null;
  msdyn_expense_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId?: msdyn_expensereceipt_Result[] | null;
  msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry?: msdyn_projectapproval_Result[] | null;
  msdyn_msdyn_journal_msdyn_expense?: msdyn_journal_Result[] | null;
}
interface msdyn_expense extends msdyn_expense_Base, msdyn_expense_Relationships {
  msdyn_ExpenseCategory_bind$msdyn_expensecategories?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  msdyn_ResourceOrganizationalUnitId_bind$msdyn_organizationalunits?: string | null;
  msdyn_UnitGroup_bind$uomschedules?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_manager_bind$systemusers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_expense_Create extends msdyn_expense {
}
interface msdyn_expense_Update extends msdyn_expense {
}
interface msdyn_expense_Select {
  createdby_guid: WebAttribute<msdyn_expense_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_expense_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_expense_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_expense_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_expense_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_expense_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_expense_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_expense_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_expense_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_expense_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_expense_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_expensecategory_guid: WebAttribute<msdyn_expense_Select, { msdyn_expensecategory_guid: string | null }, { msdyn_expensecategory_formatted?: string }>;
  msdyn_expenseid: WebAttribute<msdyn_expense_Select, { msdyn_expenseid: string | null }, {  }>;
  msdyn_expensestatus: WebAttribute<msdyn_expense_Select, { msdyn_expensestatus: msdyn_expensestatus | null }, { msdyn_expensestatus_formatted?: string }>;
  msdyn_externaldescription: WebAttribute<msdyn_expense_Select, { msdyn_externaldescription: string | null }, {  }>;
  msdyn_manager_guid: WebAttribute<msdyn_expense_Select, { msdyn_manager_guid: string | null }, { msdyn_manager_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_expense_Select, { msdyn_name: string | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_expense_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_expense_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_expense_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_expense_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_resourceorganizationalunitid_guid: WebAttribute<msdyn_expense_Select, { msdyn_resourceorganizationalunitid_guid: string | null }, { msdyn_resourceorganizationalunitid_formatted?: string }>;
  msdyn_salestaxamount: WebAttribute<msdyn_expense_Select, { msdyn_salestaxamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_salestaxamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_salestaxamount_base: WebAttribute<msdyn_expense_Select, { msdyn_salestaxamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_salestaxamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_targetexpensestatus: WebAttribute<msdyn_expense_Select, { msdyn_targetexpensestatus: msdyn_expensestatus | null }, { msdyn_targetexpensestatus_formatted?: string }>;
  msdyn_totalamount: WebAttribute<msdyn_expense_Select, { msdyn_totalamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalamount_base: WebAttribute<msdyn_expense_Select, { msdyn_totalamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_transactiondate: WebAttribute<msdyn_expense_Select, { msdyn_transactiondate: Date | null }, { msdyn_transactiondate_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_expense_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitgroup_guid: WebAttribute<msdyn_expense_Select, { msdyn_unitgroup_guid: string | null }, { msdyn_unitgroup_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_expense_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_expense_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_expense_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_expense_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_expense_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_expense_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_expense_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_expense_Select, { statecode: msdyn_expense_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_expense_Select, { statuscode: msdyn_expense_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_expense_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_expense_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<msdyn_expense_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_expense_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_expense_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_expense_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_base: number;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_expensecategory_guid: XQW.Guid;
  msdyn_expenseid: XQW.Guid;
  msdyn_expensestatus: msdyn_expensestatus;
  msdyn_externaldescription: string;
  msdyn_manager_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_project_guid: XQW.Guid;
  msdyn_quantity: any;
  msdyn_resourceorganizationalunitid_guid: XQW.Guid;
  msdyn_salestaxamount: number;
  msdyn_salestaxamount_base: number;
  msdyn_targetexpensestatus: msdyn_expensestatus;
  msdyn_totalamount: number;
  msdyn_totalamount_base: number;
  msdyn_transactiondate: Date;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitgroup_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_expense_statecode;
  statuscode: msdyn_expense_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_expense_Expand {
  createdby: WebExpand<msdyn_expense_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_expense_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_expense_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_expense_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ExpenseCategory: WebExpand<msdyn_expense_Expand, msdyn_expensecategory_Select, msdyn_expensecategory_Filter, { msdyn_ExpenseCategory: msdyn_expensecategory_Result }>;
  msdyn_Project: WebExpand<msdyn_expense_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_ResourceOrganizationalUnitId: WebExpand<msdyn_expense_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_ResourceOrganizationalUnitId: msdyn_organizationalunit_Result }>;
  msdyn_Unit: WebExpand<msdyn_expense_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_UnitGroup: WebExpand<msdyn_expense_Expand, UoMSchedule_Select, UoMSchedule_Filter, { msdyn_UnitGroup: UoMSchedule_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_expense_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_expense_Annotations: WebExpand<msdyn_expense_Expand, Annotation_Select, Annotation_Filter, { msdyn_expense_Annotations: Annotation_Result[] }>;
  msdyn_expense_AsyncOperations: WebExpand<msdyn_expense_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_expense_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_expense_BulkDeleteFailures: WebExpand<msdyn_expense_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_expense_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_expense_DuplicateBaseRecord: WebExpand<msdyn_expense_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_expense_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_expense_DuplicateMatchingRecord: WebExpand<msdyn_expense_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_expense_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_expense_MailboxTrackingFolders: WebExpand<msdyn_expense_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_expense_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_expense_PrincipalObjectAttributeAccesses: WebExpand<msdyn_expense_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_expense_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_expense_ProcessSession: WebExpand<msdyn_expense_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_expense_ProcessSession: ProcessSession_Result[] }>;
  msdyn_expense_SharePointDocumentLocations: WebExpand<msdyn_expense_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_expense_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_expense_SharePointDocuments: WebExpand<msdyn_expense_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_expense_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_expense_SyncErrors: WebExpand<msdyn_expense_Expand, SyncError_Select, SyncError_Filter, { msdyn_expense_SyncErrors: SyncError_Result[] }>;
  msdyn_expense_UserEntityInstanceDatas: WebExpand<msdyn_expense_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_expense_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_manager: WebExpand<msdyn_expense_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_manager: SystemUser_Result }>;
  msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId: WebExpand<msdyn_expense_Expand, msdyn_expensereceipt_Select, msdyn_expensereceipt_Filter, { msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId: msdyn_expensereceipt_Result[] }>;
  msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry: WebExpand<msdyn_expense_Expand, msdyn_projectapproval_Select, msdyn_projectapproval_Filter, { msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry: msdyn_projectapproval_Result[] }>;
  msdyn_msdyn_journal_msdyn_expense: WebExpand<msdyn_expense_Expand, msdyn_journal_Select, msdyn_journal_Filter, { msdyn_msdyn_journal_msdyn_expense: msdyn_journal_Result[] }>;
  ownerid: WebExpand<msdyn_expense_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_expense_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_expense_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_expense_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_expense_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<msdyn_expense_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_expense_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_expensecategory_formatted?: string;
  msdyn_expensestatus_formatted?: string;
  msdyn_manager_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_resourceorganizationalunitid_formatted?: string;
  msdyn_salestaxamount_base_formatted?: string;
  msdyn_salestaxamount_formatted?: string;
  msdyn_targetexpensestatus_formatted?: string;
  msdyn_totalamount_base_formatted?: string;
  msdyn_totalamount_formatted?: string;
  msdyn_transactiondate_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitgroup_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_expense_Result extends msdyn_expense_Base, msdyn_expense_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_expensecategory_guid: string | null;
  msdyn_manager_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_resourceorganizationalunitid_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_unitgroup_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_expense_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ExpenseCategory: WebMappingRetrieve<msdyn_expensecategory_Select,msdyn_expensecategory_Expand,msdyn_expensecategory_Filter,msdyn_expensecategory_Fixed,msdyn_expensecategory_Result,msdyn_expensecategory_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_ResourceOrganizationalUnitId: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_UnitGroup: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_manager: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_expense_RelatedMany {
  msdyn_expense_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_expense_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_expense_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_expense_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_expense_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_expense_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_expense_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_expense_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_expense_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_expense_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_expense_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_expense_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId: WebMappingRetrieve<msdyn_expensereceipt_Select,msdyn_expensereceipt_Expand,msdyn_expensereceipt_Filter,msdyn_expensereceipt_Fixed,msdyn_expensereceipt_Result,msdyn_expensereceipt_FormattedResult>;
  msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry: WebMappingRetrieve<msdyn_projectapproval_Select,msdyn_projectapproval_Expand,msdyn_projectapproval_Filter,msdyn_projectapproval_Fixed,msdyn_projectapproval_Result,msdyn_projectapproval_FormattedResult>;
  msdyn_msdyn_journal_msdyn_expense: WebMappingRetrieve<msdyn_journal_Select,msdyn_journal_Expand,msdyn_journal_Filter,msdyn_journal_Fixed,msdyn_journal_Result,msdyn_journal_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_expenses: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_expenses: WebMappingRelated<msdyn_expense_RelatedOne,msdyn_expense_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_expenses: WebMappingCUDA<msdyn_expense_Create,msdyn_expense_Update,msdyn_expense_Select>;
}
