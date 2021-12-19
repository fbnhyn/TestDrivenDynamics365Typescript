interface msdyn_inspectionattachment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_inspectionattachmentid?: string | null;
  msdyn_inspectionquestionname?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inspectionattachment_statecode | null;
  statuscode?: msdyn_inspectionattachment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inspectionattachment_Relationships {
  msdyn_inspectionattachment_Annotations?: Annotation_Result[] | null;
  msdyn_inspectionattachment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inspectionattachment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inspectionattachment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectionattachment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectionattachment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inspectionattachment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inspectionattachment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inspectionattachment_SyncErrors?: SyncError_Result[] | null;
  msdyn_inspectionattachment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_inspectionattachment extends msdyn_inspectionattachment_Base, msdyn_inspectionattachment_Relationships {
  msdyn_inspectionresponseid_bind$msdyn_inspectionresponses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inspectionattachment_Create extends msdyn_inspectionattachment {
}
interface msdyn_inspectionattachment_Update extends msdyn_inspectionattachment {
}
interface msdyn_inspectionattachment_Select {
  createdby_guid: WebAttribute<msdyn_inspectionattachment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inspectionattachment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inspectionattachment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inspectionattachment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inspectionattachment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inspectionattachment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inspectionattachment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_inspectionattachmentid: WebAttribute<msdyn_inspectionattachment_Select, { msdyn_inspectionattachmentid: string | null }, {  }>;
  msdyn_inspectionquestionname: WebAttribute<msdyn_inspectionattachment_Select, { msdyn_inspectionquestionname: string | null }, {  }>;
  msdyn_inspectionresponseid_guid: WebAttribute<msdyn_inspectionattachment_Select, { msdyn_inspectionresponseid_guid: string | null }, { msdyn_inspectionresponseid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_inspectionattachment_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_inspectionattachment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inspectionattachment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inspectionattachment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inspectionattachment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inspectionattachment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inspectionattachment_Select, { statecode: msdyn_inspectionattachment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inspectionattachment_Select, { statuscode: msdyn_inspectionattachment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inspectionattachment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inspectionattachment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inspectionattachment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inspectionattachment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_inspectionattachmentid: XQW.Guid;
  msdyn_inspectionquestionname: string;
  msdyn_inspectionresponseid_guid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inspectionattachment_statecode;
  statuscode: msdyn_inspectionattachment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inspectionattachment_Expand {
  createdby: WebExpand<msdyn_inspectionattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inspectionattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inspectionattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inspectionattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_inspectionattachment_Annotations: WebExpand<msdyn_inspectionattachment_Expand, Annotation_Select, Annotation_Filter, { msdyn_inspectionattachment_Annotations: Annotation_Result[] }>;
  msdyn_inspectionattachment_AsyncOperations: WebExpand<msdyn_inspectionattachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inspectionattachment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inspectionattachment_BulkDeleteFailures: WebExpand<msdyn_inspectionattachment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inspectionattachment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inspectionattachment_DuplicateBaseRecord: WebExpand<msdyn_inspectionattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectionattachment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectionattachment_DuplicateMatchingRecord: WebExpand<msdyn_inspectionattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectionattachment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectionattachment_MailboxTrackingFolders: WebExpand<msdyn_inspectionattachment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inspectionattachment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inspectionattachment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inspectionattachment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inspectionattachment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inspectionattachment_ProcessSession: WebExpand<msdyn_inspectionattachment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inspectionattachment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inspectionattachment_SyncErrors: WebExpand<msdyn_inspectionattachment_Expand, SyncError_Select, SyncError_Filter, { msdyn_inspectionattachment_SyncErrors: SyncError_Result[] }>;
  msdyn_inspectionattachment_UserEntityInstanceDatas: WebExpand<msdyn_inspectionattachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inspectionattachment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_inspectionresponseid: WebExpand<msdyn_inspectionattachment_Expand, msdyn_inspectionresponse_Select, msdyn_inspectionresponse_Filter, { msdyn_inspectionresponseid: msdyn_inspectionresponse_Result }>;
  ownerid: WebExpand<msdyn_inspectionattachment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inspectionattachment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inspectionattachment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inspectionattachment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inspectionattachment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_inspectionresponseid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inspectionattachment_Result extends msdyn_inspectionattachment_Base, msdyn_inspectionattachment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_inspectionresponseid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inspectionattachment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_inspectionresponseid: WebMappingRetrieve<msdyn_inspectionresponse_Select,msdyn_inspectionresponse_Expand,msdyn_inspectionresponse_Filter,msdyn_inspectionresponse_Fixed,msdyn_inspectionresponse_Result,msdyn_inspectionresponse_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inspectionattachment_RelatedMany {
  msdyn_inspectionattachment_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_inspectionattachment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inspectionattachment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inspectionattachment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectionattachment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectionattachment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inspectionattachment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inspectionattachment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inspectionattachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inspectionattachment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inspectionattachments: WebMappingRetrieve<msdyn_inspectionattachment_Select,msdyn_inspectionattachment_Expand,msdyn_inspectionattachment_Filter,msdyn_inspectionattachment_Fixed,msdyn_inspectionattachment_Result,msdyn_inspectionattachment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inspectionattachments: WebMappingRelated<msdyn_inspectionattachment_RelatedOne,msdyn_inspectionattachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inspectionattachments: WebMappingCUDA<msdyn_inspectionattachment_Create,msdyn_inspectionattachment_Update,msdyn_inspectionattachment_Select>;
}
