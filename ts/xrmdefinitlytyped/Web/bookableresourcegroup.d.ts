interface BookableResourceGroup_Base extends WebEntity {
  bookableresourcegroupid?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  fromdate?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_crewmembertype?: msdyn_crewmembertype | null;
  msdyn_internalflags?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: bookableresourcegroup_statecode | null;
  statuscode?: bookableresourcegroup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  todate?: Date | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceGroup_Relationships {
  BookableResourceGroup_SyncErrors?: SyncError_Result[] | null;
  ChildResource?: BookableResource_Result | null;
  ParentResource?: BookableResource_Result | null;
  bookableresourcegroup_Annotations?: Annotation_Result[] | null;
  bookableresourcegroup_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcegroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcegroup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresourcegroup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresourcegroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcegroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcegroup_ProcessSession?: ProcessSession_Result[] | null;
  bookableresourcegroup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface BookableResourceGroup extends BookableResourceGroup_Base, BookableResourceGroup_Relationships {
  ChildResource_bind$bookableresources?: string | null;
  ParentResource_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceGroup_Create extends BookableResourceGroup {
}
interface BookableResourceGroup_Update extends BookableResourceGroup {
}
interface BookableResourceGroup_Select {
  bookableresourcegroupid: WebAttribute<BookableResourceGroup_Select, { bookableresourcegroupid: string | null }, {  }>;
  childresource_guid: WebAttribute<BookableResourceGroup_Select, { childresource_guid: string | null }, { childresource_formatted?: string }>;
  createdby_guid: WebAttribute<BookableResourceGroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceGroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceGroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<BookableResourceGroup_Select, { exchangerate: number | null }, {  }>;
  fromdate: WebAttribute<BookableResourceGroup_Select, { fromdate: Date | null }, { fromdate_formatted?: string }>;
  importsequencenumber: WebAttribute<BookableResourceGroup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceGroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceGroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceGroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_crewmembertype: WebAttribute<BookableResourceGroup_Select, { msdyn_crewmembertype: msdyn_crewmembertype | null }, { msdyn_crewmembertype_formatted?: string }>;
  msdyn_internalflags: WebAttribute<BookableResourceGroup_Select, { msdyn_internalflags: string | null }, {  }>;
  name: WebAttribute<BookableResourceGroup_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceGroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceGroup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceGroup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceGroup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceGroup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentresource_guid: WebAttribute<BookableResourceGroup_Select, { parentresource_guid: string | null }, { parentresource_formatted?: string }>;
  statecode: WebAttribute<BookableResourceGroup_Select, { statecode: bookableresourcegroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceGroup_Select, { statuscode: bookableresourcegroup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceGroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  todate: WebAttribute<BookableResourceGroup_Select, { todate: Date | null }, { todate_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceGroup_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceGroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceGroup_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceGroup_Filter {
  bookableresourcegroupid: XQW.Guid;
  childresource_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  fromdate: Date;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_crewmembertype: msdyn_crewmembertype;
  msdyn_internalflags: string;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentresource_guid: XQW.Guid;
  statecode: bookableresourcegroup_statecode;
  statuscode: bookableresourcegroup_statuscode;
  timezoneruleversionnumber: number;
  todate: Date;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceGroup_Expand {
  BookableResourceGroup_SyncErrors: WebExpand<BookableResourceGroup_Expand, SyncError_Select, SyncError_Filter, { BookableResourceGroup_SyncErrors: SyncError_Result[] }>;
  ChildResource: WebExpand<BookableResourceGroup_Expand, BookableResource_Select, BookableResource_Filter, { ChildResource: BookableResource_Result }>;
  ParentResource: WebExpand<BookableResourceGroup_Expand, BookableResource_Select, BookableResource_Filter, { ParentResource: BookableResource_Result }>;
  bookableresourcegroup_Annotations: WebExpand<BookableResourceGroup_Expand, Annotation_Select, Annotation_Filter, { bookableresourcegroup_Annotations: Annotation_Result[] }>;
  bookableresourcegroup_AsyncOperations: WebExpand<BookableResourceGroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcegroup_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcegroup_BulkDeleteFailures: WebExpand<BookableResourceGroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcegroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcegroup_DuplicateBaseRecord: WebExpand<BookableResourceGroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcegroup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresourcegroup_DuplicateMatchingRecord: WebExpand<BookableResourceGroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcegroup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresourcegroup_MailboxTrackingFolders: WebExpand<BookableResourceGroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcegroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcegroup_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceGroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcegroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcegroup_ProcessSession: WebExpand<BookableResourceGroup_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresourcegroup_ProcessSession: ProcessSession_Result[] }>;
  bookableresourcegroup_UserEntityInstanceDatas: WebExpand<BookableResourceGroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcegroup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdbyname: WebExpand<BookableResourceGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResourceGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResourceGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResourceGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<BookableResourceGroup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceGroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceGroup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceGroup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<BookableResourceGroup_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResourceGroup_FormattedResult {
  childresource_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  fromdate_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_crewmembertype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentresource_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  todate_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceGroup_Result extends BookableResourceGroup_Base, BookableResourceGroup_Relationships {
  "@odata.etag": string;
  childresource_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentresource_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookableResourceGroup_RelatedOne {
  ChildResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ParentResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface BookableResourceGroup_RelatedMany {
  BookableResourceGroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcegroup_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  bookableresourcegroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcegroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcegroup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcegroup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcegroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcegroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcegroup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresourcegroup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcegroups: WebMappingRetrieve<BookableResourceGroup_Select,BookableResourceGroup_Expand,BookableResourceGroup_Filter,BookableResourceGroup_Fixed,BookableResourceGroup_Result,BookableResourceGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcegroups: WebMappingRelated<BookableResourceGroup_RelatedOne,BookableResourceGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcegroups: WebMappingCUDA<BookableResourceGroup_Create,BookableResourceGroup_Update,BookableResourceGroup_Select>;
}
