interface msdyn_inspectioninstance_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_completed?: string | null;
  msdyn_inspectioninstanceid?: string | null;
  msdyn_name?: string | null;
  msdyn_surveybounded?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inspectioninstance_statecode | null;
  statuscode?: msdyn_inspectioninstance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inspectioninstance_Relationships {
  msdyn_CaseId?: Incident_Result | null;
  msdyn_CustomerAssetId?: msdyn_customerasset_Result | null;
  msdyn_InspectionTemplateId?: msdyn_inspection_Result | null;
  msdyn_InspectionTemplateVersionId?: msdyn_inspectiondefinition_Result | null;
  msdyn_inspectioninstance_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inspectioninstance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inspectioninstance_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectioninstance_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectioninstance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inspectioninstance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inspectioninstance_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inspectioninstance_SyncErrors?: SyncError_Result[] | null;
  msdyn_inspectioninstance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_inspectioninstance extends msdyn_inspectioninstance_Base, msdyn_inspectioninstance_Relationships {
  msdyn_CaseId_bind$incidents?: string | null;
  msdyn_CustomerAssetId_bind$msdyn_customerassets?: string | null;
  msdyn_InspectionTemplateId_bind$msdyn_inspections?: string | null;
  msdyn_InspectionTemplateVersionId_bind$msdyn_inspectiondefinitions?: string | null;
  msdyn_inspectionresponseid_bind$msdyn_inspectionresponses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inspectioninstance_Create extends msdyn_inspectioninstance {
}
interface msdyn_inspectioninstance_Update extends msdyn_inspectioninstance {
}
interface msdyn_inspectioninstance_Select {
  createdby_guid: WebAttribute<msdyn_inspectioninstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inspectioninstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inspectioninstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inspectioninstance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inspectioninstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inspectioninstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inspectioninstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_caseid_guid: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_caseid_guid: string | null }, { msdyn_caseid_formatted?: string }>;
  msdyn_completed: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_completed: string | null }, {  }>;
  msdyn_customerassetid_guid: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_customerassetid_guid: string | null }, { msdyn_customerassetid_formatted?: string }>;
  msdyn_inspectioninstanceid: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_inspectioninstanceid: string | null }, {  }>;
  msdyn_inspectionresponseid_guid: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_inspectionresponseid_guid: string | null }, { msdyn_inspectionresponseid_formatted?: string }>;
  msdyn_inspectiontemplateid_guid: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_inspectiontemplateid_guid: string | null }, { msdyn_inspectiontemplateid_formatted?: string }>;
  msdyn_inspectiontemplateversionid_guid: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_inspectiontemplateversionid_guid: string | null }, { msdyn_inspectiontemplateversionid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_name: string | null }, {  }>;
  msdyn_surveybounded: WebAttribute<msdyn_inspectioninstance_Select, { msdyn_surveybounded: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_inspectioninstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inspectioninstance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inspectioninstance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inspectioninstance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inspectioninstance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inspectioninstance_Select, { statecode: msdyn_inspectioninstance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inspectioninstance_Select, { statuscode: msdyn_inspectioninstance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inspectioninstance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inspectioninstance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inspectioninstance_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inspectioninstance_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_caseid_guid: XQW.Guid;
  msdyn_completed: string;
  msdyn_customerassetid_guid: XQW.Guid;
  msdyn_inspectioninstanceid: XQW.Guid;
  msdyn_inspectionresponseid_guid: XQW.Guid;
  msdyn_inspectiontemplateid_guid: XQW.Guid;
  msdyn_inspectiontemplateversionid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_surveybounded: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inspectioninstance_statecode;
  statuscode: msdyn_inspectioninstance_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inspectioninstance_Expand {
  createdby: WebExpand<msdyn_inspectioninstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inspectioninstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inspectioninstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inspectioninstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_CaseId: WebExpand<msdyn_inspectioninstance_Expand, Incident_Select, Incident_Filter, { msdyn_CaseId: Incident_Result }>;
  msdyn_CustomerAssetId: WebExpand<msdyn_inspectioninstance_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_CustomerAssetId: msdyn_customerasset_Result }>;
  msdyn_InspectionTemplateId: WebExpand<msdyn_inspectioninstance_Expand, msdyn_inspection_Select, msdyn_inspection_Filter, { msdyn_InspectionTemplateId: msdyn_inspection_Result }>;
  msdyn_InspectionTemplateVersionId: WebExpand<msdyn_inspectioninstance_Expand, msdyn_inspectiondefinition_Select, msdyn_inspectiondefinition_Filter, { msdyn_InspectionTemplateVersionId: msdyn_inspectiondefinition_Result }>;
  msdyn_inspectioninstance_AsyncOperations: WebExpand<msdyn_inspectioninstance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inspectioninstance_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inspectioninstance_BulkDeleteFailures: WebExpand<msdyn_inspectioninstance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inspectioninstance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inspectioninstance_DuplicateBaseRecord: WebExpand<msdyn_inspectioninstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectioninstance_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectioninstance_DuplicateMatchingRecord: WebExpand<msdyn_inspectioninstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectioninstance_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectioninstance_MailboxTrackingFolders: WebExpand<msdyn_inspectioninstance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inspectioninstance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inspectioninstance_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inspectioninstance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inspectioninstance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inspectioninstance_ProcessSession: WebExpand<msdyn_inspectioninstance_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inspectioninstance_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inspectioninstance_SyncErrors: WebExpand<msdyn_inspectioninstance_Expand, SyncError_Select, SyncError_Filter, { msdyn_inspectioninstance_SyncErrors: SyncError_Result[] }>;
  msdyn_inspectioninstance_UserEntityInstanceDatas: WebExpand<msdyn_inspectioninstance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inspectioninstance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_inspectionresponseid: WebExpand<msdyn_inspectioninstance_Expand, msdyn_inspectionresponse_Select, msdyn_inspectionresponse_Filter, { msdyn_inspectionresponseid: msdyn_inspectionresponse_Result }>;
  ownerid: WebExpand<msdyn_inspectioninstance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inspectioninstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inspectioninstance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inspectioninstance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inspectioninstance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_caseid_formatted?: string;
  msdyn_customerassetid_formatted?: string;
  msdyn_inspectionresponseid_formatted?: string;
  msdyn_inspectiontemplateid_formatted?: string;
  msdyn_inspectiontemplateversionid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inspectioninstance_Result extends msdyn_inspectioninstance_Base, msdyn_inspectioninstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_caseid_guid: string | null;
  msdyn_customerassetid_guid: string | null;
  msdyn_inspectionresponseid_guid: string | null;
  msdyn_inspectiontemplateid_guid: string | null;
  msdyn_inspectiontemplateversionid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inspectioninstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_CaseId: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  msdyn_CustomerAssetId: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_InspectionTemplateId: WebMappingRetrieve<msdyn_inspection_Select,msdyn_inspection_Expand,msdyn_inspection_Filter,msdyn_inspection_Fixed,msdyn_inspection_Result,msdyn_inspection_FormattedResult>;
  msdyn_InspectionTemplateVersionId: WebMappingRetrieve<msdyn_inspectiondefinition_Select,msdyn_inspectiondefinition_Expand,msdyn_inspectiondefinition_Filter,msdyn_inspectiondefinition_Fixed,msdyn_inspectiondefinition_Result,msdyn_inspectiondefinition_FormattedResult>;
  msdyn_inspectionresponseid: WebMappingRetrieve<msdyn_inspectionresponse_Select,msdyn_inspectionresponse_Expand,msdyn_inspectionresponse_Filter,msdyn_inspectionresponse_Fixed,msdyn_inspectionresponse_Result,msdyn_inspectionresponse_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inspectioninstance_RelatedMany {
  msdyn_inspectioninstance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inspectioninstance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inspectioninstance_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectioninstance_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectioninstance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inspectioninstance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inspectioninstance_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inspectioninstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inspectioninstance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inspectioninstances: WebMappingRetrieve<msdyn_inspectioninstance_Select,msdyn_inspectioninstance_Expand,msdyn_inspectioninstance_Filter,msdyn_inspectioninstance_Fixed,msdyn_inspectioninstance_Result,msdyn_inspectioninstance_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inspectioninstances: WebMappingRelated<msdyn_inspectioninstance_RelatedOne,msdyn_inspectioninstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inspectioninstances: WebMappingCUDA<msdyn_inspectioninstance_Create,msdyn_inspectioninstance_Update,msdyn_inspectioninstance_Select>;
}
