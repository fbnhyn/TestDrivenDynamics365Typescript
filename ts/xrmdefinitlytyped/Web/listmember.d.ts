interface ListMember_Base extends WebEntity {
  createdon?: Date | null;
  entitytype?: string | null;
  importsequencenumber?: number | null;
  listmemberid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ListMember_Relationships {
  listaccount_association?: Account_Result[] | null;
  listcontact_association?: Contact_Result[] | null;
  listlead_association?: Lead_Result[] | null;
  listmember_AsyncOperations?: AsyncOperation_Result[] | null;
  listmember_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  listmember_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  listmember_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_listmember?: UserEntityInstanceData_Result[] | null;
}
interface ListMember extends ListMember_Base, ListMember_Relationships {
}
interface ListMember_Create extends ListMember {
}
interface ListMember_Update extends ListMember {
}
interface ListMember_Select {
  createdby_guid: WebAttribute<ListMember_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ListMember_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ListMember_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityid_guid: WebAttribute<ListMember_Select, { entityid_guid: string | null }, { entityid_formatted?: string }>;
  entitytype: WebAttribute<ListMember_Select, { entitytype: string | null }, {  }>;
  importsequencenumber: WebAttribute<ListMember_Select, { importsequencenumber: number | null }, {  }>;
  listid_guid: WebAttribute<ListMember_Select, { listid_guid: string | null }, { listid_formatted?: string }>;
  listmemberid: WebAttribute<ListMember_Select, { listmemberid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ListMember_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ListMember_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ListMember_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ListMember_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ListMember_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ListMember_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ListMember_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ListMember_Select, { owninguser: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ListMember_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ListMember_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ListMember_Select, { versionnumber: number | null }, {  }>;
}
interface ListMember_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityid_guid: XQW.Guid;
  entitytype: string;
  importsequencenumber: number;
  listid_guid: XQW.Guid;
  listmemberid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ListMember_Expand {
  createdby: WebExpand<ListMember_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ListMember_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  listaccount_association: WebExpand<ListMember_Expand, Account_Select, Account_Filter, { listaccount_association: Account_Result[] }>;
  listcontact_association: WebExpand<ListMember_Expand, Contact_Select, Contact_Filter, { listcontact_association: Contact_Result[] }>;
  listlead_association: WebExpand<ListMember_Expand, Lead_Select, Lead_Filter, { listlead_association: Lead_Result[] }>;
  listmember_AsyncOperations: WebExpand<ListMember_Expand, AsyncOperation_Select, AsyncOperation_Filter, { listmember_AsyncOperations: AsyncOperation_Result[] }>;
  listmember_BulkDeleteFailures: WebExpand<ListMember_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { listmember_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  listmember_MailboxTrackingFolders: WebExpand<ListMember_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { listmember_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  listmember_PrincipalObjectAttributeAccesses: WebExpand<ListMember_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { listmember_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<ListMember_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ListMember_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_listmember: WebExpand<ListMember_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_listmember: UserEntityInstanceData_Result[] }>;
}
interface ListMember_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entityid_formatted?: string;
  listid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
}
interface ListMember_Result extends ListMember_Base, ListMember_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entityid_guid: string | null;
  listid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
}
interface ListMember_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ListMember_RelatedMany {
  listaccount_association: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  listcontact_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  listlead_association: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  listmember_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  listmember_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  listmember_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  listmember_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_listmember: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  listmembers: WebMappingRetrieve<ListMember_Select,ListMember_Expand,ListMember_Filter,ListMember_Fixed,ListMember_Result,ListMember_FormattedResult>;
}
interface WebEntitiesRelated {
  listmembers: WebMappingRelated<ListMember_RelatedOne,ListMember_RelatedMany>;
}
interface WebEntitiesCUDA {
  listmembers: WebMappingCUDA<ListMember_Create,ListMember_Update,ListMember_Select>;
}
