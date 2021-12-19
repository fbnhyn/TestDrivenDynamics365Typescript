interface msdyn_userworkhistory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_budgetperformance?: number | null;
  msdyn_name?: string | null;
  msdyn_ontimeperformance?: number | null;
  msdyn_ontimeprojectcount?: number | null;
  msdyn_projectcount?: number | null;
  msdyn_recordtype?: number | null;
  msdyn_skillexperience?: string | null;
  msdyn_userworkhistoryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_userworkhistory_statecode | null;
  statuscode?: msdyn_userworkhistory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_userworkhistory_Relationships {
  msdyn_Bookableresource?: BookableResource_Result | null;
  msdyn_userworkhistory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_userworkhistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_userworkhistory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_userworkhistory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_userworkhistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_userworkhistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_userworkhistory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_userworkhistory_SyncErrors?: SyncError_Result[] | null;
  msdyn_userworkhistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_userworkhistory extends msdyn_userworkhistory_Base, msdyn_userworkhistory_Relationships {
  msdyn_Bookableresource_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_userworkhistory_Create extends msdyn_userworkhistory {
}
interface msdyn_userworkhistory_Update extends msdyn_userworkhistory {
}
interface msdyn_userworkhistory_Select {
  createdby_guid: WebAttribute<msdyn_userworkhistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_userworkhistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_userworkhistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_userworkhistory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_userworkhistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_userworkhistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_userworkhistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_userworkhistory_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_budgetperformance: WebAttribute<msdyn_userworkhistory_Select, { msdyn_budgetperformance: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_userworkhistory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ontimeperformance: WebAttribute<msdyn_userworkhistory_Select, { msdyn_ontimeperformance: number | null }, {  }>;
  msdyn_ontimeprojectcount: WebAttribute<msdyn_userworkhistory_Select, { msdyn_ontimeprojectcount: number | null }, {  }>;
  msdyn_projectcount: WebAttribute<msdyn_userworkhistory_Select, { msdyn_projectcount: number | null }, {  }>;
  msdyn_recordtype: WebAttribute<msdyn_userworkhistory_Select, { msdyn_recordtype: number | null }, {  }>;
  msdyn_skillexperience: WebAttribute<msdyn_userworkhistory_Select, { msdyn_skillexperience: string | null }, {  }>;
  msdyn_userworkhistoryid: WebAttribute<msdyn_userworkhistory_Select, { msdyn_userworkhistoryid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_userworkhistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_userworkhistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_userworkhistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_userworkhistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_userworkhistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_userworkhistory_Select, { statecode: msdyn_userworkhistory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_userworkhistory_Select, { statuscode: msdyn_userworkhistory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_userworkhistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_userworkhistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_userworkhistory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_userworkhistory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_budgetperformance: number;
  msdyn_name: string;
  msdyn_ontimeperformance: number;
  msdyn_ontimeprojectcount: number;
  msdyn_projectcount: number;
  msdyn_recordtype: number;
  msdyn_skillexperience: string;
  msdyn_userworkhistoryid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_userworkhistory_statecode;
  statuscode: msdyn_userworkhistory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_userworkhistory_Expand {
  createdby: WebExpand<msdyn_userworkhistory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_userworkhistory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_userworkhistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_userworkhistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Bookableresource: WebExpand<msdyn_userworkhistory_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_Bookableresource: BookableResource_Result }>;
  msdyn_userworkhistory_AsyncOperations: WebExpand<msdyn_userworkhistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_userworkhistory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_userworkhistory_BulkDeleteFailures: WebExpand<msdyn_userworkhistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_userworkhistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_userworkhistory_DuplicateBaseRecord: WebExpand<msdyn_userworkhistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_userworkhistory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_userworkhistory_DuplicateMatchingRecord: WebExpand<msdyn_userworkhistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_userworkhistory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_userworkhistory_MailboxTrackingFolders: WebExpand<msdyn_userworkhistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_userworkhistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_userworkhistory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_userworkhistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_userworkhistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_userworkhistory_ProcessSession: WebExpand<msdyn_userworkhistory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_userworkhistory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_userworkhistory_SyncErrors: WebExpand<msdyn_userworkhistory_Expand, SyncError_Select, SyncError_Filter, { msdyn_userworkhistory_SyncErrors: SyncError_Result[] }>;
  msdyn_userworkhistory_UserEntityInstanceDatas: WebExpand<msdyn_userworkhistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_userworkhistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_userworkhistory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_userworkhistory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_userworkhistory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_userworkhistory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_userworkhistory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_userworkhistory_Result extends msdyn_userworkhistory_Base, msdyn_userworkhistory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_userworkhistory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_userworkhistory_RelatedMany {
  msdyn_userworkhistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_userworkhistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_userworkhistory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_userworkhistory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_userworkhistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_userworkhistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_userworkhistory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_userworkhistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_userworkhistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_userworkhistories: WebMappingRetrieve<msdyn_userworkhistory_Select,msdyn_userworkhistory_Expand,msdyn_userworkhistory_Filter,msdyn_userworkhistory_Fixed,msdyn_userworkhistory_Result,msdyn_userworkhistory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_userworkhistories: WebMappingRelated<msdyn_userworkhistory_RelatedOne,msdyn_userworkhistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_userworkhistories: WebMappingCUDA<msdyn_userworkhistory_Create,msdyn_userworkhistory_Update,msdyn_userworkhistory_Select>;
}
