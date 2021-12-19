interface ServiceContractContacts_Base extends WebEntity {
  contactid?: string | null;
  contractid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  servicecontractcontactid?: string | null;
  servicelevel?: number | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ServiceContractContacts_Relationships {
  servicecontractcontacts_AsyncOperations?: AsyncOperation_Result[] | null;
  servicecontractcontacts_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  servicecontractcontacts_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  servicecontractcontacts_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  servicecontractcontacts_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  servicecontractcontacts_association?: Contract_Result[] | null;
}
interface ServiceContractContacts extends ServiceContractContacts_Base, ServiceContractContacts_Relationships {
}
interface ServiceContractContacts_Create extends ServiceContractContacts {
}
interface ServiceContractContacts_Update extends ServiceContractContacts {
}
interface ServiceContractContacts_Select {
  contactid: WebAttribute<ServiceContractContacts_Select, { contactid: string | null }, {  }>;
  contractid: WebAttribute<ServiceContractContacts_Select, { contractid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ServiceContractContacts_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<ServiceContractContacts_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ServiceContractContacts_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  servicecontractcontactid: WebAttribute<ServiceContractContacts_Select, { servicecontractcontactid: string | null }, {  }>;
  servicelevel: WebAttribute<ServiceContractContacts_Select, { servicelevel: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ServiceContractContacts_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ServiceContractContacts_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ServiceContractContacts_Select, { versionnumber: number | null }, {  }>;
}
interface ServiceContractContacts_Filter {
  contactid: XQW.Guid;
  contractid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  servicecontractcontactid: XQW.Guid;
  servicelevel: number;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ServiceContractContacts_Expand {
  servicecontractcontacts_AsyncOperations: WebExpand<ServiceContractContacts_Expand, AsyncOperation_Select, AsyncOperation_Filter, { servicecontractcontacts_AsyncOperations: AsyncOperation_Result[] }>;
  servicecontractcontacts_BulkDeleteFailures: WebExpand<ServiceContractContacts_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { servicecontractcontacts_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  servicecontractcontacts_MailboxTrackingFolders: WebExpand<ServiceContractContacts_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { servicecontractcontacts_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  servicecontractcontacts_PrincipalObjectAttributeAccesses: WebExpand<ServiceContractContacts_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { servicecontractcontacts_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  servicecontractcontacts_UserEntityInstanceDatas: WebExpand<ServiceContractContacts_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { servicecontractcontacts_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  servicecontractcontacts_association: WebExpand<ServiceContractContacts_Expand, Contract_Select, Contract_Filter, { servicecontractcontacts_association: Contract_Result[] }>;
}
interface ServiceContractContacts_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ServiceContractContacts_Result extends ServiceContractContacts_Base, ServiceContractContacts_Relationships {
  "@odata.etag": string;
}
interface ServiceContractContacts_RelatedOne {
}
interface ServiceContractContacts_RelatedMany {
  servicecontractcontacts_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  servicecontractcontacts_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  servicecontractcontacts_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  servicecontractcontacts_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  servicecontractcontacts_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  servicecontractcontacts_association: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
}
interface WebEntitiesRetrieve {
  servicecontractcontactscollection: WebMappingRetrieve<ServiceContractContacts_Select,ServiceContractContacts_Expand,ServiceContractContacts_Filter,ServiceContractContacts_Fixed,ServiceContractContacts_Result,ServiceContractContacts_FormattedResult>;
}
interface WebEntitiesRelated {
  servicecontractcontactscollection: WebMappingRelated<ServiceContractContacts_RelatedOne,ServiceContractContacts_RelatedMany>;
}
interface WebEntitiesCUDA {
  servicecontractcontactscollection: WebMappingCUDA<ServiceContractContacts_Create,ServiceContractContacts_Update,ServiceContractContacts_Select>;
}
