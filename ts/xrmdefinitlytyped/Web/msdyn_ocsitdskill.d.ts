interface msdyn_ocsitdskill_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocsitdskillid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsitdskill_statecode | null;
  statuscode?: msdyn_ocsitdskill_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsitdskill_Relationships {
  msdyn_ocsitdskill_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsitdskill_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsitdskill_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsitdskill_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsitdskill_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsitdskill_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsitdskill_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsitdskill_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsitdskill_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsitdskill extends msdyn_ocsitdskill_Base, msdyn_ocsitdskill_Relationships {
  msdyn_ocsitrainingdataid_bind$msdyn_ocsitrainingdatas?: string | null;
  msdyn_skillid_bind$characteristics?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsitdskill_Create extends msdyn_ocsitdskill {
}
interface msdyn_ocsitdskill_Update extends msdyn_ocsitdskill {
}
interface msdyn_ocsitdskill_Select {
  createdby_guid: WebAttribute<msdyn_ocsitdskill_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsitdskill_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsitdskill_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsitdskill_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsitdskill_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsitdskill_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsitdskill_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsitdskill_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsitdskillid: WebAttribute<msdyn_ocsitdskill_Select, { msdyn_ocsitdskillid: string | null }, {  }>;
  msdyn_ocsitrainingdataid_guid: WebAttribute<msdyn_ocsitdskill_Select, { msdyn_ocsitrainingdataid_guid: string | null }, { msdyn_ocsitrainingdataid_formatted?: string }>;
  msdyn_skillid_guid: WebAttribute<msdyn_ocsitdskill_Select, { msdyn_skillid_guid: string | null }, { msdyn_skillid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocsitdskill_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsitdskill_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsitdskill_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsitdskill_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsitdskill_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsitdskill_Select, { statecode: msdyn_ocsitdskill_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsitdskill_Select, { statuscode: msdyn_ocsitdskill_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsitdskill_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsitdskill_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsitdskill_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsitdskill_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocsitdskillid: XQW.Guid;
  msdyn_ocsitrainingdataid_guid: XQW.Guid;
  msdyn_skillid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsitdskill_statecode;
  statuscode: msdyn_ocsitdskill_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsitdskill_Expand {
  createdby: WebExpand<msdyn_ocsitdskill_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsitdskill_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsitdskill_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsitdskill_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocsitdskill_AsyncOperations: WebExpand<msdyn_ocsitdskill_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsitdskill_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsitdskill_BulkDeleteFailures: WebExpand<msdyn_ocsitdskill_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsitdskill_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsitdskill_DuplicateBaseRecord: WebExpand<msdyn_ocsitdskill_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsitdskill_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsitdskill_DuplicateMatchingRecord: WebExpand<msdyn_ocsitdskill_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsitdskill_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsitdskill_MailboxTrackingFolders: WebExpand<msdyn_ocsitdskill_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsitdskill_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsitdskill_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsitdskill_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsitdskill_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsitdskill_ProcessSession: WebExpand<msdyn_ocsitdskill_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsitdskill_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsitdskill_SyncErrors: WebExpand<msdyn_ocsitdskill_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsitdskill_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsitdskill_UserEntityInstanceDatas: WebExpand<msdyn_ocsitdskill_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsitdskill_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocsitrainingdataid: WebExpand<msdyn_ocsitdskill_Expand, msdyn_ocsitrainingdata_Select, msdyn_ocsitrainingdata_Filter, { msdyn_ocsitrainingdataid: msdyn_ocsitrainingdata_Result }>;
  msdyn_skillid: WebExpand<msdyn_ocsitdskill_Expand, Characteristic_Select, Characteristic_Filter, { msdyn_skillid: Characteristic_Result }>;
  ownerid: WebExpand<msdyn_ocsitdskill_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsitdskill_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsitdskill_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsitdskill_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsitdskill_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_ocsitrainingdataid_formatted?: string;
  msdyn_skillid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsitdskill_Result extends msdyn_ocsitdskill_Base, msdyn_ocsitdskill_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ocsitrainingdataid_guid: string | null;
  msdyn_skillid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsitdskill_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocsitrainingdataid: WebMappingRetrieve<msdyn_ocsitrainingdata_Select,msdyn_ocsitrainingdata_Expand,msdyn_ocsitrainingdata_Filter,msdyn_ocsitrainingdata_Fixed,msdyn_ocsitrainingdata_Result,msdyn_ocsitrainingdata_FormattedResult>;
  msdyn_skillid: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsitdskill_RelatedMany {
  msdyn_ocsitdskill_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsitdskill_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsitdskill_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsitdskill_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsitdskill_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsitdskill_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsitdskill_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsitdskill_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsitdskill_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsitdskills: WebMappingRetrieve<msdyn_ocsitdskill_Select,msdyn_ocsitdskill_Expand,msdyn_ocsitdskill_Filter,msdyn_ocsitdskill_Fixed,msdyn_ocsitdskill_Result,msdyn_ocsitdskill_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsitdskills: WebMappingRelated<msdyn_ocsitdskill_RelatedOne,msdyn_ocsitdskill_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsitdskills: WebMappingCUDA<msdyn_ocsitdskill_Create,msdyn_ocsitdskill_Update,msdyn_ocsitdskill_Select>;
}
