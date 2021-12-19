interface msdyn_knowledgepersonalfilter_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_attributename?: string | null;
  msdyn_enabled?: boolean | null;
  msdyn_entityname?: string | null;
  msdyn_knowledgepersonalfilterid?: string | null;
  msdyn_name?: string | null;
  msdyn_preferredvalues?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_knowledgepersonalfilter_statecode | null;
  statuscode?: msdyn_knowledgepersonalfilter_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_knowledgepersonalfilter_Relationships {
  msdyn_knowledgepersonalfilter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_knowledgepersonalfilter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_knowledgepersonalfilter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgepersonalfilter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgepersonalfilter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_knowledgepersonalfilter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_knowledgepersonalfilter_SyncErrors?: SyncError_Result[] | null;
  msdyn_knowledgepersonalfilter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_knowledgepersonalfilter extends msdyn_knowledgepersonalfilter_Base, msdyn_knowledgepersonalfilter_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_knowledgepersonalfilter_Create extends msdyn_knowledgepersonalfilter {
}
interface msdyn_knowledgepersonalfilter_Update extends msdyn_knowledgepersonalfilter {
}
interface msdyn_knowledgepersonalfilter_Select {
  createdby_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_knowledgepersonalfilter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_knowledgepersonalfilter_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_knowledgepersonalfilter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attributename: WebAttribute<msdyn_knowledgepersonalfilter_Select, { msdyn_attributename: string | null }, {  }>;
  msdyn_enabled: WebAttribute<msdyn_knowledgepersonalfilter_Select, { msdyn_enabled: boolean | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_knowledgepersonalfilter_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_knowledgepersonalfilterid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { msdyn_knowledgepersonalfilterid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_knowledgepersonalfilter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_preferredvalues: WebAttribute<msdyn_knowledgepersonalfilter_Select, { msdyn_preferredvalues: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_knowledgepersonalfilter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_knowledgepersonalfilter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_knowledgepersonalfilter_Select, { statecode: msdyn_knowledgepersonalfilter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_knowledgepersonalfilter_Select, { statuscode: msdyn_knowledgepersonalfilter_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_knowledgepersonalfilter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_knowledgepersonalfilter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_knowledgepersonalfilter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_knowledgepersonalfilter_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attributename: string;
  msdyn_enabled: boolean;
  msdyn_entityname: string;
  msdyn_knowledgepersonalfilterid: XQW.Guid;
  msdyn_name: string;
  msdyn_preferredvalues: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_knowledgepersonalfilter_statecode;
  statuscode: msdyn_knowledgepersonalfilter_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_knowledgepersonalfilter_Expand {
  createdby: WebExpand<msdyn_knowledgepersonalfilter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_knowledgepersonalfilter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_knowledgepersonalfilter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_knowledgepersonalfilter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_knowledgepersonalfilter_AsyncOperations: WebExpand<msdyn_knowledgepersonalfilter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_knowledgepersonalfilter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_knowledgepersonalfilter_BulkDeleteFailures: WebExpand<msdyn_knowledgepersonalfilter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_knowledgepersonalfilter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_knowledgepersonalfilter_DuplicateBaseRecord: WebExpand<msdyn_knowledgepersonalfilter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgepersonalfilter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgepersonalfilter_DuplicateMatchingRecord: WebExpand<msdyn_knowledgepersonalfilter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgepersonalfilter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgepersonalfilter_MailboxTrackingFolders: WebExpand<msdyn_knowledgepersonalfilter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_knowledgepersonalfilter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_knowledgepersonalfilter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_knowledgepersonalfilter_ProcessSession: WebExpand<msdyn_knowledgepersonalfilter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_knowledgepersonalfilter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_knowledgepersonalfilter_SyncErrors: WebExpand<msdyn_knowledgepersonalfilter_Expand, SyncError_Select, SyncError_Filter, { msdyn_knowledgepersonalfilter_SyncErrors: SyncError_Result[] }>;
  msdyn_knowledgepersonalfilter_UserEntityInstanceDatas: WebExpand<msdyn_knowledgepersonalfilter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_knowledgepersonalfilter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_knowledgepersonalfilter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_knowledgepersonalfilter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_knowledgepersonalfilter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_knowledgepersonalfilter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_knowledgepersonalfilter_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_knowledgepersonalfilter_Result extends msdyn_knowledgepersonalfilter_Base, msdyn_knowledgepersonalfilter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_knowledgepersonalfilter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_knowledgepersonalfilter_RelatedMany {
  msdyn_knowledgepersonalfilter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_knowledgepersonalfilter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_knowledgepersonalfilter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgepersonalfilter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgepersonalfilter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_knowledgepersonalfilter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_knowledgepersonalfilter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_knowledgepersonalfilter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_knowledgepersonalfilters: WebMappingRetrieve<msdyn_knowledgepersonalfilter_Select,msdyn_knowledgepersonalfilter_Expand,msdyn_knowledgepersonalfilter_Filter,msdyn_knowledgepersonalfilter_Fixed,msdyn_knowledgepersonalfilter_Result,msdyn_knowledgepersonalfilter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgepersonalfilters: WebMappingRelated<msdyn_knowledgepersonalfilter_RelatedOne,msdyn_knowledgepersonalfilter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgepersonalfilters: WebMappingCUDA<msdyn_knowledgepersonalfilter_Create,msdyn_knowledgepersonalfilter_Update,msdyn_knowledgepersonalfilter_Select>;
}
