interface msdyn_problematicasset_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_assetid?: string | null;
  msdyn_breakfixcost?: number | null;
  msdyn_breakfixcost_base?: number | null;
  msdyn_breakfixsale?: number | null;
  msdyn_breakfixsale_base?: number | null;
  msdyn_breakfixworkordercount?: number | null;
  msdyn_confidence?: number | null;
  msdyn_highertotalcost?: msdyn_problematicasset_msdyn_highertotalcost | null;
  msdyn_higherworkordercount?: msdyn_problematicasset_msdyn_higherworkordercount | null;
  msdyn_maintenancecost?: number | null;
  msdyn_maintenancecost_base?: number | null;
  msdyn_maintenancesale?: number | null;
  msdyn_maintenancesale_base?: number | null;
  msdyn_maintenanceworkordercount?: number | null;
  msdyn_name?: string | null;
  msdyn_numberofdays?: msdyn_numberofdays | null;
  msdyn_problematicassetid?: string | null;
  msdyn_replacementcost?: number | null;
  msdyn_replacementcost_base?: number | null;
  msdyn_replacementsale?: number | null;
  msdyn_replacementsale_base?: number | null;
  msdyn_runid?: string | null;
  msdyn_score?: number | null;
  msdyn_suggestion?: msdyn_problematicasset_msdyn_suggestion | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_problematicasset_statecode | null;
  statuscode?: msdyn_problematicasset_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_problematicasset_Relationships {
  msdyn_problematicasset_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_problematicasset_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_problematicasset_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_problematicasset_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_problematicasset_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_problematicasset_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_problematicasset_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_problematicasset_SyncErrors?: SyncError_Result[] | null;
  msdyn_problematicasset_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_problematicasset extends msdyn_problematicasset_Base, msdyn_problematicasset_Relationships {
  msdyn_asset_bind$msdyn_customerassets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_problematicasset_Create extends msdyn_problematicasset {
}
interface msdyn_problematicasset_Update extends msdyn_problematicasset {
}
interface msdyn_problematicasset_Select {
  createdby_guid: WebAttribute<msdyn_problematicasset_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_problematicasset_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_problematicasset_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_problematicasset_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_problematicasset_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_problematicasset_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_problematicasset_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_problematicasset_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_asset_guid: WebAttribute<msdyn_problematicasset_Select, { msdyn_asset_guid: string | null }, { msdyn_asset_formatted?: string }>;
  msdyn_assetid: WebAttribute<msdyn_problematicasset_Select, { msdyn_assetid: string | null }, {  }>;
  msdyn_breakfixcost: WebAttribute<msdyn_problematicasset_Select, { msdyn_breakfixcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_breakfixcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_breakfixcost_base: WebAttribute<msdyn_problematicasset_Select, { msdyn_breakfixcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_breakfixcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_breakfixsale: WebAttribute<msdyn_problematicasset_Select, { msdyn_breakfixsale: number | null; transactioncurrencyid_guid: string | null }, { msdyn_breakfixsale_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_breakfixsale_base: WebAttribute<msdyn_problematicasset_Select, { msdyn_breakfixsale_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_breakfixsale_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_breakfixworkordercount: WebAttribute<msdyn_problematicasset_Select, { msdyn_breakfixworkordercount: number | null }, {  }>;
  msdyn_confidence: WebAttribute<msdyn_problematicasset_Select, { msdyn_confidence: number | null }, {  }>;
  msdyn_highertotalcost: WebAttribute<msdyn_problematicasset_Select, { msdyn_highertotalcost: msdyn_problematicasset_msdyn_highertotalcost | null }, { msdyn_highertotalcost_formatted?: string }>;
  msdyn_higherworkordercount: WebAttribute<msdyn_problematicasset_Select, { msdyn_higherworkordercount: msdyn_problematicasset_msdyn_higherworkordercount | null }, { msdyn_higherworkordercount_formatted?: string }>;
  msdyn_maintenancecost: WebAttribute<msdyn_problematicasset_Select, { msdyn_maintenancecost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_maintenancecost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_maintenancecost_base: WebAttribute<msdyn_problematicasset_Select, { msdyn_maintenancecost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_maintenancecost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_maintenancesale: WebAttribute<msdyn_problematicasset_Select, { msdyn_maintenancesale: number | null; transactioncurrencyid_guid: string | null }, { msdyn_maintenancesale_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_maintenancesale_base: WebAttribute<msdyn_problematicasset_Select, { msdyn_maintenancesale_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_maintenancesale_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_maintenanceworkordercount: WebAttribute<msdyn_problematicasset_Select, { msdyn_maintenanceworkordercount: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_problematicasset_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numberofdays: WebAttribute<msdyn_problematicasset_Select, { msdyn_numberofdays: msdyn_numberofdays | null }, { msdyn_numberofdays_formatted?: string }>;
  msdyn_problematicassetid: WebAttribute<msdyn_problematicasset_Select, { msdyn_problematicassetid: string | null }, {  }>;
  msdyn_replacementcost: WebAttribute<msdyn_problematicasset_Select, { msdyn_replacementcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_replacementcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_replacementcost_base: WebAttribute<msdyn_problematicasset_Select, { msdyn_replacementcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_replacementcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_replacementsale: WebAttribute<msdyn_problematicasset_Select, { msdyn_replacementsale: number | null; transactioncurrencyid_guid: string | null }, { msdyn_replacementsale_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_replacementsale_base: WebAttribute<msdyn_problematicasset_Select, { msdyn_replacementsale_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_replacementsale_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_runid: WebAttribute<msdyn_problematicasset_Select, { msdyn_runid: string | null }, {  }>;
  msdyn_score: WebAttribute<msdyn_problematicasset_Select, { msdyn_score: number | null }, {  }>;
  msdyn_suggestion: WebAttribute<msdyn_problematicasset_Select, { msdyn_suggestion: msdyn_problematicasset_msdyn_suggestion | null }, { msdyn_suggestion_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_problematicasset_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_problematicasset_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_problematicasset_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_problematicasset_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_problematicasset_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_problematicasset_Select, { statecode: msdyn_problematicasset_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_problematicasset_Select, { statuscode: msdyn_problematicasset_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_problematicasset_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_problematicasset_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_problematicasset_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_problematicasset_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_problematicasset_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_asset_guid: XQW.Guid;
  msdyn_assetid: string;
  msdyn_breakfixcost: number;
  msdyn_breakfixcost_base: number;
  msdyn_breakfixsale: number;
  msdyn_breakfixsale_base: number;
  msdyn_breakfixworkordercount: number;
  msdyn_confidence: number;
  msdyn_highertotalcost: msdyn_problematicasset_msdyn_highertotalcost;
  msdyn_higherworkordercount: msdyn_problematicasset_msdyn_higherworkordercount;
  msdyn_maintenancecost: number;
  msdyn_maintenancecost_base: number;
  msdyn_maintenancesale: number;
  msdyn_maintenancesale_base: number;
  msdyn_maintenanceworkordercount: number;
  msdyn_name: string;
  msdyn_numberofdays: msdyn_numberofdays;
  msdyn_problematicassetid: XQW.Guid;
  msdyn_replacementcost: number;
  msdyn_replacementcost_base: number;
  msdyn_replacementsale: number;
  msdyn_replacementsale_base: number;
  msdyn_runid: string;
  msdyn_score: number;
  msdyn_suggestion: msdyn_problematicasset_msdyn_suggestion;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_problematicasset_statecode;
  statuscode: msdyn_problematicasset_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_problematicasset_Expand {
  createdby: WebExpand<msdyn_problematicasset_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_problematicasset_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_problematicasset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_problematicasset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_asset: WebExpand<msdyn_problematicasset_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_asset: msdyn_customerasset_Result }>;
  msdyn_problematicasset_AsyncOperations: WebExpand<msdyn_problematicasset_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_problematicasset_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_problematicasset_BulkDeleteFailures: WebExpand<msdyn_problematicasset_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_problematicasset_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_problematicasset_DuplicateBaseRecord: WebExpand<msdyn_problematicasset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_problematicasset_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_problematicasset_DuplicateMatchingRecord: WebExpand<msdyn_problematicasset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_problematicasset_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_problematicasset_MailboxTrackingFolders: WebExpand<msdyn_problematicasset_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_problematicasset_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_problematicasset_PrincipalObjectAttributeAccesses: WebExpand<msdyn_problematicasset_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_problematicasset_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_problematicasset_ProcessSession: WebExpand<msdyn_problematicasset_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_problematicasset_ProcessSession: ProcessSession_Result[] }>;
  msdyn_problematicasset_SyncErrors: WebExpand<msdyn_problematicasset_Expand, SyncError_Select, SyncError_Filter, { msdyn_problematicasset_SyncErrors: SyncError_Result[] }>;
  msdyn_problematicasset_UserEntityInstanceDatas: WebExpand<msdyn_problematicasset_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_problematicasset_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_problematicasset_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_problematicasset_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_problematicasset_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_problematicasset_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_problematicasset_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_problematicasset_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_asset_formatted?: string;
  msdyn_breakfixcost_base_formatted?: string;
  msdyn_breakfixcost_formatted?: string;
  msdyn_breakfixsale_base_formatted?: string;
  msdyn_breakfixsale_formatted?: string;
  msdyn_highertotalcost_formatted?: string;
  msdyn_higherworkordercount_formatted?: string;
  msdyn_maintenancecost_base_formatted?: string;
  msdyn_maintenancecost_formatted?: string;
  msdyn_maintenancesale_base_formatted?: string;
  msdyn_maintenancesale_formatted?: string;
  msdyn_numberofdays_formatted?: string;
  msdyn_replacementcost_base_formatted?: string;
  msdyn_replacementcost_formatted?: string;
  msdyn_replacementsale_base_formatted?: string;
  msdyn_replacementsale_formatted?: string;
  msdyn_suggestion_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_problematicasset_Result extends msdyn_problematicasset_Base, msdyn_problematicasset_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_asset_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_problematicasset_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_asset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_problematicasset_RelatedMany {
  msdyn_problematicasset_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_problematicasset_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_problematicasset_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_problematicasset_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_problematicasset_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_problematicasset_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_problematicasset_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_problematicasset_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_problematicasset_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_problematicassets: WebMappingRetrieve<msdyn_problematicasset_Select,msdyn_problematicasset_Expand,msdyn_problematicasset_Filter,msdyn_problematicasset_Fixed,msdyn_problematicasset_Result,msdyn_problematicasset_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_problematicassets: WebMappingRelated<msdyn_problematicasset_RelatedOne,msdyn_problematicasset_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_problematicassets: WebMappingCUDA<msdyn_problematicasset_Create,msdyn_problematicasset_Update,msdyn_problematicasset_Select>;
}
