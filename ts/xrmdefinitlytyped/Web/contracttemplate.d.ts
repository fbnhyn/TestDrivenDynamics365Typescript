interface ContractTemplate_Base extends WebEntity {
  abbreviation?: string | null;
  allotmenttypecode?: contracttemplate_allotmenttypecode | null;
  billingfrequencycode?: contracttemplate_billingfrequencycode | null;
  componentstate?: componentstate | null;
  contractservicelevelcode?: contracttemplate_contractservicelevelcode | null;
  contracttemplateid?: string | null;
  contracttemplateidunique?: string | null;
  createdon?: Date | null;
  description?: string | null;
  effectivitycalendar?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  usediscountaspercentage?: boolean | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ContractTemplate_Relationships {
  ContractTemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  ContractTemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ContractTemplate_ProcessSessions?: ProcessSession_Result[] | null;
  ContractTemplate_SyncErrors?: SyncError_Result[] | null;
  contract_template_contracts?: Contract_Result[] | null;
  contracttemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  contracttemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_contracttemplate?: UserEntityInstanceData_Result[] | null;
}
interface ContractTemplate extends ContractTemplate_Base, ContractTemplate_Relationships {
}
interface ContractTemplate_Create extends ContractTemplate {
}
interface ContractTemplate_Update extends ContractTemplate {
}
interface ContractTemplate_Select {
  abbreviation: WebAttribute<ContractTemplate_Select, { abbreviation: string | null }, {  }>;
  allotmenttypecode: WebAttribute<ContractTemplate_Select, { allotmenttypecode: contracttemplate_allotmenttypecode | null }, { allotmenttypecode_formatted?: string }>;
  billingfrequencycode: WebAttribute<ContractTemplate_Select, { billingfrequencycode: contracttemplate_billingfrequencycode | null }, { billingfrequencycode_formatted?: string }>;
  componentstate: WebAttribute<ContractTemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  contractservicelevelcode: WebAttribute<ContractTemplate_Select, { contractservicelevelcode: contracttemplate_contractservicelevelcode | null }, { contractservicelevelcode_formatted?: string }>;
  contracttemplateid: WebAttribute<ContractTemplate_Select, { contracttemplateid: string | null }, {  }>;
  contracttemplateidunique: WebAttribute<ContractTemplate_Select, { contracttemplateidunique: string | null }, {  }>;
  createdby_guid: WebAttribute<ContractTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ContractTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ContractTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ContractTemplate_Select, { description: string | null }, {  }>;
  effectivitycalendar: WebAttribute<ContractTemplate_Select, { effectivitycalendar: string | null }, {  }>;
  importsequencenumber: WebAttribute<ContractTemplate_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<ContractTemplate_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<ContractTemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ContractTemplate_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ContractTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ContractTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ContractTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ContractTemplate_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ContractTemplate_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ContractTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ContractTemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<ContractTemplate_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ContractTemplate_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ContractTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  usediscountaspercentage: WebAttribute<ContractTemplate_Select, { usediscountaspercentage: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ContractTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ContractTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface ContractTemplate_Filter {
  abbreviation: string;
  allotmenttypecode: contracttemplate_allotmenttypecode;
  billingfrequencycode: contracttemplate_billingfrequencycode;
  componentstate: componentstate;
  contractservicelevelcode: contracttemplate_contractservicelevelcode;
  contracttemplateid: XQW.Guid;
  contracttemplateidunique: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  effectivitycalendar: string;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  usediscountaspercentage: boolean;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ContractTemplate_Expand {
  ContractTemplate_AsyncOperations: WebExpand<ContractTemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ContractTemplate_AsyncOperations: AsyncOperation_Result[] }>;
  ContractTemplate_BulkDeleteFailures: WebExpand<ContractTemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ContractTemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ContractTemplate_ProcessSessions: WebExpand<ContractTemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { ContractTemplate_ProcessSessions: ProcessSession_Result[] }>;
  ContractTemplate_SyncErrors: WebExpand<ContractTemplate_Expand, SyncError_Select, SyncError_Filter, { ContractTemplate_SyncErrors: SyncError_Result[] }>;
  contract_template_contracts: WebExpand<ContractTemplate_Expand, Contract_Select, Contract_Filter, { contract_template_contracts: Contract_Result[] }>;
  contracttemplate_MailboxTrackingFolders: WebExpand<ContractTemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { contracttemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  contracttemplate_PrincipalObjectAttributeAccesses: WebExpand<ContractTemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contracttemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  createdby: WebExpand<ContractTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ContractTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ContractTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ContractTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ContractTemplate_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_contracttemplate: WebExpand<ContractTemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_contracttemplate: UserEntityInstanceData_Result[] }>;
}
interface ContractTemplate_FormattedResult {
  allotmenttypecode_formatted?: string;
  billingfrequencycode_formatted?: string;
  componentstate_formatted?: string;
  contractservicelevelcode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
}
interface ContractTemplate_Result extends ContractTemplate_Base, ContractTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ContractTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ContractTemplate_RelatedMany {
  ContractTemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ContractTemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ContractTemplate_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ContractTemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  contract_template_contracts: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  contracttemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  contracttemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_contracttemplate: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contracttemplates: WebMappingRetrieve<ContractTemplate_Select,ContractTemplate_Expand,ContractTemplate_Filter,ContractTemplate_Fixed,ContractTemplate_Result,ContractTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  contracttemplates: WebMappingRelated<ContractTemplate_RelatedOne,ContractTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  contracttemplates: WebMappingCUDA<ContractTemplate_Create,ContractTemplate_Update,ContractTemplate_Select>;
}
