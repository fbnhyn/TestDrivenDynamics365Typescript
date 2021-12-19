interface BookableResourceCharacteristic_Base extends WebEntity {
  bookableresourcecharacteristicid?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_approvalstatus?: msdyn_approvalstate | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: bookableresourcecharacteristic_statecode | null;
  statuscode?: bookableresourcecharacteristic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceCharacteristic_Relationships {
  BookableResourceCharacteristic_SyncErrors?: SyncError_Result[] | null;
  Characteristic?: Characteristic_Result | null;
  RatingValue?: RatingValue_Result | null;
  Resource?: BookableResource_Result | null;
  bookableresourcecharacteristic_Annotations?: Annotation_Result[] | null;
  bookableresourcecharacteristic_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcecharacteristic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcecharacteristic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresourcecharacteristic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresourcecharacteristic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcecharacteristic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcecharacteristic_ProcessSession?: ProcessSession_Result[] | null;
  bookableresourcecharacteristic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord?: BookableResourceCharacteristic_Result[] | null;
  msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic?: msdyn_approval_Result[] | null;
}
interface BookableResourceCharacteristic extends BookableResourceCharacteristic_Base, BookableResourceCharacteristic_Relationships {
  Characteristic_bind$characteristics?: string | null;
  RatingValue_bind$ratingvalues?: string | null;
  Resource_bind$bookableresources?: string | null;
  msdyn_supportingrecord_bind$bookableresourcecharacteristics?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceCharacteristic_Create extends BookableResourceCharacteristic {
}
interface BookableResourceCharacteristic_Update extends BookableResourceCharacteristic {
}
interface BookableResourceCharacteristic_Select {
  bookableresourcecharacteristicid: WebAttribute<BookableResourceCharacteristic_Select, { bookableresourcecharacteristicid: string | null }, {  }>;
  characteristic_guid: WebAttribute<BookableResourceCharacteristic_Select, { characteristic_guid: string | null }, { characteristic_formatted?: string }>;
  createdby_guid: WebAttribute<BookableResourceCharacteristic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceCharacteristic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceCharacteristic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<BookableResourceCharacteristic_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<BookableResourceCharacteristic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceCharacteristic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceCharacteristic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceCharacteristic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_approvalstatus: WebAttribute<BookableResourceCharacteristic_Select, { msdyn_approvalstatus: msdyn_approvalstate | null }, { msdyn_approvalstatus_formatted?: string }>;
  msdyn_supportingrecord_guid: WebAttribute<BookableResourceCharacteristic_Select, { msdyn_supportingrecord_guid: string | null }, { msdyn_supportingrecord_formatted?: string }>;
  name: WebAttribute<BookableResourceCharacteristic_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceCharacteristic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceCharacteristic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceCharacteristic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceCharacteristic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceCharacteristic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<BookableResourceCharacteristic_Select, { processid: string | null }, {  }>;
  ratingvalue_guid: WebAttribute<BookableResourceCharacteristic_Select, { ratingvalue_guid: string | null }, { ratingvalue_formatted?: string }>;
  resource_guid: WebAttribute<BookableResourceCharacteristic_Select, { resource_guid: string | null }, { resource_formatted?: string }>;
  stageid: WebAttribute<BookableResourceCharacteristic_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<BookableResourceCharacteristic_Select, { statecode: bookableresourcecharacteristic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceCharacteristic_Select, { statuscode: bookableresourcecharacteristic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceCharacteristic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceCharacteristic_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<BookableResourceCharacteristic_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceCharacteristic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceCharacteristic_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceCharacteristic_Filter {
  bookableresourcecharacteristicid: XQW.Guid;
  characteristic_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_approvalstatus: msdyn_approvalstate;
  msdyn_supportingrecord_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  ratingvalue_guid: XQW.Guid;
  resource_guid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: bookableresourcecharacteristic_statecode;
  statuscode: bookableresourcecharacteristic_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceCharacteristic_Expand {
  BookableResourceCharacteristic_SyncErrors: WebExpand<BookableResourceCharacteristic_Expand, SyncError_Select, SyncError_Filter, { BookableResourceCharacteristic_SyncErrors: SyncError_Result[] }>;
  Characteristic: WebExpand<BookableResourceCharacteristic_Expand, Characteristic_Select, Characteristic_Filter, { Characteristic: Characteristic_Result }>;
  RatingValue: WebExpand<BookableResourceCharacteristic_Expand, RatingValue_Select, RatingValue_Filter, { RatingValue: RatingValue_Result }>;
  Resource: WebExpand<BookableResourceCharacteristic_Expand, BookableResource_Select, BookableResource_Filter, { Resource: BookableResource_Result }>;
  bookableresourcecharacteristic_Annotations: WebExpand<BookableResourceCharacteristic_Expand, Annotation_Select, Annotation_Filter, { bookableresourcecharacteristic_Annotations: Annotation_Result[] }>;
  bookableresourcecharacteristic_AsyncOperations: WebExpand<BookableResourceCharacteristic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcecharacteristic_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcecharacteristic_BulkDeleteFailures: WebExpand<BookableResourceCharacteristic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcecharacteristic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcecharacteristic_DuplicateBaseRecord: WebExpand<BookableResourceCharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcecharacteristic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresourcecharacteristic_DuplicateMatchingRecord: WebExpand<BookableResourceCharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcecharacteristic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresourcecharacteristic_MailboxTrackingFolders: WebExpand<BookableResourceCharacteristic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcecharacteristic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcecharacteristic_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceCharacteristic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcecharacteristic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcecharacteristic_ProcessSession: WebExpand<BookableResourceCharacteristic_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresourcecharacteristic_ProcessSession: ProcessSession_Result[] }>;
  bookableresourcecharacteristic_UserEntityInstanceDatas: WebExpand<BookableResourceCharacteristic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcecharacteristic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdbyname: WebExpand<BookableResourceCharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResourceCharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResourceCharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResourceCharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord: WebExpand<BookableResourceCharacteristic_Expand, BookableResourceCharacteristic_Select, BookableResourceCharacteristic_Filter, { msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord: BookableResourceCharacteristic_Result[] }>;
  msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic: WebExpand<BookableResourceCharacteristic_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic: msdyn_approval_Result[] }>;
  msdyn_supportingrecord: WebExpand<BookableResourceCharacteristic_Expand, BookableResourceCharacteristic_Select, BookableResourceCharacteristic_Filter, { msdyn_supportingrecord: BookableResourceCharacteristic_Result }>;
  ownerid: WebExpand<BookableResourceCharacteristic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceCharacteristic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceCharacteristic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceCharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<BookableResourceCharacteristic_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<BookableResourceCharacteristic_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResourceCharacteristic_FormattedResult {
  characteristic_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_approvalstatus_formatted?: string;
  msdyn_supportingrecord_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  ratingvalue_formatted?: string;
  resource_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceCharacteristic_Result extends BookableResourceCharacteristic_Base, BookableResourceCharacteristic_Relationships {
  "@odata.etag": string;
  characteristic_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_supportingrecord_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ratingvalue_guid: string | null;
  resource_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookableResourceCharacteristic_RelatedOne {
  Characteristic: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  RatingValue: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
  Resource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_supportingrecord: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface BookableResourceCharacteristic_RelatedMany {
  BookableResourceCharacteristic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcecharacteristic_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  bookableresourcecharacteristic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcecharacteristic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcecharacteristic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcecharacteristic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcecharacteristic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcecharacteristic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcecharacteristic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresourcecharacteristic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
  msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcecharacteristics: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcecharacteristics: WebMappingRelated<BookableResourceCharacteristic_RelatedOne,BookableResourceCharacteristic_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcecharacteristics: WebMappingCUDA<BookableResourceCharacteristic_Create,BookableResourceCharacteristic_Update,BookableResourceCharacteristic_Select>;
}
