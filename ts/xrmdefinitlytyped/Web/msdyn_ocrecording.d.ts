interface msdyn_ocrecording_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_mediauri?: string | null;
  msdyn_name?: string | null;
  msdyn_ocrecordingid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocrecording_statecode | null;
  statuscode?: msdyn_ocrecording_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocrecording_Relationships {
  msdyn_ocrecording_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocrecording_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocrecording_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocrecording_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocrecording_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_ocrecording_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocrecording_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocrecording_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocrecording_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocrecording_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_recording?: FileAttachment_Result | null;
  msdyn_recordingmetadata?: FileAttachment_Result | null;
}
interface msdyn_ocrecording extends msdyn_ocrecording_Base, msdyn_ocrecording_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_sourcelanguage_bind$msdyn_oclanguages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocrecording_Create extends msdyn_ocrecording {
}
interface msdyn_ocrecording_Update extends msdyn_ocrecording {
}
interface msdyn_ocrecording_Select {
  createdby_guid: WebAttribute<msdyn_ocrecording_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocrecording_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocrecording_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocrecording_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocrecording_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocrecording_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocrecording_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_ocrecording_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_mediauri: WebAttribute<msdyn_ocrecording_Select, { msdyn_mediauri: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocrecording_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocrecordingid: WebAttribute<msdyn_ocrecording_Select, { msdyn_ocrecordingid: string | null }, {  }>;
  msdyn_sourcelanguage_guid: WebAttribute<msdyn_ocrecording_Select, { msdyn_sourcelanguage_guid: string | null }, { msdyn_sourcelanguage_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocrecording_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocrecording_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocrecording_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocrecording_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocrecording_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocrecording_Select, { statecode: msdyn_ocrecording_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocrecording_Select, { statuscode: msdyn_ocrecording_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocrecording_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocrecording_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocrecording_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocrecording_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_mediauri: string;
  msdyn_name: string;
  msdyn_ocrecordingid: XQW.Guid;
  msdyn_sourcelanguage_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocrecording_statecode;
  statuscode: msdyn_ocrecording_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocrecording_Expand {
  createdby: WebExpand<msdyn_ocrecording_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocrecording_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocrecording_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocrecording_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemid: WebExpand<msdyn_ocrecording_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_ocrecording_AsyncOperations: WebExpand<msdyn_ocrecording_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocrecording_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocrecording_BulkDeleteFailures: WebExpand<msdyn_ocrecording_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocrecording_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocrecording_DuplicateBaseRecord: WebExpand<msdyn_ocrecording_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocrecording_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocrecording_DuplicateMatchingRecord: WebExpand<msdyn_ocrecording_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocrecording_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocrecording_FileAttachments: WebExpand<msdyn_ocrecording_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_ocrecording_FileAttachments: FileAttachment_Result[] }>;
  msdyn_ocrecording_MailboxTrackingFolders: WebExpand<msdyn_ocrecording_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocrecording_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocrecording_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocrecording_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocrecording_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocrecording_ProcessSession: WebExpand<msdyn_ocrecording_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocrecording_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocrecording_SyncErrors: WebExpand<msdyn_ocrecording_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocrecording_SyncErrors: SyncError_Result[] }>;
  msdyn_ocrecording_UserEntityInstanceDatas: WebExpand<msdyn_ocrecording_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocrecording_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_recording: WebExpand<msdyn_ocrecording_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_recording: FileAttachment_Result }>;
  msdyn_recordingmetadata: WebExpand<msdyn_ocrecording_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_recordingmetadata: FileAttachment_Result }>;
  msdyn_sourcelanguage: WebExpand<msdyn_ocrecording_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_sourcelanguage: msdyn_oclanguage_Result }>;
  ownerid: WebExpand<msdyn_ocrecording_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocrecording_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocrecording_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocrecording_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocrecording_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  msdyn_sourcelanguage_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocrecording_Result extends msdyn_ocrecording_Base, msdyn_ocrecording_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  msdyn_sourcelanguage_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocrecording_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_recording: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_recordingmetadata: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_sourcelanguage: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocrecording_RelatedMany {
  msdyn_ocrecording_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocrecording_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocrecording_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocrecording_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocrecording_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_ocrecording_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocrecording_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocrecording_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocrecording_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocrecording_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocrecordings: WebMappingRetrieve<msdyn_ocrecording_Select,msdyn_ocrecording_Expand,msdyn_ocrecording_Filter,msdyn_ocrecording_Fixed,msdyn_ocrecording_Result,msdyn_ocrecording_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocrecordings: WebMappingRelated<msdyn_ocrecording_RelatedOne,msdyn_ocrecording_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocrecordings: WebMappingCUDA<msdyn_ocrecording_Create,msdyn_ocrecording_Update,msdyn_ocrecording_Select>;
}
