interface Equipment_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  displayinserviceviews?: boolean | null;
  emailaddress?: string | null;
  equipmentid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  isdisabled?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  skills?: string | null;
  timezonecode?: number | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Equipment_Relationships {
  Equipment_Annotation?: Annotation_Result[] | null;
  Equipment_AsyncOperations?: AsyncOperation_Result[] | null;
  Equipment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Equipment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Equipment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Equipment_Email_EmailSender?: Email_Result[] | null;
  Equipment_ProcessSessions?: ProcessSession_Result[] | null;
  Equipment_SyncErrors?: SyncError_Result[] | null;
  business_map_equipment?: BusinessUnitMap_Result[] | null;
  businessunitid_businessunit?: BusinessUnit_Result | null;
  businessunitid_systemuser?: SystemUser_Result | null;
  equipment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  equipment_accounts?: Account_Result[] | null;
  equipment_activity_parties?: ActivityParty_Result[] | null;
  equipment_connections1?: Connection_Result[] | null;
  equipment_connections2?: Connection_Result[] | null;
  equipment_contacts?: Contact_Result[] | null;
  equipment_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  equipment_resources?: Resource_Result[] | null;
  msdyn_equipment_bookableresource_FacilityEquipmentId?: BookableResource_Result[] | null;
  userentityinstancedata_equipment?: UserEntityInstanceData_Result[] | null;
}
interface Equipment extends Equipment_Base, Equipment_Relationships {
  businessunitid_businessunit_bind$businessunits?: string | null;
  businessunitid_systemuser_bind$systemusers?: string | null;
  calendarid_bind$calendars?: string | null;
  msdyn_organizationalunitid_bind$msdyn_organizationalunits?: string | null;
  siteid_bind$sites?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Equipment_Create extends Equipment {
}
interface Equipment_Update extends Equipment {
}
interface Equipment_Select {
  businessunitid_guid: WebAttribute<Equipment_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  calendarid_guid: WebAttribute<Equipment_Select, { calendarid_guid: string | null }, { calendarid_formatted?: string }>;
  createdby_guid: WebAttribute<Equipment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Equipment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Equipment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Equipment_Select, { description: string | null }, {  }>;
  displayinserviceviews: WebAttribute<Equipment_Select, { displayinserviceviews: boolean | null }, {  }>;
  emailaddress: WebAttribute<Equipment_Select, { emailaddress: string | null }, {  }>;
  equipmentid: WebAttribute<Equipment_Select, { equipmentid: string | null }, {  }>;
  exchangerate: WebAttribute<Equipment_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Equipment_Select, { importsequencenumber: number | null }, {  }>;
  isdisabled: WebAttribute<Equipment_Select, { isdisabled: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Equipment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Equipment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Equipment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_organizationalunitid_guid: WebAttribute<Equipment_Select, { msdyn_organizationalunitid_guid: string | null }, { msdyn_organizationalunitid_formatted?: string }>;
  name: WebAttribute<Equipment_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Equipment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Equipment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  siteid_guid: WebAttribute<Equipment_Select, { siteid_guid: string | null }, { siteid_formatted?: string }>;
  skills: WebAttribute<Equipment_Select, { skills: string | null }, {  }>;
  timezonecode: WebAttribute<Equipment_Select, { timezonecode: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Equipment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Equipment_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Equipment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Equipment_Select, { versionnumber: number | null }, {  }>;
}
interface Equipment_Filter {
  businessunitid_guid: XQW.Guid;
  calendarid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  displayinserviceviews: boolean;
  emailaddress: string;
  equipmentid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  isdisabled: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_organizationalunitid_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  siteid_guid: XQW.Guid;
  skills: string;
  timezonecode: number;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Equipment_Expand {
  Equipment_Annotation: WebExpand<Equipment_Expand, Annotation_Select, Annotation_Filter, { Equipment_Annotation: Annotation_Result[] }>;
  Equipment_AsyncOperations: WebExpand<Equipment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Equipment_AsyncOperations: AsyncOperation_Result[] }>;
  Equipment_BulkDeleteFailures: WebExpand<Equipment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Equipment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Equipment_DuplicateBaseRecord: WebExpand<Equipment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Equipment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Equipment_DuplicateMatchingRecord: WebExpand<Equipment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Equipment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Equipment_Email_EmailSender: WebExpand<Equipment_Expand, Email_Select, Email_Filter, { Equipment_Email_EmailSender: Email_Result[] }>;
  Equipment_ProcessSessions: WebExpand<Equipment_Expand, ProcessSession_Select, ProcessSession_Filter, { Equipment_ProcessSessions: ProcessSession_Result[] }>;
  Equipment_SyncErrors: WebExpand<Equipment_Expand, SyncError_Select, SyncError_Filter, { Equipment_SyncErrors: SyncError_Result[] }>;
  business_map_equipment: WebExpand<Equipment_Expand, BusinessUnitMap_Select, BusinessUnitMap_Filter, { business_map_equipment: BusinessUnitMap_Result[] }>;
  businessunitid_businessunit: WebExpand<Equipment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid_businessunit: BusinessUnit_Result }>;
  businessunitid_systemuser: WebExpand<Equipment_Expand, SystemUser_Select, SystemUser_Filter, { businessunitid_systemuser: SystemUser_Result }>;
  calendarid: WebExpand<Equipment_Expand, Calendar_Select, Calendar_Filter, { calendarid: Calendar_Result }>;
  createdby: WebExpand<Equipment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Equipment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  equipment_MailboxTrackingFolders: WebExpand<Equipment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { equipment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  equipment_accounts: WebExpand<Equipment_Expand, Account_Select, Account_Filter, { equipment_accounts: Account_Result[] }>;
  equipment_activity_parties: WebExpand<Equipment_Expand, ActivityParty_Select, ActivityParty_Filter, { equipment_activity_parties: ActivityParty_Result[] }>;
  equipment_connections1: WebExpand<Equipment_Expand, Connection_Select, Connection_Filter, { equipment_connections1: Connection_Result[] }>;
  equipment_connections2: WebExpand<Equipment_Expand, Connection_Select, Connection_Filter, { equipment_connections2: Connection_Result[] }>;
  equipment_contacts: WebExpand<Equipment_Expand, Contact_Select, Contact_Filter, { equipment_contacts: Contact_Result[] }>;
  equipment_principalobjectattributeaccess: WebExpand<Equipment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { equipment_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  equipment_resources: WebExpand<Equipment_Expand, Resource_Select, Resource_Filter, { equipment_resources: Resource_Result[] }>;
  modifiedby: WebExpand<Equipment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Equipment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_equipment_bookableresource_FacilityEquipmentId: WebExpand<Equipment_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_equipment_bookableresource_FacilityEquipmentId: BookableResource_Result[] }>;
  msdyn_organizationalunitid: WebExpand<Equipment_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_organizationalunitid: msdyn_organizationalunit_Result }>;
  organizationid: WebExpand<Equipment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  siteid: WebExpand<Equipment_Expand, Site_Select, Site_Filter, { siteid: Site_Result }>;
  transactioncurrencyid: WebExpand<Equipment_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_equipment: WebExpand<Equipment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_equipment: UserEntityInstanceData_Result[] }>;
}
interface Equipment_FormattedResult {
  businessunitid_formatted?: string;
  calendarid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_organizationalunitid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  siteid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Equipment_Result extends Equipment_Base, Equipment_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  calendarid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_organizationalunitid_guid: string | null;
  organizationid_guid: string | null;
  siteid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Equipment_RelatedOne {
  businessunitid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  businessunitid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  calendarid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_organizationalunitid: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  siteid: WebMappingRetrieve<Site_Select,Site_Expand,Site_Filter,Site_Fixed,Site_Result,Site_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Equipment_RelatedMany {
  Equipment_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Equipment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Equipment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Equipment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Equipment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Equipment_Email_EmailSender: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  Equipment_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Equipment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  business_map_equipment: WebMappingRetrieve<BusinessUnitMap_Select,BusinessUnitMap_Expand,BusinessUnitMap_Filter,BusinessUnitMap_Fixed,BusinessUnitMap_Result,BusinessUnitMap_FormattedResult>;
  equipment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  equipment_accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  equipment_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  equipment_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  equipment_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  equipment_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  equipment_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  equipment_resources: WebMappingRetrieve<Resource_Select,Resource_Expand,Resource_Filter,Resource_Fixed,Resource_Result,Resource_FormattedResult>;
  msdyn_equipment_bookableresource_FacilityEquipmentId: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  userentityinstancedata_equipment: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  equipments: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
}
interface WebEntitiesRelated {
  equipments: WebMappingRelated<Equipment_RelatedOne,Equipment_RelatedMany>;
}
interface WebEntitiesCUDA {
  equipments: WebMappingCUDA<Equipment_Create,Equipment_Update,Equipment_Select>;
}
