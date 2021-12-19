interface msdyn_AIModel_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_aimodelid?: string | null;
  msdyn_aimodelidunique?: string | null;
  msdyn_modelcreationcontext?: string | null;
  msdyn_name?: string | null;
  msdyn_sharewithorganizationoncreate?: boolean | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_aimodel_statecode | null;
  statuscode?: msdyn_aimodel_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIModel_Relationships {
  msdyn_AIBDatasetsContainer_msdyn_AIModelI?: msdyn_AIBDatasetsContainer_Result[] | null;
  msdyn_TemplateId?: msdyn_AITemplate_Result | null;
  msdyn_aimodel_Annotations?: Annotation_Result[] | null;
  msdyn_aimodel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aimodel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aimodel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aimodel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aimodel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aimodel_SyncErrors?: SyncError_Result[] | null;
  msdyn_aimodel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_aimodel_msdyn_aiconfiguration?: msdyn_AIConfiguration_Result[] | null;
  msdyn_aimodel_msdyn_decisionruleset_aibmodelid?: msdyn_decisionruleset_Result[] | null;
  msdyn_iermlmodel_aimodelid_msdyn?: msdyn_iermlmodel_Result[] | null;
  msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid?: msdyn_effortpredictionresult_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_mlmodelid?: msdyn_ocliveworkitemcharacteristic_Result[] | null;
  msdyn_ocskillidentmlmodel_aimodelid_msdyn?: msdyn_ocskillidentmlmodel_Result[] | null;
}
interface msdyn_AIModel extends msdyn_AIModel_Base, msdyn_AIModel_Relationships {
  msdyn_TemplateId_bind$msdyn_aitemplates?: string | null;
  msdyn_retrainworkflowid_bind$workflows?: string | null;
  msdyn_scheduleinferenceworkflowid_bind$workflows?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIModel_Create extends msdyn_AIModel {
}
interface msdyn_AIModel_Update extends msdyn_AIModel {
}
interface msdyn_AIModel_Select {
  componentstate: WebAttribute<msdyn_AIModel_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_AIModel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIModel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIModel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIModel_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<msdyn_AIModel_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_AIModel_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_AIModel_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIModel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIModel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIModel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_activerunconfigurationid_guid: WebAttribute<msdyn_AIModel_Select, { msdyn_activerunconfigurationid_guid: string | null }, { msdyn_activerunconfigurationid_formatted?: string }>;
  msdyn_aimodelid: WebAttribute<msdyn_AIModel_Select, { msdyn_aimodelid: string | null }, {  }>;
  msdyn_aimodelidunique: WebAttribute<msdyn_AIModel_Select, { msdyn_aimodelidunique: string | null }, {  }>;
  msdyn_modelcreationcontext: WebAttribute<msdyn_AIModel_Select, { msdyn_modelcreationcontext: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIModel_Select, { msdyn_name: string | null }, {  }>;
  msdyn_retrainworkflowid_guid: WebAttribute<msdyn_AIModel_Select, { msdyn_retrainworkflowid_guid: string | null }, { msdyn_retrainworkflowid_formatted?: string }>;
  msdyn_scheduleinferenceworkflowid_guid: WebAttribute<msdyn_AIModel_Select, { msdyn_scheduleinferenceworkflowid_guid: string | null }, { msdyn_scheduleinferenceworkflowid_formatted?: string }>;
  msdyn_sharewithorganizationoncreate: WebAttribute<msdyn_AIModel_Select, { msdyn_sharewithorganizationoncreate: boolean | null }, {  }>;
  msdyn_templateid_guid: WebAttribute<msdyn_AIModel_Select, { msdyn_templateid_guid: string | null }, { msdyn_templateid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_AIModel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_AIModel_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIModel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIModel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIModel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIModel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_AIModel_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_AIModel_Select, { statecode: msdyn_aimodel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIModel_Select, { statuscode: msdyn_aimodel_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_AIModel_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIModel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIModel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIModel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIModel_Filter {
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
  msdyn_activerunconfigurationid_guid: XQW.Guid;
  msdyn_aimodelid: XQW.Guid;
  msdyn_aimodelidunique: XQW.Guid;
  msdyn_modelcreationcontext: string;
  msdyn_name: string;
  msdyn_retrainworkflowid_guid: XQW.Guid;
  msdyn_scheduleinferenceworkflowid_guid: XQW.Guid;
  msdyn_sharewithorganizationoncreate: boolean;
  msdyn_templateid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_aimodel_statecode;
  statuscode: msdyn_aimodel_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIModel_Expand {
  createdby: WebExpand<msdyn_AIModel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIModel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDatasetsContainer_msdyn_AIModelI: WebExpand<msdyn_AIModel_Expand, msdyn_AIBDatasetsContainer_Select, msdyn_AIBDatasetsContainer_Filter, { msdyn_AIBDatasetsContainer_msdyn_AIModelI: msdyn_AIBDatasetsContainer_Result[] }>;
  msdyn_TemplateId: WebExpand<msdyn_AIModel_Expand, msdyn_AITemplate_Select, msdyn_AITemplate_Filter, { msdyn_TemplateId: msdyn_AITemplate_Result }>;
  msdyn_aimodel_Annotations: WebExpand<msdyn_AIModel_Expand, Annotation_Select, Annotation_Filter, { msdyn_aimodel_Annotations: Annotation_Result[] }>;
  msdyn_aimodel_AsyncOperations: WebExpand<msdyn_AIModel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aimodel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aimodel_BulkDeleteFailures: WebExpand<msdyn_AIModel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aimodel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aimodel_MailboxTrackingFolders: WebExpand<msdyn_AIModel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aimodel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aimodel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIModel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aimodel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aimodel_ProcessSession: WebExpand<msdyn_AIModel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aimodel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aimodel_SyncErrors: WebExpand<msdyn_AIModel_Expand, SyncError_Select, SyncError_Filter, { msdyn_aimodel_SyncErrors: SyncError_Result[] }>;
  msdyn_aimodel_UserEntityInstanceDatas: WebExpand<msdyn_AIModel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aimodel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_aimodel_msdyn_aiconfiguration: WebExpand<msdyn_AIModel_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_aimodel_msdyn_aiconfiguration: msdyn_AIConfiguration_Result[] }>;
  msdyn_aimodel_msdyn_decisionruleset_aibmodelid: WebExpand<msdyn_AIModel_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_aimodel_msdyn_decisionruleset_aibmodelid: msdyn_decisionruleset_Result[] }>;
  msdyn_iermlmodel_aimodelid_msdyn: WebExpand<msdyn_AIModel_Expand, msdyn_iermlmodel_Select, msdyn_iermlmodel_Filter, { msdyn_iermlmodel_aimodelid_msdyn: msdyn_iermlmodel_Result[] }>;
  msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid: WebExpand<msdyn_AIModel_Expand, msdyn_effortpredictionresult_Select, msdyn_effortpredictionresult_Filter, { msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid: msdyn_effortpredictionresult_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_mlmodelid: WebExpand<msdyn_AIModel_Expand, msdyn_ocliveworkitemcharacteristic_Select, msdyn_ocliveworkitemcharacteristic_Filter, { msdyn_ocliveworkitemcharacteristic_mlmodelid: msdyn_ocliveworkitemcharacteristic_Result[] }>;
  msdyn_ocskillidentmlmodel_aimodelid_msdyn: WebExpand<msdyn_AIModel_Expand, msdyn_ocskillidentmlmodel_Select, msdyn_ocskillidentmlmodel_Filter, { msdyn_ocskillidentmlmodel_aimodelid_msdyn: msdyn_ocskillidentmlmodel_Result[] }>;
  msdyn_retrainworkflowid: WebExpand<msdyn_AIModel_Expand, Workflow_Select, Workflow_Filter, { msdyn_retrainworkflowid: Workflow_Result }>;
  msdyn_scheduleinferenceworkflowid: WebExpand<msdyn_AIModel_Expand, Workflow_Select, Workflow_Filter, { msdyn_scheduleinferenceworkflowid: Workflow_Result }>;
  ownerid: WebExpand<msdyn_AIModel_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIModel_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIModel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIModel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIModel_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_activerunconfigurationid_formatted?: string;
  msdyn_retrainworkflowid_formatted?: string;
  msdyn_scheduleinferenceworkflowid_formatted?: string;
  msdyn_templateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIModel_Result extends msdyn_AIModel_Base, msdyn_AIModel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_activerunconfigurationid_guid: string | null;
  msdyn_retrainworkflowid_guid: string | null;
  msdyn_scheduleinferenceworkflowid_guid: string | null;
  msdyn_templateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIModel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_TemplateId: WebMappingRetrieve<msdyn_AITemplate_Select,msdyn_AITemplate_Expand,msdyn_AITemplate_Filter,msdyn_AITemplate_Fixed,msdyn_AITemplate_Result,msdyn_AITemplate_FormattedResult>;
  msdyn_retrainworkflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  msdyn_scheduleinferenceworkflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIModel_RelatedMany {
  msdyn_AIBDatasetsContainer_msdyn_AIModelI: WebMappingRetrieve<msdyn_AIBDatasetsContainer_Select,msdyn_AIBDatasetsContainer_Expand,msdyn_AIBDatasetsContainer_Filter,msdyn_AIBDatasetsContainer_Fixed,msdyn_AIBDatasetsContainer_Result,msdyn_AIBDatasetsContainer_FormattedResult>;
  msdyn_aimodel_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_aimodel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aimodel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aimodel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aimodel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aimodel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aimodel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aimodel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_aimodel_msdyn_aiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_aimodel_msdyn_decisionruleset_aibmodelid: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  msdyn_iermlmodel_aimodelid_msdyn: WebMappingRetrieve<msdyn_iermlmodel_Select,msdyn_iermlmodel_Expand,msdyn_iermlmodel_Filter,msdyn_iermlmodel_Fixed,msdyn_iermlmodel_Result,msdyn_iermlmodel_FormattedResult>;
  msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid: WebMappingRetrieve<msdyn_effortpredictionresult_Select,msdyn_effortpredictionresult_Expand,msdyn_effortpredictionresult_Filter,msdyn_effortpredictionresult_Fixed,msdyn_effortpredictionresult_Result,msdyn_effortpredictionresult_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_mlmodelid: WebMappingRetrieve<msdyn_ocliveworkitemcharacteristic_Select,msdyn_ocliveworkitemcharacteristic_Expand,msdyn_ocliveworkitemcharacteristic_Filter,msdyn_ocliveworkitemcharacteristic_Fixed,msdyn_ocliveworkitemcharacteristic_Result,msdyn_ocliveworkitemcharacteristic_FormattedResult>;
  msdyn_ocskillidentmlmodel_aimodelid_msdyn: WebMappingRetrieve<msdyn_ocskillidentmlmodel_Select,msdyn_ocskillidentmlmodel_Expand,msdyn_ocskillidentmlmodel_Filter,msdyn_ocskillidentmlmodel_Fixed,msdyn_ocskillidentmlmodel_Result,msdyn_ocskillidentmlmodel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aimodels: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aimodels: WebMappingRelated<msdyn_AIModel_RelatedOne,msdyn_AIModel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aimodels: WebMappingCUDA<msdyn_AIModel_Create,msdyn_AIModel_Update,msdyn_AIModel_Select>;
}
