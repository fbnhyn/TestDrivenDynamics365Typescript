interface msdyusd_sessioninformation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_display?: string | null;
  msdyusd_icon?: string | null;
  msdyusd_name?: string | null;
  msdyusd_order?: number | null;
  msdyusd_sessioninformationid?: string | null;
  msdyusd_type?: msdyusd_sessioninformation_msdyusd_type | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_sessioninformation_statecode | null;
  statuscode?: msdyusd_sessioninformation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_sessioninformation_Relationships {
  msdyusd_SelectedEntity?: msdyusd_entityassignment_Result | null;
  msdyusd_configuration_sessionlines?: msdyusd_configuration_Result[] | null;
  msdyusd_sessioninformation_Annotations?: Annotation_Result[] | null;
  msdyusd_sessioninformation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_sessioninformation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_sessioninformation_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_sessioninformation_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_sessioninformation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_sessioninformation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_sessioninformation_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_sessioninformation_SyncErrors?: SyncError_Result[] | null;
  msdyusd_sessioninformation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyusd_sessioninformation extends msdyusd_sessioninformation_Base, msdyusd_sessioninformation_Relationships {
  msdyusd_SelectedEntity_bind$msdyusd_entityassignments?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_sessioninformation_Create extends msdyusd_sessioninformation {
}
interface msdyusd_sessioninformation_Update extends msdyusd_sessioninformation {
}
interface msdyusd_sessioninformation_Select {
  createdby_guid: WebAttribute<msdyusd_sessioninformation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_sessioninformation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_sessioninformation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_sessioninformation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_sessioninformation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_sessioninformation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_sessioninformation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_display: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_display: string | null }, {  }>;
  msdyusd_icon: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_icon: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_order: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_order: number | null }, {  }>;
  msdyusd_selectedentity_guid: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_selectedentity_guid: string | null }, { msdyusd_selectedentity_formatted?: string }>;
  msdyusd_sessioninformationid: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_sessioninformationid: string | null }, {  }>;
  msdyusd_type: WebAttribute<msdyusd_sessioninformation_Select, { msdyusd_type: msdyusd_sessioninformation_msdyusd_type | null }, { msdyusd_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyusd_sessioninformation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_sessioninformation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_sessioninformation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_sessioninformation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_sessioninformation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_sessioninformation_Select, { statecode: msdyusd_sessioninformation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_sessioninformation_Select, { statuscode: msdyusd_sessioninformation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_sessioninformation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_sessioninformation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_sessioninformation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_sessioninformation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_display: string;
  msdyusd_icon: string;
  msdyusd_name: string;
  msdyusd_order: number;
  msdyusd_selectedentity_guid: XQW.Guid;
  msdyusd_sessioninformationid: XQW.Guid;
  msdyusd_type: msdyusd_sessioninformation_msdyusd_type;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_sessioninformation_statecode;
  statuscode: msdyusd_sessioninformation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_sessioninformation_Expand {
  createdby: WebExpand<msdyusd_sessioninformation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_sessioninformation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_sessioninformation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_sessioninformation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_SelectedEntity: WebExpand<msdyusd_sessioninformation_Expand, msdyusd_entityassignment_Select, msdyusd_entityassignment_Filter, { msdyusd_SelectedEntity: msdyusd_entityassignment_Result }>;
  msdyusd_configuration_sessionlines: WebExpand<msdyusd_sessioninformation_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_sessionlines: msdyusd_configuration_Result[] }>;
  msdyusd_sessioninformation_Annotations: WebExpand<msdyusd_sessioninformation_Expand, Annotation_Select, Annotation_Filter, { msdyusd_sessioninformation_Annotations: Annotation_Result[] }>;
  msdyusd_sessioninformation_AsyncOperations: WebExpand<msdyusd_sessioninformation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_sessioninformation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_sessioninformation_BulkDeleteFailures: WebExpand<msdyusd_sessioninformation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_sessioninformation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_sessioninformation_DuplicateBaseRecord: WebExpand<msdyusd_sessioninformation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_sessioninformation_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_sessioninformation_DuplicateMatchingRecord: WebExpand<msdyusd_sessioninformation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_sessioninformation_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_sessioninformation_MailboxTrackingFolders: WebExpand<msdyusd_sessioninformation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_sessioninformation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_sessioninformation_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_sessioninformation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_sessioninformation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_sessioninformation_ProcessSession: WebExpand<msdyusd_sessioninformation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_sessioninformation_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_sessioninformation_SyncErrors: WebExpand<msdyusd_sessioninformation_Expand, SyncError_Select, SyncError_Filter, { msdyusd_sessioninformation_SyncErrors: SyncError_Result[] }>;
  msdyusd_sessioninformation_UserEntityInstanceDatas: WebExpand<msdyusd_sessioninformation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_sessioninformation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyusd_sessioninformation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_sessioninformation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_sessioninformation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_sessioninformation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_sessioninformation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_selectedentity_formatted?: string;
  msdyusd_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_sessioninformation_Result extends msdyusd_sessioninformation_Base, msdyusd_sessioninformation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_selectedentity_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_sessioninformation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_SelectedEntity: WebMappingRetrieve<msdyusd_entityassignment_Select,msdyusd_entityassignment_Expand,msdyusd_entityassignment_Filter,msdyusd_entityassignment_Fixed,msdyusd_entityassignment_Result,msdyusd_entityassignment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_sessioninformation_RelatedMany {
  msdyusd_configuration_sessionlines: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_sessioninformation_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_sessioninformation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_sessioninformation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_sessioninformation_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_sessioninformation_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_sessioninformation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_sessioninformation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_sessioninformation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_sessioninformation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_sessioninformation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_sessioninformations: WebMappingRetrieve<msdyusd_sessioninformation_Select,msdyusd_sessioninformation_Expand,msdyusd_sessioninformation_Filter,msdyusd_sessioninformation_Fixed,msdyusd_sessioninformation_Result,msdyusd_sessioninformation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_sessioninformations: WebMappingRelated<msdyusd_sessioninformation_RelatedOne,msdyusd_sessioninformation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_sessioninformations: WebMappingCUDA<msdyusd_sessioninformation_Create,msdyusd_sessioninformation_Update,msdyusd_sessioninformation_Select>;
}
