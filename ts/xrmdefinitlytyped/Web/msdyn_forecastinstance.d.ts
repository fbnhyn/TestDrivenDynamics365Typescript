interface msdyn_forecastinstance_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actualamount?: number | null;
  msdyn_actualamount_base?: number | null;
  msdyn_bestcaseamount?: number | null;
  msdyn_bestcaseamount_base?: number | null;
  msdyn_committedamount?: number | null;
  msdyn_committedamount_base?: number | null;
  msdyn_forecastinstanceid?: string | null;
  msdyn_forecastinstancetype?: number | null;
  msdyn_forecastname?: string | null;
  msdyn_ismanualbestcase?: number | null;
  msdyn_ismanualcommitted?: number | null;
  msdyn_ismanualpipeline?: number | null;
  msdyn_isquotasourcemanual?: boolean | null;
  msdyn_level?: number | null;
  msdyn_manualbestcaseamount?: number | null;
  msdyn_manualbestcaseamount_base?: number | null;
  msdyn_manualcommittedamount?: number | null;
  msdyn_manualcommittedamount_base?: number | null;
  msdyn_manualpipelineamount?: number | null;
  msdyn_manualpipelineamount_base?: number | null;
  msdyn_percentageachieved?: number | null;
  msdyn_pipelineamount?: number | null;
  msdyn_pipelineamount_base?: number | null;
  msdyn_recurrenceindex?: number | null;
  msdyn_targetamount?: number | null;
  msdyn_targetamount_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_forecastinstance_statecode | null;
  statuscode?: msdyn_forecastinstance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_forecastinstance_Relationships {
  msdyn_forecastinstance_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_forecastinstance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_forecastinstance_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastinstance_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastinstance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_forecastinstance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_forecastinstance_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_forecastinstance_SyncErrors?: SyncError_Result[] | null;
  msdyn_forecastinstance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_forecastinstance_msdyn_forecastinstance?: msdyn_forecastinstance_Result[] | null;
}
interface msdyn_forecastinstance extends msdyn_forecastinstance_Base, msdyn_forecastinstance_Relationships {
  msdyn_forecastdefinitionid_bind$msdyn_forecastdefinitions?: string | null;
  msdyn_forecastparentid_bind$msdyn_forecastinstances?: string | null;
  msdyn_forecastrecurrenceid_bind$msdyn_forecastrecurrences?: string | null;
  msdyn_matchinggoalid_bind$goals?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_forecastinstance_Create extends msdyn_forecastinstance {
}
interface msdyn_forecastinstance_Update extends msdyn_forecastinstance {
}
interface msdyn_forecastinstance_Select {
  createdby_guid: WebAttribute<msdyn_forecastinstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_forecastinstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_forecastinstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_forecastinstance_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_forecastinstance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_forecastinstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_forecastinstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_forecastinstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actualamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_actualamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_actualamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_actualamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_actualamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_actualamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_bestcaseamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_bestcaseamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_bestcaseamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_bestcaseamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_bestcaseamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_bestcaseamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_committedamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_committedamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_committedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_committedamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_committedamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_committedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_forecastdefinitionid_guid: WebAttribute<msdyn_forecastinstance_Select, { msdyn_forecastdefinitionid_guid: string | null }, { msdyn_forecastdefinitionid_formatted?: string }>;
  msdyn_forecastinstanceid: WebAttribute<msdyn_forecastinstance_Select, { msdyn_forecastinstanceid: string | null }, {  }>;
  msdyn_forecastinstancetype: WebAttribute<msdyn_forecastinstance_Select, { msdyn_forecastinstancetype: number | null }, {  }>;
  msdyn_forecastname: WebAttribute<msdyn_forecastinstance_Select, { msdyn_forecastname: string | null }, {  }>;
  msdyn_forecastparentid_guid: WebAttribute<msdyn_forecastinstance_Select, { msdyn_forecastparentid_guid: string | null }, { msdyn_forecastparentid_formatted?: string }>;
  msdyn_forecastrecurrenceid_guid: WebAttribute<msdyn_forecastinstance_Select, { msdyn_forecastrecurrenceid_guid: string | null }, { msdyn_forecastrecurrenceid_formatted?: string }>;
  msdyn_ismanualbestcase: WebAttribute<msdyn_forecastinstance_Select, { msdyn_ismanualbestcase: number | null }, {  }>;
  msdyn_ismanualcommitted: WebAttribute<msdyn_forecastinstance_Select, { msdyn_ismanualcommitted: number | null }, {  }>;
  msdyn_ismanualpipeline: WebAttribute<msdyn_forecastinstance_Select, { msdyn_ismanualpipeline: number | null }, {  }>;
  msdyn_isquotasourcemanual: WebAttribute<msdyn_forecastinstance_Select, { msdyn_isquotasourcemanual: boolean | null }, {  }>;
  msdyn_level: WebAttribute<msdyn_forecastinstance_Select, { msdyn_level: number | null }, {  }>;
  msdyn_manualbestcaseamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_manualbestcaseamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_manualbestcaseamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_manualbestcaseamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_manualbestcaseamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_manualbestcaseamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_manualcommittedamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_manualcommittedamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_manualcommittedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_manualcommittedamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_manualcommittedamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_manualcommittedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_manualpipelineamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_manualpipelineamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_manualpipelineamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_manualpipelineamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_manualpipelineamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_manualpipelineamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_matchinggoalid_guid: WebAttribute<msdyn_forecastinstance_Select, { msdyn_matchinggoalid_guid: string | null }, { msdyn_matchinggoalid_formatted?: string }>;
  msdyn_percentageachieved: WebAttribute<msdyn_forecastinstance_Select, { msdyn_percentageachieved: number | null }, {  }>;
  msdyn_pipelineamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_pipelineamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_pipelineamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_pipelineamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_pipelineamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_pipelineamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_recurrenceindex: WebAttribute<msdyn_forecastinstance_Select, { msdyn_recurrenceindex: number | null }, {  }>;
  msdyn_targetamount: WebAttribute<msdyn_forecastinstance_Select, { msdyn_targetamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_targetamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_targetamount_base: WebAttribute<msdyn_forecastinstance_Select, { msdyn_targetamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_targetamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_forecastinstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_forecastinstance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_forecastinstance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_forecastinstance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_forecastinstance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_forecastinstance_Select, { statecode: msdyn_forecastinstance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_forecastinstance_Select, { statuscode: msdyn_forecastinstance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_forecastinstance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_forecastinstance_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_forecastinstance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_forecastinstance_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_forecastinstance_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actualamount: number;
  msdyn_actualamount_base: number;
  msdyn_bestcaseamount: number;
  msdyn_bestcaseamount_base: number;
  msdyn_committedamount: number;
  msdyn_committedamount_base: number;
  msdyn_forecastdefinitionid_guid: XQW.Guid;
  msdyn_forecastinstanceid: XQW.Guid;
  msdyn_forecastinstancetype: number;
  msdyn_forecastname: string;
  msdyn_forecastparentid_guid: XQW.Guid;
  msdyn_forecastrecurrenceid_guid: XQW.Guid;
  msdyn_ismanualbestcase: number;
  msdyn_ismanualcommitted: number;
  msdyn_ismanualpipeline: number;
  msdyn_isquotasourcemanual: boolean;
  msdyn_level: number;
  msdyn_manualbestcaseamount: number;
  msdyn_manualbestcaseamount_base: number;
  msdyn_manualcommittedamount: number;
  msdyn_manualcommittedamount_base: number;
  msdyn_manualpipelineamount: number;
  msdyn_manualpipelineamount_base: number;
  msdyn_matchinggoalid_guid: XQW.Guid;
  msdyn_percentageachieved: any;
  msdyn_pipelineamount: number;
  msdyn_pipelineamount_base: number;
  msdyn_recurrenceindex: number;
  msdyn_targetamount: number;
  msdyn_targetamount_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_forecastinstance_statecode;
  statuscode: msdyn_forecastinstance_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_forecastinstance_Expand {
  createdby: WebExpand<msdyn_forecastinstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_forecastinstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_forecastinstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_forecastinstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_forecastdefinitionid: WebExpand<msdyn_forecastinstance_Expand, msdyn_forecastdefinition_Select, msdyn_forecastdefinition_Filter, { msdyn_forecastdefinitionid: msdyn_forecastdefinition_Result }>;
  msdyn_forecastinstance_AsyncOperations: WebExpand<msdyn_forecastinstance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_forecastinstance_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_forecastinstance_BulkDeleteFailures: WebExpand<msdyn_forecastinstance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_forecastinstance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_forecastinstance_DuplicateBaseRecord: WebExpand<msdyn_forecastinstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastinstance_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastinstance_DuplicateMatchingRecord: WebExpand<msdyn_forecastinstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastinstance_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastinstance_MailboxTrackingFolders: WebExpand<msdyn_forecastinstance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_forecastinstance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_forecastinstance_PrincipalObjectAttributeAccesses: WebExpand<msdyn_forecastinstance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_forecastinstance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_forecastinstance_ProcessSession: WebExpand<msdyn_forecastinstance_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_forecastinstance_ProcessSession: ProcessSession_Result[] }>;
  msdyn_forecastinstance_SyncErrors: WebExpand<msdyn_forecastinstance_Expand, SyncError_Select, SyncError_Filter, { msdyn_forecastinstance_SyncErrors: SyncError_Result[] }>;
  msdyn_forecastinstance_UserEntityInstanceDatas: WebExpand<msdyn_forecastinstance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_forecastinstance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_forecastparentid: WebExpand<msdyn_forecastinstance_Expand, msdyn_forecastinstance_Select, msdyn_forecastinstance_Filter, { msdyn_forecastparentid: msdyn_forecastinstance_Result }>;
  msdyn_forecastrecurrenceid: WebExpand<msdyn_forecastinstance_Expand, msdyn_forecastrecurrence_Select, msdyn_forecastrecurrence_Filter, { msdyn_forecastrecurrenceid: msdyn_forecastrecurrence_Result }>;
  msdyn_matchinggoalid: WebExpand<msdyn_forecastinstance_Expand, Goal_Select, Goal_Filter, { msdyn_matchinggoalid: Goal_Result }>;
  msdyn_msdyn_forecastinstance_msdyn_forecastinstance: WebExpand<msdyn_forecastinstance_Expand, msdyn_forecastinstance_Select, msdyn_forecastinstance_Filter, { msdyn_msdyn_forecastinstance_msdyn_forecastinstance: msdyn_forecastinstance_Result[] }>;
  ownerid: WebExpand<msdyn_forecastinstance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_forecastinstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_forecastinstance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_forecastinstance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_forecastinstance_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_forecastinstance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actualamount_base_formatted?: string;
  msdyn_actualamount_formatted?: string;
  msdyn_bestcaseamount_base_formatted?: string;
  msdyn_bestcaseamount_formatted?: string;
  msdyn_committedamount_base_formatted?: string;
  msdyn_committedamount_formatted?: string;
  msdyn_forecastdefinitionid_formatted?: string;
  msdyn_forecastparentid_formatted?: string;
  msdyn_forecastrecurrenceid_formatted?: string;
  msdyn_manualbestcaseamount_base_formatted?: string;
  msdyn_manualbestcaseamount_formatted?: string;
  msdyn_manualcommittedamount_base_formatted?: string;
  msdyn_manualcommittedamount_formatted?: string;
  msdyn_manualpipelineamount_base_formatted?: string;
  msdyn_manualpipelineamount_formatted?: string;
  msdyn_matchinggoalid_formatted?: string;
  msdyn_pipelineamount_base_formatted?: string;
  msdyn_pipelineamount_formatted?: string;
  msdyn_targetamount_base_formatted?: string;
  msdyn_targetamount_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_forecastinstance_Result extends msdyn_forecastinstance_Base, msdyn_forecastinstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_forecastdefinitionid_guid: string | null;
  msdyn_forecastparentid_guid: string | null;
  msdyn_forecastrecurrenceid_guid: string | null;
  msdyn_matchinggoalid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_forecastinstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_forecastdefinitionid: WebMappingRetrieve<msdyn_forecastdefinition_Select,msdyn_forecastdefinition_Expand,msdyn_forecastdefinition_Filter,msdyn_forecastdefinition_Fixed,msdyn_forecastdefinition_Result,msdyn_forecastdefinition_FormattedResult>;
  msdyn_forecastparentid: WebMappingRetrieve<msdyn_forecastinstance_Select,msdyn_forecastinstance_Expand,msdyn_forecastinstance_Filter,msdyn_forecastinstance_Fixed,msdyn_forecastinstance_Result,msdyn_forecastinstance_FormattedResult>;
  msdyn_forecastrecurrenceid: WebMappingRetrieve<msdyn_forecastrecurrence_Select,msdyn_forecastrecurrence_Expand,msdyn_forecastrecurrence_Filter,msdyn_forecastrecurrence_Fixed,msdyn_forecastrecurrence_Result,msdyn_forecastrecurrence_FormattedResult>;
  msdyn_matchinggoalid: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_forecastinstance_RelatedMany {
  msdyn_forecastinstance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_forecastinstance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_forecastinstance_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastinstance_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastinstance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_forecastinstance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_forecastinstance_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_forecastinstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_forecastinstance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_forecastinstance_msdyn_forecastinstance: WebMappingRetrieve<msdyn_forecastinstance_Select,msdyn_forecastinstance_Expand,msdyn_forecastinstance_Filter,msdyn_forecastinstance_Fixed,msdyn_forecastinstance_Result,msdyn_forecastinstance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_forecastinstances: WebMappingRetrieve<msdyn_forecastinstance_Select,msdyn_forecastinstance_Expand,msdyn_forecastinstance_Filter,msdyn_forecastinstance_Fixed,msdyn_forecastinstance_Result,msdyn_forecastinstance_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_forecastinstances: WebMappingRelated<msdyn_forecastinstance_RelatedOne,msdyn_forecastinstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_forecastinstances: WebMappingCUDA<msdyn_forecastinstance_Create,msdyn_forecastinstance_Update,msdyn_forecastinstance_Select>;
}
