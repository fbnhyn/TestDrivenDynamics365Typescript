interface msdyn_requirementcharacteristic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_requirementcharacteristicid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementcharacteristic_statecode | null;
  statuscode?: msdyn_requirementcharacteristic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementcharacteristic_Relationships {
  msdyn_Characteristic?: Characteristic_Result | null;
  msdyn_RequirementSystemUse?: msdyn_resourcerequirement_Result | null;
  msdyn_ResourceRequirement?: msdyn_resourcerequirement_Result | null;
  msdyn_WorkOrder?: msdyn_workorder_Result | null;
  msdyn_WorkOrderIncident?: msdyn_workorderincident_Result | null;
  msdyn_requirementcharacteristic_Annotations?: Annotation_Result[] | null;
  msdyn_requirementcharacteristic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementcharacteristic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementcharacteristic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementcharacteristic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementcharacteristic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementcharacteristic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementcharacteristic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementcharacteristic_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementcharacteristic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_requirementcharacteristic extends msdyn_requirementcharacteristic_Base, msdyn_requirementcharacteristic_Relationships {
  msdyn_Characteristic_bind$characteristics?: string | null;
  msdyn_RequirementSystemUse_bind$msdyn_resourcerequirements?: string | null;
  msdyn_ResourceRequirement_bind$msdyn_resourcerequirements?: string | null;
  msdyn_WorkOrderIncident_bind$msdyn_workorderincidents?: string | null;
  msdyn_WorkOrder_bind$msdyn_workorders?: string | null;
  msdyn_ratingvalue_bind$ratingvalues?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementcharacteristic_Create extends msdyn_requirementcharacteristic {
}
interface msdyn_requirementcharacteristic_Update extends msdyn_requirementcharacteristic {
}
interface msdyn_requirementcharacteristic_Select {
  createdby_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementcharacteristic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementcharacteristic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementcharacteristic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_characteristic_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_characteristic_guid: string | null }, { msdyn_characteristic_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ratingvalue_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_ratingvalue_guid: string | null }, { msdyn_ratingvalue_formatted?: string }>;
  msdyn_requirementcharacteristicid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_requirementcharacteristicid: string | null }, {  }>;
  msdyn_requirementsystemuse_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_requirementsystemuse_guid: string | null }, { msdyn_requirementsystemuse_formatted?: string }>;
  msdyn_resourcerequirement_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_resourcerequirement_guid: string | null }, { msdyn_resourcerequirement_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  msdyn_workorderincident_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { msdyn_workorderincident_guid: string | null }, { msdyn_workorderincident_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_requirementcharacteristic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementcharacteristic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementcharacteristic_Select, { statecode: msdyn_requirementcharacteristic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementcharacteristic_Select, { statuscode: msdyn_requirementcharacteristic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementcharacteristic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementcharacteristic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementcharacteristic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementcharacteristic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_characteristic_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ratingvalue_guid: XQW.Guid;
  msdyn_requirementcharacteristicid: XQW.Guid;
  msdyn_requirementsystemuse_guid: XQW.Guid;
  msdyn_resourcerequirement_guid: XQW.Guid;
  msdyn_workorder_guid: XQW.Guid;
  msdyn_workorderincident_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementcharacteristic_statecode;
  statuscode: msdyn_requirementcharacteristic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementcharacteristic_Expand {
  createdby: WebExpand<msdyn_requirementcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Characteristic: WebExpand<msdyn_requirementcharacteristic_Expand, Characteristic_Select, Characteristic_Filter, { msdyn_Characteristic: Characteristic_Result }>;
  msdyn_RequirementSystemUse: WebExpand<msdyn_requirementcharacteristic_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_RequirementSystemUse: msdyn_resourcerequirement_Result }>;
  msdyn_ResourceRequirement: WebExpand<msdyn_requirementcharacteristic_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_ResourceRequirement: msdyn_resourcerequirement_Result }>;
  msdyn_WorkOrder: WebExpand<msdyn_requirementcharacteristic_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_WorkOrder: msdyn_workorder_Result }>;
  msdyn_WorkOrderIncident: WebExpand<msdyn_requirementcharacteristic_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { msdyn_WorkOrderIncident: msdyn_workorderincident_Result }>;
  msdyn_ratingvalue: WebExpand<msdyn_requirementcharacteristic_Expand, RatingValue_Select, RatingValue_Filter, { msdyn_ratingvalue: RatingValue_Result }>;
  msdyn_requirementcharacteristic_Annotations: WebExpand<msdyn_requirementcharacteristic_Expand, Annotation_Select, Annotation_Filter, { msdyn_requirementcharacteristic_Annotations: Annotation_Result[] }>;
  msdyn_requirementcharacteristic_AsyncOperations: WebExpand<msdyn_requirementcharacteristic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementcharacteristic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementcharacteristic_BulkDeleteFailures: WebExpand<msdyn_requirementcharacteristic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementcharacteristic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementcharacteristic_DuplicateBaseRecord: WebExpand<msdyn_requirementcharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementcharacteristic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementcharacteristic_DuplicateMatchingRecord: WebExpand<msdyn_requirementcharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementcharacteristic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementcharacteristic_MailboxTrackingFolders: WebExpand<msdyn_requirementcharacteristic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementcharacteristic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementcharacteristic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementcharacteristic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementcharacteristic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementcharacteristic_ProcessSession: WebExpand<msdyn_requirementcharacteristic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementcharacteristic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementcharacteristic_SyncErrors: WebExpand<msdyn_requirementcharacteristic_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementcharacteristic_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementcharacteristic_UserEntityInstanceDatas: WebExpand<msdyn_requirementcharacteristic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementcharacteristic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_requirementcharacteristic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementcharacteristic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementcharacteristic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementcharacteristic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_characteristic_formatted?: string;
  msdyn_ratingvalue_formatted?: string;
  msdyn_requirementsystemuse_formatted?: string;
  msdyn_resourcerequirement_formatted?: string;
  msdyn_workorder_formatted?: string;
  msdyn_workorderincident_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementcharacteristic_Result extends msdyn_requirementcharacteristic_Base, msdyn_requirementcharacteristic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_characteristic_guid: string | null;
  msdyn_ratingvalue_guid: string | null;
  msdyn_requirementsystemuse_guid: string | null;
  msdyn_resourcerequirement_guid: string | null;
  msdyn_workorder_guid: string | null;
  msdyn_workorderincident_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_requirementcharacteristic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Characteristic: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  msdyn_RequirementSystemUse: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_ResourceRequirement: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_WorkOrder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_WorkOrderIncident: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
  msdyn_ratingvalue: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementcharacteristic_RelatedMany {
  msdyn_requirementcharacteristic_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_requirementcharacteristic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementcharacteristic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementcharacteristic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementcharacteristic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementcharacteristic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementcharacteristic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementcharacteristic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementcharacteristic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementcharacteristic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementcharacteristics: WebMappingRetrieve<msdyn_requirementcharacteristic_Select,msdyn_requirementcharacteristic_Expand,msdyn_requirementcharacteristic_Filter,msdyn_requirementcharacteristic_Fixed,msdyn_requirementcharacteristic_Result,msdyn_requirementcharacteristic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementcharacteristics: WebMappingRelated<msdyn_requirementcharacteristic_RelatedOne,msdyn_requirementcharacteristic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementcharacteristics: WebMappingCUDA<msdyn_requirementcharacteristic_Create,msdyn_requirementcharacteristic_Update,msdyn_requirementcharacteristic_Select>;
}
