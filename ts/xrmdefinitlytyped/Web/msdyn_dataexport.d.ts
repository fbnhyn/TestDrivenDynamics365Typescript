interface msdyn_dataexport_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_dataexportid?: string | null;
  msdyn_datatoken?: string | null;
  msdyn_entityname?: string | null;
  msdyn_exportedrecordcount?: number | null;
  msdyn_exportstatus?: msdyn_exportstatus | null;
  msdyn_linkedentitydata?: string | null;
  msdyn_name?: string | null;
  msdyn_pagingdata?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_dataexport_statecode | null;
  statuscode?: msdyn_dataexport_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_dataexport_Relationships {
  msdyn_dataexport_Annotations?: Annotation_Result[] | null;
  msdyn_dataexport_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_dataexport_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_dataexport_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_dataexport_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_dataexport_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_dataexport_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_dataexport_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_dataexport_SyncErrors?: SyncError_Result[] | null;
  msdyn_dataexport_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_dataexport extends msdyn_dataexport_Base, msdyn_dataexport_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_dataexport_Create extends msdyn_dataexport {
}
interface msdyn_dataexport_Update extends msdyn_dataexport {
}
interface msdyn_dataexport_Select {
  createdby_guid: WebAttribute<msdyn_dataexport_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_dataexport_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_dataexport_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_dataexport_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_dataexport_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_dataexport_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_dataexport_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dataexportid: WebAttribute<msdyn_dataexport_Select, { msdyn_dataexportid: string | null }, {  }>;
  msdyn_datatoken: WebAttribute<msdyn_dataexport_Select, { msdyn_datatoken: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_dataexport_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_exportedrecordcount: WebAttribute<msdyn_dataexport_Select, { msdyn_exportedrecordcount: number | null }, {  }>;
  msdyn_exportstatus: WebAttribute<msdyn_dataexport_Select, { msdyn_exportstatus: msdyn_exportstatus | null }, { msdyn_exportstatus_formatted?: string }>;
  msdyn_linkedentitydata: WebAttribute<msdyn_dataexport_Select, { msdyn_linkedentitydata: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_dataexport_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pagingdata: WebAttribute<msdyn_dataexport_Select, { msdyn_pagingdata: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_dataexport_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_dataexport_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_dataexport_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_dataexport_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_dataexport_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_dataexport_Select, { statecode: msdyn_dataexport_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_dataexport_Select, { statuscode: msdyn_dataexport_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_dataexport_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_dataexport_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_dataexport_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_dataexport_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_dataexportid: XQW.Guid;
  msdyn_datatoken: string;
  msdyn_entityname: string;
  msdyn_exportedrecordcount: number;
  msdyn_exportstatus: msdyn_exportstatus;
  msdyn_linkedentitydata: string;
  msdyn_name: string;
  msdyn_pagingdata: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_dataexport_statecode;
  statuscode: msdyn_dataexport_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_dataexport_Expand {
  createdby: WebExpand<msdyn_dataexport_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_dataexport_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_dataexport_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_dataexport_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dataexport_Annotations: WebExpand<msdyn_dataexport_Expand, Annotation_Select, Annotation_Filter, { msdyn_dataexport_Annotations: Annotation_Result[] }>;
  msdyn_dataexport_AsyncOperations: WebExpand<msdyn_dataexport_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_dataexport_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_dataexport_BulkDeleteFailures: WebExpand<msdyn_dataexport_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_dataexport_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_dataexport_DuplicateBaseRecord: WebExpand<msdyn_dataexport_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dataexport_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_dataexport_DuplicateMatchingRecord: WebExpand<msdyn_dataexport_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dataexport_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_dataexport_MailboxTrackingFolders: WebExpand<msdyn_dataexport_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_dataexport_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_dataexport_PrincipalObjectAttributeAccesses: WebExpand<msdyn_dataexport_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_dataexport_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_dataexport_ProcessSession: WebExpand<msdyn_dataexport_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_dataexport_ProcessSession: ProcessSession_Result[] }>;
  msdyn_dataexport_SyncErrors: WebExpand<msdyn_dataexport_Expand, SyncError_Select, SyncError_Filter, { msdyn_dataexport_SyncErrors: SyncError_Result[] }>;
  msdyn_dataexport_UserEntityInstanceDatas: WebExpand<msdyn_dataexport_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_dataexport_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_dataexport_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_dataexport_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_dataexport_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_dataexport_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_dataexport_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_exportstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_dataexport_Result extends msdyn_dataexport_Base, msdyn_dataexport_Relationships {
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
interface msdyn_dataexport_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_dataexport_RelatedMany {
  msdyn_dataexport_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_dataexport_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_dataexport_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_dataexport_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dataexport_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dataexport_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_dataexport_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_dataexport_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_dataexport_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_dataexport_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_dataexports: WebMappingRetrieve<msdyn_dataexport_Select,msdyn_dataexport_Expand,msdyn_dataexport_Filter,msdyn_dataexport_Fixed,msdyn_dataexport_Result,msdyn_dataexport_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_dataexports: WebMappingRelated<msdyn_dataexport_RelatedOne,msdyn_dataexport_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_dataexports: WebMappingCUDA<msdyn_dataexport_Create,msdyn_dataexport_Update,msdyn_dataexport_Select>;
}
