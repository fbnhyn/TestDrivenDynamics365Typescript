interface ReportCategory_Base extends WebEntity {
  categorycode?: reportcategory_categorycode | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  reportcategoryid?: string | null;
  reportcategoryidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ReportCategory_Relationships {
  ReportCategory_SyncErrors?: SyncError_Result[] | null;
  reportcategory_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_reportcategory?: UserEntityInstanceData_Result[] | null;
}
interface ReportCategory extends ReportCategory_Base, ReportCategory_Relationships {
  reportid_bind$reports?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface ReportCategory_Create extends ReportCategory {
}
interface ReportCategory_Update extends ReportCategory {
}
interface ReportCategory_Select {
  categorycode: WebAttribute<ReportCategory_Select, { categorycode: reportcategory_categorycode | null }, { categorycode_formatted?: string }>;
  componentstate: WebAttribute<ReportCategory_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ReportCategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ReportCategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ReportCategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<ReportCategory_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<ReportCategory_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ReportCategory_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ReportCategory_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ReportCategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ReportCategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ReportCategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<ReportCategory_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ReportCategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ReportCategory_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ReportCategory_Select, { owninguser: string | null }, {  }>;
  reportcategoryid: WebAttribute<ReportCategory_Select, { reportcategoryid: string | null }, {  }>;
  reportcategoryidunique: WebAttribute<ReportCategory_Select, { reportcategoryidunique: string | null }, {  }>;
  reportid_guid: WebAttribute<ReportCategory_Select, { reportid_guid: string | null }, { reportid_formatted?: string }>;
  solutionid: WebAttribute<ReportCategory_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ReportCategory_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ReportCategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ReportCategory_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ReportCategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ReportCategory_Select, { versionnumber: number | null }, {  }>;
}
interface ReportCategory_Filter {
  categorycode: reportcategory_categorycode;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  reportcategoryid: XQW.Guid;
  reportcategoryidunique: XQW.Guid;
  reportid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ReportCategory_Expand {
  ReportCategory_SyncErrors: WebExpand<ReportCategory_Expand, SyncError_Select, SyncError_Filter, { ReportCategory_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<ReportCategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ReportCategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ReportCategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ReportCategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  reportcategory_principalobjectattributeaccess: WebExpand<ReportCategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { reportcategory_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  reportid: WebExpand<ReportCategory_Expand, Report_Select, Report_Filter, { reportid: Report_Result }>;
  transactioncurrencyid: WebExpand<ReportCategory_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_reportcategory: WebExpand<ReportCategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_reportcategory: UserEntityInstanceData_Result[] }>;
}
interface ReportCategory_FormattedResult {
  categorycode_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  reportid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ReportCategory_Result extends ReportCategory_Base, ReportCategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  reportid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ReportCategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  reportid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface ReportCategory_RelatedMany {
  ReportCategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  reportcategory_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_reportcategory: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  reportcategories: WebMappingRetrieve<ReportCategory_Select,ReportCategory_Expand,ReportCategory_Filter,ReportCategory_Fixed,ReportCategory_Result,ReportCategory_FormattedResult>;
}
interface WebEntitiesRelated {
  reportcategories: WebMappingRelated<ReportCategory_RelatedOne,ReportCategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  reportcategories: WebMappingCUDA<ReportCategory_Create,ReportCategory_Update,ReportCategory_Select>;
}
