interface msdyn_ocliveworkstreamcontextvariable_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_datatype?: msdyn_ocliveworkstreamcontextvariable_msdyn_datatype | null;
  msdyn_displayname?: string | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_isdisplayable?: boolean | null;
  msdyn_islist?: boolean | null;
  msdyn_ismodifiable?: boolean | null;
  msdyn_issystemdefined?: boolean | null;
  msdyn_name?: string | null;
  msdyn_ocliveworkstreamcontextvariableid?: string | null;
  msdyn_relationshipname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocliveworkstreamcontextvariable_statecode | null;
  statuscode?: msdyn_ocliveworkstreamcontextvariable_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocliveworkstreamcontextvariable_Relationships {
  msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid?: msdyn_ocliveworkitemcontextitem_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ocliveworkstreamcontextvariable_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: msdyn_rulesetdependencymapping_Result[] | null;
}
interface msdyn_ocliveworkstreamcontextvariable extends msdyn_ocliveworkstreamcontextvariable_Base, msdyn_ocliveworkstreamcontextvariable_Relationships {
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocliveworkstreamcontextvariable_Create extends msdyn_ocliveworkstreamcontextvariable {
}
interface msdyn_ocliveworkstreamcontextvariable_Update extends msdyn_ocliveworkstreamcontextvariable {
}
interface msdyn_ocliveworkstreamcontextvariable_Select {
  createdby_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_datatype: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_datatype: msdyn_ocliveworkstreamcontextvariable_msdyn_datatype | null }, { msdyn_datatype_formatted?: string }>;
  msdyn_displayname: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_isdisplayable: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_isdisplayable: boolean | null }, {  }>;
  msdyn_islist: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_islist: boolean | null }, {  }>;
  msdyn_ismodifiable: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_ismodifiable: boolean | null }, {  }>;
  msdyn_issystemdefined: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_issystemdefined: boolean | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkstreamcontextvariableid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_ocliveworkstreamcontextvariableid: string | null }, {  }>;
  msdyn_relationshipname: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { msdyn_relationshipname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { statecode: msdyn_ocliveworkstreamcontextvariable_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { statuscode: msdyn_ocliveworkstreamcontextvariable_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocliveworkstreamcontextvariable_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocliveworkstreamcontextvariable_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_datatype: msdyn_ocliveworkstreamcontextvariable_msdyn_datatype;
  msdyn_displayname: string;
  msdyn_entitylogicalname: string;
  msdyn_isdisplayable: boolean;
  msdyn_islist: boolean;
  msdyn_ismodifiable: boolean;
  msdyn_issystemdefined: boolean;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocliveworkstreamcontextvariableid: XQW.Guid;
  msdyn_relationshipname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocliveworkstreamcontextvariable_statecode;
  statuscode: msdyn_ocliveworkstreamcontextvariable_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocliveworkstreamcontextvariable_Expand {
  createdby: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, msdyn_ocliveworkitemcontextitem_Select, msdyn_ocliveworkitemcontextitem_Filter, { msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid: msdyn_ocliveworkitemcontextitem_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_AsyncOperations: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocliveworkstreamcontextvariable_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_BulkDeleteFailures: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocliveworkstreamcontextvariable_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_DuplicateBaseRecord: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkstreamcontextvariable_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_DuplicateMatchingRecord: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkstreamcontextvariable_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_MailboxTrackingFolders: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocliveworkstreamcontextvariable_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocliveworkstreamcontextvariable_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_ProcessSession: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocliveworkstreamcontextvariable_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_SyncErrors: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocliveworkstreamcontextvariable_SyncErrors: SyncError_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_UserEntityInstanceDatas: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocliveworkstreamcontextvariable_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocliveworkstreamcontextvariable_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, msdyn_rulesetdependencymapping_Select, msdyn_rulesetdependencymapping_Filter, { msdyn_ocliveworkstreamcontextvariable_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: msdyn_rulesetdependencymapping_Result[] }>;
  ownerid: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocliveworkstreamcontextvariable_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocliveworkstreamcontextvariable_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_datatype_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocliveworkstreamcontextvariable_Result extends msdyn_ocliveworkstreamcontextvariable_Base, msdyn_ocliveworkstreamcontextvariable_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocliveworkstreamcontextvariable_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocliveworkstreamcontextvariable_RelatedMany {
  msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid: WebMappingRetrieve<msdyn_ocliveworkitemcontextitem_Select,msdyn_ocliveworkitemcontextitem_Expand,msdyn_ocliveworkitemcontextitem_Filter,msdyn_ocliveworkitemcontextitem_Fixed,msdyn_ocliveworkitemcontextitem_Result,msdyn_ocliveworkitemcontextitem_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariable_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocliveworkstreamcontextvariables: WebMappingRetrieve<msdyn_ocliveworkstreamcontextvariable_Select,msdyn_ocliveworkstreamcontextvariable_Expand,msdyn_ocliveworkstreamcontextvariable_Filter,msdyn_ocliveworkstreamcontextvariable_Fixed,msdyn_ocliveworkstreamcontextvariable_Result,msdyn_ocliveworkstreamcontextvariable_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocliveworkstreamcontextvariables: WebMappingRelated<msdyn_ocliveworkstreamcontextvariable_RelatedOne,msdyn_ocliveworkstreamcontextvariable_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocliveworkstreamcontextvariables: WebMappingCUDA<msdyn_ocliveworkstreamcontextvariable_Create,msdyn_ocliveworkstreamcontextvariable_Update,msdyn_ocliveworkstreamcontextvariable_Select>;
}
