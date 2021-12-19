interface msdyn_incidenttype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_copyincidentitemstoagreement?: boolean | null;
  msdyn_description?: string | null;
  msdyn_estimatedduration?: number | null;
  msdyn_incidenttypeid?: string | null;
  msdyn_lastcalculatedtime?: Date | null;
  msdyn_name?: string | null;
  msdyn_resolutionrequiredonwocompletion?: boolean | null;
  msdyn_suggestedduration?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_incidenttype_statecode | null;
  statuscode?: msdyn_incidenttype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_incidenttype_Relationships {
  msdyn_incidenttype_Annotations?: Annotation_Result[] | null;
  msdyn_incidenttype_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_incidenttype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_incidenttype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_incidenttype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_incidenttype_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_incidenttype_SyncErrors?: SyncError_Result[] | null;
  msdyn_incidenttype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_incidenttype_requirementgroup_incident?: msdyn_incidenttype_requirementgroup_Result[] | null;
  msdyn_msdyn_incidenttype_incident_IncidentType?: Incident_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_actual_IncidentType?: msdyn_actual_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType?: msdyn_agreementbookingincident_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype?: msdyn_entitlementapplication_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType?: msdyn_incidenttypecharacteristic_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType?: msdyn_incidenttypeproduct_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType?: msdyn_incidenttyperecommendationresult_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge?: msdyn_incidenttyperecommendationresult_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType?: msdyn_incidenttyperesolution_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType?: msdyn_incidenttypeservice_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType?: msdyn_incidenttypeservicetask_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType?: msdyn_iotalert_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType?: msdyn_quotebookingincident_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType?: msdyn_workorder_Result[] | null;
  msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType?: msdyn_workorderincident_Result[] | null;
  navigationPropertyNameNotDefined?: KnowledgeBaseRecord_Result[] | null;
  navigationPropertyNameNotDefined1?: KnowledgeArticle_Result[] | null;
}
interface msdyn_incidenttype extends msdyn_incidenttype_Base, msdyn_incidenttype_Relationships {
  msdyn_defaultworkordertype_bind$msdyn_workordertypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_incidenttype_Create extends msdyn_incidenttype {
}
interface msdyn_incidenttype_Update extends msdyn_incidenttype {
}
interface msdyn_incidenttype_Select {
  createdby_guid: WebAttribute<msdyn_incidenttype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_incidenttype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_incidenttype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_incidenttype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_incidenttype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_incidenttype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_incidenttype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_copyincidentitemstoagreement: WebAttribute<msdyn_incidenttype_Select, { msdyn_copyincidentitemstoagreement: boolean | null }, {  }>;
  msdyn_defaultworkordertype_guid: WebAttribute<msdyn_incidenttype_Select, { msdyn_defaultworkordertype_guid: string | null }, { msdyn_defaultworkordertype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_incidenttype_Select, { msdyn_description: string | null }, {  }>;
  msdyn_estimatedduration: WebAttribute<msdyn_incidenttype_Select, { msdyn_estimatedduration: number | null }, {  }>;
  msdyn_incidenttypeid: WebAttribute<msdyn_incidenttype_Select, { msdyn_incidenttypeid: string | null }, {  }>;
  msdyn_lastcalculatedtime: WebAttribute<msdyn_incidenttype_Select, { msdyn_lastcalculatedtime: Date | null }, { msdyn_lastcalculatedtime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_incidenttype_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resolutionrequiredonwocompletion: WebAttribute<msdyn_incidenttype_Select, { msdyn_resolutionrequiredonwocompletion: boolean | null }, {  }>;
  msdyn_suggestedduration: WebAttribute<msdyn_incidenttype_Select, { msdyn_suggestedduration: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_incidenttype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_incidenttype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_incidenttype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_incidenttype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_incidenttype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_incidenttype_Select, { statecode: msdyn_incidenttype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_incidenttype_Select, { statuscode: msdyn_incidenttype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_incidenttype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_incidenttype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_incidenttype_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_incidenttype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_copyincidentitemstoagreement: boolean;
  msdyn_defaultworkordertype_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_estimatedduration: number;
  msdyn_incidenttypeid: XQW.Guid;
  msdyn_lastcalculatedtime: Date;
  msdyn_name: string;
  msdyn_resolutionrequiredonwocompletion: boolean;
  msdyn_suggestedduration: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_incidenttype_statecode;
  statuscode: msdyn_incidenttype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_incidenttype_Expand {
  createdby: WebExpand<msdyn_incidenttype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_incidenttype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_incidenttype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_incidenttype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_defaultworkordertype: WebExpand<msdyn_incidenttype_Expand, msdyn_workordertype_Select, msdyn_workordertype_Filter, { msdyn_defaultworkordertype: msdyn_workordertype_Result }>;
  msdyn_incidenttype_Annotations: WebExpand<msdyn_incidenttype_Expand, Annotation_Select, Annotation_Filter, { msdyn_incidenttype_Annotations: Annotation_Result[] }>;
  msdyn_incidenttype_AsyncOperations: WebExpand<msdyn_incidenttype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_incidenttype_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_incidenttype_BulkDeleteFailures: WebExpand<msdyn_incidenttype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_incidenttype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_incidenttype_DuplicateBaseRecord: WebExpand<msdyn_incidenttype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttype_DuplicateMatchingRecord: WebExpand<msdyn_incidenttype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttype_MailboxTrackingFolders: WebExpand<msdyn_incidenttype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_incidenttype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_incidenttype_PrincipalObjectAttributeAccesses: WebExpand<msdyn_incidenttype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_incidenttype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_incidenttype_ProcessSession: WebExpand<msdyn_incidenttype_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_incidenttype_ProcessSession: ProcessSession_Result[] }>;
  msdyn_incidenttype_SyncErrors: WebExpand<msdyn_incidenttype_Expand, SyncError_Select, SyncError_Filter, { msdyn_incidenttype_SyncErrors: SyncError_Result[] }>;
  msdyn_incidenttype_UserEntityInstanceDatas: WebExpand<msdyn_incidenttype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_incidenttype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_incidenttype_requirementgroup_incident: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttype_requirementgroup_Select, msdyn_incidenttype_requirementgroup_Filter, { msdyn_incidenttype_requirementgroup_incident: msdyn_incidenttype_requirementgroup_Result[] }>;
  msdyn_msdyn_incidenttype_incident_IncidentType: WebExpand<msdyn_incidenttype_Expand, Incident_Select, Incident_Filter, { msdyn_msdyn_incidenttype_incident_IncidentType: Incident_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_actual_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_msdyn_incidenttype_msdyn_actual_IncidentType: msdyn_actual_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_agreementbookingincident_Select, msdyn_agreementbookingincident_Filter, { msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType: msdyn_agreementbookingincident_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype: WebExpand<msdyn_incidenttype_Expand, msdyn_entitlementapplication_Select, msdyn_entitlementapplication_Filter, { msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype: msdyn_entitlementapplication_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttypecharacteristic_Select, msdyn_incidenttypecharacteristic_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType: msdyn_incidenttypecharacteristic_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttypeproduct_Select, msdyn_incidenttypeproduct_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType: msdyn_incidenttypeproduct_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttyperecommendationresult_Select, msdyn_incidenttyperecommendationresult_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType: msdyn_incidenttyperecommendationresult_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttyperecommendationresult_Select, msdyn_incidenttyperecommendationresult_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge: msdyn_incidenttyperecommendationresult_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttyperesolution_Select, msdyn_incidenttyperesolution_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType: msdyn_incidenttyperesolution_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttypeservice_Select, msdyn_incidenttypeservice_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType: msdyn_incidenttypeservice_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_incidenttypeservicetask_Select, msdyn_incidenttypeservicetask_Filter, { msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType: msdyn_incidenttypeservicetask_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_iotalert_Select, msdyn_iotalert_Filter, { msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType: msdyn_iotalert_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_quotebookingincident_Select, msdyn_quotebookingincident_Filter, { msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType: msdyn_quotebookingincident_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType: msdyn_workorder_Result[] }>;
  msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType: WebExpand<msdyn_incidenttype_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType: msdyn_workorderincident_Result[] }>;
  navigationPropertyNameNotDefined: WebExpand<msdyn_incidenttype_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { navigationPropertyNameNotDefined: KnowledgeBaseRecord_Result[] }>;
  navigationPropertyNameNotDefined1: WebExpand<msdyn_incidenttype_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { navigationPropertyNameNotDefined: KnowledgeArticle_Result[] }>;
  ownerid: WebExpand<msdyn_incidenttype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_incidenttype_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_incidenttype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_incidenttype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_incidenttype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_defaultworkordertype_formatted?: string;
  msdyn_lastcalculatedtime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_incidenttype_Result extends msdyn_incidenttype_Base, msdyn_incidenttype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_defaultworkordertype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_incidenttype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_defaultworkordertype: WebMappingRetrieve<msdyn_workordertype_Select,msdyn_workordertype_Expand,msdyn_workordertype_Filter,msdyn_workordertype_Fixed,msdyn_workordertype_Result,msdyn_workordertype_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_incidenttype_RelatedMany {
  msdyn_incidenttype_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_incidenttype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_incidenttype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_incidenttype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_incidenttype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_incidenttype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_incidenttype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_incidenttype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_incidenttype_requirementgroup_incident: WebMappingRetrieve<msdyn_incidenttype_requirementgroup_Select,msdyn_incidenttype_requirementgroup_Expand,msdyn_incidenttype_requirementgroup_Filter,msdyn_incidenttype_requirementgroup_Fixed,msdyn_incidenttype_requirementgroup_Result,msdyn_incidenttype_requirementgroup_FormattedResult>;
  msdyn_msdyn_incidenttype_incident_IncidentType: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_actual_IncidentType: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType: WebMappingRetrieve<msdyn_agreementbookingincident_Select,msdyn_agreementbookingincident_Expand,msdyn_agreementbookingincident_Filter,msdyn_agreementbookingincident_Fixed,msdyn_agreementbookingincident_Result,msdyn_agreementbookingincident_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype: WebMappingRetrieve<msdyn_entitlementapplication_Select,msdyn_entitlementapplication_Expand,msdyn_entitlementapplication_Filter,msdyn_entitlementapplication_Fixed,msdyn_entitlementapplication_Result,msdyn_entitlementapplication_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType: WebMappingRetrieve<msdyn_incidenttypecharacteristic_Select,msdyn_incidenttypecharacteristic_Expand,msdyn_incidenttypecharacteristic_Filter,msdyn_incidenttypecharacteristic_Fixed,msdyn_incidenttypecharacteristic_Result,msdyn_incidenttypecharacteristic_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType: WebMappingRetrieve<msdyn_incidenttypeproduct_Select,msdyn_incidenttypeproduct_Expand,msdyn_incidenttypeproduct_Filter,msdyn_incidenttypeproduct_Fixed,msdyn_incidenttypeproduct_Result,msdyn_incidenttypeproduct_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType: WebMappingRetrieve<msdyn_incidenttyperecommendationresult_Select,msdyn_incidenttyperecommendationresult_Expand,msdyn_incidenttyperecommendationresult_Filter,msdyn_incidenttyperecommendationresult_Fixed,msdyn_incidenttyperecommendationresult_Result,msdyn_incidenttyperecommendationresult_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge: WebMappingRetrieve<msdyn_incidenttyperecommendationresult_Select,msdyn_incidenttyperecommendationresult_Expand,msdyn_incidenttyperecommendationresult_Filter,msdyn_incidenttyperecommendationresult_Fixed,msdyn_incidenttyperecommendationresult_Result,msdyn_incidenttyperecommendationresult_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType: WebMappingRetrieve<msdyn_incidenttyperesolution_Select,msdyn_incidenttyperesolution_Expand,msdyn_incidenttyperesolution_Filter,msdyn_incidenttyperesolution_Fixed,msdyn_incidenttyperesolution_Result,msdyn_incidenttyperesolution_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType: WebMappingRetrieve<msdyn_incidenttypeservice_Select,msdyn_incidenttypeservice_Expand,msdyn_incidenttypeservice_Filter,msdyn_incidenttypeservice_Fixed,msdyn_incidenttypeservice_Result,msdyn_incidenttypeservice_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType: WebMappingRetrieve<msdyn_incidenttypeservicetask_Select,msdyn_incidenttypeservicetask_Expand,msdyn_incidenttypeservicetask_Filter,msdyn_incidenttypeservicetask_Fixed,msdyn_incidenttypeservicetask_Result,msdyn_incidenttypeservicetask_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType: WebMappingRetrieve<msdyn_iotalert_Select,msdyn_iotalert_Expand,msdyn_iotalert_Filter,msdyn_iotalert_Fixed,msdyn_iotalert_Result,msdyn_iotalert_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType: WebMappingRetrieve<msdyn_quotebookingincident_Select,msdyn_quotebookingincident_Expand,msdyn_quotebookingincident_Filter,msdyn_quotebookingincident_Fixed,msdyn_quotebookingincident_Result,msdyn_quotebookingincident_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
  navigationPropertyNameNotDefined1: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_incidenttypes: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_incidenttypes: WebMappingRelated<msdyn_incidenttype_RelatedOne,msdyn_incidenttype_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_incidenttypes: WebMappingCUDA<msdyn_incidenttype_Create,msdyn_incidenttype_Update,msdyn_incidenttype_Select>;
}
