interface msdyn_AIConfiguration_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_aiconfigurationid?: string | null;
  msdyn_aiconfigurationidunique?: string | null;
  msdyn_customconfiguration?: string | null;
  msdyn_databinding?: string | null;
  msdyn_lasterrors?: string | null;
  msdyn_lasttrainorrundate?: Date | null;
  msdyn_majoriterationnumber?: number | null;
  msdyn_minoriterationnumber?: number | null;
  msdyn_modeldata?: string | null;
  msdyn_modelglobalexplainability?: string | null;
  msdyn_modelperformance?: string | null;
  msdyn_modelprovisioningmetadata?: string | null;
  msdyn_modelprovisioningstatus?: string | null;
  msdyn_modelrundataspecification?: string | null;
  msdyn_name?: string | null;
  msdyn_resourceinfo?: string | null;
  msdyn_runconfiguration?: string | null;
  msdyn_schedulingoptions?: string | null;
  msdyn_templateversion?: number | null;
  msdyn_type?: msdyn_aiconfiguration_msdyn_type | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_aiconfiguration_statecode | null;
  statuscode?: msdyn_aiconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIConfiguration_Relationships {
  msdyn_AIModelId?: msdyn_AIModel_Result | null;
  msdyn_ConnectionReferenceId?: connectionreference_Result | null;
  msdyn_CreatedFromConfigurationId?: msdyn_AIConfiguration_Result | null;
  msdyn_TrainedModelAIConfigurationPareId?: msdyn_AIConfiguration_Result | null;
  msdyn_aiconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aiconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aiconfiguration_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_aiconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aiconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aiconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aiconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_aiconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_aiconfiguration_msdyn_aiconfiguration?: msdyn_AIConfiguration_Result[] | null;
  msdyn_aiconfiguration_msdyn_aiodtrainingimage?: msdyn_AIOdTrainingImage_Result[] | null;
  msdyn_aiodlabel_msdyn_aiconfiguration?: msdyn_AIOdLabel_Result[] | null;
  msdyn_createdfromconfiguration_msdyn_toconfiguration?: msdyn_AIConfiguration_Result[] | null;
  msdyn_iermltraining_publishaiconfiguration?: msdyn_iermltraining_Result[] | null;
  msdyn_iermltraining_trainaiconfiguration?: msdyn_iermltraining_Result[] | null;
  msdyn_model?: FileAttachment_Result | null;
  msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId?: msdyn_AIFpTrainingDocument_Result[] | null;
  msdyn_ocsimltraining_publishaiconfigurati?: msdyn_ocsimltraining_Result[] | null;
  msdyn_ocsimltraining_trainaiconfiguration?: msdyn_ocsimltraining_Result[] | null;
}
interface msdyn_AIConfiguration extends msdyn_AIConfiguration_Base, msdyn_AIConfiguration_Relationships {
  msdyn_AIModelId_bind$msdyn_aimodels?: string | null;
  msdyn_ConnectionReferenceId_bind$connectionreferences?: string | null;
  msdyn_CreatedFromConfigurationId_bind$msdyn_aiconfigurations?: string | null;
  msdyn_TrainedModelAIConfigurationPareId_bind$msdyn_aiconfigurations?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIConfiguration_Create extends msdyn_AIConfiguration {
}
interface msdyn_AIConfiguration_Update extends msdyn_AIConfiguration {
}
interface msdyn_AIConfiguration_Select {
  componentstate: WebAttribute<msdyn_AIConfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_AIConfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIConfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIConfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIConfiguration_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<msdyn_AIConfiguration_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_AIConfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_AIConfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIConfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIConfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIConfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aiconfigurationid: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_aiconfigurationid: string | null }, {  }>;
  msdyn_aiconfigurationidunique: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_aiconfigurationidunique: string | null }, {  }>;
  msdyn_aimodelid_guid: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_aimodelid_guid: string | null }, { msdyn_aimodelid_formatted?: string }>;
  msdyn_connectionreferenceid_guid: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_connectionreferenceid_guid: string | null }, { msdyn_connectionreferenceid_formatted?: string }>;
  msdyn_createdfromconfigurationid_guid: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_createdfromconfigurationid_guid: string | null }, { msdyn_createdfromconfigurationid_formatted?: string }>;
  msdyn_customconfiguration: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_customconfiguration: string | null }, {  }>;
  msdyn_databinding: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_databinding: string | null }, {  }>;
  msdyn_lasterrors: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_lasterrors: string | null }, {  }>;
  msdyn_lasttrainorrundate: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_lasttrainorrundate: Date | null }, { msdyn_lasttrainorrundate_formatted?: string }>;
  msdyn_majoriterationnumber: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_majoriterationnumber: number | null }, {  }>;
  msdyn_minoriterationnumber: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_minoriterationnumber: number | null }, {  }>;
  msdyn_modeldata: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_modeldata: string | null }, {  }>;
  msdyn_modelglobalexplainability: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_modelglobalexplainability: string | null }, {  }>;
  msdyn_modelperformance: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_modelperformance: string | null }, {  }>;
  msdyn_modelprovisioningmetadata: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_modelprovisioningmetadata: string | null }, {  }>;
  msdyn_modelprovisioningstatus: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_modelprovisioningstatus: string | null }, {  }>;
  msdyn_modelrundataspecification: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_modelrundataspecification: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resourceinfo: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_resourceinfo: string | null }, {  }>;
  msdyn_runconfiguration: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_runconfiguration: string | null }, {  }>;
  msdyn_schedulingoptions: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_schedulingoptions: string | null }, {  }>;
  msdyn_templateversion: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_templateversion: number | null }, {  }>;
  msdyn_trainedmodelaiconfigurationpareid_guid: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_trainedmodelaiconfigurationpareid_guid: string | null }, { msdyn_trainedmodelaiconfigurationpareid_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_AIConfiguration_Select, { msdyn_type: msdyn_aiconfiguration_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_AIConfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_AIConfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIConfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIConfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIConfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIConfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_AIConfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_AIConfiguration_Select, { statecode: msdyn_aiconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIConfiguration_Select, { statuscode: msdyn_aiconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_AIConfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIConfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIConfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIConfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIConfiguration_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aiconfigurationid: XQW.Guid;
  msdyn_aiconfigurationidunique: XQW.Guid;
  msdyn_aimodelid_guid: XQW.Guid;
  msdyn_connectionreferenceid_guid: XQW.Guid;
  msdyn_createdfromconfigurationid_guid: XQW.Guid;
  msdyn_customconfiguration: string;
  msdyn_databinding: string;
  msdyn_lasterrors: string;
  msdyn_lasttrainorrundate: Date;
  msdyn_majoriterationnumber: number;
  msdyn_minoriterationnumber: number;
  msdyn_modeldata: string;
  msdyn_modelglobalexplainability: string;
  msdyn_modelperformance: string;
  msdyn_modelprovisioningmetadata: string;
  msdyn_modelprovisioningstatus: string;
  msdyn_modelrundataspecification: string;
  msdyn_name: string;
  msdyn_resourceinfo: string;
  msdyn_runconfiguration: string;
  msdyn_schedulingoptions: string;
  msdyn_templateversion: number;
  msdyn_trainedmodelaiconfigurationpareid_guid: XQW.Guid;
  msdyn_type: msdyn_aiconfiguration_msdyn_type;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_aiconfiguration_statecode;
  statuscode: msdyn_aiconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIConfiguration_Expand {
  createdby: WebExpand<msdyn_AIConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIModelId: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_AIModelId: msdyn_AIModel_Result }>;
  msdyn_ConnectionReferenceId: WebExpand<msdyn_AIConfiguration_Expand, connectionreference_Select, connectionreference_Filter, { msdyn_ConnectionReferenceId: connectionreference_Result }>;
  msdyn_CreatedFromConfigurationId: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_CreatedFromConfigurationId: msdyn_AIConfiguration_Result }>;
  msdyn_TrainedModelAIConfigurationPareId: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_TrainedModelAIConfigurationPareId: msdyn_AIConfiguration_Result }>;
  msdyn_aiconfiguration_AsyncOperations: WebExpand<msdyn_AIConfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aiconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aiconfiguration_BulkDeleteFailures: WebExpand<msdyn_AIConfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aiconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aiconfiguration_FileAttachments: WebExpand<msdyn_AIConfiguration_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_aiconfiguration_FileAttachments: FileAttachment_Result[] }>;
  msdyn_aiconfiguration_MailboxTrackingFolders: WebExpand<msdyn_AIConfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aiconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aiconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIConfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aiconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aiconfiguration_ProcessSession: WebExpand<msdyn_AIConfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aiconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aiconfiguration_SyncErrors: WebExpand<msdyn_AIConfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_aiconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_aiconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_AIConfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aiconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_aiconfiguration_msdyn_aiconfiguration: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_aiconfiguration_msdyn_aiconfiguration: msdyn_AIConfiguration_Result[] }>;
  msdyn_aiconfiguration_msdyn_aiodtrainingimage: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIOdTrainingImage_Select, msdyn_AIOdTrainingImage_Filter, { msdyn_aiconfiguration_msdyn_aiodtrainingimage: msdyn_AIOdTrainingImage_Result[] }>;
  msdyn_aiodlabel_msdyn_aiconfiguration: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIOdLabel_Select, msdyn_AIOdLabel_Filter, { msdyn_aiodlabel_msdyn_aiconfiguration: msdyn_AIOdLabel_Result[] }>;
  msdyn_createdfromconfiguration_msdyn_toconfiguration: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_createdfromconfiguration_msdyn_toconfiguration: msdyn_AIConfiguration_Result[] }>;
  msdyn_iermltraining_publishaiconfiguration: WebExpand<msdyn_AIConfiguration_Expand, msdyn_iermltraining_Select, msdyn_iermltraining_Filter, { msdyn_iermltraining_publishaiconfiguration: msdyn_iermltraining_Result[] }>;
  msdyn_iermltraining_trainaiconfiguration: WebExpand<msdyn_AIConfiguration_Expand, msdyn_iermltraining_Select, msdyn_iermltraining_Filter, { msdyn_iermltraining_trainaiconfiguration: msdyn_iermltraining_Result[] }>;
  msdyn_model: WebExpand<msdyn_AIConfiguration_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_model: FileAttachment_Result }>;
  msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId: WebExpand<msdyn_AIConfiguration_Expand, msdyn_AIFpTrainingDocument_Select, msdyn_AIFpTrainingDocument_Filter, { msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId: msdyn_AIFpTrainingDocument_Result[] }>;
  msdyn_ocsimltraining_publishaiconfigurati: WebExpand<msdyn_AIConfiguration_Expand, msdyn_ocsimltraining_Select, msdyn_ocsimltraining_Filter, { msdyn_ocsimltraining_publishaiconfigurati: msdyn_ocsimltraining_Result[] }>;
  msdyn_ocsimltraining_trainaiconfiguration: WebExpand<msdyn_AIConfiguration_Expand, msdyn_ocsimltraining_Select, msdyn_ocsimltraining_Filter, { msdyn_ocsimltraining_trainaiconfiguration: msdyn_ocsimltraining_Result[] }>;
  ownerid: WebExpand<msdyn_AIConfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIConfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIConfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIConfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aimodelid_formatted?: string;
  msdyn_connectionreferenceid_formatted?: string;
  msdyn_createdfromconfigurationid_formatted?: string;
  msdyn_lasttrainorrundate_formatted?: string;
  msdyn_trainedmodelaiconfigurationpareid_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIConfiguration_Result extends msdyn_AIConfiguration_Base, msdyn_AIConfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aimodelid_guid: string | null;
  msdyn_connectionreferenceid_guid: string | null;
  msdyn_createdfromconfigurationid_guid: string | null;
  msdyn_trainedmodelaiconfigurationpareid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIConfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIModelId: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  msdyn_ConnectionReferenceId: WebMappingRetrieve<connectionreference_Select,connectionreference_Expand,connectionreference_Filter,connectionreference_Fixed,connectionreference_Result,connectionreference_FormattedResult>;
  msdyn_CreatedFromConfigurationId: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_TrainedModelAIConfigurationPareId: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_model: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIConfiguration_RelatedMany {
  msdyn_aiconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aiconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aiconfiguration_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_aiconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aiconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aiconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aiconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aiconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_aiconfiguration_msdyn_aiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_aiconfiguration_msdyn_aiodtrainingimage: WebMappingRetrieve<msdyn_AIOdTrainingImage_Select,msdyn_AIOdTrainingImage_Expand,msdyn_AIOdTrainingImage_Filter,msdyn_AIOdTrainingImage_Fixed,msdyn_AIOdTrainingImage_Result,msdyn_AIOdTrainingImage_FormattedResult>;
  msdyn_aiodlabel_msdyn_aiconfiguration: WebMappingRetrieve<msdyn_AIOdLabel_Select,msdyn_AIOdLabel_Expand,msdyn_AIOdLabel_Filter,msdyn_AIOdLabel_Fixed,msdyn_AIOdLabel_Result,msdyn_AIOdLabel_FormattedResult>;
  msdyn_createdfromconfiguration_msdyn_toconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_iermltraining_publishaiconfiguration: WebMappingRetrieve<msdyn_iermltraining_Select,msdyn_iermltraining_Expand,msdyn_iermltraining_Filter,msdyn_iermltraining_Fixed,msdyn_iermltraining_Result,msdyn_iermltraining_FormattedResult>;
  msdyn_iermltraining_trainaiconfiguration: WebMappingRetrieve<msdyn_iermltraining_Select,msdyn_iermltraining_Expand,msdyn_iermltraining_Filter,msdyn_iermltraining_Fixed,msdyn_iermltraining_Result,msdyn_iermltraining_FormattedResult>;
  msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId: WebMappingRetrieve<msdyn_AIFpTrainingDocument_Select,msdyn_AIFpTrainingDocument_Expand,msdyn_AIFpTrainingDocument_Filter,msdyn_AIFpTrainingDocument_Fixed,msdyn_AIFpTrainingDocument_Result,msdyn_AIFpTrainingDocument_FormattedResult>;
  msdyn_ocsimltraining_publishaiconfigurati: WebMappingRetrieve<msdyn_ocsimltraining_Select,msdyn_ocsimltraining_Expand,msdyn_ocsimltraining_Filter,msdyn_ocsimltraining_Fixed,msdyn_ocsimltraining_Result,msdyn_ocsimltraining_FormattedResult>;
  msdyn_ocsimltraining_trainaiconfiguration: WebMappingRetrieve<msdyn_ocsimltraining_Select,msdyn_ocsimltraining_Expand,msdyn_ocsimltraining_Filter,msdyn_ocsimltraining_Fixed,msdyn_ocsimltraining_Result,msdyn_ocsimltraining_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aiconfigurations: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aiconfigurations: WebMappingRelated<msdyn_AIConfiguration_RelatedOne,msdyn_AIConfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aiconfigurations: WebMappingCUDA<msdyn_AIConfiguration_Create,msdyn_AIConfiguration_Update,msdyn_AIConfiguration_Select>;
}
