interface BookableResourceBookingExchangeSyncIdMapping_Base extends WebEntity {
  bookableresourcebookingexchangesyncidmappingid?: string | null;
  bookableresourcebookingid?: string | null;
  createdon?: Date | null;
  exchangeentryid?: string | null;
  importsequencenumber?: number | null;
  isdeletedinexchange?: boolean | null;
  lastsyncerror?: string | null;
  lastsyncerrorcode?: number | null;
  lastsyncerroroccurredon?: Date | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  retries?: number | null;
  syncstatus?: bookableresourcebookingexchangesyncidmapping_syncstatus | null;
  syncversionnumber?: number | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceBookingExchangeSyncIdMapping_Relationships {
  bookableresourcebookingexchangesyncidmapping_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcebookingexchangesyncidmapping_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcebookingexchangesyncidmapping_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcebookingexchangesyncidmapping_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcebookingexchangesyncidmapping_SyncErrors?: SyncError_Result[] | null;
  bookableresourcebookingexchangesyncidmapping_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface BookableResourceBookingExchangeSyncIdMapping extends BookableResourceBookingExchangeSyncIdMapping_Base, BookableResourceBookingExchangeSyncIdMapping_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface BookableResourceBookingExchangeSyncIdMapping_Create extends BookableResourceBookingExchangeSyncIdMapping {
}
interface BookableResourceBookingExchangeSyncIdMapping_Update extends BookableResourceBookingExchangeSyncIdMapping {
}
interface BookableResourceBookingExchangeSyncIdMapping_Select {
  bookableresourcebookingexchangesyncidmappingid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { bookableresourcebookingexchangesyncidmappingid: string | null }, {  }>;
  bookableresourcebookingid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { bookableresourcebookingid: string | null }, {  }>;
  createdby_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangeentryid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { exchangeentryid: string | null }, {  }>;
  importsequencenumber: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { importsequencenumber: number | null }, {  }>;
  isdeletedinexchange: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { isdeletedinexchange: boolean | null }, {  }>;
  lastsyncerror: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { lastsyncerror: string | null }, {  }>;
  lastsyncerrorcode: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { lastsyncerrorcode: number | null }, {  }>;
  lastsyncerroroccurredon: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { lastsyncerroroccurredon: Date | null }, { lastsyncerroroccurredon_formatted?: string }>;
  modifiedby_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  retries: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { retries: number | null }, {  }>;
  syncstatus: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { syncstatus: bookableresourcebookingexchangesyncidmapping_syncstatus | null }, { syncstatus_formatted?: string }>;
  syncversionnumber: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { syncversionnumber: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { timezoneruleversionnumber: number | null }, {  }>;
  userid_guid: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { userid_guid: string | null }, { userid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceBookingExchangeSyncIdMapping_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceBookingExchangeSyncIdMapping_Filter {
  bookableresourcebookingexchangesyncidmappingid: XQW.Guid;
  bookableresourcebookingid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangeentryid: string;
  importsequencenumber: number;
  isdeletedinexchange: boolean;
  lastsyncerror: string;
  lastsyncerrorcode: number;
  lastsyncerroroccurredon: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  retries: number;
  syncstatus: bookableresourcebookingexchangesyncidmapping_syncstatus;
  syncversionnumber: number;
  timezoneruleversionnumber: number;
  userid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceBookingExchangeSyncIdMapping_Expand {
  bookableresourcebookingexchangesyncidmapping_AsyncOperations: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcebookingexchangesyncidmapping_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcebookingexchangesyncidmapping_BulkDeleteFailures: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcebookingexchangesyncidmapping_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcebookingexchangesyncidmapping_MailboxTrackingFolders: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcebookingexchangesyncidmapping_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcebookingexchangesyncidmapping_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcebookingexchangesyncidmapping_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcebookingexchangesyncidmapping_SyncErrors: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SyncError_Select, SyncError_Filter, { bookableresourcebookingexchangesyncidmapping_SyncErrors: SyncError_Result[] }>;
  bookableresourcebookingexchangesyncidmapping_UserEntityInstanceDatas: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcebookingexchangesyncidmapping_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceBookingExchangeSyncIdMapping_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface BookableResourceBookingExchangeSyncIdMapping_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lastsyncerroroccurredon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  syncstatus_formatted?: string;
  userid_formatted?: string;
}
interface BookableResourceBookingExchangeSyncIdMapping_Result extends BookableResourceBookingExchangeSyncIdMapping_Base, BookableResourceBookingExchangeSyncIdMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  userid_guid: string | null;
}
interface BookableResourceBookingExchangeSyncIdMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface BookableResourceBookingExchangeSyncIdMapping_RelatedMany {
  bookableresourcebookingexchangesyncidmapping_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcebookingexchangesyncidmapping_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcebookingexchangesyncidmapping_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcebookingexchangesyncidmapping_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcebookingexchangesyncidmapping_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcebookingexchangesyncidmapping_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcebookingexchangesyncidmappings: WebMappingRetrieve<BookableResourceBookingExchangeSyncIdMapping_Select,BookableResourceBookingExchangeSyncIdMapping_Expand,BookableResourceBookingExchangeSyncIdMapping_Filter,BookableResourceBookingExchangeSyncIdMapping_Fixed,BookableResourceBookingExchangeSyncIdMapping_Result,BookableResourceBookingExchangeSyncIdMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcebookingexchangesyncidmappings: WebMappingRelated<BookableResourceBookingExchangeSyncIdMapping_RelatedOne,BookableResourceBookingExchangeSyncIdMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcebookingexchangesyncidmappings: WebMappingCUDA<BookableResourceBookingExchangeSyncIdMapping_Create,BookableResourceBookingExchangeSyncIdMapping_Update,BookableResourceBookingExchangeSyncIdMapping_Select>;
}
