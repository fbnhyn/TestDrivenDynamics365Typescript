interface CustomerRelationship_Base extends WebEntity {
  createdon?: Date | null;
  customerrelationshipid?: string | null;
  customerroledescription?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  partnerroledescription?: string | null;
  uniquedscid?: string | null;
  versionnumber?: number | null;
}
interface CustomerRelationship_Relationships {
  CustomerRelationship_AsyncOperations?: AsyncOperation_Result[] | null;
  CustomerRelationship_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  CustomerRelationship_ProcessSessions?: ProcessSession_Result[] | null;
  customer_relationship_converse_relationship?: CustomerRelationship_Result[] | null;
  customerid_account?: Account_Result | null;
  customerid_contact?: Contact_Result | null;
  partnerid_account?: Account_Result | null;
  partnerid_contact?: Contact_Result | null;
  userentityinstancedata_customerrelationship?: UserEntityInstanceData_Result[] | null;
}
interface CustomerRelationship extends CustomerRelationship_Base, CustomerRelationship_Relationships {
  converserelationshipid_bind$customerrelationships?: string | null;
  customerid_account_bind$accounts?: string | null;
  customerid_contact_bind$contacts?: string | null;
  customerroleid_bind$relationshiproles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  partnerid_account_bind$accounts?: string | null;
  partnerid_contact_bind$contacts?: string | null;
  partnerroleid_bind$relationshiproles?: string | null;
}
interface CustomerRelationship_Create extends CustomerRelationship {
}
interface CustomerRelationship_Update extends CustomerRelationship {
}
interface CustomerRelationship_Select {
  converserelationshipid_guid: WebAttribute<CustomerRelationship_Select, { converserelationshipid_guid: string | null }, { converserelationshipid_formatted?: string }>;
  createdby_guid: WebAttribute<CustomerRelationship_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomerRelationship_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomerRelationship_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customerid_guid: WebAttribute<CustomerRelationship_Select, { customerid_guid: string | null }, { customerid_formatted?: string }>;
  customerrelationshipid: WebAttribute<CustomerRelationship_Select, { customerrelationshipid: string | null }, {  }>;
  customerroledescription: WebAttribute<CustomerRelationship_Select, { customerroledescription: string | null }, {  }>;
  customerroleid_guid: WebAttribute<CustomerRelationship_Select, { customerroleid_guid: string | null }, { customerroleid_formatted?: string }>;
  importsequencenumber: WebAttribute<CustomerRelationship_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomerRelationship_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomerRelationship_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomerRelationship_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<CustomerRelationship_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<CustomerRelationship_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CustomerRelationship_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CustomerRelationship_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CustomerRelationship_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  partnerid_guid: WebAttribute<CustomerRelationship_Select, { partnerid_guid: string | null }, { partnerid_formatted?: string }>;
  partnerroledescription: WebAttribute<CustomerRelationship_Select, { partnerroledescription: string | null }, {  }>;
  partnerroleid_guid: WebAttribute<CustomerRelationship_Select, { partnerroleid_guid: string | null }, { partnerroleid_formatted?: string }>;
  uniquedscid: WebAttribute<CustomerRelationship_Select, { uniquedscid: string | null }, {  }>;
  versionnumber: WebAttribute<CustomerRelationship_Select, { versionnumber: number | null }, {  }>;
}
interface CustomerRelationship_Filter {
  converserelationshipid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customerid_guid: XQW.Guid;
  customerrelationshipid: XQW.Guid;
  customerroledescription: string;
  customerroleid_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  partnerid_guid: XQW.Guid;
  partnerroledescription: string;
  partnerroleid_guid: XQW.Guid;
  uniquedscid: XQW.Guid;
  versionnumber: number;
}
interface CustomerRelationship_Expand {
  CustomerRelationship_AsyncOperations: WebExpand<CustomerRelationship_Expand, AsyncOperation_Select, AsyncOperation_Filter, { CustomerRelationship_AsyncOperations: AsyncOperation_Result[] }>;
  CustomerRelationship_BulkDeleteFailures: WebExpand<CustomerRelationship_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { CustomerRelationship_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  CustomerRelationship_ProcessSessions: WebExpand<CustomerRelationship_Expand, ProcessSession_Select, ProcessSession_Filter, { CustomerRelationship_ProcessSessions: ProcessSession_Result[] }>;
  converserelationshipid: WebExpand<CustomerRelationship_Expand, CustomerRelationship_Select, CustomerRelationship_Filter, { converserelationshipid: CustomerRelationship_Result }>;
  createdby: WebExpand<CustomerRelationship_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomerRelationship_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customer_relationship_converse_relationship: WebExpand<CustomerRelationship_Expand, CustomerRelationship_Select, CustomerRelationship_Filter, { customer_relationship_converse_relationship: CustomerRelationship_Result[] }>;
  customerid_account: WebExpand<CustomerRelationship_Expand, Account_Select, Account_Filter, { customerid_account: Account_Result }>;
  customerid_contact: WebExpand<CustomerRelationship_Expand, Contact_Select, Contact_Filter, { customerid_contact: Contact_Result }>;
  customerroleid: WebExpand<CustomerRelationship_Expand, RelationshipRole_Select, RelationshipRole_Filter, { customerroleid: RelationshipRole_Result }>;
  modifiedby: WebExpand<CustomerRelationship_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomerRelationship_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<CustomerRelationship_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CustomerRelationship_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<CustomerRelationship_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<CustomerRelationship_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  partnerid_account: WebExpand<CustomerRelationship_Expand, Account_Select, Account_Filter, { partnerid_account: Account_Result }>;
  partnerid_contact: WebExpand<CustomerRelationship_Expand, Contact_Select, Contact_Filter, { partnerid_contact: Contact_Result }>;
  partnerroleid: WebExpand<CustomerRelationship_Expand, RelationshipRole_Select, RelationshipRole_Filter, { partnerroleid: RelationshipRole_Result }>;
  userentityinstancedata_customerrelationship: WebExpand<CustomerRelationship_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_customerrelationship: UserEntityInstanceData_Result[] }>;
}
interface CustomerRelationship_FormattedResult {
  converserelationshipid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customerid_formatted?: string;
  customerroleid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  partnerid_formatted?: string;
  partnerroleid_formatted?: string;
}
interface CustomerRelationship_Result extends CustomerRelationship_Base, CustomerRelationship_Relationships {
  "@odata.etag": string;
  converserelationshipid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customerid_guid: string | null;
  customerroleid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  partnerid_guid: string | null;
  partnerroleid_guid: string | null;
}
interface CustomerRelationship_RelatedOne {
  converserelationshipid: WebMappingRetrieve<CustomerRelationship_Select,CustomerRelationship_Expand,CustomerRelationship_Filter,CustomerRelationship_Fixed,CustomerRelationship_Result,CustomerRelationship_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  customerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  customerroleid: WebMappingRetrieve<RelationshipRole_Select,RelationshipRole_Expand,RelationshipRole_Filter,RelationshipRole_Fixed,RelationshipRole_Result,RelationshipRole_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  partnerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  partnerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  partnerroleid: WebMappingRetrieve<RelationshipRole_Select,RelationshipRole_Expand,RelationshipRole_Filter,RelationshipRole_Fixed,RelationshipRole_Result,RelationshipRole_FormattedResult>;
}
interface CustomerRelationship_RelatedMany {
  CustomerRelationship_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  CustomerRelationship_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  CustomerRelationship_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  customer_relationship_converse_relationship: WebMappingRetrieve<CustomerRelationship_Select,CustomerRelationship_Expand,CustomerRelationship_Filter,CustomerRelationship_Fixed,CustomerRelationship_Result,CustomerRelationship_FormattedResult>;
  userentityinstancedata_customerrelationship: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customerrelationships: WebMappingRetrieve<CustomerRelationship_Select,CustomerRelationship_Expand,CustomerRelationship_Filter,CustomerRelationship_Fixed,CustomerRelationship_Result,CustomerRelationship_FormattedResult>;
}
interface WebEntitiesRelated {
  customerrelationships: WebMappingRelated<CustomerRelationship_RelatedOne,CustomerRelationship_RelatedMany>;
}
interface WebEntitiesCUDA {
  customerrelationships: WebMappingCUDA<CustomerRelationship_Create,CustomerRelationship_Update,CustomerRelationship_Select>;
}
