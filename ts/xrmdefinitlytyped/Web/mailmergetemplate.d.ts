interface MailMergeTemplate_Base extends WebEntity {
  body?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  defaultfilter?: string | null;
  description?: string | null;
  documentformat?: mailmergetemplate_documentformat | null;
  exchangerate?: number | null;
  filename?: string | null;
  filesize?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  ispersonal?: boolean | null;
  languagecode?: number | null;
  mailmergetemplateid?: string | null;
  mailmergetemplateidunique?: string | null;
  mailmergetype?: mailmergetemplate_mailmergetype | null;
  mimetype?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  parameterxml?: string | null;
  solutionid?: string | null;
  statecode?: mailmergetemplate_statecode | null;
  statuscode?: mailmergetemplate_statuscode | null;
  supportingsolutionid?: string | null;
  templatetypecode?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface MailMergeTemplate_Relationships {
  MailMergeTemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  MailMergeTemplate_ProcessSessions?: ProcessSession_Result[] | null;
  MailMergeTemplate_SyncErrors?: SyncError_Result[] | null;
  mailmergetemplate_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_mailmergetemplate?: UserEntityInstanceData_Result[] | null;
}
interface MailMergeTemplate extends MailMergeTemplate_Base, MailMergeTemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface MailMergeTemplate_Create extends MailMergeTemplate {
}
interface MailMergeTemplate_Update extends MailMergeTemplate {
}
interface MailMergeTemplate_Select {
  body: WebAttribute<MailMergeTemplate_Select, { body: string | null }, {  }>;
  componentstate: WebAttribute<MailMergeTemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<MailMergeTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<MailMergeTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<MailMergeTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  defaultfilter: WebAttribute<MailMergeTemplate_Select, { defaultfilter: string | null }, {  }>;
  description: WebAttribute<MailMergeTemplate_Select, { description: string | null }, {  }>;
  documentformat: WebAttribute<MailMergeTemplate_Select, { documentformat: mailmergetemplate_documentformat | null }, { documentformat_formatted?: string }>;
  exchangerate: WebAttribute<MailMergeTemplate_Select, { exchangerate: number | null }, {  }>;
  filename: WebAttribute<MailMergeTemplate_Select, { filename: string | null }, {  }>;
  filesize: WebAttribute<MailMergeTemplate_Select, { filesize: number | null }, {  }>;
  introducedversion: WebAttribute<MailMergeTemplate_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<MailMergeTemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<MailMergeTemplate_Select, { ismanaged: boolean | null }, {  }>;
  ispersonal: WebAttribute<MailMergeTemplate_Select, { ispersonal: boolean | null }, {  }>;
  languagecode: WebAttribute<MailMergeTemplate_Select, { languagecode: number | null }, {  }>;
  mailmergetemplateid: WebAttribute<MailMergeTemplate_Select, { mailmergetemplateid: string | null }, {  }>;
  mailmergetemplateidunique: WebAttribute<MailMergeTemplate_Select, { mailmergetemplateidunique: string | null }, {  }>;
  mailmergetype: WebAttribute<MailMergeTemplate_Select, { mailmergetype: mailmergetemplate_mailmergetype | null }, { mailmergetype_formatted?: string }>;
  mimetype: WebAttribute<MailMergeTemplate_Select, { mimetype: string | null }, {  }>;
  modifiedby_guid: WebAttribute<MailMergeTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<MailMergeTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<MailMergeTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<MailMergeTemplate_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<MailMergeTemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<MailMergeTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<MailMergeTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<MailMergeTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<MailMergeTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parameterxml: WebAttribute<MailMergeTemplate_Select, { parameterxml: string | null }, {  }>;
  solutionid: WebAttribute<MailMergeTemplate_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<MailMergeTemplate_Select, { statecode: mailmergetemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<MailMergeTemplate_Select, { statuscode: mailmergetemplate_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<MailMergeTemplate_Select, { supportingsolutionid: string | null }, {  }>;
  templatetypecode: WebAttribute<MailMergeTemplate_Select, { templatetypecode: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<MailMergeTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<MailMergeTemplate_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<MailMergeTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<MailMergeTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface MailMergeTemplate_Filter {
  body: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  defaultfilter: string;
  description: string;
  documentformat: mailmergetemplate_documentformat;
  exchangerate: any;
  filename: string;
  filesize: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  ispersonal: boolean;
  languagecode: number;
  mailmergetemplateid: XQW.Guid;
  mailmergetemplateidunique: XQW.Guid;
  mailmergetype: mailmergetemplate_mailmergetype;
  mimetype: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parameterxml: string;
  solutionid: XQW.Guid;
  statecode: mailmergetemplate_statecode;
  statuscode: mailmergetemplate_statuscode;
  supportingsolutionid: XQW.Guid;
  templatetypecode: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface MailMergeTemplate_Expand {
  MailMergeTemplate_AsyncOperations: WebExpand<MailMergeTemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { MailMergeTemplate_AsyncOperations: AsyncOperation_Result[] }>;
  MailMergeTemplate_ProcessSessions: WebExpand<MailMergeTemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { MailMergeTemplate_ProcessSessions: ProcessSession_Result[] }>;
  MailMergeTemplate_SyncErrors: WebExpand<MailMergeTemplate_Expand, SyncError_Select, SyncError_Filter, { MailMergeTemplate_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<MailMergeTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<MailMergeTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  mailmergetemplate_principalobjectattributeaccess: WebExpand<MailMergeTemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { mailmergetemplate_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<MailMergeTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<MailMergeTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<MailMergeTemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<MailMergeTemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  transactioncurrencyid: WebExpand<MailMergeTemplate_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_mailmergetemplate: WebExpand<MailMergeTemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_mailmergetemplate: UserEntityInstanceData_Result[] }>;
}
interface MailMergeTemplate_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  documentformat_formatted?: string;
  mailmergetype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface MailMergeTemplate_Result extends MailMergeTemplate_Base, MailMergeTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface MailMergeTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface MailMergeTemplate_RelatedMany {
  MailMergeTemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  MailMergeTemplate_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  MailMergeTemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  mailmergetemplate_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_mailmergetemplate: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  mailmergetemplates: WebMappingRetrieve<MailMergeTemplate_Select,MailMergeTemplate_Expand,MailMergeTemplate_Filter,MailMergeTemplate_Fixed,MailMergeTemplate_Result,MailMergeTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  mailmergetemplates: WebMappingRelated<MailMergeTemplate_RelatedOne,MailMergeTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  mailmergetemplates: WebMappingCUDA<MailMergeTemplate_Create,MailMergeTemplate_Update,MailMergeTemplate_Select>;
}
