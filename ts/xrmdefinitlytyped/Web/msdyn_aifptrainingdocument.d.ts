interface msdyn_AIFpTrainingDocument_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aifptrainingdocumentid?: string | null;
  msdyn_checksum?: string | null;
  msdyn_metadata?: string | null;
  msdyn_name?: string | null;
  msdyn_sourcetype?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aifptrainingdocument_statecode | null;
  statuscode?: msdyn_aifptrainingdocument_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIFpTrainingDocument_Relationships {
  msdyn_AIConfigurationId?: msdyn_AIConfiguration_Result | null;
  msdyn_aifptrainingdocument_Annotations?: Annotation_Result[] | null;
  msdyn_aifptrainingdocument_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aifptrainingdocument_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aifptrainingdocument_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aifptrainingdocument_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aifptrainingdocument_SyncErrors?: SyncError_Result[] | null;
  msdyn_aifptrainingdocument_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIFpTrainingDocument extends msdyn_AIFpTrainingDocument_Base, msdyn_AIFpTrainingDocument_Relationships {
  msdyn_AIConfigurationId_bind$msdyn_aiconfigurations?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIFpTrainingDocument_Create extends msdyn_AIFpTrainingDocument {
}
interface msdyn_AIFpTrainingDocument_Update extends msdyn_AIFpTrainingDocument {
}
interface msdyn_AIFpTrainingDocument_Select {
  createdby_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIFpTrainingDocument_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIFpTrainingDocument_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIFpTrainingDocument_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aiconfigurationid_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { msdyn_aiconfigurationid_guid: string | null }, { msdyn_aiconfigurationid_formatted?: string }>;
  msdyn_aifptrainingdocumentid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { msdyn_aifptrainingdocumentid: string | null }, {  }>;
  msdyn_checksum: WebAttribute<msdyn_AIFpTrainingDocument_Select, { msdyn_checksum: string | null }, {  }>;
  msdyn_metadata: WebAttribute<msdyn_AIFpTrainingDocument_Select, { msdyn_metadata: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIFpTrainingDocument_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sourcetype: WebAttribute<msdyn_AIFpTrainingDocument_Select, { msdyn_sourcetype: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIFpTrainingDocument_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIFpTrainingDocument_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIFpTrainingDocument_Select, { statecode: msdyn_aifptrainingdocument_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIFpTrainingDocument_Select, { statuscode: msdyn_aifptrainingdocument_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIFpTrainingDocument_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIFpTrainingDocument_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIFpTrainingDocument_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIFpTrainingDocument_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aiconfigurationid_guid: XQW.Guid;
  msdyn_aifptrainingdocumentid: XQW.Guid;
  msdyn_checksum: string;
  msdyn_metadata: string;
  msdyn_name: string;
  msdyn_sourcetype: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aifptrainingdocument_statecode;
  statuscode: msdyn_aifptrainingdocument_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIFpTrainingDocument_Expand {
  createdby: WebExpand<msdyn_AIFpTrainingDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIFpTrainingDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIFpTrainingDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIFpTrainingDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIConfigurationId: WebExpand<msdyn_AIFpTrainingDocument_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_AIConfigurationId: msdyn_AIConfiguration_Result }>;
  msdyn_aifptrainingdocument_Annotations: WebExpand<msdyn_AIFpTrainingDocument_Expand, Annotation_Select, Annotation_Filter, { msdyn_aifptrainingdocument_Annotations: Annotation_Result[] }>;
  msdyn_aifptrainingdocument_AsyncOperations: WebExpand<msdyn_AIFpTrainingDocument_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aifptrainingdocument_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aifptrainingdocument_BulkDeleteFailures: WebExpand<msdyn_AIFpTrainingDocument_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aifptrainingdocument_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aifptrainingdocument_MailboxTrackingFolders: WebExpand<msdyn_AIFpTrainingDocument_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aifptrainingdocument_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIFpTrainingDocument_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aifptrainingdocument_ProcessSession: WebExpand<msdyn_AIFpTrainingDocument_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aifptrainingdocument_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aifptrainingdocument_SyncErrors: WebExpand<msdyn_AIFpTrainingDocument_Expand, SyncError_Select, SyncError_Filter, { msdyn_aifptrainingdocument_SyncErrors: SyncError_Result[] }>;
  msdyn_aifptrainingdocument_UserEntityInstanceDatas: WebExpand<msdyn_AIFpTrainingDocument_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aifptrainingdocument_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIFpTrainingDocument_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIFpTrainingDocument_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIFpTrainingDocument_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIFpTrainingDocument_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIFpTrainingDocument_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aiconfigurationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIFpTrainingDocument_Result extends msdyn_AIFpTrainingDocument_Base, msdyn_AIFpTrainingDocument_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aiconfigurationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIFpTrainingDocument_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIConfigurationId: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIFpTrainingDocument_RelatedMany {
  msdyn_aifptrainingdocument_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_aifptrainingdocument_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aifptrainingdocument_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aifptrainingdocument_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aifptrainingdocument_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aifptrainingdocument_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aifptrainingdocument_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aifptrainingdocuments: WebMappingRetrieve<msdyn_AIFpTrainingDocument_Select,msdyn_AIFpTrainingDocument_Expand,msdyn_AIFpTrainingDocument_Filter,msdyn_AIFpTrainingDocument_Fixed,msdyn_AIFpTrainingDocument_Result,msdyn_AIFpTrainingDocument_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aifptrainingdocuments: WebMappingRelated<msdyn_AIFpTrainingDocument_RelatedOne,msdyn_AIFpTrainingDocument_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aifptrainingdocuments: WebMappingCUDA<msdyn_AIFpTrainingDocument_Create,msdyn_AIFpTrainingDocument_Update,msdyn_AIFpTrainingDocument_Select>;
}
