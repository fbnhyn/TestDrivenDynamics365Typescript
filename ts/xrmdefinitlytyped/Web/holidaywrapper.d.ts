interface holidaywrapper_Base extends WebEntity {
  calendarid?: string | null;
  createdon?: Date | null;
  duration?: string | null;
  enddatetime?: string | null;
  endtime?: Date | null;
  holidaywrapperid?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  selectedyear?: number | null;
  startdatetime?: string | null;
  starttime?: Date | null;
  starttime_dateonlyforview?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface holidaywrapper_Relationships {
  holidaywrapper_AsyncOperations?: AsyncOperation_Result[] | null;
  holidaywrapper_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  holidaywrapper_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  holidaywrapper_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  holidaywrapper_ProcessSession?: ProcessSession_Result[] | null;
  holidaywrapper_SyncErrors?: SyncError_Result[] | null;
  holidaywrapper_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface holidaywrapper extends holidaywrapper_Base, holidaywrapper_Relationships {
}
interface holidaywrapper_Create extends holidaywrapper {
}
interface holidaywrapper_Update extends holidaywrapper {
}
interface holidaywrapper_Select {
  calendarid: WebAttribute<holidaywrapper_Select, { calendarid: string | null }, {  }>;
  createdby_guid: WebAttribute<holidaywrapper_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<holidaywrapper_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<holidaywrapper_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<holidaywrapper_Select, { duration: string | null }, {  }>;
  enddatetime: WebAttribute<holidaywrapper_Select, { enddatetime: string | null }, {  }>;
  endtime: WebAttribute<holidaywrapper_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  holidaywrapperid: WebAttribute<holidaywrapper_Select, { holidaywrapperid: string | null }, {  }>;
  importsequencenumber: WebAttribute<holidaywrapper_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<holidaywrapper_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<holidaywrapper_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<holidaywrapper_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<holidaywrapper_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<holidaywrapper_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  selectedyear: WebAttribute<holidaywrapper_Select, { selectedyear: number | null }, {  }>;
  startdatetime: WebAttribute<holidaywrapper_Select, { startdatetime: string | null }, {  }>;
  starttime: WebAttribute<holidaywrapper_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  starttime_dateonlyforview: WebAttribute<holidaywrapper_Select, { starttime_dateonlyforview: Date | null }, { starttime_dateonlyforview_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<holidaywrapper_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<holidaywrapper_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<holidaywrapper_Select, { versionnumber: number | null }, {  }>;
}
interface holidaywrapper_Filter {
  calendarid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duration: string;
  enddatetime: string;
  endtime: Date;
  holidaywrapperid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  selectedyear: number;
  startdatetime: string;
  starttime: Date;
  starttime_dateonlyforview: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface holidaywrapper_Expand {
  holidaywrapper_AsyncOperations: WebExpand<holidaywrapper_Expand, AsyncOperation_Select, AsyncOperation_Filter, { holidaywrapper_AsyncOperations: AsyncOperation_Result[] }>;
  holidaywrapper_BulkDeleteFailures: WebExpand<holidaywrapper_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { holidaywrapper_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  holidaywrapper_MailboxTrackingFolders: WebExpand<holidaywrapper_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { holidaywrapper_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  holidaywrapper_PrincipalObjectAttributeAccesses: WebExpand<holidaywrapper_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { holidaywrapper_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  holidaywrapper_ProcessSession: WebExpand<holidaywrapper_Expand, ProcessSession_Select, ProcessSession_Filter, { holidaywrapper_ProcessSession: ProcessSession_Result[] }>;
  holidaywrapper_SyncErrors: WebExpand<holidaywrapper_Expand, SyncError_Select, SyncError_Filter, { holidaywrapper_SyncErrors: SyncError_Result[] }>;
  holidaywrapper_UserEntityInstanceDatas: WebExpand<holidaywrapper_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { holidaywrapper_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface holidaywrapper_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  endtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  starttime_dateonlyforview_formatted?: string;
  starttime_formatted?: string;
}
interface holidaywrapper_Result extends holidaywrapper_Base, holidaywrapper_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface holidaywrapper_RelatedOne {
}
interface holidaywrapper_RelatedMany {
  holidaywrapper_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  holidaywrapper_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  holidaywrapper_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  holidaywrapper_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  holidaywrapper_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  holidaywrapper_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  holidaywrapper_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  holidaywrappers: WebMappingRetrieve<holidaywrapper_Select,holidaywrapper_Expand,holidaywrapper_Filter,holidaywrapper_Fixed,holidaywrapper_Result,holidaywrapper_FormattedResult>;
}
interface WebEntitiesRelated {
  holidaywrappers: WebMappingRelated<holidaywrapper_RelatedOne,holidaywrapper_RelatedMany>;
}
interface WebEntitiesCUDA {
  holidaywrappers: WebMappingCUDA<holidaywrapper_Create,holidaywrapper_Update,holidaywrapper_Select>;
}
